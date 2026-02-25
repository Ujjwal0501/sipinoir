"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/seo";

export default function HeroSection() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = ["/images/jacket-1.webp", "/images/jacket-2.webp"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden h-[600px] sm:h-[700px] lg:h-[800px]"
    >
      {/* Background Images with Transition */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Jacket Collection ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
      </div>

      {/* Content positioned at bottom center */}
      <div className="relative h-full flex flex-col items-center justify-end pb-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl">
          {/* Logo and Heading */}
          <h1
            id="hero-heading"
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-4"
          >
            Elevate Your Style
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-stone-200 mb-8">
            {siteConfig.tagline}
          </p>

          {/* CTA Button */}
          <Link
            href="/shop"
            className="inline-block rounded-full bg-stone-100 px-8 py-3 text-sm font-semibold text-stone-900 shadow-lg transition-all hover:bg-white hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-100"
          >
            Buy
          </Link>

          {/* Image Indicators */}
          <div className="flex gap-2 justify-center mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeImageIndex
                    ? "w-6 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
