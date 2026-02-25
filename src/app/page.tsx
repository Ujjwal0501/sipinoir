import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/HeroSection";
import BodyTypeSelector from "@/components/BodyTypeSelector";
import { siteConfig } from "@/lib/seo";
import { getAllPosts } from "@/lib/blog";

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

export default async function HomePage() {
  const recentPosts = await getAllPosts();
  const displayPosts = recentPosts.slice(0, 6); // Show 6 most recent posts

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

        {/* Recent Blog Posts Section */}
        <section
          aria-labelledby="recent-posts-heading"
          className="bg-amber-200 px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <h2
              id="recent-posts-heading"
              className="text-3xl font-bold tracking-tight text-amber-950 sm:text-4xl mb-8"
            >
              Recently Posted
            </h2>
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-6 pb-4">
                {displayPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    {post.coverImage && (
                      <div className="relative h-48 w-full bg-amber-100">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-medium px-2 py-1 bg-amber-100 text-amber-900 rounded">
                          {post.category}
                        </span>
                        <span className="text-xs text-amber-700">
                          {post.readingTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-amber-950 mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-amber-900 line-clamp-3 mb-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-amber-700">
                        <span>{post.author}</span>
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </time>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
