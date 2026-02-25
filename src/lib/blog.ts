import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  category: string;
  tags: string[];
  coverImage?: string;
  featureImage?: string;
  featured?: boolean;
  published?: boolean;
  content: string;
  readingTime: string;
}

export interface BlogPostMetadata {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  category: string;
  tags: string[];
  coverImage?: string;
  featureImage?: string;
  featured?: boolean;
  readingTime: string;
}

/**
 * Extract the first image URL from markdown content
 */
function extractFirstImageFromMarkdown(content: string): string | undefined {
  // Match markdown image syntax: ![alt](url)
  const imageRegex = /!\[.*?\]\((.*?)\)/;
  const match = content.match(imageRegex);
  return match ? match[1] : undefined;
}

/**
 * Get all blog post slugs
 */
export function getAllPostSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => fileName.replace(/\.md$/, ""));
  } catch (error) {
    // Directory doesn't exist yet or is empty
    return [];
  }
}

/**
 * Get a single blog post by slug
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    // Process markdown to HTML
    const processedContent = await remark()
      .use(remarkGfm)
      .use(html, { sanitize: false })
      .process(content);
    const contentHtml = processedContent.toString();

    // Calculate reading time
    const stats = readingTime(content);

    return {
      slug,
      title: data.title || "Untitled",
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || "",
      author: data.author || "Sipi & Noir Team",
      category: data.category || "Uncategorized",
      tags: data.tags || [],
      coverImage: data.coverImage,
      featureImage: extractFirstImageFromMarkdown(content),
      featured: data.featured || false,
      published: data.published !== false, // Default to true if not specified
      content: contentHtml,
      readingTime: stats.text,
    };
  } catch (error) {
    return null;
  }
}

/**
 * Get metadata for all blog posts (without content)
 */
export async function getAllPosts(): Promise<BlogPostMetadata[]> {
  const slugs = getAllPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPostBySlug(slug);
      if (!post || post.published === false) return null;

      // Return only metadata, not the full content
      const { content, published, ...metadata } = post;
      return metadata;
    })
  );

  // Filter out null values and sort by date (newest first)
  return posts
    .filter((post): post is BlogPostMetadata => post !== null)
    .sort((a, b) => (new Date(b.date) > new Date(a.date) ? 1 : -1));
}

/**
 * Get featured blog posts
 */
export async function getFeaturedPosts(): Promise<BlogPostMetadata[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) => post.featured).slice(0, 3);
}

/**
 * Get posts by category
 */
export async function getPostsByCategory(
  category: string
): Promise<BlogPostMetadata[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Get posts by tag
 */
export async function getPostsByTag(tag: string): Promise<BlogPostMetadata[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) =>
    post.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Get all unique categories
 */
export async function getAllCategories(): Promise<string[]> {
  const allPosts = await getAllPosts();
  const categories = allPosts.map((post) => post.category);
  return [...new Set(categories)];
}

/**
 * Get all unique tags
 */
export async function getAllTags(): Promise<string[]> {
  const allPosts = await getAllPosts();
  const tags = allPosts.flatMap((post) => post.tags);
  return [...new Set(tags)];
}
