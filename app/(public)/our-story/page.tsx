"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Leaf, Flame, Target } from "lucide-react";

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-[#F8F8F7] text-slate-900">
      {/* 1. COMPANY OVERVIEW SECTION */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]"
            >
              Crafting Flavor Since 1994
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]"
            >
              Company <br /> Overview.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl"
            >
              Our company runs under the leadership of Mr. RAJKUMAR JHA, who has
              vast experience of 10 years. Starting with spices trading, we
              diversified into gourmet sauce products. Today, Fun Tom is one of
              the leading condiments and sauce companies in India.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            className="flex-1 relative aspect-[4/5] w-full rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <Image
              src="/slide2.png"
              alt="Fresh Ingredients"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US SECTION */}
      <section className="py-24 pb-48 md:pb-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-20 items-start">
          {/* IMAGE CONTAINER */}
          <div className="flex-1 relative w-full min-h-[300px] md:min-h-[400px]">
            {/* Fixed height on mobile (h-[350px]) ensures the container doesn't collapse.
         The red div is relative to this box.
      */}
            <div className="relative w-full h-[350px] md:h-full md:aspect-video rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/kitchen.png"
                alt="Kitchen Scene"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            {/* OVERLAPPING QUOTE BOX */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="absolute -bottom-12 right-4 md:-bottom-10 md:-right-10 bg-red-600 p-6 md:p-8 rounded-2xl max-w-[240px] md:max-w-xs shadow-2xl shadow-red-200 z-20"
            >
              <p className="text-white text-sm md:text-base font-medium italic leading-relaxed">
                "The flavor is the frame, the ingredients are the paint."
              </p>
            </motion.div>
          </div>

          {/* TEXT CONTENT */}
          <div className="flex-1 space-y-8 pt-12 md:pt-12">
            <h2 className="text-4xl font-black tracking-tighter">
              Why Choose Us
            </h2>
            <div className="space-y-6 text-slate-500 font-medium leading-relaxed">
              <p>
                We make premium quality sauces and ketchups designed to be the
                ultimate snack partner. Whether you need a spoonful to add
                vibrancy to your plate or a base for a culinary masterpiece, we
                deliver excellence.
              </p>
              <p>
                Our journey took us from local markets to international
                landscapes, hunting for the specific peppercorns and the most
                vibrant herbs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE ART OF INGREDIENTS */}
      <section className="py-32 bg-[#F8F8F7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl font-black tracking-tighter">
              The Art of Our Ingredients
            </h2>
            <p className="text-slate-400 font-medium">
              No fillers, no fakes, just pure culinary expression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 100% Organic Sourcing */}
            <div className="lg:col-span-2 bg-white p-10 rounded-[2.5rem] flex flex-col justify-between group hover:bg-slate-900 transition-colors duration-500">
              <Leaf
                className="text-red-600 group-hover:text-white mb-8"
                size={32}
              />
              <div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-white">
                  100% Organic Sourcing
                </h3>
                <p className="text-slate-500 group-hover:text-slate-400 text-sm leading-relaxed">
                  Our partnerships with local farmers ensure every herb is
                  picked at its peak, preserving essential oils and vibrant
                  colors.
                </p>
              </div>
            </div>

            {/* Bold Flavor Profile (The Yellow Card) */}
            <div className="bg-amber-400 p-10 rounded-[2.5rem] flex flex-col justify-between shadow-xl shadow-amber-100 relative overflow-hidden">
              <Flame className="text-amber-900 mb-8" size={32} />
              <div className="z-10">
                <h3 className="text-2xl font-black text-amber-950 mb-4">
                  Bold Flavor Profile
                </h3>
                <p className="text-amber-900 text-sm leading-relaxed">
                  We don't do 'mild'. Our sauces are designed to push the
                  boundaries of your palate.
                </p>
              </div>
              <Flame
                className="absolute -bottom-10 -right-10 text-amber-500/20"
                size={200}
              />
            </div>

            {/* Pure Integrity */}
            <div className="bg-white p-10 rounded-[2.5rem] flex flex-col justify-between group hover:bg-slate-900 transition-colors duration-500">
              <ShieldCheck
                className="text-red-600 group-hover:text-white mb-8"
                size={32}
              />
              <div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-white">
                  Pure Integrity
                </h3>
                <p className="text-slate-500 group-hover:text-slate-400 text-sm leading-relaxed">
                  Zero artificial preservatives. We use traditional preparation
                  methods like slow reduction to stabilize our flavors.
                </p>
              </div>
            </div>
            {/* Our Mission (Black Card) */}
            <div className="lg:col-span-2 bg-slate-900 p-12 rounded-[2.5rem] flex flex-col md:flex-row gap-10 items-center overflow-hidden relative">
              <div className="flex-1 w-full h-48 md:h-full relative rounded-2xl overflow-hidden opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                <Image
                  src="/mission.jpg"
                  alt="Food Mission"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 z-10">
                <Target className="text-red-600 mb-6" size={32} />
                <h3 className="text-3xl font-black text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                  To bring the sophistication of a gallery and the soul of a
                  street market to every table in the world. We are building a
                  community of flavor enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
