"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Mail } from "lucide-react";

const PrivacyPolicyPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#0D0D0C] text-[#F3E1B6] selection:bg-[#D4AF37] selection:text-black py-12 md:py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-12 mt-15">
        {/* Header Section */}
        <div className="text-center space-y-4 border-b border-[#D4AF37]/20 pb-10">
          {/* <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-[#D4AF37]/40 px-4 py-1 rounded-full bg-[#D4AF37]/5 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              Legal & Data Protection
            </span>
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl md:text-5xl font-serif font-bold text-[#F3E1B6] tracking-wide"
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xs text-gray-400 font-serif italic"
          >
            Last Updated: August 2, 2026
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-[#141412] border border-[#D4AF37]/20 rounded-2xl p-6 md:p-10 space-y-10 shadow-2xl text-xs md:text-sm text-gray-300 leading-relaxed font-light"
        >
          <div className="space-y-3 bg-[#1A1A18] p-5 rounded-xl border-l-2 border-[#D4AF37]">
            <p className="text-gray-200">
              At Bannira, we value your trust and are committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and safeguard your personal information when you visit or make a purchase from our website.
            </p>
            <p className="text-gray-200">
              By accessing or using our website, you agree to the practices described in this Privacy Policy.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-base md:text-lg font-serif font-semibold text-[#D4AF37] uppercase tracking-wider">
              Information We Collect
            </h2>
            <p>
              When you visit or make a purchase from Bannira, we may collect the following information:
            </p>

            <div className="space-y-3 pl-2">
              <h3 className="text-xs md:text-sm font-semibold text-[#F3E1B6] uppercase tracking-wide">
                Personal Information
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-400 pl-2">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Mobile Number</li>
                <li>Shipping Address</li>
                <li>Billing Address</li>
              </ul>
            </div>

            <div className="space-y-3 pl-2">
              <h3 className="text-xs md:text-sm font-semibold text-[#F3E1B6] uppercase tracking-wide">
                Order Information
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-400 pl-2">
                <li>Products Purchased</li>
                <li>Order History</li>
                <li>Payment Status</li>
                <li>Delivery Details</li>
              </ul>
            </div>

            <div className="space-y-3 pl-2">
              <h3 className="text-xs md:text-sm font-semibold text-[#F3E1B6] uppercase tracking-wide">
                Device & Website Information
              </h3>
              <p>
                When you browse our website, we may automatically collect certain information, including:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-400 pl-2">
                <li>IP Address</li>
                <li>Browser Type</li>
                <li>Device Information</li>
                <li>Operating System</li>
                <li>Website Usage Data</li>
                <li>Cookies and Analytics Information</li>
              </ul>
            </div>

            <p className="text-gray-400 italic text-xs pt-1">
              This information helps us improve our website, personalize your shopping experience, and enhance our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base md:text-lg font-serif font-semibold text-[#D4AF37] uppercase tracking-wider">
              How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-1.5 text-gray-400 pl-2">
              <li>Process and fulfill your orders.</li>
              <li>Deliver products to your preferred address.</li>
              <li>Send order confirmations, shipping updates, and delivery notifications.</li>
              <li>Respond to customer support queries.</li>
              <li>Improve our products, website, and customer experience.</li>
              <li>Prevent fraudulent transactions and maintain website security.</li>
              <li>Share updates about new collections, promotions, and exclusive offers (only if you have chosen to receive such communications).</li>
            </ul>
            <p className="text-gray-400 italic text-xs">
              We collect only the information necessary to provide you with a secure and seamless shopping experience.
            </p>
          </section>

          <section className="space-y-3 bg-[#1A1A18]/60 p-6 rounded-xl border border-[#D4AF37]/10">
            <h2 className="text-base md:text-lg font-serif font-semibold text-[#D4AF37] uppercase tracking-wider">
              Payment Security
            </h2>
            <p>Your payment security is extremely important to us.</p>
            <p>
              All payment transactions on Bannira are encrypted and securely processed through trusted PCI-DSS compliant payment gateway providers. These providers follow industry-standard security practices to ensure your payment information remains protected.
            </p>
            <p className="text-[#F3E1B6] font-medium">
              Bannira does not store your debit card, credit card, UPI PIN, CVV, net banking credentials, or any other sensitive payment information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base md:text-lg font-serif font-semibold text-[#D4AF37] uppercase tracking-wider">
              Sharing of Information
            </h2>
            <p>Your privacy matters to us.</p>
            <p>We do not sell, rent, or trade your personal information to third parties.</p>
            <p>
              Your information may only be shared with trusted service providers strictly for the purpose of operating our business and fulfilling your orders, including:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-gray-400 pl-2">
              <li>Courier & Logistics Partners</li>
              <li>Payment Gateway Providers</li>
              <li>Website Hosting Providers</li>
              <li>Analytics & Technology Service Providers</li>
            </ul>
            <p className="text-gray-400 italic text-xs">
              These partners are required to keep your information secure and use it only for the services they provide on our behalf.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base md:text-lg font-serif font-semibold text-[#D4AF37] uppercase tracking-wider">
              Cookies
            </h2>
            <p>Our website uses cookies and similar technologies to improve your browsing experience.</p>
            <p>Cookies help us:</p>
            <ul className="list-disc list-inside space-y-1.5 text-gray-400 pl-2">
              <li>Remember your preferences.</li>
              <li>Improve website functionality.</li>
              <li>Analyze website traffic and user behaviour.</li>
              <li>Enhance overall website performance.</li>
            </ul>
            <p>
              You may choose to disable cookies through your browser settings. However, doing so may affect certain features and functionality of the website.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base md:text-lg font-serif font-semibold text-[#D4AF37] uppercase tracking-wider">
              Data Security
            </h2>
            <p>
              We implement appropriate administrative, technical, and organizational measures to safeguard your personal information against unauthorized access, misuse, alteration, disclosure, or destruction.
            </p>
            <p>
              While we strive to protect your information using commercially accepted security practices, no method of electronic transmission or internet storage can be guaranteed to be completely secure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base md:text-lg font-serif font-semibold text-[#D4AF37] uppercase tracking-wider">
              Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-1.5 text-gray-400 pl-2">
              <li>Access the personal information we hold about you.</li>
              <li>Request correction or updating of inaccurate information.</li>
              <li>Request deletion of your personal information, subject to applicable legal and regulatory obligations.</li>
              <li>Opt out of receiving promotional emails or marketing communications at any time.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base md:text-lg font-serif font-semibold text-[#D4AF37] uppercase tracking-wider">
              Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites for your convenience.
            </p>
            <p>
              Bannira is not responsible for the privacy practices, content, or policies of these external websites. We encourage you to review their respective privacy policies before sharing any personal information.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base md:text-lg font-serif font-semibold text-[#D4AF37] uppercase tracking-wider">
              Children's Privacy
            </h2>
            <p>
              Our website is intended for individuals who are 18 years of age or older.
            </p>
            <p>
              We do not knowingly collect personal information from children. If we become aware that such information has been collected inadvertently, we will take appropriate steps to delete it.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base md:text-lg font-serif font-semibold text-[#D4AF37] uppercase tracking-wider">
              Changes to this Privacy Policy
            </h2>
            <p>
              Bannira reserves the right to update or modify this Privacy Policy from time to time.
            </p>
            <p>
              Any changes will be published on this page along with the updated revision date. Continued use of our website after such changes constitutes your acceptance of the revised Privacy Policy.
            </p>
          </section>

          <div className="mt-8 pt-8 border-t border-[#D4AF37]/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-[#1A1A18] p-6 rounded-xl">
            <div className="space-y-1">
              <h3 className="font-serif font-semibold text-[#F3E1B6] text-base">
                Questions Regarding Privacy?
              </h3>
              <p className="text-gray-400 text-xs">
                If you have any questions regarding this Privacy Policy or the way your information is handled, please feel free to contact us.
              </p>
            </div>
            <a
              href="mailto:thebannira@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D4AF37]/10 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-semibold text-xs tracking-wider rounded transition-all duration-300 shrink-0"
            >
              <Mail className="w-4 h-4" />
              thebannira@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Footer Brand Slogan */}
        <div className="text-center pt-2 space-y-1">
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

export default PrivacyPolicyPage;