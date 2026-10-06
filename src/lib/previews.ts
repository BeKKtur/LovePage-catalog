import generatedPreviews from "@/data/generated-previews.json";
import { normalizeDemoUrl } from "./preview-url.mjs";

type PreviewRecord = { demoUrl: string; image: string; capturedAt: string };
const previews: Record<string, PreviewRecord> = generatedPreviews;

// Кеш принадлежит template.id и только текущему demoUrl этого шаблона.
export function getAutomaticPreview(
  demoUrl?: string,
  templateId?: string,
): string | undefined {
  const record = templateId ? previews[templateId] : undefined;
  return record && record.demoUrl === normalizeDemoUrl(demoUrl)
    ? record.image
    : undefined;
}
export function getPreviewImage(
  coverImage?: string,
  demoUrl?: string,
  templateId?: string,
): string | undefined {
  return coverImage?.trim() || getAutomaticPreview(demoUrl, templateId);
}
