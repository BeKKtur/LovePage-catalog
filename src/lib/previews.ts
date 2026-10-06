import generatedPreviews from "@/data/generated-previews.json";

type PreviewRecord = { image: string; capturedAt: string };
const previews: Record<string, PreviewRecord> = generatedPreviews;

// Screenshot создаётся до сборки. В браузере посетителя внешние сайты не снимаются.
export function getAutomaticPreview(demoUrl?: string): string | undefined {
  return demoUrl?.trim() ? previews[demoUrl.trim()]?.image : undefined;
}
export function getPreviewImage(
  coverImage?: string,
  demoUrl?: string,
): string | undefined {
  return coverImage?.trim() || getAutomaticPreview(demoUrl);
}
