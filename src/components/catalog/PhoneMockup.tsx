"use client";
import Image from "next/image";
import { useState } from "react";
import { getAutomaticPreview } from "@/lib/previews";

export function PhoneMockup({
  image,
  demoUrl,
  templateId,
  alt,
  imagePosition = "center",
  priority = false,
}: {
  image?: string;
  demoUrl?: string;
  templateId?: string;
  alt: string;
  imagePosition?: string;
  priority?: boolean;
}) {
  const [failedImages, setFailedImages] = useState<string[]>([]);
  const candidates = [
    image?.trim(),
    getAutomaticPreview(demoUrl, templateId),
  ].filter((candidate): candidate is string => Boolean(candidate));
  const displayedImage = candidates.find(
    (candidate) => !failedImages.includes(candidate),
  );
  return (
    <div className="phone">
      {!displayedImage ? (
        <div className="preview-fallback" role="img" aria-label={alt}>
          Preview скоро
        </div>
      ) : (
        <Image
          src={displayedImage}
          alt={alt}
          width={420}
          height={840}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          style={{ objectPosition: imagePosition }}
          onError={() =>
            setFailedImages((previous) => [...previous, displayedImage])
          }
        />
      )}
    </div>
  );
}
