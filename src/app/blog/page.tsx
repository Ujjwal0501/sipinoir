import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getAllPosts, getFeaturedPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Explore style guides, jacket care tips, and the latest in sustainable fashion from Sipi & Noir.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: "Blog | Sipi & Noir",
    description:
      "Explore style guides, jacket care tips, and the latest in sustainable fashion from Sipi & Noir.",
    url: `${siteConfig.url}/blog`,
    type: "website",
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4">
              Blog
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl">
              Style guides, care tips, and stories from the world of premium
              outerwear and sustainable fashion.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            {posts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-neutral-600">
                  No blog posts yet. Check back soon!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-neutral-200"
                  >
                    <Link href={`/blog/${post.slug}`} className="block group">
                      {post.featureImage ? (
                        <div className="relative h-48 bg-neutral-200 overflow-hidden">
                          <Image
                            src={post.featureImage}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ) : (
                        <div className="h-48 bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                          <span className="text-white text-6xl font-bold opacity-10">
                            SN
                          </span>
                        </div>
                      )}

                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3 text-sm text-neutral-600">
                          <span className="bg-neutral-100 px-3 py-1 rounded-full text-xs font-medium">
                            {post.category}
                          </span>
                          <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </time>
                        </div>

                        <div className="flex items-center gap-3 mb-2">
                          {post.featureImage && (
                            <div className="relative w-10 h-10 flex-shrink-0">
                              <Image
                                src={post.featureImage}
                                alt={post.title}
                                fill
                                className="object-cover rounded-full"
                              />
                            </div>
                          )}
                          <h2 className="text-xl font-bold text-neutral-900 group-hover:text-neutral-700 transition-colors">
                            {post.title}
                          </h2>
                        </div>

                        <p className="text-neutral-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between text-sm">
                          <span className="text-neutral-500">
                            {post.readingTime}
                          </span>
                          <span className="text-neutral-900 font-medium group-hover:underline">
                            Read more →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
