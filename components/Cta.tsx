"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Leaf,
  Heart,
  Shield,
  Star,
} from "lucide-react";

export default function KetchupCTA() {
  const router = useRouter();
  const qualityBadges = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-[1600px] mx-auto relative bg-[#FFF9F5] rounded-[4rem] overflow-hidden border border-red-50 shadow-xl shadow-red-100/50"
      >
        {/* Subtle Organic Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.4] pointer-events-none [background-image:radial-gradient(#fee2e2_1px,transparent_1px)] [background-size:40px_40px]" />

        {/* Background Decorative Glows - Very Soft Tomato Red */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-100/40 to-transparent pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-red-200/20 rounded-full blur-[100px]" />

        {/* Large Faded Leaf Icon */}
        <motion.div
          animate={{ opacity: [0.05, 0.1, 0.05], scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-20 -right-10 text-red-600 pointer-events-none"
        >
          <Leaf size={500} strokeWidth={0.5} className="opacity-[0.05]" />
        </motion.div>

        <div className="relative z-10 p-12 lg:p-24 flex flex-col items-center text-center">
          {/* Quality Badge */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 mb-10 bg-white border border-red-100 px-6 py-3 rounded-full shadow-sm shadow-red-100/50"
          >
            <div className="flex -space-x-3">
              {qualityBadges.map((i) => (
                <div
                  key={i.id}
                  className="w-10 h-10 rounded-full border-2 border-white bg-red-600 flex items-center justify-center shadow-md"
                >
                  <Heart size={18} fill="white" className="text-white" />
                </div>
              ))}
            </div>
            <div className="text-left border-l border-red-100 pl-4">
              <p className="text-red-600 text-[10px] font-black uppercase tracking-widest leading-none mb-1">
                Gourmet Standard
              </p>
              <p className="text-slate-900 text-sm font-bold tracking-tight">
                10k+ Kitchens Stocked
              </p>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.85] tracking-tighter max-w-5xl">
            Taste the Sun in <br />
            <span className="text-red-600 italic">Every Drop.</span>
          </h2>

          <p className="mt-10 text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
            From backyard grills to five-star diners, we provide the rich, tangy
            flavor that makes every dish unforgettable. No fillers,
            <span className="text-red-600">
              {" "}
              just pure, vine-ripened perfection.
            </span>
          </p>

          {/* Product Specs List */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-4">
            {[
              "Farm-to-Bottle",
              "Gluten-Free Certified",
              "Recyclable Glass",
            ].map((text) => (
              <div
                key={text}
                className="flex items-center gap-3 text-slate-700 text-[11px] font-black uppercase tracking-[0.2em]"
              >
                <CheckCircle2 size={16} className="text-red-600" />
                {text}
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col sm:flex-row gap-6 w-full justify-center">
            <button
              onClick={() => router.push("/bulk-order")}
              className="group bg-red-600 hover:bg-slate-900 text-white px-12 py-6 rounded-full font-black text-xl transition-all duration-500 flex items-center justify-center gap-4 shadow-xl shadow-red-200"
            >
              Order for Your Kitchen
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" />
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-red-100/50 w-full max-w-3xl">
            <p className="text-red-300 text-[10px] font-black uppercase tracking-[0.4em]">
              Small Batch Production &bull; Global Shipping &bull; Culinary
              Partnerships
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
