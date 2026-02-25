# Blogging System Documentation

## Overview

Your website now has a complete blogging system with markdown-based storage. The blog is accessible at `/blog` and individual posts at `/blog/[slug]`.

## Blog Post Format

### File Location
All blog posts are stored as Markdown files in:
```
content/posts/
```

### File Naming Convention
- Use lowercase with hyphens
- File name becomes the URL slug
- Example: `my-blog-post.md` → `/blog/my-blog-post`

### Frontmatter Structure

Each blog post must include frontmatter (metadata) at the top of the file:

```markdown
---
title: "Your Blog Post Title"
date: "2026-02-25"
excerpt: "A brief summary (1-2 sentences) for listings and SEO"
author: "Author Name"
category: "Category Name"
tags: ["tag1", "tag2", "tag3"]
coverImage: "/images/blog/your-image.jpg"
featured: true
published: true
---

Your markdown content goes here...
```

### Frontmatter Fields

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `title` | ✅ Yes | string | The blog post title |
| `date` | ✅ Yes | string | Publication date (YYYY-MM-DD format) |
| `excerpt` | ✅ Yes | string | Short summary for listings and meta descriptions |
| `author` | ❌ No | string | Author name (defaults to "Sipi & Noir Team") |
| `category` | ✅ Yes | string | Main category for the post |
| `tags` | ❌ No | string[] | Array of relevant tags |
| `coverImage` | ❌ No | string | Path to cover image |
| `featured` | ❌ No | boolean | Set to `true` to highlight (defaults to `false`) |
| `published` | ❌ No | boolean | Set to `false` to hide (defaults to `true`) |

## Markdown Content

Blog posts support full Markdown syntax including:

### Headings
```markdown
## Heading 2
### Heading 3
#### Heading 4
```

### Text Formatting
```markdown
**bold text**
*italic text*
~~strikethrough~~
```

### Lists
```markdown
- Unordered list item
- Another item
  - Nested item

1. Ordered list item
2. Another item
```

### Links
```markdown
[Link text](https://example.com)
```

### Images
```markdown
![Alt text](/images/blog/image.jpg)
```

### Code Blocks
````markdown
```javascript
function example() {
  console.log("Hello, World!");
}
```
````

### Blockquotes
```markdown
> This is a blockquote
```

### Tables (GitHub Flavored Markdown)
```markdown
| Column 1 | Column 2 |
|----------|----------|
| Value 1  | Value 2  |
```

## Creating a New Blog Post

1. Create a new `.md` file in `content/posts/`
2. Add frontmatter at the top
3. Write your content in Markdown
4. Save the file
5. The post will automatically appear on your blog

### Example:

**File:** `content/posts/my-new-post.md`

```markdown
---
title: "My Amazing New Post"
date: "2026-02-25"
excerpt: "This is a brief summary of what this post is about."
author: "John Doe"
category: "Style Guide"
tags: ["fashion", "tips", "style"]
published: true
---

## Introduction

Your blog post content starts here...

### Subheading

More content...
```

## Suggested Categories

- Style Guide
- Product Care
- Behind the Scenes
- Sustainability
- Fashion Trends
- Travel & Adventure
- Company News

Feel free to create new categories as needed!

## Features

### Blog Listing Page (`/blog`)
- Grid layout of all published posts
- Shows cover image, title, excerpt, date, category, and reading time
- Responsive design (1 column on mobile, 2 on tablet, 3 on desktop)
- Automatic sorting by date (newest first)

### Individual Post Page (`/blog/[slug]`)
- Full article with proper typography
- Author information
- Reading time estimate
- Tags display
- Cover image (if provided)
- Breadcrumb navigation back to blog
- SEO optimized with structured data (JSON-LD)
- Social sharing meta tags (Open Graph, Twitter)

### Automatic Features
- **Reading time calculation**: Automatically calculated and displayed
- **SEO optimization**: Automatic meta tags and structured data
- **Responsive images**: Using Next.js Image component
- **Static generation**: Pages are pre-rendered for fast performance
- **Draft posts**: Set `published: false` to hide posts while working on them

## API Functions

The blog system includes utility functions in `src/lib/blog.ts`:

```typescript
// Get all published posts
const posts = await getAllPosts();

// Get a specific post by slug
const post = await getPostBySlug('my-post-slug');

// Get featured posts
const featured = await getFeaturedPosts();

// Get posts by category
const categoryPosts = await getPostsByCategory('Style Guide');

// Get posts by tag
const tagPosts = await getPostsByTag('fashion');

// Get all categories
const categories = await getAllCategories();

// Get all tags
const tags = await getAllTags();
```

## Navigation

The blog is already integrated into your site navigation in the header. Users can access it from any page.

## Sample Blog Posts

Three sample blog posts have been created to demonstrate the format:

1. **winter-jacket-care-guide.md** - Product care guide
2. **style-your-bomber-jacket.md** - Style guide with multiple looks
3. **behind-the-scenes-design-process.md** - Company story/behind the scenes

You can edit or delete these as needed.

## Best Practices

1. **Write compelling excerpts**: They appear in listings and search results
2. **Use cover images**: Posts with images are more engaging
3. **Tag appropriately**: Helps with organization and future filtering
4. **Check spelling**: Use a spell checker before publishing
5. **Preview locally**: Run `npm run dev` to preview posts before deploying
6. **Optimize images**: Use WebP format and compress before adding
7. **Internal linking**: Link to related posts or products
8. **Consistent schedule**: Regular posting keeps readers engaged

## Image Guidelines

- **Cover images**: Recommended size 1200x630px
- **In-content images**: Any size, but optimize for web
- **Format**: WebP for best compression, fallback to JPG
- **Storage**: Place images in `public/images/blog/`
- **Alt text**: Always include descriptive alt text

## Styling

Blog posts use a custom prose styling with:
- Clean, readable typography
- Proper spacing and line height
- Styled code blocks
- Image borders and shadows
- Responsive design

The styling is defined in the blog post page component and can be customized if needed.

## Deployment

When you deploy your site:
1. All blog posts are statically generated at build time
2. New posts require a rebuild to appear
3. Consider adding a CMS if you need live updates without rebuilding

## Future Enhancements

Consider adding:
- Search functionality
- Category/tag filtering pages
- Related posts section
- Comments system
- RSS feed
- Newsletter signup
- Social sharing buttons
- Post series/collections

## Support

For questions or issues with the blogging system, refer to:
- `content/posts/README.md` - Quick reference guide
- This documentation file
- Next.js documentation for advanced features
