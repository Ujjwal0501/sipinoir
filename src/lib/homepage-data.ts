export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type MediaAsset = {
  imageSrc?: string;
  videoSrc?: string;
  posterSrc?: string;
  alt: string;
  fit?: "cover" | "contain";
};

export type HeroContent = {
  eyebrow: string;
  headline: string;
  body: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  media: MediaAsset;
};

export type ManifestoContent = {
  label: string;
  headline: string;
  body: string;
  specs: string[];
};

export type Callout = {
  label: string;
  body: string;
};

export type RevealContent = {
  label: string;
  heading: string;
  body: string;
  media: MediaAsset;
  callouts: Callout[];
};

export type DetailBandContent = {
  overline: string;
  headline: string;
  body: string;
  labels: string[];
  media: MediaAsset;
};

export type FeatureCard = {
  title: string;
  copy: string;
};

export type LifestyleContent = {
  overline: string;
  headline: string;
  body: string;
  media: MediaAsset;
};

export type ProductCard = {
  badge: string;
  label: string;
  title: string;
  description: string;
  href: string;
  media: MediaAsset;
};

export type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type HomepageData = {
  brand: {
    name: string;
    statement: string;
    copyright: string;
  };
  shopUrl: string;
  contact: string;
  navLinks: NavLink[];
  hero: HeroContent;
  manifesto: ManifestoContent;
  reveal: RevealContent;
  detailBand: DetailBandContent;
  performance: {
    overline: string;
    heading: string;
    body: string;
    cards: FeatureCard[];
  };
  lifestyle: LifestyleContent;
  collection: {
    label: string;
    heading: string;
    body: string;
    products: ProductCard[];
  };
  finalCta: {
    headline: string;
    body: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
  footer: {
    links: FooterLink[];
    contactLabel: string;
    socialLabel: string;
  };
};

export const homepageData: HomepageData = {
  brand: {
    name: "SIPI NOIR",
    statement:
      "Quiet outerwear built around line, proportion, and the sharper read of contrast.",
    copyright: "© 2026 Sipi Noir. All rights reserved.",
  },
  shopUrl: "https://shop.sipinoir.com",
  contact: "Studio contact coming soon",
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Details", href: "#details" },
    { label: "Collection", href: "#collection" },
    { label: "Contact", href: "#footer" },
    { label: "Shop", href: "https://shop.sipinoir.com", external: true },
  ],
  hero: {
    eyebrow: "Precision outerwear",
    headline: "Outerwear with intent.",
    body:
      "Sharp structure, light movement, and a quieter kind of presence.",
    primaryCtaLabel: "Shop the collection",
    primaryCtaHref: "https://shop.sipinoir.com",
    secondaryCtaLabel: "See the details",
    secondaryCtaHref: "#details",
    media: {
      videoSrc: "/media/jacket-hero.mp4",
      imageSrc: "/images/jacket-hero-poster.jpg",
      posterSrc: "/images/jacket-hero-poster.jpg",
      alt: "Front view of the Sipi Noir hooded jacket with angular black paneling.",
      fit: "cover",
    },
  },
  manifesto: {
    label: "Manifesto",
    headline: "Built to read clean from every angle.",
    body:
      "Designed around line, proportion, and ease. The result is outerwear that holds a sharper silhouette without feeling rigid.",
    specs: ["Light shell", "Angular panel cut", "City-ready layering"],
  },
  reveal: {
    label: "Closer look",
    heading: "The jacket holds its line without forcing the moment.",
    body:
      "The front stays precise, the shoulders stay easy, and the contrast lands exactly where it needs to.",
    media: {
      videoSrc: "/media/Cinematic_product_transition.mp4",
      imageSrc: "/images/jacket-front.png",
      posterSrc: "/images/jacket-front.png",
      alt: "Cinematic product transition sequence highlighting details.",
      fit: "cover",
    },
    callouts: [
      {
        label: "Signature angular panels",
        body: "A strong diagonal read placed only on the left front.",
      },
      {
        label: "Lightweight technical shell",
        body: "A lighter feel that still keeps the profile clean.",
      },
      {
        label: "Easy movement through the shoulders",
        body: "Built to layer and move without visual stiffness.",
      },
    ],
  },
  detailBand: {
    overline: "Signature",
    headline: "The line is the signature.",
    body:
      "High-contrast paneling gives the front profile its identity while keeping the rest of the garment clean and restrained.",
    labels: ["Clean contrast", "Sharp front profile", "Soft technical texture"],
    media: {
      videoSrc: "/media/Detail_Band_Video.mp4",
      imageSrc: "/images/jacket-detail.jpg",
      posterSrc: "/images/jacket-detail.jpg",
      alt: "Close crop of the jacket's black panel and front zip area with transition.",
      fit: "cover",
    },
  },
  performance: {
    overline: "Designed for repeat wear",
    heading: "Usefulness, without losing the silhouette.",
    body:
      "The page stays editorial, but the jacket still reads as a daily layer rather than a one-look piece.",
    cards: [
      {
        title: "Moves lightly",
        copy: "Built for daily motion without visual bulk.",
      },
      {
        title: "Layers cleanly",
        copy: "Easy to throw over basics without losing shape.",
      },
      {
        title: "Holds shape",
        copy: "A sharper front read, even in casual use.",
      },
    ],
  },
  lifestyle: {
    overline: "In context",
    headline: "Made to live beyond the product shot.",
    body:
      "Quiet enough for everyday wear. Sharp enough to change the whole frame.",
    media: {
      videoSrc: "/media/Lifestyle_Video.mp4",
      imageSrc: "/images/jacket-room.png",
      posterSrc: "/images/jacket-room.png",
      alt: "Dynamic lifestyle overview of the product in setting.",
      fit: "cover",
    },
  },
  collection: {
    label: "Collection",
    heading: "A quieter collection, built around contrast and restraint.",
    body:
      "The homepage closes on product, but the presentation stays editorial and light.",
    products: [
      {
        badge: "Latest launch",
        label: "Rs. 1,599",
        title: "Bengaluru Black & White Windcheater Jacket",
        description:
          "Clean contrast and lightweight protection for daily wear.",
        href: "https://shop.sipinoir.com/products/bengaluru-black-white-windcheater-jacket?variant=52003740844325",
        media: {
          videoSrc: "/media/bengaluru-black.mp4",
          imageSrc: "/images/bengaluru-black-poster.jpg",
          posterSrc: "/images/bengaluru-black-poster.jpg",
          alt: "Bengaluru Black and White Windcheater Jacket shown in motion.",
          fit: "contain",
        },
      },
      {
        badge: "Latest launch",
        label: "Rs. 1,650",
        title: "Mumbai Electric Blue Training Jacket",
        description: "A sharper training layer designed for movement.",
        href: "https://shop.sipinoir.com/products/mumbai-training-jacket?variant=52024571363621",
        media: {
          videoSrc: "/media/mumbai-electric.mp4",
          imageSrc: "/images/mumbai-electric-poster.jpg",
          posterSrc: "/images/mumbai-electric-poster.jpg",
          alt: "Mumbai Electric Blue Training Jacket shown in motion.",
          fit: "contain",
        },
      },
    ],
  },
  finalCta: {
    headline: "A jacket should change the whole frame.",
    body: "Explore the collection and keep the rest of the look simple.",
    primaryCtaLabel: "Enter the collection",
    primaryCtaHref: "https://shop.sipinoir.com",
    secondaryLabel: "Back to top",
    secondaryHref: "#home",
  },
  footer: {
    links: [
      { label: "Home", href: "#home" },
      { label: "Details", href: "#details" },
      { label: "Collection", href: "#collection" },
      { label: "Shop", href: "https://shop.sipinoir.com", external: true },
    ],
    contactLabel: "Studio contact coming soon",
    socialLabel: "@sipinoir",
  },
};
