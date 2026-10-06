// При изменении templates.ts обновляем screenshots, не перезапуская Next.js.
import { watch } from "node:fs";
import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
const require = createRequire(import.meta.url);
const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const server = spawn(
  process.execPath,
  [
    require.resolve("next/dist/bin/next"),
    "dev",
    "--hostname",
    "0.0.0.0",
    ...process.argv.slice(2),
  ],
  { cwd: projectRoot, stdio: "inherit" },
);
let generation;
let queued = false;
let debounce;
let stopping = false;
function generatePreviews() {
  if (stopping) return;
  if (generation) {
    queued = true;
    return;
  }
  console.log("Данные шаблонов изменились — обновляем preview…");
  generation = spawn(process.execPath, ["scripts/generate-previews.mjs"], {
    cwd: projectRoot,
    stdio: "inherit",
  });
  generation.once("exit", () => {
    generation = undefined;
    if (queued) {
      queued = false;
      generatePreviews();
    }
  });
}
const watcher = watch(
  new URL("../src/data/", import.meta.url),
  (_, filename) => {
    if (filename?.toString() !== "templates.ts") return;
    clearTimeout(debounce);
    debounce = setTimeout(generatePreviews, 700);
  },
);
function stop(signal = "SIGTERM") {
  stopping = true;
  watcher.close();
  clearTimeout(debounce);
  generation?.kill(signal);
  server.kill(signal);
}
process.on("SIGINT", () => stop("SIGINT"));
process.on("SIGTERM", () => stop());
server.once("exit", (code) => {
  stop();
  process.exitCode = code ?? 0;
});
