"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0C] text-[#F3E1B6] selection:bg-[#D4AF37] selection:text-black overflow-hidden">
      <section className="relative h-[30vh] min-h-[400px] w-full flex items-center justify-center text-center px-6 border-b-1 border-[#D4AF37]/20">
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0D0D0C] z-1" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/15 via-transparent to-transparent z-1 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 border border-[#D4AF37]/40 px-4 py-1.5 rounded-full bg-[#D4AF37]/5 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
              Our Journey
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-7xl font-serif font-bold text-[#F3E1B6] tracking-wider leading-tight"
          >
            About Bannira
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xs md:text-sm uppercase tracking-[0.35em] text-[#D4AF37] font-serif italic"
          >
            Culture in Colour, Style in Spirit.
          </motion.p>
        </div>
      </section>

      <section className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative h-[200px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/bannira_web_logo.png"
                alt="Rajasthani Handcrafted Ethnic Wear"
                fill
                className="object-fit hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-gray-300 font-light leading-relaxed text-sm md:text-base"
          >
            <h2 className="text-2xl md:text-4xl font-serif text-[#F3E1B6] font-bold tracking-wide border-l-2 border-[#D4AF37] pl-4">
              Turning Passion for Craft into Purpose
            </h2>

            <p className="text-[#F3E1B6]/90 leading-relaxed font-sans">
              Bannira is a homegrown fashion brand founded by a Marwari husband-and-wife team who turned their passion for Indian craftsmanship into a purpose.
            </p>

            <p className="text-gray-400">
              Inspired by Rajasthan's rich textile heritage, we began our journey while balancing full-time corporate careers, spending weekends at exhibitions, connecting with customers, and slowly building a brand rooted in authenticity and timeless design.
            </p>

            <div className="p-6 bg-[#141412] border border-[#D4AF37]/20 rounded-xl space-y-3">
              <h3 className="text-[#D4AF37] font-serif text-lg font-semibold tracking-wide">
                Heritage Meets Modern Elegance
              </h3>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                At Bannira, we celebrate the beauty of traditional Indian crafts like Hand Block Printing and Bandhani while embracing contemporary fashion. Our collections range from elegant kurtis and handcrafted ethnic wear to modern coord sets—including both suit-inspired ensembles and western-influenced styles—offering women the perfect blend of heritage and modern sophistication.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative max-w-4xl mx-auto px-6 py-20 text-center space-y-8">
        <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto opacity-60" />

        <div className="space-y-4">
          <span className="text-xs font-semibold tracking-[0.3em] text-[#D4AF37] uppercase">
            Our Continuing Mission
          </span>
          <p className="text-xl md:text-3xl font-serif text-[#F3E1B6] italic leading-relaxed max-w-3xl mx-auto font-light">
            "As we continue to grow, our mission remains the same: to bring India's rich craftsmanship to the modern wardrobe, creating fashion that is timeless, elegant, and made with heart."
          </p>
        </div>

        <div className="pt-6">
          <Link
            href="/products"
            className="inline-block px-10 py-4 border border-[#D4AF37] text-[#F3E1B6] bg-[#1A1A18] hover:bg-[#D4AF37] hover:text-black font-bold tracking-[0.25em] text-xs uppercase transition-all duration-300 shadow-xl rounded-sm"
          >
            Explore The Collection
          </Link>
        </div>
      </section>
    </main>
  );
}