---
title: "Untitled"
featured: false
published: false
---
# Blog Posts Directory

This directory contains all blog posts in Markdown format.

## Blog Post Format

Each blog post should be a `.md` file with the following frontmatter structure:

```markdown
---
title: "Your Blog Post Title"
date: "2026-02-25"
excerpt: "A brief summary of your blog post that will appear in listings and meta descriptions."
author: "Author Name"
category: "Category Name"
tags: ["tag1", "tag2", "tag3"]
coverImage: "/images/blog/your-image.jpg"
featured: true
published: true
---

Your blog post content goes here...

## Headings

You can use all standard markdown syntax including:

- **Bold text**
- *Italic text*
- [Links](https://example.com)
- Images
- Code blocks
- Lists
- And more!

### Code Example

\```javascript
function example() {
  console.log("Hello, World!");
}
\```

### Images

![Alt text](/images/blog/example.jpg)
```

## Frontmatter Fields

- **title** (required): The title of your blog post
- **date** (required): Publication date in YYYY-MM-DD format
- **excerpt** (required): A short summary (1-2 sentences) for listings and SEO
- **author** (optional): Author name, defaults to "Sipi & Noir Team"
- **category** (required): Main category for the post
- **tags** (optional): Array of relevant tags
- **coverImage** (optional): Path to cover image
- **featured** (optional): Set to `true` to feature on homepage, defaults to `false`
- **published** (optional): Set to `false` to hide from listings, defaults to `true`

## File Naming

Blog post files should be named using lowercase with hyphens:
- ✅ `my-first-blog-post.md`
- ✅ `winter-jacket-care-guide.md`
- ❌ `My First Blog Post.md`
- ❌ `winter_jacket_care_guide.md`

The filename (without .md) becomes the URL slug: `/blog/my-first-blog-post`

## Suggested Categories

- Style Guide
- Product Care
- Behind the Scenes
- Sustainability
- Fashion Trends
- Travel & Adventure
- Company News

## Content Guidelines

1. Use clear, descriptive headings (H2-H4)
2. Include images to break up text
3. Keep paragraphs concise
4. Use lists and formatting for readability
5. Link to relevant products or other blog posts
6. Optimize images before uploading (WebP format recommended)
7. Write SEO-friendly excerpts that encourage clicks

## Example Post

See the sample posts in this directory for complete examples.
