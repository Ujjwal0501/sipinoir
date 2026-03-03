"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    image: "/images/jacket-1.webp",
    alt: "Training Jacket",
    title: "Training Jacket",
    description: "Engineered for movement and everyday performance.",
    buyLink: "https://shop.sipinoir.com/collections/latest-launch",
  },
  {
    image: "/images/jacket-2.webp",
    alt: "Windcheater",
    title: "Windcheater",
    description: "Lightweight protection built for urban style.",
    buyLink: "https://shop.sipinoir.com/collections/latest-launch",
  },
];

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="grid grid-cols-1 sm:grid-cols-2"
    >
      <h1 id="hero-heading" className="sr-only">
        Premium Jackets for Men
      </h1>
      {products.map((product) => (
        <div
          key={product.title}
          className="relative overflow-hidden h-[500px] sm:h-[700px] lg:h-[800px] group"
        >
          <Image
            src={product.image}
            alt={product.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h2 className="text-3xl font-bold tracking-tight mb-2">
              {product.title}
            </h2>
            <p className="text-stone-200 mb-6 text-sm leading-relaxed">
              {product.description}
            </p>
            <Link
              href={product.buyLink}
              className="inline-block rounded-full bg-stone-100 px-8 py-3 text-sm font-semibold text-stone-900 shadow-lg transition-all hover:bg-white hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-100"
            >
              Buy
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
