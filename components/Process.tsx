"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sprout,
  ChefHat,
  PackageCheck,
  Flame,
} from "lucide-react";

const steps = [
  {
    title: "The Sourcing",
    desc: "We partner with local farmers to hand-pick only the sun-ripened, non-GMO tomatoes at their peak sweetness.",
    icon: <Sprout size={32} />,
    color: "bg-red-600 text-white",
  },
  {
    title: "Small-Batch Kettle",
    desc: "Our master sauciers slow-cook every batch in open kettles to lock in that deep, rich, authentic tomato flavor.",
    icon: <Flame size={32} />,
    color: "bg-red-950 text-red-500",
  },
  {
    title: "The Perfect Pour",
    desc: "Every bottle is vacuum-sealed and quality-tested to ensure the perfect consistency and 'thwack' with every squeeze.",
    icon: <PackageCheck size={32} />,
    color: "bg-red-50 text-red-600",
  },
];

export default function KetchupProcess() {
  return (
    <section
      id="process"
      className="py-24 bg-white overflow-hidden border-t border-red-50"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* HEADING */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4"
          >
            The Squeeze Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none"
          >
            Crafting the <br className="hidden md:block" />
            <span className="text-red-600">Masterpiece.</span>
          </motion.h2>
        </div>

        {/* STEPS GRID */}
        <div className="relative">
          {/* Connector Line (Desktop) - Now a soft red dash */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 z-0 border-t-2 border-dashed border-red-100" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="group relative bg-white p-10 rounded-[3rem] border border-red-50 shadow-xl shadow-red-900/5 hover:border-red-500 transition-all duration-500"
              >
                {/* Background ID Tag */}
                <span className="absolute top-6 right-8 text-7xl font-black text-slate-200 group-hover:text-red-50 transition-colors duration-500 pointer-events-none italic">
                  STEP-0{i + 1}
                </span>

                {/* Icon Box */}
                <div
                  className={`w-20 h-20 ${step.color} rounded-[2rem] flex items-center justify-center mb-10 shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500`}
                >
                  {step.icon}
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight uppercase">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-bold leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Mobile Arrow */}
                {i < 2 && (
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:hidden bg-red-600 p-3 rounded-full shadow-xl z-20">
                    <ArrowRight className="rotate-90 text-white" size={18} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* COMPLIANCE CHIPS - Updated for Food Safety */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 flex flex-wrap justify-center gap-4"
        >
          {[
            "USDA Organic",
            "Glass Packaged",
            "No Artificial Flavors",
            "Non-GMO Project Verified",
          ].map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-5 py-2 bg-red-950 rounded-full"
            >
              <CheckCircle2 size={12} className="text-red-500" />
              <span className="text-white font-black uppercase tracking-widest text-[9px]">
                {feature}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
