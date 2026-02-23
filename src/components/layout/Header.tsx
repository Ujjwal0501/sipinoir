import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/seo";

const navLinks = [
  { href: "/wines", label: "Wines" },
  { href: "/pairings", label: "Pairings" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/90 backdrop-blur-sm dark:border-stone-800 dark:bg-stone-950/90">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label={siteConfig.name}>
          <Image
            src="/logo.svg"
            alt={`${siteConfig.name} logo`}
            width={140}
            height={40}
            priority
          />
        </Link>
        <nav aria-label="Main navigation">
          <ul className="hidden items-center gap-6 sm:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="/get-started"
          className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-stone-700 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-300"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
