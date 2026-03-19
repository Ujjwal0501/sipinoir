import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund policy for " + siteConfig.name,
  alternates: {
    canonical: `${siteConfig.url}/refund_policy`,
  },
};

export default function RefundPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="mb-3 text-4xl font-bold text-stone-900 dark:text-stone-50">
            Refund Policy
          </h1>
          <p className="mb-8 text-sm uppercase tracking-wider text-stone-500 dark:text-stone-300">
            Transparent timelines and payment details
          </p>

          <div className="space-y-6 text-stone-800 dark:text-stone-100">
            <section className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-700 dark:bg-stone-900/40">
              <h2 className="mb-2 text-2xl font-semibold text-stone-900 dark:text-stone-50">
                Refund Processing
              </h2>
              <p>
                Once your return is approved and inspected, refunds are
                processed within 5-7 business days.
              </p>
            </section>

            <section className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-700 dark:bg-stone-900/40">
              <h2 className="mb-2 text-2xl font-semibold text-stone-900 dark:text-stone-50">
                Refund Method
              </h2>
              <p>Refunds are issued to the original payment method:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>UPI/Debit/Credit Card: 5-7 business days</li>
                <li>Net Banking: 5-7 business days</li>
                <li>Wallets (Paytm, PhonePe, etc.): 3-5 business days</li>
              </ul>
              <p className="mt-4 text-sm text-stone-600 dark:text-stone-300">
                Please note: Your bank or payment provider may take an
                additional 2-3 business days to reflect the refund in your
                account.
              </p>
            </section>

            <section className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-700 dark:bg-stone-900/40">
              <h2 className="mb-2 text-2xl font-semibold text-stone-900 dark:text-stone-50">
                Exchanges
              </h2>
              <p>
                We currently do not offer direct exchanges. If you need a
                different size or color:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Return the original item for a refund</li>
                <li>Place a new order for your preferred size/color</li>
              </ul>
              <p className="mt-4 text-sm text-stone-600 dark:text-stone-300">
                Note: Due to our limited drop model, we cannot guarantee the
                availability of your preferred size/color at the time of your
                new order.
              </p>
            </section>

            <section className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-700 dark:bg-stone-900/40">
              <h2 className="mb-2 text-2xl font-semibold text-stone-900 dark:text-stone-50">
                Damaged in Transit
              </h2>
              <p>
                If your package arrives damaged:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Do not accept the delivery or note the damage with the courier
                </li>
                <li>Contact us within 24 hours with photos</li>
                <li>We&apos;ll reship or refund immediately</li>
              </ul>
            </section>

            <section className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-700 dark:bg-stone-900/40">
              <h2 className="mb-2 text-2xl font-semibold text-stone-900 dark:text-stone-50">
                Refund Timeline Summary
              </h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>Return pickup: 2-3 days after approval</li>
                <li>Return transit: 3-5 days</li>
                <li>Inspection: 3-5 days after receipt</li>
                <li>Refund processing: 5-7 days after approval</li>
                <li>Bank processing: 2-3 days</li>
                <li>
                  Total estimated time: 15-20 business days from return
                  initiation to refund in account
                </li>
              </ul>
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
