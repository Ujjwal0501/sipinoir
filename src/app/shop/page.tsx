"use client";

import { useEffect } from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

// Note: Metadata export won't work in a client component
// If you need metadata, use generateMetadata in a server component

export default function ShopPage() {
  useEffect(() => {
    const shopUrl = `https://shop.${new URL(siteConfig.url).hostname}`;
    const timer = setTimeout(() => {
      window.location.href = shopUrl;
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const shopDomain = `https://shop.${new URL(siteConfig.url).hostname}`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-md w-full px-6 py-12 text-center">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
            <svg
              className="w-8 h-8 text-blue-600 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Redirecting to Shop
          </h1>
          <p className="text-gray-600 mb-4">
            You&apos;re being redirected to our shop. This should only take a
            moment.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-sm text-gray-500">
            If you&apos;re not redirected automatically, you can also{" "}
            <a
              href={shopDomain}
              className="font-semibold text-blue-600 hover:text-blue-700 underline"
            >
              click here to visit the shop
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
