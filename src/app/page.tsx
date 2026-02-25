import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/HeroSection";
import BodyTypeSelector from "@/components/BodyTypeSelector";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main-content">
        <HeroSection />

        {/* Body Type Selector Section */}
        <BodyTypeSelector />

        {/* CTA Section */}
        <section
          aria-labelledby="cta-heading"
          className="bg-amber-200 px-4 py-20 text-center sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-2xl">
            <h2
              id="cta-heading"
              className="text-3xl font-bold tracking-tight text-amber-950 sm:text-4xl"
            >
              Start Your Wine Journey Today
            </h2>
            <p className="mt-4 text-lg text-amber-900">
              Join thousands of wine lovers and discover your next favourite
              bottle.
            </p>
            <Link
              href="/get-started"
              className="mt-8 inline-block rounded-full bg-amber-950 px-8 py-3 text-sm font-semibold text-amber-50 shadow-sm transition-colors hover:bg-amber-900"
            >
              Get Started — It&apos;s Free
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
