"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { MagneticLink } from "@/components/home/MagneticLink";
import type { NavLink } from "@/lib/homepage-data";
import { cn } from "@/lib/utils";

type NavbarProps = {
  brand: string;
  navLinks: NavLink[];
  shopUrl: string;
};

export function Navbar({ brand, navLinks, shopUrl }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6">
      <div className="section-shell pointer-events-auto">
        <div
          className={cn(
            "border px-4 py-3 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 sm:px-5",
            isScrolled || isMenuOpen
              ? "soft-surface border-[rgba(21,21,21,0.12)] shadow-[0_16px_38px_rgba(66,50,37,0.12)]"
              : "border-[rgba(21,21,21,0.12)] bg-[rgba(250,247,242,0.78)] shadow-[0_10px_30px_rgba(66,50,37,0.08)] backdrop-blur-md",
          )}
        >
          <div className="flex items-center justify-between gap-4">
            <MagneticLink
              href="#home"
              className="flex items-center gap-4 text-[0.82rem] font-bold uppercase tracking-[0.28em] text-[var(--ink)]"
            >
              <Image src="/icon.png" alt="Sipi & Noir icon" width={32} height={32} />
              <span className="whitespace-nowrap text-[0.68rem] font-semibold tracking-[0.24em] text-[rgba(21,21,21,0.9)] sm:text-[0.84rem] sm:tracking-[0.34em]">
                {brand}
              </span>
            </MagneticLink>

            <div className="hidden items-center gap-4 lg:flex">
              <nav aria-label="Primary" className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <MagneticLink
                    key={link.label}
                    href={link.href}
                    className="items-center px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[rgba(21,21,21,0.68)] hover:text-[var(--ink)]"
                  >
                    {link.label}
                  </MagneticLink>
                ))}
              </nav>

              <MagneticLink
                href={shopUrl}
                className="items-center border border-[rgba(21,21,21,0.14)] bg-[var(--accent-dark)] px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[var(--surface-solid)] shadow-[0_10px_24px_rgba(33,29,26,0.12)]"
              >
                Shop now
              </MagneticLink>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <a
                href={shopUrl}
                className="mt-2 bg-[var(--accent-dark)] px-4 py-3 text-[0.74rem] font-semibold uppercase tracking-[0.24em] text-[var(--surface-solid)]"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                Shop now
              </a>

              <button
                type="button"
                aria-expanded={isMenuOpen}
                aria-controls="sipi-noir-mobile-nav"
                onClick={() => {
                  setIsMenuOpen((currentValue) => !currentValue);
                }}
                className="inline-flex items-center justify-center border border-[var(--line)] bg-[rgba(250,247,242,0.9)] px-3 py-2 text-[var(--ink)] text-[0.62rem] font-bold uppercase tracking-[0.18em] gap-2 sm:text-[0.65rem] sm:tracking-widest"
              >
                <span className="relative flex flex-col justify-center gap-[3px] h-3 w-4">
                  <span
                    className={cn(
                      "absolute left-0 top-0.5 h-px w-full bg-current transition-transform duration-300",
                      isMenuOpen && "translate-y-[5px] rotate-45",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current transition-opacity duration-300",
                      isMenuOpen && "opacity-0",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute bottom-0.5 left-0 h-px w-full bg-current transition-transform duration-300",
                      isMenuOpen && "-translate-y-[5px] -rotate-45",
                    )}
                  />
                </span>
              </button>
            </div>
          </div>

          <div
            id="sipi-noir-mobile-nav"
            className={cn(
              "grid overflow-hidden transition-[grid-template-rows,opacity,margin-top] duration-500 lg:hidden",
              isMenuOpen
                ? "mt-4 grid-rows-[1fr] opacity-100"
                : "mt-0 grid-rows-[0fr] opacity-0",
            )}
          >
            <div className="overflow-hidden border border-[var(--line)] bg-[var(--surface)] shadow-[0_18px_40px_rgba(72,56,40,0.14)]">
              <nav aria-label="Mobile" className="m-3 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="border-b border-[rgba(21,21,21,0.08)] px-4 py-3 text-[0.74rem] font-bold uppercase tracking-[0.24em] text-[var(--ink)] last:border-b-0"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
