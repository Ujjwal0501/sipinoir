"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { MagneticLink } from "@/components/home/MagneticLink";
import { SipiWordmark } from "@/components/home/SipiWordmark";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { HeroContent } from "@/lib/homepage-data";

type HeroSectionProps = {
  data: HeroContent;
  isReady: boolean;
};

export function HeroSection({ data, isReady }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const copyRef = useRef<HTMLDivElement | null>(null);
  const scrollCueRef = useRef<HTMLDivElement | null>(null);
  const targetProgressRef = useRef(0);
  const renderedProgressRef = useRef(0);
  const frameRef = useRef<number | null>(null);
  const [failedVideoSrc, setFailedVideoSrc] = useState<string | null>(null);
  const [readyVideoSrc, setReadyVideoSrc] = useState<string | null>(null);
  const [videoDuration, setVideoDuration] = useState(0);
  const [isDesktopViewport, setIsDesktopViewport] = useState<boolean | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const canUseVideo = Boolean(data.media.videoSrc) && failedVideoSrc !== data.media.videoSrc;
  const isVideoReady = readyVideoSrc === data.media.videoSrc;

  useEffect(() => {
    if (!canUseVideo || !videoRef.current) {
      return;
    }

    videoRef.current.load();
  }, [canUseVideo, data.media.videoSrc]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const syncViewport = (): void => {
      setIsDesktopViewport(mediaQuery.matches);
    };

    syncViewport();
    mediaQuery.addEventListener("change", syncViewport);

    return () => {
      mediaQuery.removeEventListener("change", syncViewport);
    };
  }, []);

  useEffect(() => {
    if (!isReady || isDesktopViewport === null) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      if (prefersReducedMotion || isDesktopViewport === false) {
        gsap.set(stageRef.current, { autoAlpha: 1, scale: 1, clearProps: "transform" });
        gsap.set(copyRef.current, { autoAlpha: 1, y: 0, clearProps: "transform" });
        gsap.set(scrollCueRef.current, { autoAlpha: 1, y: 0, clearProps: "transform" });
        gsap.set(overlayRef.current, { autoAlpha: 1, y: 0, scale: 1, clearProps: "transform" });
        return;
      }

      const intro = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      intro.fromTo(
        stageRef.current,
        {
          autoAlpha: 0,
          scale: prefersReducedMotion ? 1 : 1.05,
        },
        {
          autoAlpha: 1,
          scale: 1,
          duration: prefersReducedMotion ? 0.01 : 1.4,
        },
      );

      intro.fromTo(
        overlayRef.current,
        {
          autoAlpha: 0,
          y: prefersReducedMotion ? 0 : 32,
          scale: prefersReducedMotion ? 1 : 0.96,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: prefersReducedMotion ? 0.01 : 0.95,
        },
        0.08,
      );

      intro.fromTo(
        [copyRef.current, scrollCueRef.current],
        {
          autoAlpha: prefersReducedMotion ? 1 : 0,
          y: prefersReducedMotion ? 0 : 36,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: prefersReducedMotion ? 0.01 : 0.9,
          stagger: prefersReducedMotion ? 0 : 0.12,
        },
        0.24,
      );
    }, sectionRef);

    return () => {
      context.revert();
    };
  }, [isDesktopViewport, isReady, prefersReducedMotion]);

  useEffect(() => {
    if (
      !isReady ||
      prefersReducedMotion ||
      isDesktopViewport !== true ||
      !canUseVideo ||
      !videoDuration ||
      !isVideoReady ||
      !videoRef.current ||
      !sectionRef.current
    ) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const applyScene = (progress: number) => {
      const clampedProgress = gsap.utils.clamp(0, 1, progress);
      const video = videoRef.current;

      if (video) {
        const targetTime = Math.max((videoDuration - 0.08) * clampedProgress, 0);

        if (Math.abs(video.currentTime - targetTime) > 1 / 30) {
          video.currentTime = targetTime;
        }
      }

      gsap.set(stageRef.current, {
        scale: 1 + 0.035 * clampedProgress,
        yPercent: -3.5 * clampedProgress,
      });

      gsap.set(overlayRef.current, {
        yPercent: -14 * clampedProgress,
        scale: 1 + 0.025 * clampedProgress,
        autoAlpha: 1 - 0.15 * clampedProgress,
      });

      gsap.set(copyRef.current, {
        autoAlpha: 1 - 0.8 * clampedProgress,
        y: 45 * clampedProgress,
      });

      gsap.set(scrollCueRef.current, {
        autoAlpha: 1 - Math.min(clampedProgress / 0.12, 1),
        y: -12 * Math.min(clampedProgress / 0.12, 1),
      });
    };

    const renderFrame = () => {
      renderedProgressRef.current +=
        (targetProgressRef.current - renderedProgressRef.current) * 0.18;

      if (Math.abs(targetProgressRef.current - renderedProgressRef.current) < 0.001) {
        renderedProgressRef.current = targetProgressRef.current;
      }

      applyScene(renderedProgressRef.current);

      if (renderedProgressRef.current !== targetProgressRef.current) {
        frameRef.current = window.requestAnimationFrame(renderFrame);
      } else {
        frameRef.current = null;
      }
    };

    const kickRender = () => {
      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(renderFrame);
      }
    };

    const mediaMatch = gsap.matchMedia();

    const buildPinnedSequence = (distanceMultiplier: number) => {
      const video = videoRef.current;
      if (!video) {
        return;
      }

      video.pause();
      video.currentTime = 0;
      targetProgressRef.current = 0;
      renderedProgressRef.current = 0;
      applyScene(0);

      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${window.innerHeight * distanceMultiplier}`,
        pin: true,
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          targetProgressRef.current = self.progress;
          kickRender();
        },
        onRefresh: (self) => {
          targetProgressRef.current = self.progress;
          renderedProgressRef.current = self.progress;
          applyScene(self.progress);
        },
      });

      return () => {
        trigger.kill();
      };
    };

    mediaMatch.add("(min-width: 1024px)", () => buildPinnedSequence(3.25));

    ScrollTrigger.refresh();

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }

      mediaMatch.revert();
    };
  }, [
    canUseVideo,
    isDesktopViewport,
    isReady,
    isVideoReady,
    prefersReducedMotion,
    videoDuration,
  ]);

  useEffect(() => {
    if (
      !videoRef.current ||
      !isVideoReady ||
      prefersReducedMotion ||
      isDesktopViewport !== false
    ) {
      return;
    }

    videoRef.current
      .play()
      .catch(() => {
        // Mobile autoplay can still be blocked by browser heuristics.
      });
  }, [isDesktopViewport, isVideoReady, prefersReducedMotion]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative isolate min-h-[100svh] overflow-hidden"
    >
      <div
        ref={stageRef}
        className="absolute inset-0 z-0 overflow-hidden bg-[var(--bg)]"
      >
        {canUseVideo && data.media.videoSrc ? (
          <video
            ref={videoRef}
            muted
            playsInline
            autoPlay={!prefersReducedMotion && isDesktopViewport === false}
            loop={!prefersReducedMotion && isDesktopViewport === false}
            preload="auto"
            poster={data.media.posterSrc ?? data.media.imageSrc}
            aria-label={data.media.alt}
            className="absolute inset-0 h-full w-full object-cover object-center"
            onLoadedMetadata={(event) => {
              const duration = event.currentTarget.duration;
              if (Number.isFinite(duration)) {
                setVideoDuration(duration);
              }
            }}
            onLoadedData={(event) => {
              if (isDesktopViewport === true) {
                event.currentTarget.pause();
                event.currentTarget.currentTime = 0;
              }
              setReadyVideoSrc(data.media.videoSrc ?? null);
            }}
            onError={() => {
              setFailedVideoSrc(data.media.videoSrc ?? null);
              setReadyVideoSrc(null);
            }}
          >
            <source src={data.media.videoSrc} />
          </video>
        ) : data.media.imageSrc ? (
          <Image
            fill
            priority
            src={data.media.imageSrc}
            alt={data.media.alt}
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        ) : null}

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(243,236,228,0.6)_0%,rgba(243,236,228,0.14)_18%,rgba(243,236,228,0.08)_56%,rgba(243,236,228,0.76)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_40%,rgba(243,236,228,0.22)_100%)]" />
      </div>

      <div className="section-shell relative z-10 flex h-[100svh] flex-col items-center justify-start gap-4 px-0 pb-6 pt-24 sm:min-h-[100svh] sm:justify-between sm:gap-0 sm:pb-10 sm:pt-32">
        <p className="border-label border border-[rgba(21,21,21,0.12)] bg-[rgba(250,247,242,0.78)] px-3.5 py-2 text-center shadow-[0_10px_24px_rgba(65,50,35,0.06)] backdrop-blur-md sm:px-4">
          {data.eyebrow}
        </p>

        <div className="mt-[5vh] flex w-full items-center justify-center py-1 sm:mt-0 sm:flex-1 sm:py-0">
          <div
            ref={overlayRef}
            className="w-[min(92vw,28rem)] text-[rgba(21,21,21,0.96)] drop-shadow-[0_12px_28px_rgba(250,247,242,0.28)] sm:w-[min(88vw,72rem)]"
          >
            <SipiWordmark />
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-6 w-full space-y-4 sm:static sm:mt-0 sm:space-y-5">
          <div
            ref={copyRef}
            className="mx-auto w-full max-w-[44rem] border border-[rgba(21,21,21,0.14)] bg-[rgba(250,247,242,0.82)] px-5 py-5 text-left shadow-[0_18px_50px_rgba(73,61,51,0.12)] backdrop-blur-lg sm:mx-0 sm:max-w-[32rem] sm:px-7 sm:py-6"
          >
            <h1 className="display-title max-w-[10ch] text-[clamp(2rem,8vw,4.8rem)] leading-[0.92] text-[rgba(21,21,21,0.96)] sm:max-w-[8ch] sm:text-[clamp(2.5rem,10vw,4.8rem)]">
              {data.headline}
            </h1>
            <p className="mt-3 max-w-[26ch] text-[0.98rem] leading-7 text-[rgba(21,21,21,0.82)] sm:max-w-[30ch] sm:text-[1.05rem]">
              {data.body}
            </p>
            <div className="mt-5 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-start">
              <MagneticLink
                href={data.primaryCtaHref}
                className="w-full items-center justify-center bg-[var(--accent-dark)] px-6 py-3 text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-[var(--surface-solid)] shadow-[0_14px_32px_rgba(23,23,23,0.12)] sm:w-auto"
              >
                {data.primaryCtaLabel}
              </MagneticLink>
              <MagneticLink
                href={data.secondaryCtaHref}
                className="w-full items-center justify-center border border-[rgba(21,21,21,0.16)] bg-[rgba(250,247,242,0.88)] px-6 py-3 text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-[rgba(21,21,21,0.92)] sm:w-auto"
              >
                {data.secondaryCtaLabel}
              </MagneticLink>
            </div>
          </div>

          <div
            ref={scrollCueRef}
            className="flex items-center justify-center gap-3 text-[0.72rem] uppercase tracking-[0.3em] text-[rgba(21,21,21,0.72)] sm:justify-start"
          >
            <span>Scroll to unfold</span>
            <span className="scroll-cue inline-flex h-8 w-8 items-center justify-center border border-[rgba(21,21,21,0.1)] bg-[rgba(250,247,242,0.82)] font-bold text-[var(--ink)]">
              ↓
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
