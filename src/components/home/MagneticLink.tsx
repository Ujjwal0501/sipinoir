"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn, isExternalHref } from "@/lib/utils";

type MagneticLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  strength?: number;
  dataCursor?: "link" | "media";
  ariaLabel?: string;
};

export function MagneticLink({
  href,
  children,
  className,
  strength = 16,
  dataCursor = "link",
  ariaLabel,
}: MagneticLinkProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const elementRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || prefersReducedMotion) {
      return;
    }

    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mediaQuery.matches) {
      return;
    }

    const moveX = gsap.quickTo(element, "x", {
      duration: 0.26,
      ease: "power3.out",
    });
    const moveY = gsap.quickTo(element, "y", {
      duration: 0.26,
      ease: "power3.out",
    });

    const handleMove = (event: PointerEvent): void => {
      const bounds = element.getBoundingClientRect();
      const offsetX = event.clientX - (bounds.left + bounds.width / 2);
      const offsetY = event.clientY - (bounds.top + bounds.height / 2);
      moveX((offsetX / bounds.width) * strength);
      moveY((offsetY / bounds.height) * strength);
    };

    const handleLeave = (): void => {
      moveX(0);
      moveY(0);
    };

    element.addEventListener("pointermove", handleMove);
    element.addEventListener("pointerleave", handleLeave);

    return () => {
      element.removeEventListener("pointermove", handleMove);
      element.removeEventListener("pointerleave", handleLeave);
    };
  }, [prefersReducedMotion, strength]);

  return (
    <a
      ref={elementRef}
      href={href}
      aria-label={ariaLabel}
      data-cursor={dataCursor}
      target={isExternalHref(href) ? "_blank" : undefined}
      rel={isExternalHref(href) ? "noreferrer" : undefined}
      className={cn("inline-flex transform-gpu", className)}
    >
      {children}
    </a>
  );
}
