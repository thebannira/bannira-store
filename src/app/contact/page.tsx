"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";

const ContactPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] selection:bg-[#7b2d0a] selection:text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 font-sans flex items-center justify-center">
      <div className="max-w-3xl w-full mx-auto space-y-10 mt-15">
        <div className="text-center space-y-4 border-b border-[#7b2d0a]/15 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-[#7b2d0a]/30 px-4 py-1.5 rounded-full bg-[#7b2d0a]/5 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#7b2d0a]" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#7b2d0a] font-semibold">
              Get In Touch
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl md:text-5xl font-serif font-bold text-[#7b2d0a] tracking-wide"
          >
            Contact Information
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xs md:text-sm text-[#3A3A3A] font-serif italic max-w-lg mx-auto font-medium"
          >
            We're always happy to assist you!
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-[#FAF6EE] border border-[#7b2d0a]/15 rounded-2xl p-6 md:p-10 space-y-8 shadow-sm text-center"
        >
          <p className="text-xs md:text-sm text-[#2C2C2C] leading-relaxed font-normal max-w-xl mx-auto">
            If you have any questions regarding your order, products, sizing, shipping, returns, or any other queries, please feel free to reach out to us.
          </p>

          <div className="bg-[#FDFBF7] border border-[#7b2d0a]/20 rounded-xl p-6 space-y-3 max-w-md mx-auto shadow-sm">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#B8860B] font-bold">
              Customer Support Email
            </p>
            <a
              href="mailto:thebannira@gmail.com"
              className="inline-flex items-center justify-center gap-2 text-base md:text-lg font-medium text-[#7b2d0a] hover:text-[#5c2107] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#7b2d0a]" />
              thebannira@gmail.com
            </a>
          </div>

          <p className="text-xs text-[#3A3A3A] font-normal leading-relaxed">
            We strive to respond to all customer inquiries within 24–48 business hours.
          </p>

          <div className="pt-4 border-t border-[#7b2d0a]/10">
            <p className="text-xs font-serif italic text-[#3A3A3A] font-medium">
              Thank you for choosing Bannira.
            </p>
          </div>
        </motion.div>

        {/* Footer Brand Slogan */}
        <div className="text-center pt-2 space-y-1">
          <p className="text-xs uppercase tracking-[0.3em] text-[#7b2d0a] font-semibold">
            Bannira
          </p>
          <p className="text-xs text-[#B8860B] font-serif italic font-medium">
            Culture in Colour, Style in Spirit.
          </p>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;