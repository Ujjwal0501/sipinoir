"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { CollectionSection } from "@/components/home/CollectionSection";
import { DetailBandSection } from "@/components/home/DetailBandSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { Footer } from "@/components/home/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { LifestyleSection } from "@/components/home/LifestyleSection";
import { ManifestoSection } from "@/components/home/ManifestoSection";
import { Navbar } from "@/components/home/Navbar";
import { PerformanceCardsSection } from "@/components/home/PerformanceCardsSection";
import { PinnedRevealSection } from "@/components/home/PinnedRevealSection";
import { useLenis } from "@/hooks/useLenis";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { HomepageData } from "@/lib/homepage-data";

type PageExperienceProps = {
  data: HomepageData;
};

export function PageExperience({ data }: PageExperienceProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isReady, setIsReady] = useState(false);

  useLenis();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setIsReady(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!isReady) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const revealElements = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      const mediaQuery = window.matchMedia("(min-width: 768px)");

      if (prefersReducedMotion || !mediaQuery.matches) {
        gsap.set(revealElements, {
          autoAlpha: 1,
          y: 0,
          clearProps: "clipPath,transform",
        });
        return;
      }

      revealElements.forEach((element) => {
        gsap.fromTo(
          element,
          {
            y: prefersReducedMotion ? 0 : 70,
            autoAlpha: prefersReducedMotion ? 1 : 0,
            clipPath: prefersReducedMotion ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 100% 0%)",
          },
          {
            y: 0,
            autoAlpha: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: prefersReducedMotion ? 0.01 : 1.5,
            ease: "power4.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              once: true,
            },
          },
        );
      });
    }, rootRef);

    return () => {
      context.revert();
    };
  }, [isReady, prefersReducedMotion]);

  return (
    <div
      ref={rootRef}
      className="relative overflow-x-hidden bg-[var(--bg)] text-[var(--ink)]"
    >
      <div aria-hidden="true" className="noise-overlay" />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute left-[4%] top-0 h-full w-px bg-[linear-gradient(180deg,rgba(23,23,23,0.02),rgba(23,23,23,0.08),rgba(23,23,23,0.02))]" />
        <div className="absolute right-[4%] top-0 h-full w-px bg-[linear-gradient(180deg,rgba(23,23,23,0.02),rgba(23,23,23,0.08),rgba(23,23,23,0.02))]" />
        <div className="absolute left-[-10%] top-[14%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0)_66%)] blur-3xl" />
        <div className="absolute right-[-10%] top-[28%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0)_68%)] blur-3xl" />
      </div>

      <Navbar
        brand={data.brand.name}
        navLinks={data.navLinks}
        shopUrl={data.shopUrl}
      />

      <main className="relative z-10 overflow-x-clip">
        <HeroSection data={data.hero} isReady={isReady} />
        <ManifestoSection data={data.manifesto} />
        <PinnedRevealSection data={data.reveal} />
        <DetailBandSection data={data.detailBand} />
        <PerformanceCardsSection data={data.performance} />
        <LifestyleSection data={data.lifestyle} />
        <CollectionSection data={data.collection} />
        <FinalCtaSection data={data.finalCta} />
      </main>

      <Footer
        brand={data.brand}
        footer={data.footer}
        contact={data.contact}
      />
    </div>
  );
}
