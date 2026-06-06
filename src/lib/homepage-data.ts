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
      "Quiet outerwear built around line, proportion, and the sharper read of contrast. A new spectrum of intent.",
    copyright: "© 2026 Sipi Noir. All rights reserved.",
  },
  shopUrl: "https://shop.sipinoir.com",
  contact: "Sy No 97/98, Adur Village, Virgonagar Post Biderahalli Hobli, Bidarahalli, Bengaluru, Karnataka, 560049",
  navLinks: [
    { label: "Home", href: "https://www.sipinoir.com", external: true },
    { label: "About Us", href: "https://www.sipinoir.com/about", external: true },
    { label: "Collection", href: "#collection" },
    { label: "Contact", href: "#footer" },
    { label: "Shop", href: "https://shop.sipinoir.com", external: true },
  ],
  hero: {
    eyebrow: "Season 02",
    headline: "A New Spectrum of Intent.",
    body:
      "Vibrant energy meets quiet architecture. Sharp structure and light movement, now in living color.",
    primaryCtaLabel: "Explore the spectrum",
    primaryCtaHref: "#collection",
    secondaryCtaLabel: "See the details",
    secondaryCtaHref: "#details",
    media: {
      videoSrc: "/media/jacket-hero.mp4",
      posterSrc: "/images/jacket-hero-poster.jpg",
      alt: "Front view of the Sipi Noir hooded jacket with angular black paneling.",
      fit: "cover",
    },
  },
  manifesto: {
    label: "Manifesto",
    headline: "Built to read clean in every shade.",
    body:
      "Designed around line, proportion, and ease. The result is outerwear that holds a sharper silhouette without feeling rigid, now amplified by uncompromising color.",
    specs: ["Light shell", "Angular panel cut", "City-ready layering"],
  },
  reveal: {
    label: "Closer look",
    heading: "The line is absolute. The contrast is uncompromising.",
    body:
      "The front stays precise, the shoulders stay easy, and the stark diagonal cut commands the frame.",
    media: {
      videoSrc: "/media/jacket-stripe-pan.mp4",
      imageSrc: "/images/jacket-white-stripe.png",
      posterSrc: "/images/jacket-white-stripe.png",
      alt: "White jacket with bold black diagonal stripe.",
      fit: "cover",
    },
    callouts: [
      {
        label: "Stark Diagonal Cut",
        body: "A dominant high-contrast panel that redefines the front profile.",
      },
      {
        label: "Lightweight Technical Shell",
        body: "A lighter feel that still keeps the profile impossibly clean.",
      },
      {
        label: "Engineered Movement",
        body: "Built to layer and move without visual stiffness or compromise.",
      },
    ],
  },
  detailBand: {
    overline: "Signature",
    headline: "Color as structure.",
    body:
      "Vivid hues give the profile its new identity while keeping the rest of the garment clean and restrained.",
    labels: ["Vibrant Hues", "Sharp Front Profile", "Soft Technical Texture"],
    media: {
      imageSrc: "/images/jacket-orange-lifestyle.png",
      posterSrc: "/images/jacket-orange-lifestyle.png",
      alt: "Close crop of the vibrant orange jacket.",
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
    headline: "Made to live beyond the studio.",
    body:
      "Quiet enough for everyday wear. Bright enough to change the whole frame.",
    media: {
      imageSrc: "/images/jacket-orange-city.png",
      posterSrc: "/images/jacket-orange-city.png",
      alt: "Dynamic lifestyle overview of the product in a city setting.",
      fit: "cover",
    },
  },
  collection: {
    label: "Collection",
    heading: "A new spectrum, built around contrast and restraint.",
    body:
      "The homepage closes on product, but the presentation stays editorial and light.",
    products: [
      {
        badge: "New Arrival",
        label: "Black & Orange",
        title: "Bengaluru Windcheater Jacket",
        description:
          "Vibrant energy and lightweight protection for daily wear.",
        href: "https://shop.sipinoir.com/products/bengaluru-black-white-windcheater-jacket",
        media: {
          imageSrc: "/images/jacket-orange-ad.png",
          posterSrc: "/images/jacket-orange-ad.png",
          alt: "Bengaluru Windcheater Jacket shown in motion.",
          fit: "contain",
        },
      },
      {
        badge: "New Arrival",
        label: "Electric Blue & Grey",
        title: "Mumbai Training Jacket",
        description: "A sharper training layer designed for movement.",
        href: "https://shop.sipinoir.com/products/mumbai-training-jacket",
        media: {
          imageSrc: "/images/jacket-grey-blue.png",
          posterSrc: "/images/jacket-grey-blue.png",
          alt: "Mumbai Training Jacket.",
          fit: "contain",
        },
      },
      {
        badge: "Core",
        label: "Teal Green",
        title: "Delhi Piping Jacket",
        description: "Subtle piping accents on a clean foundation.",
        href: "https://shop.sipinoir.com",
        media: {
          imageSrc: "/images/jacket-black-orange-piping.png",
          posterSrc: "/images/jacket-black-orange-piping.png",
          alt: "Delhi Piping Jacket in Teal Green.",
          fit: "contain",
        },
      },
      {
        badge: "Core",
        label: "Cream",
        title: "Delhi Piping Jacket",
        description: "A sharper training layer defined by crisp piping.",
        href: "https://shop.sipinoir.com",
        media: {
          imageSrc: "/images/jacket-white-black-piping.png",
          posterSrc: "/images/jacket-white-black-piping.png",
          alt: "Delhi Piping Jacket in Cream.",
          fit: "contain",
        },
      },
    ],
  },
  finalCta: {
    headline: "A jacket should change the whole frame.",
    body: "Explore the full spectrum and keep the rest of the look simple.",
    primaryCtaLabel: "Enter the collection",
    primaryCtaHref: "https://shop.sipinoir.com",
    secondaryLabel: "Back to top",
    secondaryHref: "#home",
  },
  footer: {
    links: [
      { label: "Privacy Policy", href: "https://sipinoir.com/privacy", external: true },
      { label: "Terms of Service", href: "https://sipinoir.com/terms", external: true },
      { label: "Refund Policy", href: "https://sipinoir.com/refund_policy", external: true },
      { label: "Shipping Policy", href: "https://sipinoir.com/shipping_policy", external: true },
      { label: "Return Policy", href: "https://sipinoir.com/return_policy", external: true },
    ],
    contactLabel: "Support",
    socialLabel: "@sipinoir",
  },
};
