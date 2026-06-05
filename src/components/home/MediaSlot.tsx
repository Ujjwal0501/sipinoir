"use client";

import Image from "next/image";
import { useState } from "react";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { MediaAsset } from "@/lib/homepage-data";
import { cn } from "@/lib/utils";

type MediaSlotProps = {
  asset: MediaAsset;
  priority?: boolean;
  aspectRatio?: string;
  className?: string;
  mediaClassName?: string;
  sizes?: string;
  decorative?: boolean;
};

export function MediaSlot({
  asset,
  priority = false,
  aspectRatio,
  className,
  mediaClassName,
  sizes = "100vw",
  decorative = false,
}: MediaSlotProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [failedVideoSrc, setFailedVideoSrc] = useState<string | null>(null);
  const [readyVideoSrc, setReadyVideoSrc] = useState<string | null>(null);

  const fit = asset.fit ?? "cover";
  const isVideoReady = readyVideoSrc === asset.videoSrc;
  const shouldUseVideo =
    Boolean(asset.videoSrc) && failedVideoSrc !== asset.videoSrc && !prefersReducedMotion;

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {asset.imageSrc ? (
        <Image
          fill
          priority={priority}
          src={asset.imageSrc}
          alt={decorative ? "" : asset.alt}
          sizes={sizes}
          className={cn(
            "h-full w-full",
            fit === "contain" ? "object-contain" : "object-cover",
            !prefersReducedMotion && "media-drift",
            shouldUseVideo && isVideoReady ? "opacity-0" : "opacity-100",
            "transition-opacity duration-500",
            mediaClassName,
          )}
        />
      ) : null}

      {shouldUseVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload={priority ? "auto" : "metadata"}
          poster={asset.posterSrc ?? asset.imageSrc}
          aria-hidden={decorative || undefined}
          aria-label={decorative ? undefined : asset.alt}
          className={cn(
            "h-full w-full transition-opacity duration-500",
            fit === "contain" ? "object-contain" : "object-cover",
            isVideoReady ? "opacity-100" : "opacity-0",
            mediaClassName,
          )}
          onCanPlay={() => {
            setReadyVideoSrc(asset.videoSrc ?? null);
          }}
          onError={() => {
            setFailedVideoSrc(asset.videoSrc ?? null);
            setReadyVideoSrc(null);
          }}
        >
          <source src={asset.videoSrc} />
        </video>
      ) : null}
    </div>
  );
}
