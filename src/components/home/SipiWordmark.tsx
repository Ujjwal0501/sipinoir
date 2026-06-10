"use client";

import { cn } from "@/lib/utils";

type SipiWordmarkProps = {
  className?: string;
};

export function SipiWordmark({ className }: SipiWordmarkProps) {
  return (
    <svg
      viewBox="0 0 1400 260"
      aria-hidden="true"
      className={cn("h-auto w-full overflow-visible", className)}
      role="presentation"
    >
      <text
        x="50%"
        y="63%"
        textAnchor="middle"
        fill="currentColor"
        stroke="rgba(23,23,23,0.12)"
        strokeWidth="3"
        letterSpacing="0.36em"
        style={{
          fontFamily: "var(--font-display), serif",
          fontSize: "196px",
          fontWeight: 700,
        }}
      >
        S I P I
      </text>
    </svg>
  );
}
