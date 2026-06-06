"use client";

import { MediaSlot } from "@/components/home/MediaSlot";
import type { DetailBandContent } from "@/lib/homepage-data";

type DetailBandSectionProps = {
  data: DetailBandContent;
};

export function DetailBandSection({ data }: DetailBandSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[rgba(231,218,206,0.34)] py-24 sm:py-28 lg:py-32">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20">
        <div data-reveal className="relative">
          <div className="relative border border-[var(--line)] bg-[rgba(250,247,242,0.46)] p-2 sm:p-3">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(21,21,21,0.05),rgba(21,21,21,0)_22%)]" />
            <div className="absolute right-0 top-0 h-px w-36 -translate-y-5 rotate-[-24deg] bg-[rgba(21,21,21,0.18)]" />
            <MediaSlot
              asset={data.media}
              aspectRatio="1.08"
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="overflow-hidden"
            />
          </div>
        </div>

        <div data-reveal className="space-y-6">
          <span className="eyebrow block text-[rgba(21,21,21,0.64)]">
            {data.overline}
          </span>
          <h2 className="display-title max-w-[12ch] text-[clamp(3rem,6vw,5rem)] leading-[0.96] text-[var(--ink)]">
            {data.headline}
          </h2>
          <p className="section-copy max-w-[34rem] text-[1rem] sm:text-[1.08rem]">
            {data.body}
          </p>

          <div className="space-y-4 border-t border-[var(--line)] pt-5">
            {data.labels.map((item) => (
              <div
                key={item}
                className="flex items-center justify-between gap-4 border-b border-[rgba(21,21,21,0.08)] pb-4 last:border-b-0 last:pb-0"
              >
                <div className="h-px w-14 bg-[rgba(21,21,21,0.16)]" />
                <p className="text-right text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
