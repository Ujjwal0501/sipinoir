import type { Metadata } from "next";

import { PageExperience } from "@/components/home/PageExperience";
import { homepageData } from "@/lib/homepage-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sipinoir.com"),
  title: "Sipi Noir | A New Spectrum of Intent",
  description:
    "A new Sipi Noir outerwear homepage where vibrant energy meets quiet architecture, sharp structure, and light movement.",
  openGraph: {
    title: "Sipi Noir | A New Spectrum of Intent",
    description:
      "Vibrant energy meets quiet architecture. Sharp structure and light movement, now in living color.",
    type: "website",
    url: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: homepageData.brand.name,
      url: "https://www.sipinoir.com",
      description: homepageData.brand.statement,
    },
    {
      "@type": "WebSite",
      name: homepageData.brand.name,
      url: "https://www.sipinoir.com",
      description:
        "A premium editorial homepage for Sipi Noir outerwear in a new spectrum of intent.",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageExperience data={homepageData} />
    </>
  );
}
