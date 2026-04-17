"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Quote,
  Utensils,
  Heart,
  Sprout,
  ShoppingBag,
  Leaf,
} from "lucide-react";

export default function KetchupOwnersMessage() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  // Floating animation for the "Quality Stack" icons
  const floatVariants = {
    animate: (i: number) => ({
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        delay: i * 0.7,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section ref={containerRef} className="py-24 bg-[#FFF9F5] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">
          {/* Left Content - The Heart of the Brand */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-3 text-red-600 mb-6">
              <div className="h-px w-8 bg-red-600" />
              <p className="font-black text-[10px] uppercase tracking-[0.4em]">
                Culinary Craftsmanship
              </p>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-10">
              Integrity in <br />
              <span className="text-red-600">Every Squeeze.</span>
            </h2>

            <div className="relative">
              <Quote className="absolute -top-6 -left-8 text-red-100 w-16 h-16 -z-10 opacity-50" />
              <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium">
                "At{" "}
                <span className="text-slate-900 font-bold">
                  The Red Bottle Co.
                </span>
                , we believe a condiment is more than just a topping—it’s the
                soul of the meal. Our focus is on sourcing{" "}
                <span className="text-red-600">vine-ripened tomatoes</span> and
                organic spices that don't just add color, but bring a bold,
                authentic flavor to every kitchen table."
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-red-200">
                    MK
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold leading-none text-lg">
                      Santosh Keshri
                    </p>
                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest mt-1">
                      Founder & Master Saucerier
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Abstract Foodie Animation */}
          <div className="relative order-1 lg:order-2 h-[500px] flex items-center justify-center">
            {/* Background Decorative Rings (Sun & Growth Vibe) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="w-72 h-72 border-2 border-dashed border-red-200 rounded-full opacity-40"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-[450px] h-[450px] border border-orange-200 rounded-full opacity-30"
              />
            </div>

            {/* Central Animated Core (Tomato/Sun Focus) */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="relative z-10 w-48 h-48 bg-red-600 rounded-full shadow-[0_20px_50px_rgba(220,38,38,0.3)] flex items-center justify-center text-white"
            >
              <Leaf size={64} className="text-white" fill="currentColor" />

              {/* Pulsing Flavor Aura */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.1, 0.4] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-red-400 rounded-full -z-10"
              />
            </motion.div>

            {/* Floating Quality Badges */}
            <motion.div
              custom={1}
              variants={floatVariants}
              animate="animate"
              className="absolute top-10 right-0 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-red-50"
            >
              <div className="text-red-600 bg-red-50 p-2 rounded-lg">
                <Sprout size={20} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">
                100% Organic
              </span>
            </motion.div>

            <motion.div
              custom={2}
              variants={floatVariants}
              animate="animate"
              className="absolute bottom-10 left-0 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-red-50"
            >
              <div className="text-red-600 bg-red-50 p-2 rounded-lg">
                <Heart size={20} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">
                Heart Healthy
              </span>
            </motion.div>

            <motion.div
              custom={3}
              variants={floatVariants}
              animate="animate"
              className="absolute top-1/2 -left-8 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-red-50"
            >
              <div className="text-red-600 bg-red-50 p-2 rounded-lg">
                <Utensils size={20} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">
                Chef Approved
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
