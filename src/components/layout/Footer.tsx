import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/seo";

const footerLinks = {
  Explore: [
    { href: "/shop", label: "Jacket Collection" },
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
    <footer className="border-t border-amber-200 bg-amber-50 dark:border-amber-700 dark:bg-amber-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" aria-label={siteConfig.name}>
              <Image
                src={siteConfig.logo}
                alt={`${siteConfig.name} logo`}
                width={120}
                height={36}
              />
            </Link>
            <p className="mt-4 text-sm text-amber-900 dark:text-amber-100">
              {siteConfig.tagline}
            </p>
          </div>
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-950 dark:text-amber-50">
                {group}
              </h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-amber-900 transition-colors hover:text-amber-950 dark:text-amber-200 dark:hover:text-amber-50"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-amber-200 pt-8 dark:border-amber-700">
          <p className="text-center text-sm text-amber-800 dark:text-amber-200">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
