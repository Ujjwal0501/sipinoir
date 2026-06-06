"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function useLenis(): void {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    let lenis: Lenis | null = null;

    const setup = (): void => {
      if (!mediaQuery.matches || lenis) {
        return;
      }

      lenis = new Lenis({
        duration: 1.05,
        lerp: 0.09,
        smoothWheel: true,
        syncTouch: false,
      });

      lenis.on("scroll", () => {
        ScrollTrigger.update();
      });

      document.documentElement.dataset.lenis = "true";

      const update = (time: number): void => {
        lenis?.raf(time * 1000);
      };

      gsap.ticker.add(update);
      gsap.ticker.lagSmoothing(0);

      const previousTeardown = teardown;
      teardown = (): void => {
        gsap.ticker.remove(update);
        previousTeardown();
      };
    };

    let teardown = (): void => {
      lenis?.destroy();
      lenis = null;
      delete document.documentElement.dataset.lenis;
    };

    const handleChange = (): void => {
      if (mediaQuery.matches) {
        setup();
      } else {
        teardown();
      }
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      teardown();
    };
  }, [prefersReducedMotion]);
}
