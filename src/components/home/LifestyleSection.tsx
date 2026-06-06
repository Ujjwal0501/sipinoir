"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { MediaSlot } from "@/components/home/MediaSlot";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { LifestyleContent } from "@/lib/homepage-data";

type LifestyleSectionProps = {
  data: LifestyleContent;
};

export function LifestyleSection({ data }: LifestyleSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.fromTo(
        mediaRef.current,
        {
          yPercent: -6,
        },
        {
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, sectionRef);

    return () => {
      context.revert();
    };
  }, [prefersReducedMotion]);

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-28 lg:py-32">
      <div className="section-shell space-y-8">
        <div className="media-shell cut-panel relative rounded-[2rem] p-4 sm:p-5 lg:p-6">
          <div className="relative overflow-hidden rounded-[1.5rem]">
            <div ref={mediaRef} className="relative">
              <MediaSlot
                asset={data.media}
                aspectRatio="1.6"
                sizes="100vw"
                className="min-h-[24rem] md:min-h-[32rem]"
              />
            </div>
          </div>

          <div
            data-reveal
            className="relative z-10 mt-4 max-w-[32rem] rounded-[1.5rem] border border-[rgba(21,21,21,0.08)] bg-[rgba(250,247,242,0.84)] px-5 py-5 backdrop-blur-lg sm:-mt-24 sm:ml-6 sm:px-6 sm:py-6"
          >
            <p className="eyebrow">{data.overline}</p>
            <h2 className="display-title mt-3 text-[clamp(2.8rem,5.4vw,4.8rem)] leading-[0.96] text-[var(--ink)]">
              {data.headline}
            </h2>
            <p className="section-copy mt-4 text-[1rem] sm:text-[1.05rem]">
              {data.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
