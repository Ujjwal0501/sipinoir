"use client";

import type { Metadata } from "next";
import { useState, FormEvent, ChangeEvent } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/seo";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll just simulate a submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-stone-900 dark:text-stone-50">
            Contact Us
          </h1>
          <p className="mb-12 text-lg text-stone-800 dark:text-stone-100">
            We'd love to hear from you! Whether you have questions about our
            products, feedback, or just want to say hello, feel free to reach out.
          </p>

          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-lg bg-stone-50 p-8 dark:bg-stone-800/20">
                {submitted && (
                  <div className="mb-6 rounded-lg bg-green-100 p-4 text-green-800 dark:bg-green-900/30 dark:text-green-200">
                    <p className="font-semibold">Thank you for your message!</p>
                    <p className="text-sm">
                      We'll get back to you as soon as possible.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-stone-900 dark:text-stone-100"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 w-full rounded-lg border border-stone-200 bg-white px-4 py-2 text-stone-900 placeholder-stone-400 focus:border-stone-500 focus:outline-none dark:border-stone-700 dark:bg-stone-900/50 dark:text-stone-50 dark:placeholder-stone-600"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-stone-900 dark:text-stone-100"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 w-full rounded-lg border border-stone-200 bg-white px-4 py-2 text-stone-900 placeholder-stone-400 focus:border-stone-500 focus:outline-none dark:border-stone-700 dark:bg-stone-900/50 dark:text-stone-50 dark:placeholder-stone-600"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-stone-900 dark:text-stone-100"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-1 w-full rounded-lg border border-stone-200 bg-white px-4 py-2 text-stone-900 placeholder-stone-400 focus:border-stone-500 focus:outline-none dark:border-stone-700 dark:bg-stone-900/50 dark:text-stone-50 dark:placeholder-stone-600"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-stone-900 dark:text-stone-100"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="mt-1 w-full rounded-lg border border-stone-200 bg-white px-4 py-2 text-stone-900 placeholder-stone-400 focus:border-stone-500 focus:outline-none dark:border-stone-700 dark:bg-stone-900/50 dark:text-stone-50 dark:placeholder-stone-600"
                      placeholder="Tell us what's on your mind..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full rounded-lg bg-stone-800 px-6 py-3 font-medium text-stone-50 transition-colors hover:bg-stone-600 disabled:opacity-50 dark:bg-stone-100 dark:text-stone-800 dark:hover:bg-stone-200"
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="mb-3 text-lg font-semibold text-stone-900 dark:text-stone-50">
                  Email
                </h3>
                <p className="text-stone-800 dark:text-stone-100">
                  <a
                    href="mailto:support@example.com"
                    className="hover:text-stone-700 dark:hover:text-stone-200"
                  >
                    support@{siteConfig.url.replace("https://", "").replace("http://", "")}
                  </a>
                </p>
                <p className="mt-2 text-sm text-stone-600 dark:text-stone-200">
                  We'll respond within 24 hours
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold text-stone-900 dark:text-stone-50">
                  Customer Support
                </h3>
                <p className="text-stone-800 dark:text-stone-100">
                  For order inquiries and returns
                </p>
                <p className="mt-2 text-sm text-stone-600 dark:text-stone-200">
                  <a
                    href="mailto:orders@example.com"
                    className="hover:text-stone-700 dark:hover:text-stone-200"
                  >
                    orders@{siteConfig.url.replace("https://", "").replace("http://", "")}
                  </a>
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold text-stone-900 dark:text-stone-50">
                  Business Inquiries
                </h3>
                <p className="text-stone-800 dark:text-stone-100">
                  For partnerships and wholesale
                </p>
                <p className="mt-2 text-sm text-stone-600 dark:text-stone-200">
                  <a
                    href="mailto:business@example.com"
                    className="hover:text-stone-700 dark:hover:text-stone-200"
                  >
                    business@{siteConfig.url.replace("https://", "").replace("http://", "")}
                  </a>
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold text-stone-900 dark:text-stone-50">
                  Office Hours
                </h3>
                <div className="space-y-1 text-sm text-stone-800 dark:text-stone-100">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                  <p className="mt-2 text-stone-600 dark:text-stone-200">
                    (All times in EST)
                  </p>
                </div>
              </div>

              <div className="rounded-lg bg-stone-100 p-4 dark:bg-stone-800/30">
                <h3 className="mb-2 font-semibold text-stone-900 dark:text-stone-50">
                  Quick Help
                </h3>
                <ul className="space-y-2 text-sm text-stone-800 dark:text-stone-100">
                  <li>
                    <a
                      href="/blog"
                      className="hover:text-stone-700 dark:hover:text-stone-200"
                    >
                      → Read our blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy"
                      className="hover:text-stone-700 dark:hover:text-stone-200"
                    >
                      → Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms"
                      className="hover:text-stone-700 dark:hover:text-stone-200"
                    >
                      → Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
