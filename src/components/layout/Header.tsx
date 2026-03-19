import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/seo";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
];

const storeLinks = [
  {
    href: "https://shop.sipinoir.com/account",
    label: "Account",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-3.314 0-6 2.239-6 5v1h12v-1c0-2.761-2.686-5-6-5Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    href: "https://shop.sipinoir.com/cart",
    label: "Cart",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M3 5h2l2.2 9.2a1 1 0 0 0 .973.8H18.4a1 1 0 0 0 .97-.757L21 8H7"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="19" r="1.5" fill="currentColor" />
        <circle cx="18" cy="19" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-stone-50/90 backdrop-blur-sm dark:border-stone-700 dark:bg-stone-900/90">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex h-full shrink-0 items-center py-2" aria-label={siteConfig.name}>
          <Image
            src={siteConfig.logo}
            alt={`${siteConfig.name} logo`}
            width={140}
            height={40}
            priority
            className="block h-16 w-auto object-contain dark:invert"
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
        <div className="flex items-center gap-2 sm:gap-3">
          {storeLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition-colors hover:border-stone-900 hover:text-stone-900 dark:border-stone-600 dark:text-stone-200 dark:hover:border-stone-100 dark:hover:text-stone-50"
              aria-label={link.label}
              title={link.label}
            >
              {link.icon}
            </a>
          ))}
          <Link
            href="/shop"
            className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-stone-50 transition-colors hover:bg-stone-700 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200"
          >
            Products
          </Link>
        </div>
      </div>
    </header>
  );
}
