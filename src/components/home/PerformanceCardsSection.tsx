"use client";

import { SectionHeading } from "@/components/home/SectionHeading";
import type { HomepageData } from "@/lib/homepage-data";

type PerformanceCardsSectionProps = {
  data: HomepageData["performance"];
};

export function PerformanceCardsSection({
  data,
}: PerformanceCardsSectionProps) {
  return (
    <section className="relative py-24 sm:py-28 lg:py-32">
      <div className="section-shell space-y-12">
        <SectionHeading
          label={data.overline}
          title={data.heading}
          body={data.body}
          className="max-w-[48rem]"
        />

        <div className="border-y border-[var(--line)]">
          {data.cards.map((card, index) => (
            <article
              key={card.title}
              data-reveal
              className="group grid gap-4 border-b border-[rgba(21,21,21,0.08)] py-7 last:border-b-0 md:grid-cols-[7rem_minmax(0,1fr)_minmax(16rem,24rem)] md:items-end"
            >
              <span className="border-label">
                0{index + 1}
              </span>
              <h3 className="display-title text-[2.3rem] leading-[0.98] text-[var(--ink)] transition-transform duration-300 group-hover:translate-x-1 sm:text-[2.8rem]">
                {card.title}
              </h3>
              <div className="flex items-start gap-4 md:justify-end">
                <div className="mt-3 hidden h-px w-16 bg-[rgba(21,21,21,0.14)] md:block" />
                <p className="section-copy max-w-[28ch] text-[0.98rem] md:text-right">
                  {card.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
