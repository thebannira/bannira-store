"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Mail } from "lucide-react";

const ExchangePolicyPage: React.FC = () => {
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
            Exchange Policy
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
              At Bannira, every garment is thoughtfully crafted and carefully inspected before it reaches you. We take pride in delivering products that reflect our commitment to quality, craftsmanship, and customer satisfaction.
            </p>
            <p className="text-[#1A1A1A] font-medium">
              To ensure the highest standards of hygiene and product quality, we currently offer exchanges only. This allows us to serve our customers better while maintaining the integrity of every Bannira creation.
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-base md:text-lg font-serif font-bold text-[#7b2d0a] uppercase tracking-wider">
              Exchange Eligibility
            </h2>
            <p>
              Exchange requests can be raised within 7 days from the date of delivery.
            </p>
            <p>To be eligible for an exchange, the product must:</p>
            <ul className="list-disc list-inside space-y-1.5 text-[#3A3A3A] pl-2">
              <li>Be unused, unworn, and unwashed.</li>
              <li>Have all original tags attached.</li>
              <li>Be returned in its original packaging.</li>
              <li>Be free from stains, perfume, deodorant, makeup, or any signs of use.</li>
            </ul>
            <p className="text-[#3A3A3A] italic text-xs">
              Products that do not meet these conditions may not be eligible for exchange.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base md:text-lg font-serif font-bold text-[#7b2d0a] uppercase tracking-wider">
              Size Exchange
            </h2>
            <p>
              If you've ordered the wrong size, we're happy to assist you with a size exchange, subject to product availability.
            </p>
            <p>If the requested size is unavailable, we may offer:</p>
            <ul className="list-disc list-inside space-y-1.5 text-[#3A3A3A] pl-2">
              <li>Another available size (with your approval), or</li>
              <li>Store Credit equal to the value of the product, which can be used for a future purchase.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base md:text-lg font-serif font-bold text-[#7b2d0a] uppercase tracking-wider">
              Handcrafted Products
            </h2>
            <p>
              Many Bannira garments feature traditional handcrafted techniques such as Hand Block Printing, Bandhani, and other artisan-led processes.
            </p>
            <p>
              Minor variations in colour, print placement, texture, or pattern are natural characteristics of handcrafted products and should not be considered defects. These unique variations are a part of the beauty and authenticity of handcrafted fashion.
            </p>
          </section>

          <section className="space-y-3 bg-[#FDFBF7] p-6 rounded-xl border border-[#7b2d0a]/10 shadow-sm">
            <h2 className="text-base md:text-lg font-serif font-bold text-[#7b2d0a] uppercase tracking-wider">
              Damaged, Defective or Incorrect Product
            </h2>
            <p>If you receive:</p>
            <ul className="list-disc list-inside space-y-1.5 text-[#3A3A3A] pl-2">
              <li>A damaged product,</li>
              <li>A defective product, or</li>
              <li>An incorrect item,</li>
            </ul>
            <p>
              please notify us within 48 hours of delivery by emailing{" "}
              <a href="mailto:thebannira@gmail.com" className="text-[#7b2d0a] underline hover:text-[#5c2107] font-medium">
                thebannira@gmail.com
              </a>.
            </p>
            <p>Kindly include:</p>
            <ul className="list-disc list-inside space-y-1.5 text-[#3A3A3A] pl-2">
              <li>Your Order ID</li>
              <li>Clear photographs of the product</li>
              <li>Images of the packaging received</li>
            </ul>
            <p>
              Our team will review your request and arrange an appropriate resolution at the earliest.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base md:text-lg font-serif font-bold text-[#7b2d0a] uppercase tracking-wider">
              Exchange Shipping Charges
            </h2>
            <p>
              If the exchange is due to a damaged, defective, or incorrect product delivered by Bannira, we will bear the exchange shipping charges.
            </p>
            <p>
              For exchanges requested due to size selection or personal preference, shipping charges for the exchange may be applicable and will be communicated before processing the request.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base md:text-lg font-serif font-bold text-[#7b2d0a] uppercase tracking-wider">
              Important Information
            </h2>
            <p>Please note the following:</p>
            <ul className="list-disc list-inside space-y-1.5 text-[#3A3A3A] pl-2">
              <li>We currently offer exchanges only.</li>
              <li>We do not offer returns or refunds for reasons such as change of mind, personal preference, or incorrect size selection.</li>
              <li>Exchange requests are subject to stock availability.</li>
              <li>Products purchased during sale, promotional offers, or clearance are not eligible for exchange unless received damaged, defective, or incorrect.</li>
              <li>Bannira reserves the right to decline an exchange request if the product does not meet the eligibility criteria mentioned above.</li>
            </ul>
          </section>

          <div className="mt-8 pt-8 border-t border-[#7b2d0a]/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-[#FDFBF7] p-6 rounded-xl border border-[#7b2d0a]/10 shadow-sm">
            <div className="space-y-1">
              <h3 className="font-serif font-bold text-[#7b2d0a] text-base">
                Need Assistance?
              </h3>
              <p className="text-[#3A3A3A] text-xs">
                If you have any questions regarding exchanges, we're always happy to help. We aim to respond to all customer queries within 24–48 business hours.
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

export default ExchangePolicyPage;