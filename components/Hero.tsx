"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight, Sprout, Flame, Utensils, Award } from "lucide-react";

const sliderImages = [
  "/slide3.png", // Add your image paths here
  "/slide1.jpg",
  "/slide2.png",
];

export default function KetchupHero() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 5000); // Changes every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#FFF9F5]">
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-100/60 rounded-full blur-[120px] -z-10" />

      <section className="max-w-7xl mx-auto px-6 lg:px-6 py-12 lg:py-8 flex flex-col lg:flex-row gap-12 lg:items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left z-10"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 text-white mb-6 shadow-lg shadow-red-200">
            <Sprout size={16} fill="currentColor" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">
              100% Vine-Ripened Non-GMO
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter">
            Each <span className="text-red-600">Bite</span> <br />
            Has <span className="text-red-600"> Flavour </span>
          </h1>

          <p className="mt-8 text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            Crafted with sun-drenched tomatoes, secret spices, and zero
            compromise. Elevate your fries, burgers, and backyard BBQs.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => router.push("/shop")}
              className="group bg-red-600 hover:bg-red-700 text-white px-8 py-5 rounded-full font-bold text-lg shadow-xl shadow-red-200 transition-all flex items-center justify-center gap-2"
            >
              Shop the Squeeze
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <Link href="/recipes" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto px-8 py-5 h-full rounded-full border-2 border-red-100 font-bold text-lg hover:bg-red-50 text-red-700 transition-colors"
              >
                View Recipes
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-slate-500">
            <div className="flex items-center gap-2">
              <Award size={22} className="text-red-600" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Chef Choice 2026
              </span>
            </div>
            <div className="h-4 w-px bg-slate-300" />
            <div className="flex items-center gap-2">
              <Flame size={22} className="text-red-600" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Small Batch Kettle
              </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE SLIDER SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative"
        >
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse" />

          {/* Slider Container */}
          <div className="relative aspect-square lg:h-[650px] w-full rounded-[4rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(220,38,38,0.25)] border-[16px] border-white bg-red-50">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="relative w-full h-full"
              >
                <Image
                  src={sliderImages[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Slider Progress Bar Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-black/10 z-20">
              <motion.div
                key={`progress-${currentIndex}`}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="h-full bg-red-600"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 via-transparent to-transparent z-10" />
          </div>

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-4 md:left-8 bg-white p-5 rounded-[2.5rem] shadow-2xl flex items-center gap-4 border border-red-50 z-30"
          >
            <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-red-200">
              <Utensils size={28} />
            </div>
            <div className="pr-4">
              <p className="text-[10px] text-red-500 font-black uppercase tracking-[0.2em] mb-1">
                Naturally Sweet
              </p>
              <p className="text-lg font-black text-slate-900 leading-none">
                No Corn Syrup
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
