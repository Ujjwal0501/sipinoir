# Sipinoir — Discover the World of Fine Wine

A production-grade [Next.js](https://nextjs.org) web application built with TypeScript, Tailwind CSS, and the App Router.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Package Manager**: pnpm

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with full SEO metadata
│   ├── page.tsx         # Homepage
│   ├── globals.css      # Global styles
│   ├── favicon.ico      # App favicon
│   ├── robots.ts        # /robots.txt generation
│   └── sitemap.ts       # /sitemap.xml generation
├── components/
│   ├── layout/
│   │   ├── Header.tsx   # Site header with navigation
│   │   └── Footer.tsx   # Site footer
│   └── ui/              # Reusable UI components
├── lib/
│   └── seo.ts           # SEO configuration constants
└── types/               # Shared TypeScript types

public/
├── logo.svg             # Site logo
├── favicon.ico          # Favicon
├── apple-touch-icon.png # Apple touch icon
└── images/
    └── og-image.svg     # Open Graph image
```

## SEO Features

- Full Open Graph metadata (title, description, image, type, locale)
- Twitter Card metadata (summary_large_image)
- Canonical URLs
- JSON-LD structured data (WebSite schema)
- Robots meta tags with Googlebot directives
- Auto-generated `sitemap.xml`
- Auto-generated `robots.txt`
- Favicon, Apple touch icon, and theme colour
- Title template for consistent branding across pages

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Build

```bash
pnpm build
pnpm start
```

## Deploy

Deploy easily on [Vercel](https://vercel.com/new).

