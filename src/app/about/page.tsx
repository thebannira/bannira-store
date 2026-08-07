"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] selection:bg-[#7b2d0a] selection:text-white overflow-hidden">
      <section className="relative h-[30vh] min-h-[200px] w-full flex items-center justify-center text-center px-6 border-b border-[#7b2d0a]/15">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6EE] via-[#FDFBF7] to-[#FDFBF7] z-1" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#B8860B]/10 via-transparent to-transparent z-1 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-4 mt-15">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 border border-[#7b2d0a]/30 px-4 py-1.5 rounded-full bg-[#7b2d0a]/5 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#7b2d0a]" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#7b2d0a] font-semibold">
              Our Journey
            </span>
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-7xl font-serif font-bold text-[#7b2d0a] tracking-wider leading-tight"
          >
            About Bannira
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xs md:text-sm uppercase tracking-[0.35em] text-[#B8860B] font-serif italic font-medium"
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
            <div className="relative h-[220px] md:h-[500px] w-full flex items-center justify-center">
              <Image
                src="/bannira_logo.png"
                alt="Bannira Brand Logo"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-[#2C2C2C] font-normal leading-relaxed text-sm md:text-base"
          >
            <h2 className="text-2xl md:text-4xl font-serif text-[#7b2d0a] font-bold tracking-wide border-l-4 border-[#7b2d0a] pl-4">
              Turning Passion for Craft into Purpose
            </h2>

            <p className="text-[#1A1A1A] leading-relaxed font-sans font-medium">
              Bannira is a homegrown fashion brand founded by a Marwari husband-and-wife team who turned their passion for Indian craftsmanship into a purpose.
            </p>

            <p className="text-[#3A3A3A] leading-relaxed">
              Inspired by Rajasthan's rich textile heritage, we began our journey while balancing full-time corporate careers, spending weekends at exhibitions, connecting with customers, and slowly building a brand rooted in authenticity and timeless design.
            </p>

            <div className="p-6 bg-[#FAF6EE] border border-[#7b2d0a]/20 rounded-xl space-y-3 shadow-sm">
              <h3 className="text-[#7b2d0a] font-serif text-lg font-bold tracking-wide">
                Heritage Meets Modern Elegance
              </h3>
              <p className="text-xs md:text-sm text-[#2C2C2C] leading-relaxed">
                At Bannira, we celebrate the beauty of traditional Indian crafts like Hand Block Printing and Bandhani while embracing contemporary fashion. Our collections range from elegant kurtis and handcrafted ethnic wear to modern coord sets—including both suit-inspired ensembles and western-influenced styles—offering women the perfect blend of heritage and modern sophistication.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Footer Banner */}
      <section className="relative max-w-4xl mx-auto px-6 py-20 text-center space-y-8">
        <div className="w-16 h-[2px] bg-[#7b2d0a] mx-auto opacity-60" />

        <div className="space-y-4">
          <span className="text-xs font-semibold tracking-[0.3em] text-[#B8860B] uppercase">
            Our Continuing Mission
          </span>
          <p className="text-xl md:text-3xl font-serif text-[#7b2d0a] italic leading-relaxed max-w-3xl mx-auto font-medium">
            "As we continue to grow, our mission remains the same: to bring India's rich craftsmanship to the modern wardrobe, creating fashion that is timeless, elegant, and made with heart."
          </p>
        </div>

        <div className="pt-6">
          <Link
            href="/products"
            className="inline-block px-10 py-4 bg-[#7b2d0a] text-[#FDFBF7] hover:bg-[#5c2107] font-bold tracking-[0.25em] text-xs uppercase transition-all duration-300 shadow-xl rounded-sm"
          >
            Explore The Collection
          </Link>
        </div>
      </section>
    </main>
  );
}