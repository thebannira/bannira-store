"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { useProducts } from "@/context/ProductContext";

const ProductsSection = () => {
  const { allProducts, isLoading } = useProducts();
  const [featuredProductIds, setFeaturedProductIds] = useState<string[]>([]);

  useEffect(() => {
    const fetchFeaturedSettings = async () => {
      try {
        const res = await fetch("/api/admin/settings");
        const result = await res.json();
        if (result.success && result.data?.featuredProductIds) {
          setFeaturedProductIds(result.data.featuredProductIds);
        }
      } catch (err) {
        console.error("Failed to fetch settings for featured products:", err);
      }
    };

    fetchFeaturedSettings();
  }, []);

  const featured =
    featuredProductIds.length > 0
      ? allProducts.filter((product) =>
          featuredProductIds.includes(product._id ?? "")
        )
      : allProducts.slice(0, 10);

  if (isLoading) {
    return (
      <section className="relative py-24 bg-[#ffffff] overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs text-[#D4AF37] uppercase tracking-[0.2em]">
            Loading Collection...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 md:py-32 bg-[#ffffff] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.15),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(123,45,10,0.1),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.5em] uppercase text-[#D4AF37] mb-4">
            ✦ Curated Collection ✦
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold text-[#7B2D0A] mb-6 leading-tight font-serif">
            New Arrivals
          </h2>

          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            <div className="w-2 h-2 rotate-45 border border-[#D4AF37]" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent via-[#D4AF37] to-transparent" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative px-4 sm:px-6">
          {featured.length > 0 ? (
            <>
              <button
                id="new-arrivals-prev"
                aria-label="Previous Products"
                className="absolute left-0 sm:-left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-[#7B2D0A] border border-[#D4AF37]/50 shadow-md flex items-center justify-center transition-all duration-300 hover:bg-[#7B2D0A] hover:text-white disabled:opacity-20 disabled:cursor-not-allowed disabled:pointer-events-none [&.swiper-button-disabled]:opacity-20 [&.swiper-button-disabled]:cursor-not-allowed [&.swiper-button-disabled]:pointer-events-none cursor-pointer"
              >
                <ChevronLeft size={18} className="stroke-[2.5]" />
              </button>

              <button
                id="new-arrivals-next"
                aria-label="Next Products"
                className="absolute right-0 sm:-right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-[#7B2D0A] border border-[#D4AF37]/50 shadow-md flex items-center justify-center transition-all duration-300 hover:bg-[#7B2D0A] hover:text-white disabled:opacity-20 disabled:cursor-not-allowed disabled:pointer-events-none [&.swiper-button-disabled]:opacity-20 [&.swiper-button-disabled]:cursor-not-allowed [&.swiper-button-disabled]:pointer-events-none cursor-pointer"
              >
                <ChevronRight size={18} className="stroke-[2.5]" />
              </button>

              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={10}
                slidesPerView={2.2}
                slidesPerGroup={1}
                loop={false}
                speed={600}
                navigation={{
                  prevEl: "#new-arrivals-prev",
                  nextEl: "#new-arrivals-next",
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2.5,
                    slidesPerGroup: 1,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 5,
                    slidesPerGroup: 1,
                    spaceBetween: 8,
                  },
                  1280: {
                    slidesPerView: 5,
                    slidesPerGroup: 1,
                    spaceBetween: 10,
                  },
                }}
                className="py-1"
              >
                {featured.map((product) => (
                  <SwiperSlide key={product._id}>
                    <ProductCard product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-sm text-stone-400 font-medium tracking-widest uppercase">
                Oops! Something went wrong.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;