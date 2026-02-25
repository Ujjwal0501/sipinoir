import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about " + siteConfig.name,
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-4xl font-bold text-amber-950 dark:text-amber-50">
            About {siteConfig.name}
          </h1>

          <div className="space-y-8 text-amber-900 dark:text-amber-100">
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-amber-950 dark:text-amber-50">
                Our Story
              </h2>
              <p>
                {siteConfig.name} was founded on the belief that great fashion should be
                accessible to everyone. What started as a small passion project has grown into a
                thriving community of jacket enthusiasts. We're dedicated to providing
                high-quality, stylish jackets that make you feel confident and comfortable.
              </p>
              <p className="mt-4">
                Our journey began with a simple question: "Why is it so hard to find the perfect
                jacket?" We noticed that most people either settled for uncomfortable fits or
                paid exorbitant prices for basic style. We decided to change that.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-amber-950 dark:text-amber-50">
                Our Mission
              </h2>
              <p>
                To empower individuals to express their unique style through high-quality,
                well-fitting jackets that combine comfort, durability, and contemporary design.
                We believe that everyone deserves to feel great in what they wear, regardless of
                their body type or personal style preferences.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-amber-950 dark:text-amber-50">
                Our Values
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-amber-950 dark:text-amber-50">
                    Quality
                  </h3>
                  <p>
                    We never compromise on quality. Every jacket is carefully crafted using
                    premium materials and rigorous quality control processes.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-amber-950 dark:text-amber-50">
                    Inclusivity
                  </h3>
                  <p>
                    Fashion should be for everyone. We offer a wide range of sizes, styles,
                    and fits to ensure everyone can find their perfect jacket.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-amber-950 dark:text-amber-50">
                    Sustainability
                  </h3>
                  <p>
                    We're committed to making environmentally responsible choices in our
                    sourcing, manufacturing, and packaging.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-amber-950 dark:text-amber-50">
                    Customer Focus
                  </h3>
                  <p>
                    Our customers are at the heart of everything we do. We listen to feedback
                    and continuously improve our products and services.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-amber-950 dark:text-amber-50">
                    Innovation
                  </h3>
                  <p>
                    We stay ahead of fashion trends while maintaining timeless style. Our
                    designs balance contemporary aesthetics with classic appeal.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-amber-950 dark:text-amber-50">
                Why Choose Us
              </h2>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-amber-950 dark:text-amber-50">✓</span>
                  <span>Premium quality materials and expert craftsmanship</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-950 dark:text-amber-50">✓</span>
                  <span>Inclusive sizing for all body types</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-950 dark:text-amber-50">✓</span>
                  <span>Stylish designs that work for any occasion</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-950 dark:text-amber-50">✓</span>
                  <span>Fast and reliable shipping worldwide</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-950 dark:text-amber-50">✓</span>
                  <span>Dedicated customer service team</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-950 dark:text-amber-50">✓</span>
                  <span>30-day returns and satisfaction guarantee</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-950 dark:text-amber-50">✓</span>
                  <span>Regular style guides and fashion tips on our blog</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-amber-950 dark:text-amber-50">
                Our Collections
              </h2>
              <p className="mb-4">
                We offer carefully curated collections to suit every style and season:
              </p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>
                  <strong>Classic Collection:</strong> Timeless styles that never go out of fashion
                </li>
                <li>
                  <strong>Modern Collection:</strong> Contemporary designs for the fashion-forward
                </li>
                <li>
                  <strong>Seasonal Collection:</strong> Limited edition pieces released each season
                </li>
                <li>
                  <strong>Premium Collection:</strong> Luxury jackets made from the finest materials
                </li>
                <li>
                  <strong>Sustainable Collection:</strong> Eco-friendly options that look good and feel good
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-amber-950 dark:text-amber-50">
                Our Commitment
              </h2>
              <p>
                We're not just selling jackets—we're building a community of style-conscious
                individuals who believe that fashion should be accessible, sustainable, and
                enjoyable. We're committed to continuous improvement and innovation to bring you
                the best products and experience possible.
              </p>
              <p className="mt-4">
                Thank you for choosing {siteConfig.name}. We're excited to be part of your style
                journey!
              </p>
            </section>

            <section className="mt-8 rounded-lg bg-amber-100 p-6 dark:bg-amber-900/30">
              <h2 className="mb-4 text-2xl font-semibold text-amber-950 dark:text-amber-50">
                Get in Touch
              </h2>
              <p>
                Have questions about our jackets or the {siteConfig.name} brand? We'd love to hear from you!
              </p>
              <p className="mt-3">
                <a
                  href="/contact"
                  className="font-semibold text-amber-950 hover:text-amber-700 dark:text-amber-100 dark:hover:text-amber-200"
                >
                  Contact us today →
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
