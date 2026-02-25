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
    <header className="sticky top-0 z-50 w-full border-b border-amber-200 bg-amber-50/90 backdrop-blur-sm dark:border-amber-700 dark:bg-amber-900/85">
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
                  className="text-sm font-medium text-amber-900 transition-colors hover:text-amber-950 dark:text-amber-100 dark:hover:text-amber-50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="/shop"
          className="rounded-full bg-amber-900 px-4 py-2 text-sm font-medium text-amber-50 transition-colors hover:bg-amber-800 dark:bg-amber-100 dark:text-amber-900 dark:hover:bg-amber-200"
        >
          Products
        </Link>
      </div>
    </header>
  );
}
