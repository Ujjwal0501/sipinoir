import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Return Policy",
  description: "Return policy for " + siteConfig.name,
  alternates: {
    canonical: `${siteConfig.url}/return_policy`,
  },
};

export default function ReturnPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="mb-3 text-4xl font-bold text-stone-900 dark:text-stone-50">
            Return Policy
          </h1>
          <p className="mb-8 text-sm uppercase tracking-wider text-stone-500 dark:text-stone-300">
            Easy returns for eligible items
          </p>

          <div className="space-y-6 text-stone-800 dark:text-stone-100">
            <section className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-700 dark:bg-stone-900/40">
              <h2 className="mb-2 text-2xl font-semibold text-stone-900 dark:text-stone-50">
                Our Commitment
              </h2>
              <p>
                We want you to love your purchase. If something isn&apos;t right,
                we&apos;ve got you covered.
              </p>
            </section>

            <section className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-700 dark:bg-stone-900/40">
              <h2 className="mb-2 text-2xl font-semibold text-stone-900 dark:text-stone-50">
                Return Window
              </h2>
              <p>
                You have 3 days from the date of delivery to initiate a return.
              </p>
            </section>

            <section className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-700 dark:bg-stone-900/40">
              <h2 className="mb-2 text-2xl font-semibold text-stone-900 dark:text-stone-50">
                Eligible Returns
              </h2>
              <p>
                Items can be returned if they meet ALL of the following
                conditions:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Unworn, unwashed, and in original condition</li>
                <li>All original tags and labels attached</li>
                <li>No signs of use, damage, or alterations</li>
              </ul>
            </section>

            <section className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-700 dark:bg-stone-900/40">
              <h2 className="mb-2 text-2xl font-semibold text-stone-900 dark:text-stone-50">
                How to Initiate a Return
              </h2>
              <ol className="list-decimal space-y-2 pl-5">
                <li>Log in to your account on our website</li>
                <li>Go to &quot;Order History&quot; and select the order</li>
                <li>Click &quot;Return Items&quot; and select the product(s)</li>
                <li>Choose a reason for return</li>
                <li>Submit your return request</li>
              </ol>
              <p className="mt-4 text-sm text-stone-600 dark:text-stone-300">
                You&apos;ll receive a confirmation email with return instructions
                within 24 hours.
              </p>
            </section>

            <section className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-700 dark:bg-stone-900/40">
              <h2 className="mb-2 text-2xl font-semibold text-stone-900 dark:text-stone-50">
                Return Pickup
              </h2>
              <p>
                Once approved, our courier partner will schedule a pickup from
                your address within 2-3 business days. Please ensure the
                product is securely packaged.
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
