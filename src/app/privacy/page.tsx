import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for " + siteConfig.name,
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-4xl font-bold text-stone-900 dark:text-stone-50">
            Privacy Policy
          </h1>

          <div className="space-y-6 text-stone-800 dark:text-stone-100">
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-stone-900 dark:text-stone-50">
                1. Introduction
              </h2>
              <p>
                {siteConfig.name} ("we," "us," "our," or "Company") is committed
                to protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-stone-900 dark:text-stone-50">
                2. Information We Collect
              </h2>
              <p className="mb-3">We may collect information about you in a variety of ways. The information we may collect on our Site includes:</p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>
                  <strong>Personal Data:</strong> Name, email address, phone number, shipping address, and billing address when you place an order or create an account.
                </li>
                <li>
                  <strong>Financial Information:</strong> Credit card numbers, payment information (processed securely through third-party payment processors).
                </li>
                <li>
                  <strong>Device Information:</strong> IP address, browser type, device type, and operating system.
                </li>
                <li>
                  <strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked, and referral URLs.
                </li>
                <li>
                  <strong>Cookies and Tracking:</strong> Information collected through cookies, web beacons, and similar tracking technologies.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-stone-900 dark:text-stone-50">
                3. How We Use Your Information
              </h2>
              <p className="mb-3">We use the information we collect for the following purposes:</p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>To process and fulfill your orders</li>
                <li>To send you order confirmations, shipping updates, and customer service communications</li>
                <li>To improve our website and services</li>
                <li>To personalize your experience</li>
                <li>To send promotional emails (with your consent)</li>
                <li>To analyze trends and gather demographic information</li>
                <li>To comply with legal obligations</li>
                <li>To prevent fraud and ensure website security</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-stone-900 dark:text-stone-50">
                4. Disclosure of Your Information
              </h2>
              <p className="mb-3">We may share your information in the following circumstances:</p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>
                  <strong>Service Providers:</strong> We share information with third parties who assist us in operating our website and conducting our business, such as payment processors, shipping providers, and email service providers.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our legal rights.
                </li>
                <li>
                  <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or asset sale, your information may be transferred as part of that transaction.
                </li>
                <li>
                  <strong>With Your Consent:</strong> We may share information with third parties when you explicitly consent to such sharing.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-stone-900 dark:text-stone-50">
                5. Data Security
              </h2>
              <p>
                We implement security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is completely secure. While we strive to protect your information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-stone-900 dark:text-stone-50">
                6. Cookies
              </h2>
              <p>
                Our Site uses cookies to enhance your experience. You can control cookie settings through your browser. Disabling cookies may affect the functionality of our Site.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-stone-900 dark:text-stone-50">
                7. Your Rights
              </h2>
              <p className="mb-3">Depending on your location, you may have the following rights:</p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Access to your personal data</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion of your data</li>
                <li>Portability of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
              <p className="mt-3">To exercise these rights, please contact us at the information provided below.</p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-stone-900 dark:text-stone-50">
                8. Third-Party Links
              </h2>
              <p>
                Our Site may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. Please review their privacy policies before providing any personal information.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-stone-900 dark:text-stone-50">
                9. Children's Privacy
              </h2>
              <p>
                Our Site is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will promptly delete such information.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-stone-900 dark:text-stone-50">
                10. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the "Last Updated" date below. Your continued use of our Site following the posting of revised Privacy Policy means that you accept and agree to the changes.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-stone-900 dark:text-stone-50">
                11. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-3">
                <strong>{siteConfig.name}</strong>
                <br />
                Email: privacy@{siteConfig.url.replace("https://", "").replace("http://", "")}
                <br />
              </p>
            </section>

            <p className="mt-12 border-t border-stone-200 pt-8 text-sm text-stone-600 dark:border-stone-700 dark:text-stone-200">
              Last Updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
