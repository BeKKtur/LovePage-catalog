import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
const config = readFileSync(new URL('../data/config.ts', import.meta.url), 'utf8');
const brand = config.match(/BRAND_NAME\s*=\s*"([^"]+)"/)?.[1];
if (!brand) throw new Error('BRAND_NAME is missing');
const escaped = brand.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const directory = new URL('../public/previews/', import.meta.url);
for (const file of readdirSync(directory)) {
 if (!file.endsWith('.svg')) continue;
 const url = new URL(file, directory);
 const source = readFileSync(url, 'utf8');
 writeFileSync(url, source.replace(/(<text[^>]*y="754"[^>]*>)[^<]*?( • )/, `$1${escaped}$2`));
}
