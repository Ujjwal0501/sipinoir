"use client";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  label,
  title,
  body,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-4",
          align === "center" && "justify-center",
        )}
      >
        <span className="eyebrow">{label}</span>
        <span className="angle-divider hidden h-px flex-1 md:block" />
      </div>

      <div className="space-y-4">
        <h2 className="display-title text-[clamp(2.8rem,6vw,5.4rem)] leading-[0.94] text-[var(--ink)]">
          {title}
        </h2>
        {body ? (
          <p className="section-copy max-w-[40rem] text-[1rem] sm:text-[1.05rem]">
            {body}
          </p>
        ) : null}
      </div>
    </div>
  );
}
