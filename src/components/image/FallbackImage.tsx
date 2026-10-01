"use client";

import Image, { type ImageProps } from "next/image";
import { useState, type ReactNode } from "react";

type FallbackImageProps = Omit<ImageProps, "onError"> & {
  /** Shown instead of the image if it fails to load, e.g. a moved Cloudinary asset. */
  fallback: ReactNode;
  /** Rendered only while the original image is shown, e.g. its photo credit. */
  attribution?: ReactNode;
};

/** Render the supplied fallback when the original image fails to load. */
export function FallbackImage({
  src,
  alt,
  fallback,
  attribution,
  ...props
}: FallbackImageProps) {
  const [failedSrc, setFailedSrc] = useState<ImageProps["src"]>();

  // Comparing against src means a new URL is retried automatically.
  if (failedSrc === src) return fallback;

  return (
    <>
      <Image {...props} src={src} alt={alt} onError={() => setFailedSrc(src)} />
      {attribution}
    </>
  );
}
