"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { MediaSlot } from "@/components/home/MediaSlot";
import { SectionHeading } from "@/components/home/SectionHeading";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { RevealContent } from "@/lib/homepage-data";
import { cn } from "@/lib/utils";

type PinnedRevealSectionProps = {
  data: RevealContent;
};

const desktopCalloutPositions = [
  "left-[4%] top-[19%] items-end text-right",
  "right-[5%] top-[44%] items-start text-left",
  "left-[11%] bottom-[16%] items-end text-right",
];

export function PinnedRevealSection({ data }: PinnedRevealSectionProps) {
  const pinRef = useRef<HTMLDivElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const calloutRefs = useRef<Array<HTMLDivElement | null>>([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const matchMedia = gsap.matchMedia();

    matchMedia.add("(min-width: 1024px)", () => {
      if (prefersReducedMotion) {
        return;
      }

      const pinElement = pinRef.current;
      const mediaElement = mediaRef.current;
      const calloutElements = calloutRefs.current.filter(
        (element): element is HTMLDivElement => element !== null,
      );

      if (!pinElement || !mediaElement) {
        return;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: pinElement,
          start: "top 72%",
          end: "bottom 36%",
          scrub: 0.65,
          invalidateOnRefresh: true,
        },
      });

      timeline.fromTo(
        mediaElement,
        {
          scale: 0.94,
          rotate: -2.5,
        },
        {
          scale: 1,
          rotate: 0,
          ease: "none",
        },
      );

      timeline.fromTo(
        calloutElements,
        {
          y: 22,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.24,
          stagger: 0.12,
        },
        0.44,
      );
    });

    return () => {
      matchMedia.revert();
    };
  }, [prefersReducedMotion]);

  return (
    <section
      id="details"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-36"
    >
      <div className="section-shell space-y-12">
        <SectionHeading
          label={data.label}
          title={data.heading}
          body={data.body}
          className="max-w-[52rem]"
        />

        <div
          ref={pinRef}
          className="relative flex min-h-[72svh] items-center justify-center lg:min-h-[82svh]"
        >
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            <div className="absolute left-[12%] top-[16%] h-[1px] w-[8rem] rotate-[-24deg] bg-[rgba(21,21,21,0.16)]" />
            <div className="absolute right-[10%] bottom-[24%] h-[1px] w-[7rem] rotate-[-24deg] bg-[rgba(21,21,21,0.16)]" />
          </div>

          <div
            ref={mediaRef}
            className="media-shell cut-panel relative w-full max-w-[32rem] rounded-[2rem] p-4 sm:max-w-[36rem] sm:p-6 lg:max-w-[38rem]"
          >
            <MediaSlot
              asset={data.media}
              aspectRatio="0.92"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="overflow-hidden rounded-[1.4rem]"
              mediaClassName="object-center"
            />
          </div>

          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            {data.callouts.map((callout, index) => (
              <div
                key={callout.label}
                ref={(element) => {
                  calloutRefs.current[index] = element;
                }}
                className={cn(
                  "absolute flex max-w-[17rem] flex-col gap-3 rounded-[1.4rem] border border-[rgba(23,23,23,0.08)] bg-[rgba(247,244,239,0.82)] px-5 py-4 opacity-0 shadow-[0_18px_40px_rgba(73,61,51,0.1)] backdrop-blur-md",
                  desktopCalloutPositions[index],
                )}
              >
                <div className="h-px w-24 bg-[rgba(21,21,21,0.18)]" />
                <div className="space-y-2">
                  <p className="text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-[var(--ink)]">
                    {callout.label}
                  </p>
                  <p className="text-sm leading-6 text-[rgba(23,23,23,0.68)]">
                    {callout.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:hidden">
          {data.callouts.map((callout) => (
            <div
              key={callout.label}
              data-reveal
              className="cut-panel-sm editorial-panel rounded-[1.4rem] px-5 py-5"
            >
              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-[var(--ink)]">
                {callout.label}
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                {callout.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
