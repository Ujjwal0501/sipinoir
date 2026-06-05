"use client";

import type { ManifestoContent } from "@/lib/homepage-data";

type ManifestoSectionProps = {
  data: ManifestoContent;
};

export function ManifestoSection({ data }: ManifestoSectionProps) {
  return (
    <section id="manifesto" className="relative py-24 sm:py-28 lg:py-32">
      <div className="section-shell">
        <div className="border-y border-[var(--line)] py-10 sm:py-12 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <div data-reveal className="space-y-5">
              <span className="eyebrow block">{data.label}</span>
              <h2 className="display-title max-w-[11ch] text-[clamp(3.8rem,9vw,8rem)] leading-[0.9] text-[var(--ink)] uppercase">
                {data.headline}
              </h2>
            </div>

            <div data-reveal className="space-y-10 lg:mt-[2rem]">
              <p className="section-copy max-w-[30rem] text-[1.18rem] leading-[1.7] sm:text-[1.42rem]">
                {data.body}
              </p>

              <div className="space-y-3 border-t border-[var(--line)] pt-5">
                {data.specs.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between gap-4 border-b border-[rgba(21,21,21,0.08)] py-3 last:border-b-0"
                  >
                    <span className="border-label">0{index + 1}</span>
                    <p className="text-right text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[rgba(21,21,21,0.78)]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
