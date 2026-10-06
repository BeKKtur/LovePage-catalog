// Запускается перед сборкой. Не является публичным API: URL берутся только из данных владельца.
import {
  readFile,
  writeFile,
  mkdir,
  rename,
  access,
  rm,
} from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import { lookup } from "node:dns/promises";
import { isIP } from "node:net";
import { resolve } from "node:path";
import { chromium } from "playwright";
import ts from "typescript";
import vm from "node:vm";
import { normalizeDemoUrl } from "../src/lib/preview-url.mjs";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const manifestPath = resolve(projectRoot, "src/data/generated-previews.json");
const outputDirectory = resolve(projectRoot, "public/website-previews");

// Исключаем localhost, служебные адреса и частные сети, включая адреса после redirect.
export function isPublicAddress(address) {
  if (isIP(address) === 4) {
    const [a, b, c] = address.split(".").map(Number);
    return !(
      a === 0 ||
      a === 10 ||
      a === 127 ||
      a >= 224 ||
      (a === 100 && b >= 64 && b <= 127) ||
      (a === 169 && b === 254) ||
      (a === 172 && b >= 16 && b <= 31) ||
      (a === 192 && (b === 168 || (b === 0 && [0, 2].includes(c)))) ||
      (a === 198 && ([18, 19].includes(b) || (b === 51 && c === 100))) ||
      (a === 203 && b === 0 && c === 113)
    );
  }
  // Только глобальные IPv6 unicast, без mapped IPv4, локальных и документальных диапазонов.
  return (
    isIP(address) === 6 &&
    /^[23][0-9a-f]{3}:/i.test(address) &&
    !/^2001:(?:db8|0|2|10|20):/i.test(address) &&
    !/^2002:/i.test(address)
  );
}
export async function isPublicUrl(value) {
  try {
    const url = new URL(value);
    if (
      !["http:", "https:"].includes(url.protocol) ||
      url.username ||
      url.password ||
      (url.port && !["80", "443"].includes(url.port))
    )
      return false;
    const hostname = url.hostname.replace(/^\[|\]$/g, "");
    const addresses = await Promise.race([
      lookup(hostname, { all: true }),
      new Promise((_, reject) => {
        const timer = setTimeout(() => reject(new Error("DNS timeout")), 5000);
        timer.unref();
      }),
    ]);
    return (
      addresses.length > 0 &&
      addresses.every(({ address }) => isPublicAddress(address))
    );
  } catch {
    return false;
  }
}
async function launchBrowser() {
  // CI использует установленный Chromium; локально можно использовать обычный Chrome.
  try {
    return await chromium.launch({ headless: true });
  } catch {
    return chromium.launch({ headless: true, channel: "chrome" });
  }
}

async function saveManifest(manifest, previousManifest) {
  await writeFile(
    `${manifestPath}.tmp`,
    JSON.stringify(manifest, null, 2) + "\n",
  );
  await rename(`${manifestPath}.tmp`, manifestPath);
  const activeImages = new Set(
    Object.values(manifest).map((preview) => preview.image),
  );
  for (const preview of Object.values(previousManifest)) {
    if (
      /^\/website-previews\/(?:[a-zA-Z0-9_-]+-)?[a-f0-9]{24}\.png$/.test(
        preview.image,
      ) &&
      !activeImages.has(preview.image)
    ) {
      await rm(resolve(projectRoot, `public${preview.image}`), { force: true });
    }
  }
}
async function main() {
  const source = await readFile(
    resolve(projectRoot, "src/data/templates.ts"),
    "utf8",
  );
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  const exports = {};
  vm.runInNewContext(compiled, { exports }, { timeout: 1000 });
  const templates = exports.templates;
  if (!Array.isArray(templates))
    throw new Error("Не удалось прочитать templates.ts");
  const ids = new Set();
  for (const template of templates) {
    if (!template.id || ids.has(template.id))
      throw new Error(`Пустой или повторяющийся template.id: ${template.id}`);
    ids.add(template.id);
  }
  await mkdir(outputDirectory, { recursive: true });
  let previousManifest = {};
  try {
    previousManifest = JSON.parse(await readFile(manifestPath, "utf8"));
  } catch {
    /* Первая сборка. */
  }
  const manifest = {};
  // Миграция старого кеша по URL. Совпадение URL обязательно: чужой/старый screenshot не подставляем.
  for (const template of templates.filter(
    (template) => template.status !== "hidden",
  )) {
    const demoUrl = normalizeDemoUrl(template.demoUrl);
    if (!demoUrl) continue;
    const cached =
      previousManifest[template.id] ??
      Object.entries(previousManifest).find(
        ([url]) => normalizeDemoUrl(url) === demoUrl,
      )?.[1];
    if (
      !cached ||
      normalizeDemoUrl(cached.demoUrl ?? template.demoUrl) !== demoUrl
    )
      continue;
    try {
      await access(resolve(projectRoot, `public${cached.image}`));
      manifest[template.id] = { ...cached, demoUrl };
    } catch {
      /* Файл удалён — создадим заново. */
    }
  }
  const automaticTemplates = templates.filter(
    (template) =>
      template.status !== "hidden" &&
      !template.coverImage?.trim() &&
      template.demoUrl?.trim(),
  );
  if (!automaticTemplates.length) {
    await saveManifest(manifest, previousManifest);
    console.log("Автоматические preview: нет дизайнов без ручной обложки.");
    return;
  }
  console.log(`Preview: обрабатываем ${automaticTemplates.length} шаблона.`);
  let browser;
  try {
    browser = await launchBrowser();
  } catch {
    await saveManifest(manifest, previousManifest);
    console.warn(
      "Preview: браузер не установлен. Выполните npm run previews:setup. Сборка использует сохранённые preview или fallback.",
    );
    return;
  }
  let generated = 0;
  try {
    // Каждый template получает собственный файл, даже если demoUrl у двух дизайнов совпадает.
    for (const template of automaticTemplates) {
      const demoUrl = normalizeDemoUrl(template.demoUrl);
      const label = `${template.code ?? template.id} (${template.id})`;
      let context;
      try {
        if (!demoUrl || !(await isPublicUrl(demoUrl)))
          throw new Error("URL не является публичным HTTP(S)-сайтом");
        context = await browser.newContext({
          viewport: { width: 390, height: 796 },
          deviceScaleFactor: 1,
          isMobile: true,
          reducedMotion: "reduce",
          serviceWorkers: "block",
          acceptDownloads: false,
        });
        const allowedHosts = new Map();
        await context.route("**/*", async (route) => {
          let allowed = false;
          try {
            const requestUrl = route.request().url();
            const url = new URL(requestUrl);
            const key = `${url.protocol}//${url.host}`;
            if (!allowedHosts.has(key))
              allowedHosts.set(key, await isPublicUrl(requestUrl));
            allowed = allowedHosts.get(key);
          } catch {
            /* Неподдерживаемая схема. */
          }
          try {
            if (allowed) await route.continue();
            else await route.abort();
          } catch {
            /* Страница закрыта. */
          }
        });
        await context.routeWebSocket("**/*", (socket) => socket.close());
        const page = await context.newPage();
        page.setDefaultTimeout(15000);
        const response = await page.goto(demoUrl, {
          waitUntil: "load",
          timeout: 30000,
        });
        if (!response || !response.ok())
          throw new Error(
            `Сайт вернул ошибку ${response?.status() ?? "загрузки"}`,
          );
        const pageText = (await page.locator("body").innerText()).slice(
          0,
          3000,
        );
        if (
          /vercel authentication|security checkpoint|verify you are human/i.test(
            pageText,
          )
        )
          throw new Error("Сайт защищён от автоматического просмотра");
        await page.evaluate(() =>
          Promise.race([
            document.fonts.ready,
            new Promise((resolve) => setTimeout(resolve, 2500)),
          ]),
        );
        await page.waitForTimeout(1500);
        const screenshot = await page.screenshot({
          fullPage: false,
          animations: "disabled",
          timeout: 15000,
        });
        const prefix = template.id.replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 80);
        const hash = createHash("sha256")
          .update(template.id)
          .update(demoUrl)
          .update(screenshot)
          .digest("hex")
          .slice(0, 24);
        const filename = `${prefix}-${hash}.png`;
        const destination = resolve(outputDirectory, filename);
        await writeFile(`${destination}.tmp.png`, screenshot);
        await rename(`${destination}.tmp.png`, destination);
        manifest[template.id] = {
          demoUrl,
          image: `/website-previews/${filename}`,
          capturedAt: new Date().toISOString(),
        };
        // Сохраняем результат сразу: ошибка следующего шаблона не потеряет уже готовые файлы.
        await saveManifest(manifest, previousManifest);
        generated++;
        console.log(
          `Preview обновлено: ${label} → ${new URL(demoUrl).hostname}`,
        );
      } catch (error) {
        console.warn(
          `Preview не обновлено: ${label} (${error.message}). Продолжаем остальные шаблоны; сохраняем подходящий кеш или fallback.`,
        );
      } finally {
        await context?.close().catch(() => {});
      }
    }
  } finally {
    await browser.close();
  }
  await saveManifest(manifest, previousManifest);
  console.log(
    `Preview: обработано ${automaticTemplates.length}, создано ${generated}, ошибок ${automaticTemplates.length - generated}.`,
  );
}
if (
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  main().catch((error) => {
    console.error("Генерация preview завершилась ошибкой:", error.message);
    process.exitCode = 1;
  });
}
