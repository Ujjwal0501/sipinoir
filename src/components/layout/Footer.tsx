import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/seo";

const footerLinks = {
  Explore: [
    { href: "/wines", label: "Wine Collection" },
    { href: "/pairings", label: "Food Pairings" },
    { href: "/reviews", label: "Expert Reviews" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" aria-label={siteConfig.name}>
              <Image
                src="/logo.svg"
                alt={`${siteConfig.name} logo`}
                width={120}
                height={36}
              />
            </Link>
            <p className="mt-4 text-sm text-stone-500 dark:text-stone-400">
              {siteConfig.tagline}
            </p>
          </div>
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-900 dark:text-stone-100">
                {group}
              </h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-stone-500 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-stone-200 pt-8 dark:border-stone-800">
          <p className="text-center text-sm text-stone-400 dark:text-stone-600">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
