import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for " + siteConfig.name,
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-4xl font-bold text-amber-950 dark:text-amber-50">
            Terms of Service
          </h1>

          <div className="space-y-6 text-amber-900 dark:text-amber-100">
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-amber-950 dark:text-amber-50">
                1. Agreement to Terms
              </h2>
              <p>
                By accessing and using {siteConfig.name}'s website and services, you accept and agree to be bound by and abide by the terms and condition of this agreement. If you do not agree to abide by the above, please do not use this service. We reserve the right to review and revise these terms at any time.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-amber-950 dark:text-amber-50">
                2. Use License
              </h2>
              <p className="mb-3">
                Permission is granted to temporarily download one copy of the materials (information or software) on {siteConfig.name}'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
                <li>Accessing or using the website or its content for any purpose other than personal, non-commercial use</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-amber-950 dark:text-amber-50">
                3. Disclaimer
              </h2>
              <p>
                The materials on {siteConfig.name}'s website are provided "as is". {siteConfig.name} makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-amber-950 dark:text-amber-50">
                4. Limitations
              </h2>
              <p>
                In no event shall {siteConfig.name} or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on {siteConfig.name}'s website, even if {siteConfig.name} or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-amber-950 dark:text-amber-50">
                5. Accuracy of Materials
              </h2>
              <p>
                The materials appearing on {siteConfig.name}'s website could include technical, typographical, or photographic errors. {siteConfig.name} does not warrant that any of the materials on its website are accurate, complete, or current. {siteConfig.name} may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-amber-950 dark:text-amber-50">
                6. Materials and Links
              </h2>
              <p>
                {siteConfig.name} has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by {siteConfig.name} of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-amber-950 dark:text-amber-50">
                7. Modifications
              </h2>
              <p>
                {siteConfig.name} may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-amber-950 dark:text-amber-50">
                8. Governing Law
              </h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which {siteConfig.name} operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-amber-950 dark:text-amber-50">
                9. Product Information and Pricing
              </h2>
              <p className="mb-3">
                We strive to provide accurate product descriptions and pricing on our website. However, {siteConfig.name} does not warrant that:
              </p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Product descriptions, images, or pricing are error-free</li>
                <li>The website will be uninterrupted or error-free</li>
                <li>Any defects will be corrected</li>
              </ul>
              <p className="mt-3">
                {siteConfig.name} reserves the right to correct pricing errors and to cancel orders containing incorrect prices.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-amber-950 dark:text-amber-50">
                10. Order and Checkout
              </h2>
              <p className="mb-3">
                When you place an order, you are offering to buy our products subject to these terms of service. We reserve the right to refuse or cancel any order. All orders are subject to acceptance and confirmation.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-amber-950 dark:text-amber-50">
                11. Shipping and Delivery
              </h2>
              <p className="mb-3">
                We aim to ship orders promptly. However, {siteConfig.name} is not responsible for:
              </p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Delays caused by shipping carriers</li>
                <li>Lost or damaged packages in transit</li>
                <li>Customs or import duties for international orders</li>
              </ul>
              <p className="mt-3">
                Please contact customer service for issues with orders.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-amber-950 dark:text-amber-50">
                12. Returns and Refunds
              </h2>
              <p>
                Items may be returned within 30 days of purchase in their original condition with original tags attached. Refunds will be processed after we receive and inspect the returned items. Please refer to our returns policy for more details.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-amber-950 dark:text-amber-50">
                13. User Accounts
              </h2>
              <p>
                If you create an account on our website, you are responsible for maintaining the confidentiality of your login credentials. You agree to accept responsibility for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-amber-950 dark:text-amber-50">
                14. Prohibited Activities
              </h2>
              <p className="mb-3">
                You agree not to:
              </p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on any intellectual property rights</li>
                <li>Engage in harassment, abuse, or discrimination</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the website's operations</li>
                <li>Upload malware or harmful code</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-amber-950 dark:text-amber-50">
                15. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, {siteConfig.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the website or these terms of service.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-amber-950 dark:text-amber-50">
                16. Indemnification
              </h2>
              <p>
                You agree to indemnify and hold harmless {siteConfig.name} and its officers, directors, employees, and agents from any claim, damage, loss, or expense arising out of your use of the website or violation of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-amber-950 dark:text-amber-50">
                17. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="mt-3">
                <strong>{siteConfig.name}</strong>
                <br />
                Email: support@{siteConfig.url.replace("https://", "").replace("http://", "")}
                <br />
              </p>
            </section>

            <p className="mt-12 border-t border-amber-200 pt-8 text-sm text-amber-800 dark:border-amber-700 dark:text-amber-200">
              Last Updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
