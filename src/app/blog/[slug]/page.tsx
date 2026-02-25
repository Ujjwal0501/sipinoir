import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";
import { siteConfig } from "@/lib/seo";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `${siteConfig.url}/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.coverImage ? [post.coverImage] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.date,
    image: post.coverImage,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}${siteConfig.logo}`,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main-content" className="min-h-screen bg-stone-50">
        {/* Back Link */}
        <div className="container mx-auto max-w-4xl px-4 pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-stone-500 hover:text-stone-900 transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="container mx-auto max-w-4xl px-4 py-12">
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-stone-500">
              <span className="bg-stone-100 px-3 py-1 rounded-full font-medium">
                {post.category}
              </span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-4">
              {post.title}
            </h1>

            <p className="text-xl text-stone-600 mb-6">{post.excerpt}</p>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center text-white font-bold">
                {post.author.substring(0, 2).toUpperCase()}
              </div>
              <div>
                <p className="font-medium text-stone-900">{post.author}</p>
              </div>
            </div>
          </header>

          {post.coverImage && (
            <div className="relative h-[400px] md:h-[500px] mb-12 rounded-lg overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Article Content */}
          <div
            className="prose prose-stone prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-stone-900
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-stone-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-stone-900 prose-a:underline hover:prose-a:text-stone-600
              prose-strong:text-stone-900 prose-strong:font-bold
              prose-ul:my-6 prose-ol:my-6
              prose-li:text-stone-700 prose-li:my-2
              prose-blockquote:border-l-4 prose-blockquote:border-stone-300
              prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-stone-600
              prose-code:bg-stone-100 prose-code:px-1.5 prose-code:py-0.5
              prose-code:rounded prose-code:text-sm prose-code:text-stone-900
              prose-pre:bg-stone-900 prose-pre:text-stone-100
              prose-img:rounded-lg prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-stone-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-stone-100 text-stone-700 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Back to Blog */}
          <div className="mt-12 pt-8 border-t border-stone-200">
            <Link
              href="/blog"
              className="inline-flex items-center text-stone-500 hover:text-stone-900 transition-colors font-medium"
            >
              ← Back to all posts
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
