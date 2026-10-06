/** @param {string | undefined} value */
export function normalizeDemoUrl(value) {
  try {
    if (!value?.trim()) return "";
    const url = new URL(value.trim());
    return ["http:", "https:"].includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
}
