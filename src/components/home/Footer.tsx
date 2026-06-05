"use client";

import { MagneticLink } from "@/components/home/MagneticLink";
import type { HomepageData } from "@/lib/homepage-data";

type FooterProps = {
  brand: HomepageData["brand"];
  footer: HomepageData["footer"];
  contact: string;
};

export function Footer({ brand, footer, contact }: FooterProps) {
  return (
    <footer
      id="footer"
      className="relative z-20 flex flex-col overflow-hidden bg-[var(--surface)] pb-12 pt-20 sm:pt-24"
    >
      <div className="section-shell flex-1 flex flex-col space-y-16">
        <div className="grid gap-12 border-b border-[var(--line)] pb-16 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[var(--accent)] sm:text-[0.7rem] sm:tracking-[0.32em]">
              {brand.name}
              <span className="mx-2 hidden sm:inline">—</span>
              <span className="block pt-1 text-[0.58rem] tracking-[0.16em] text-[rgba(23,23,23,0.58)] sm:inline sm:pt-0 sm:text-inherit sm:tracking-inherit sm:text-[var(--accent)]">
                {contact}
              </span>
            </p>
            <p className="max-w-[28rem] text-lg leading-snug font-light text-[var(--ink)] sm:text-2xl">
              {brand.statement}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-12 lg:justify-end">
            <div className="space-y-5">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
                Index
              </p>
              <div className="flex flex-col items-start gap-4">
                {footer.links.map((link) => (
                  <MagneticLink
                    key={link.label}
                    href={link.href}
                    className="items-center text-sm font-bold uppercase tracking-[0.1em] text-[var(--ink)] hover:text-[var(--accent)]"
                  >
                    {link.label}
                  </MagneticLink>
                ))}
              </div>
            </div>
            
            <div className="space-y-5">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
                Socials
              </p>
              <div className="flex flex-col items-start gap-4">
                 <MagneticLink href="#" className="items-center text-sm font-bold uppercase tracking-[0.1em] text-[var(--ink)] hover:text-[var(--accent)]">Instagram</MagneticLink>
                 <MagneticLink href="#" className="items-center text-sm font-bold uppercase tracking-[0.1em] text-[var(--ink)] hover:text-[var(--accent)]">Twitter / X</MagneticLink>
                 <MagneticLink href="#" className="items-center text-sm font-bold uppercase tracking-[0.1em] text-[var(--ink)] hover:text-[var(--accent)]">Are.na</MagneticLink>
              </div>
            </div>
          </div>
        </div>

        <div className="relative -ml-[12vw] flex w-[124vw] overflow-hidden border-b border-[var(--line)] pb-10 sm:-ml-[10vw] sm:w-[120vw] sm:pb-12">
          <div className="marquee-track flex w-max items-center font-[family-name:var(--font-display)] text-[clamp(4.4rem,20vw,16rem)] font-black uppercase leading-[0.8] tracking-tight text-[var(--ink)] opacity-100 sm:text-[clamp(6rem,18vw,16rem)]">
            <span className="px-8 whitespace-nowrap">{brand.name}</span>
            <span className="px-8 whitespace-nowrap text-transparent" style={{WebkitTextStroke: "1px var(--ink)"}}>- {brand.name}</span>
            <span className="px-8 whitespace-nowrap">{brand.name}</span>
            <span className="px-8 whitespace-nowrap text-transparent" style={{WebkitTextStroke: "1px var(--ink)"}}>- {brand.name}</span>
            <span className="px-8 whitespace-nowrap">{brand.name}</span>
            <span className="px-8 whitespace-nowrap text-transparent" style={{WebkitTextStroke: "1px var(--ink)"}}>- {brand.name}</span>
            <span className="px-8 whitespace-nowrap">{brand.name}</span>
            <span className="px-8 whitespace-nowrap text-transparent" style={{WebkitTextStroke: "1px var(--ink)"}}>- {brand.name}</span>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[var(--muted)] sm:flex-row sm:items-center">
          <p>{brand.copyright}</p>
          <p className="flex items-center gap-2">
            <span>Designed with Intent</span>
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--ink)] animate-pulse" />
          </p>
        </div>

      </div>
    </footer>
  );
}
