"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";

const ContactPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#0D0D0C] text-[#F3E1B6] selection:bg-[#D4AF37] selection:text-black py-12 md:py-20 px-4 sm:px-6 lg:px-8 font-sans flex items-center justify-center">
      <div className="max-w-3xl w-full mx-auto space-y-10 mt-15">
        <div className="text-center space-y-4 border-b border-[#D4AF37]/20 pb-10">
          {/* <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-[#D4AF37]/40 px-4 py-1 rounded-full bg-[#D4AF37]/5 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              Get In Touch
            </span>
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl md:text-5xl font-serif font-bold text-[#F3E1B6] tracking-wide"
          >
            Contact Information
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xs md:text-sm text-gray-300 font-serif italic max-w-lg mx-auto"
          >
            We're always happy to assist you!
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-[#141412] border border-[#D4AF37]/20 rounded-2xl p-6 md:p-10 space-y-8 shadow-2xl text-center"
        >
          <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-light max-w-xl mx-auto">
            If you have any questions regarding your order, products, sizing, shipping, returns, or any other queries, please feel free to reach out to us.
          </p>

          <div className="bg-[#1A1A18] border border-[#D4AF37]/30 rounded-xl p-6 space-y-3 max-w-md mx-auto">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
              Customer Support Email
            </p>
            <a
              href="mailto:thebannira@gmail.com"
              className="inline-flex items-center justify-center gap-2 text-base md:text-lg font-medium text-[#F3E1B6] hover:text-[#D4AF37] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#D4AF37]" />
              thebannira@gmail.com
            </a>
          </div>

          <p className="text-xs text-gray-400 font-light leading-relaxed">
            We strive to respond to all customer inquiries within 24–48 business hours.
          </p>

          <div className="pt-4 border-t border-[#D4AF37]/10">
            <p className="text-xs font-serif italic text-gray-300">
              Thank you for choosing Bannira.
            </p>
          </div>
        </motion.div>

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

export default ContactPage;