import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description: "Shipping policy for " + siteConfig.name,
  alternates: {
    canonical: `${siteConfig.url}/shipping_policy`,
  },
};

export default function ShippingPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="mb-3 text-4xl font-bold text-stone-900 dark:text-stone-50">
            Shipping Policy
          </h1>
          <p className="mb-8 text-sm uppercase tracking-wider text-stone-500 dark:text-stone-300">
            Reliable delivery across India
          </p>

          <div className="space-y-6 text-stone-800 dark:text-stone-100">
            <section className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-700 dark:bg-stone-900/40">
              <h2 className="mb-2 text-2xl font-semibold text-stone-900 dark:text-stone-50">
                Shipping Partners
              </h2>
              <p>
                We ship all orders through trusted courier partners to ensure
                safe and timely delivery across India.
              </p>
            </section>

            <section className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-700 dark:bg-stone-900/40">
              <h2 className="mb-2 text-2xl font-semibold text-stone-900 dark:text-stone-50">
                Processing Time
              </h2>
              <p>
                Orders are processed within 1-2 business days (Monday-Friday,
                excluding public holidays). You will receive a confirmation
                email with tracking details once your order ships.
              </p>
            </section>

            <section className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-700 dark:bg-stone-900/40">
              <h2 className="mb-2 text-2xl font-semibold text-stone-900 dark:text-stone-50">
                Delivery Time
              </h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>Metro cities: 3-5 business days</li>
                <li>Other locations: 5-7 business days</li>
              </ul>
              <p className="mt-4 text-sm text-stone-600 dark:text-stone-300">
                Delivery times are estimates and may vary due to courier delays,
                weather conditions, or unforeseen circumstances.
              </p>
            </section>

            <section className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-700 dark:bg-stone-900/40">
              <h2 className="mb-2 text-2xl font-semibold text-stone-900 dark:text-stone-50">
                Shipping Charges
              </h2>
              <p>Free shipping on all prepaid orders.</p>
            </section>

            <section className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-700 dark:bg-stone-900/40">
              <h2 className="mb-2 text-2xl font-semibold text-stone-900 dark:text-stone-50">
                Tracking Your Order
              </h2>
              <p>
                Once shipped, you&apos;ll receive a tracking number via email and
                SMS. You can track your order status in real-time through the
                courier partner&apos;s website or in your account under &quot;Order
                History.&quot;
              </p>
            </section>

            <section className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-700 dark:bg-stone-900/40">
              <h2 className="mb-2 text-2xl font-semibold text-stone-900 dark:text-stone-50">
                Delivery Issues
              </h2>
              <p>
                If your order is marked as delivered but you haven&apos;t received
                it:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Verify the delivery address in your order confirmation</li>
                <li>
                  Contact us within 48 hours at support@sipinoir.com with your
                  order number
                </li>
              </ul>
              <p className="mt-4 text-sm text-stone-600 dark:text-stone-300">
                We are not responsible for delays caused by incorrect addresses,
                failed delivery attempts, or packages refused at delivery.
              </p>
            </section>

            <section className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-700 dark:bg-stone-900/40">
              <h2 className="mb-2 text-2xl font-semibold text-stone-900 dark:text-stone-50">
                International Shipping
              </h2>
              <p>We currently ship within India only.</p>
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
