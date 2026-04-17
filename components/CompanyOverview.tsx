"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CompanyOverview() {
  return (
    <section className="py-24 px-6 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
            Crafting Flavor Since 1994
          </span>
          <h2 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
            Company <br /> Overview.
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
            Under the leadership of Mr. Rajkumar Jha, we began our journey in
            spice trading. Today, we've diversified into premium condiments,
            becoming a household name for quality and authentic Indian flavors.
          </p>
        </motion.div>

        {/* Right Stacked Images */}
        <div className="relative h-[500px] w-full flex items-center justify-center lg:justify-end">
          {/* Bottom Image (The Peeking One) */}
          <motion.div
            initial={{ opacity: 0, rotate: 0, x: 20 }}
            whileInView={{ opacity: 1, rotate: -6, x: -40 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute w-[80%] h-[90%] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white z-0 bg-slate-200"
          >
            <Image
              src="/spice-market.jpg" // Replace with your second image
              alt="Spice Trading Roots"
              fill
              className="object-cover opacity-80"
            />
          </motion.div>

          {/* Top Image (The Main One) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-[85%] h-full rounded-[3.5rem] overflow-hidden shadow-2xl z-10 border-4 border-white/20"
          >
            <Image
              src="/garlic-still-life.jpg" // Replace with your main image
              alt="Premium Condiments"
              fill
              className="object-cover"
            />
            {/* Soft Glow effect behind the top corner as seen in your image */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-200/30 blur-[100px] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
