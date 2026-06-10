"use client";

import { MagneticLink } from "@/components/home/MagneticLink";
import { MediaSlot } from "@/components/home/MediaSlot";
import { SectionHeading } from "@/components/home/SectionHeading";
import type { HomepageData } from "@/lib/homepage-data";
import { cn } from "@/lib/utils";

type CollectionSectionProps = {
  data: HomepageData["collection"];
};

export function CollectionSection({ data }: CollectionSectionProps) {
  return (
    <section id="collection" className="relative py-24 sm:py-28 lg:py-32">
      <div className="section-shell space-y-14">
        <SectionHeading
          label={data.label}
          title={data.heading}
          body={data.body}
          className="max-w-[52rem]"
        />

        <div className="space-y-14">
          {data.products.map((product, index) => {
            const isReversed = index % 2 === 1;

            return (
              <article
                key={`${product.title}-${index}`}
                data-reveal
                className="group border-t border-[var(--line)] pt-8 first:border-t-0 first:pt-0"
              >
                <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
                  <div
                    className={cn(
                      "space-y-6 lg:col-span-4",
                      isReversed && "lg:order-2",
                    )}
                  >
                    <div className="flex items-center justify-between gap-4 border-b border-[rgba(21,21,21,0.08)] pb-4">
                      <span className="border-label">{product.badge}</span>
                      <span className="border-label !tracking-[0.18em]">{product.label}</span>
                    </div>

                    <div className="space-y-4">
                      <h3 className="display-title max-w-[10ch] text-[2.8rem] leading-[0.96] text-[var(--ink)] sm:text-[3.5rem]">
                        {product.title}
                      </h3>
                      <p className="section-copy max-w-[30ch] text-[1rem]">
                        {product.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="h-px w-16 bg-[rgba(21,21,21,0.14)]" />
                        <span className="border-label">clip + still</span>
                      </div>

                      <MagneticLink
                        href={product.href}
                        className="items-center justify-center border border-[rgba(21,21,21,0.14)] bg-[var(--accent-dark)] px-5 py-3 text-[0.74rem] font-semibold uppercase tracking-[0.24em] text-[var(--surface-solid)]"
                      >
                        Shop now
                      </MagneticLink>
                    </div>
                  </div>

                  <div
                    className={cn(
                      "media-shell cut-panel relative bg-[rgba(234,225,214,0.86)] lg:col-span-8",
                      isReversed && "lg:order-1",
                    )}
                  >
                    <MediaSlot
                      asset={product.media}
                      aspectRatio={isReversed ? "1.34" : "0.9"}
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="min-h-[25rem] overflow-hidden sm:min-h-[32rem] lg:min-h-0"
                      mediaClassName="object-contain object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-5 py-5">
                      <div className="bg-[rgba(250,247,242,0.72)] px-3 py-2 backdrop-blur-sm">
                        <span className="border-label !text-[rgba(21,21,21,0.74)]">
                          {product.title.split(" ").slice(0, 2).join(" ")}
                        </span>
                      </div>
                      <div className="hidden h-px w-28 bg-[rgba(250,247,242,0.62)] sm:block" />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
