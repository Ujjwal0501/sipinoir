"use client";

import { MagneticLink } from "@/components/home/MagneticLink";
import type { HomepageData } from "@/lib/homepage-data";

type FinalCtaSectionProps = {
  data: HomepageData["finalCta"];
};

export function FinalCtaSection({ data }: FinalCtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#1b1a18] py-24 text-[var(--surface-solid)] sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_24%),radial-gradient(circle_at_80%_80%,rgba(138,117,94,0.14)_0%,rgba(138,117,94,0)_30%)]" />
      <div className="section-shell relative z-10">
        <div
          data-reveal
          className="grid gap-10 border-t border-[rgba(250,247,242,0.14)] pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end"
        >
          <div>
            <p className="eyebrow !text-[rgba(247,244,239,0.58)]">Final note</p>
            <h2 className="display-title mt-4 max-w-[10ch] text-[clamp(3.2rem,6vw,6rem)] leading-[0.94] text-[var(--surface-solid)]">
              {data.headline}
            </h2>
          </div>

          <div className="lg:max-w-[28rem] lg:justify-self-end">
            <p className="max-w-[34rem] text-[1rem] leading-8 text-[rgba(247,244,239,0.68)] sm:text-[1.08rem]">
              {data.body}
            </p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <MagneticLink
                href={data.primaryCtaHref}
                className="w-full items-center justify-center bg-[var(--surface-solid)] px-6 py-3 text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-[#1b1a18] sm:w-auto"
              >
                {data.primaryCtaLabel}
              </MagneticLink>
              <MagneticLink
                href={data.secondaryHref}
                className="items-center text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-[rgba(247,244,239,0.68)]"
              >
                {data.secondaryLabel}
              </MagneticLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
