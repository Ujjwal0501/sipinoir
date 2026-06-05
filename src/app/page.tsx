import type { Metadata } from "next";

import { PageExperience } from "@/components/home/PageExperience";
import { homepageData } from "@/lib/homepage-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sipinoir.com"),
  title: "Sipi Noir | Premium Outerwear With Intent",
  description:
    "A premium outerwear homepage for Sipi Noir focused on contrast, silhouette, and quiet movement.",
  openGraph: {
    title: "Sipi Noir | Premium Outerwear With Intent",
    description:
      "Outerwear with intent. Sharp structure, light movement, and a quieter kind of presence.",
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
        "A premium editorial homepage for Sipi Noir outerwear.",
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
