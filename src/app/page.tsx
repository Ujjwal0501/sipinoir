import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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

const features = [
  {
    icon: "🍷",
    title: "Curated Collections",
    description:
      "Browse hand-picked selections from the world's finest vineyards, from Bordeaux to Napa Valley.",
  },
  {
    icon: "🍽️",
    title: "Perfect Pairings",
    description:
      "Get expert guidance on matching the right wine with every dish for an unforgettable dining experience.",
  },
  {
    icon: "⭐",
    title: "Expert Reviews",
    description:
      "Access in-depth tasting notes and ratings from our team of certified sommeliers.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section
          aria-labelledby="hero-heading"
          className="relative overflow-hidden bg-stone-950 px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-36"
        >
          <div className="mx-auto max-w-4xl">
            <Image
              src="/logo.svg"
              alt={`${siteConfig.name} logo`}
              width={200}
              height={60}
              priority
              className="mx-auto mb-8 brightness-0 invert"
            />
            <h1
              id="hero-heading"
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Discover the World of{" "}
              <span className="text-red-400">Fine Wine</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-300">
              {siteConfig.description}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/wines"
                className="rounded-full bg-red-700 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Explore Wines
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-stone-700 px-8 py-3 text-sm font-semibold text-stone-200 transition-colors hover:border-stone-500 hover:text-white"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          aria-labelledby="features-heading"
          className="bg-white px-4 py-20 dark:bg-stone-900 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <h2
              id="features-heading"
              className="text-center text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl"
            >
              Everything You Need for the Perfect Wine Experience
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-stone-600 dark:text-stone-400">
              From discovery to the dinner table — Sipinoir has you covered.
            </p>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-2xl border border-stone-100 bg-stone-50 p-8 dark:border-stone-800 dark:bg-stone-800"
                >
                  <span className="text-4xl" role="img" aria-label={feature.title}>
                    {feature.icon}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-stone-900 dark:text-stone-100">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-stone-600 dark:text-stone-400">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          aria-labelledby="cta-heading"
          className="bg-red-900 px-4 py-20 text-center sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-2xl">
            <h2
              id="cta-heading"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Start Your Wine Journey Today
            </h2>
            <p className="mt-4 text-lg text-red-200">
              Join thousands of wine lovers and discover your next favourite
              bottle.
            </p>
            <Link
              href="/get-started"
              className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-red-900 shadow-sm transition-colors hover:bg-red-50"
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
