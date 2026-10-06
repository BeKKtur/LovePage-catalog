"use client";
import Image from "next/image";
import { useState } from "react";

export function PhoneMockup({
  image,
  alt,
  imagePosition = "center",
  priority = false,
}: {
  image: string;
  alt: string;
  imagePosition?: string;
  priority?: boolean;
}) {
  const [failedImage, setFailedImage] = useState<string | null>(null);
  const showFallback = !image.trim() || failedImage === image;
  return (
    <div className="phone">
      {showFallback ? (
        <div className="preview-fallback" role="img" aria-label={alt}>
          Preview скоро
        </div>
      ) : (
        <Image
          src={image}
          alt={alt}
          width={420}
          height={840}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          style={{ objectPosition: imagePosition }}
          onError={() => setFailedImage(image)}
        />
      )}
    </div>
  );
}
