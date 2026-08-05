"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";

const TermsOfServicePage: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#0D0D0C] text-[#F3E1B6] selection:bg-[#D4AF37] selection:text-black py-20 md:py-30 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-12 mt-15">
        <div className="text-center space-y-4 border-b border-[#D4AF37]/20 pb-10">
          {/* <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-[#D4AF37]/40 px-4 py-1 rounded-full bg-[#D4AF37]/5 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              Legal & Guidelines
            </span>
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl md:text-5xl font-serif font-bold text-[#F3E1B6] tracking-wide"
          >
            Terms of Service
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xs md:text-sm text-gray-400 font-serif italic max-w-lg mx-auto"
          >
            Welcome to Bannira — Culture in Colour, Style in Spirit.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-[#141412] border border-[#D4AF37]/20 rounded-2xl p-6 md:p-10 space-y-10 shadow-2xl text-xs md:text-sm text-gray-300 leading-relaxed font-light"
        >
          <div className="space-y-3 bg-[#1A1A18] p-5 rounded-xl border-l-2 border-[#D4AF37]">
            <p className="text-gray-200">
              Thank you for visiting our website. By accessing or using{" "}
              <Link
                href="https://www.bannira.com"
                className="text-[#D4AF37] underline hover:text-[#F3E1B6] transition-colors font-medium"
              >
                www.bannira.com
              </Link>
              , you agree to comply with and be bound by the following Terms of
              Service. Please read them carefully. If you do not agree with
              these terms, please refrain from using our website.
            </p>
          </div>

          <section className="space-y-2">
            <h2 className="text-base md:text-lg font-serif font-semibold text-[#D4AF37] uppercase tracking-wider flex items-center gap-2">
              <span className="text-[#D4AF37]/50 text-xs">01.</span> General Information
            </h2>
            <p>
              These Terms of Service govern your use of the Bannira website and
              all products and services offered through it. By accessing or
              using this website, you confirm that you are at least 18 years of
              age or are using the website under the supervision of a parent or
              legal guardian.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base md:text-lg font-serif font-semibold text-[#D4AF37] uppercase tracking-wider flex items-center gap-2">
              <span className="text-[#D4AF37]/50 text-xs">02.</span> Account Registration
            </h2>
            <p>
              To place an order, you may be required to create an account. You
              agree to provide accurate, complete, and current information
              during registration and to keep your account credentials secure.
              You are responsible for all activities that occur under your
              account.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base md:text-lg font-serif font-semibold text-[#D4AF37] uppercase tracking-wider flex items-center gap-2">
              <span className="text-[#D4AF37]/50 text-xs">03.</span> Products & Services
            </h2>
            <p>
              At Bannira, we take pride in creating thoughtfully designed apparel
              inspired by India's rich textile heritage.
            </p>
            <p>
              Many of our products feature traditional handcrafted techniques
              such as Hand Block Printing, Bandhani, and other artisan-led
              processes. Due to the handmade nature of these products, slight
              variations in colour, print placement, texture, embroidery, or
              pattern may naturally occur. These variations are not defects but
              are a hallmark of authentic craftsmanship, making every Bannira
              creation unique.
            </p>
            <p>
              While we make every effort to accurately display our products,
              colours may appear slightly different depending on your device's
              screen settings and lighting conditions.
            </p>
            <p className="text-gray-400 italic text-xs">
              * Product availability is subject to fabric and material
              availability, and prices may change without prior notice.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base md:text-lg font-serif font-semibold text-[#D4AF37] uppercase tracking-wider flex items-center gap-2">
              <span className="text-[#D4AF37]/50 text-xs">04.</span> Orders & Acceptance
            </h2>
            <p>
              Once an order is placed, you will receive an order confirmation
              via email.
            </p>
            <p>
              Bannira reserves the right to refuse or cancel any order due to
              product availability, pricing errors, suspected fraudulent
              activity, or any other legitimate reason. In such cases, any
              amount paid will be refunded through the original payment method.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base md:text-lg font-serif font-semibold text-[#D4AF37] uppercase tracking-wider flex items-center gap-2">
              <span className="text-[#D4AF37]/50 text-xs">05.</span> Returns & Exchanges
            </h2>
            <p>
              Please refer to our{" "}
              <Link
                href="/return-policy"
                className="text-[#D4AF37] underline hover:text-[#F3E1B6] transition-colors"
              >
                Return & Refund Policy
              </Link>{" "}
              for complete details regarding returns, exchanges, cancellations,
              and refunds. By placing an order, you acknowledge and agree to
              the terms outlined in that policy.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base md:text-lg font-serif font-semibold text-[#D4AF37] uppercase tracking-wider flex items-center gap-2">
              <span className="text-[#D4AF37]/50 text-xs">06.</span> Payment & Billing
            </h2>
            <p>
              All payments must be completed at the time of purchase using the
              payment methods available on our website. If payment
              authorization fails or cannot be verified, Bannira reserves the
              right to cancel the order.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base md:text-lg font-serif font-semibold text-[#D4AF37] uppercase tracking-wider flex items-center gap-2">
              <span className="text-[#D4AF37]/50 text-xs">07.</span> Shipping & Delivery
            </h2>
            <p>
              Orders will be shipped to the delivery address provided during
              checkout.
            </p>
            <p>
              While we strive to ensure timely delivery through our trusted
              logistics partners, delivery timelines may occasionally be
              affected by factors beyond our control. Bannira shall not be held
              responsible for delays, damages, or losses caused by third-party
              courier services after the order has been dispatched.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base md:text-lg font-serif font-semibold text-[#D4AF37] uppercase tracking-wider flex items-center gap-2">
              <span className="text-[#D4AF37]/50 text-xs">08.</span> Intellectual Property
            </h2>
            <p>
              All content available on this website—including but not limited
              to logos, designs, product images, photographs, graphics, text,
              videos, website design, and other creative materials—is the
              exclusive property of Bannira and is protected under applicable
              copyright, trademark, and intellectual property laws.
            </p>
            <p>
              No content may be copied, reproduced, distributed, modified,
              republished, or used without prior written permission from
              Bannira.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base md:text-lg font-serif font-semibold text-[#D4AF37] uppercase tracking-wider flex items-center gap-2">
              <span className="text-[#D4AF37]/50 text-xs">09.</span> Acceptable Use
            </h2>
            <p>By using this website, you agree that you will not:</p>
            <ul className="list-disc list-inside space-y-1.5 text-gray-400 pl-2">
              <li>Violate any applicable laws or regulations.</li>
              <li>Use the website for fraudulent or unlawful purposes.</li>
              <li>
                Attempt to gain unauthorized access to the website or its
                systems.
              </li>
              <li>
                Disrupt or interfere with the operation or security of the
                website.
              </li>
              <li>
                Copy, scrape, reproduce, or misuse any content without written
                permission.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base md:text-lg font-serif font-semibold text-[#D4AF37] uppercase tracking-wider flex items-center gap-2">
              <span className="text-[#D4AF37]/50 text-xs">10.</span> Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, Bannira shall
              not be liable for any indirect, incidental, consequential,
              special, or punitive damages arising from your use of this website
              or the purchase and use of our products.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base md:text-lg font-serif font-semibold text-[#D4AF37] uppercase tracking-wider flex items-center gap-2">
              <span className="text-[#D4AF37]/50 text-xs">11.</span> Privacy
            </h2>
            <p>
              Your use of this website is also governed by our{" "}
              <Link
                href="/privacy-policy"
                className="text-[#D4AF37] underline hover:text-[#F3E1B6] transition-colors"
              >
                Privacy Policy
              </Link>
              , which explains how we collect, use, and protect your personal
              information.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base md:text-lg font-serif font-semibold text-[#D4AF37] uppercase tracking-wider flex items-center gap-2">
              <span className="text-[#D4AF37]/50 text-xs">12.</span> Changes to These Terms
            </h2>
            <p>
              Bannira reserves the right to update or modify these Terms of
              Service at any time without prior notice.
            </p>
            <p>
              Any changes will become effective immediately upon being published
              on this website. Your continued use of the website constitutes your
              acceptance of the revised Terms.
            </p>
          </section>

          <div className="mt-8 pt-8 border-t border-[#D4AF37]/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-[#1A1A18] p-6 rounded-xl">
            <div className="space-y-1">
              <h3 className="font-serif font-semibold text-[#F3E1B6] text-base">
                Have questions about these terms?
              </h3>
              <p className="text-gray-400 text-xs">
                Reach out to us directly for any legal or policy inquiries.
              </p>
            </div>
            <a
              href="mailto:thebannira@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D4AF37]/10 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-semibold  text-xs tracking-wider rounded transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              thebannira@gmail.com
            </a>
          </div>
        </motion.div>

        <div className="text-center pt-4 space-y-1">
          <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
            Bannira
          </p>
          <p className="text-xs text-gray-500 font-serif italic">
            Culture in Colour, Style in Spirit.
          </p>
        </div>
      </div>
    </main>
  );
};

export default TermsOfServicePage;