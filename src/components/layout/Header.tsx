import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/seo";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-stone-50/90 backdrop-blur-sm dark:border-stone-700 dark:bg-stone-900/90">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label={siteConfig.name}>
          <Image
            src={siteConfig.logo}
            alt={`${siteConfig.name} logo`}
            width={140}
            height={40}
            priority
            className="dark:invert"
          />
        </Link>
        <nav aria-label="Main navigation">
          <ul className="hidden items-center gap-6 sm:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-stone-700 transition-colors hover:text-stone-900 dark:text-stone-300 dark:hover:text-stone-50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="/shop"
          className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-stone-50 transition-colors hover:bg-stone-700 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200"
        >
          Products
        </Link>
      </div>
    </header>
  );
}
