"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Mail } from "lucide-react";

const ShippingPolicyPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] selection:bg-[#7b2d0a] selection:text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-12 mt-15">
        <div className="text-center space-y-4 border-b border-[#7b2d0a]/15 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-[#7b2d0a]/30 px-4 py-1.5 rounded-full bg-[#7b2d0a]/5 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#7b2d0a]" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#7b2d0a] font-semibold">
              Store Guidelines
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl md:text-5xl font-serif font-bold text-[#7b2d0a] tracking-wide"
          >
            Shipping Policy
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-[#FAF6EE] border border-[#7b2d0a]/15 rounded-2xl p-6 md:p-10 space-y-10 shadow-sm text-xs md:text-sm text-[#2C2C2C] leading-relaxed font-normal"
        >
          <div className="space-y-3 bg-[#FDFBF7] p-5 rounded-xl border-l-2 border-[#7b2d0a] shadow-sm">
            <p className="text-[#1A1A1A] font-medium">
              At Bannira, we are committed to delivering your order safely and on time. Every order is carefully packed to ensure it reaches you in perfect condition.
            </p>
          </div>

          <section className="space-y-2">
            <h2 className="text-base md:text-lg font-serif font-bold text-[#7b2d0a] uppercase tracking-wider">
              Order Processing
            </h2>
            <p>
              Orders are usually processed within 1–3 business days after successful payment confirmation.
            </p>
            <p>
              During festive seasons, sales, or special launches, processing times may be slightly longer.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base md:text-lg font-serif font-bold text-[#7b2d0a] uppercase tracking-wider">
              Delivery Timeline
            </h2>
            <p>Estimated delivery timelines are:</p>
            <ul className="list-disc list-inside space-y-1.5 text-[#3A3A3A] pl-2">
              <li>Metro Cities: 3–5 Business Days</li>
              <li>Other Cities & Towns: 5–8 Business Days</li>
              <li>Remote Locations: 7–10 Business Days</li>
            </ul>
            <p className="text-[#3A3A3A] italic text-xs">
              Delivery timelines are estimates and may vary depending on courier service availability and local conditions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base md:text-lg font-serif font-bold text-[#7b2d0a] uppercase tracking-wider">
              Shipping Charges
            </h2>
            <p>
              Free Shipping on all prepaid orders above ₹999.
            </p>
            <p>
              Shipping charges (if applicable) will be displayed during checkout before payment.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base md:text-lg font-serif font-bold text-[#7b2d0a] uppercase tracking-wider">
              Order Tracking
            </h2>
            <p>
              Once your order has been dispatched, you will receive an email and/or SMS containing your tracking details.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base md:text-lg font-serif font-bold text-[#7b2d0a] uppercase tracking-wider">
              Delivery Delays
            </h2>
            <p>
              Although we work with reliable logistics partners, delays caused by weather conditions, public holidays, strikes, natural calamities, or courier-related issues are beyond our control. We appreciate your patience in such situations.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base md:text-lg font-serif font-bold text-[#7b2d0a] uppercase tracking-wider">
              Incorrect Shipping Details
            </h2>
            <p>
              Customers are requested to provide accurate shipping information while placing an order.
            </p>
            <p>
              Bannira shall not be responsible for delivery failures or delays resulting from incorrect or incomplete shipping details provided by the customer.
            </p>
          </section>

          <div className="mt-8 pt-8 border-t border-[#7b2d0a]/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-[#FDFBF7] p-6 rounded-xl border border-[#7b2d0a]/10 shadow-sm">
            <div className="space-y-1">
              <h3 className="font-serif font-bold text-[#7b2d0a] text-base">
                Have Shipping Queries?
              </h3>
              <p className="text-[#3A3A3A] text-xs">
                Feel free to reach out to our support team for assistance.
              </p>
            </div>
            <a
              href="mailto:thebannira@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#7b2d0a]/10 border border-[#7b2d0a] text-[#7b2d0a] hover:bg-[#7b2d0a] hover:text-[#FDFBF7] font-semibold text-xs tracking-wider rounded transition-all duration-300 shrink-0"
            >
              <Mail className="w-4 h-4" />
              thebannira@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default ShippingPolicyPage;