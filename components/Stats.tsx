"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Beef, Flame, ShoppingBag, Heart, Check } from "lucide-react";

const stats = [
  {
    value: "25k+",
    label: "Bottles Sold",
    icon: <ShoppingBag className="text-red-600" size={24} />,
  },
  {
    value: "100%",
    label: "Natural Ingredients",
    icon: <Check className="text-red-600" size={24} />,
  },
  {
    value: "4.9/5",
    label: "Taste Rating",
    icon: <Heart className="text-red-600" size={24} />,
  },
  {
    value: "0%",
    label: "High Fructose Syrup",
    icon: <Flame className="text-red-600" size={24} />,
  },
];

type AnimatedNumberProps = {
  value: string;
  start: boolean;
};

function AnimatedNumber({ value, start }: AnimatedNumberProps) {
  const isNumeric = /[0-9]/.test(value);
  const number = isNumeric ? parseFloat(value.replace(/[^\d.]/g, "")) : 0;
  const suffix = value.replace(/[0-9.]/g, "");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start || !isNumeric) return;

    const duration = 2000;
    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const currentCount = progress * number;

      setCount(
        value.includes(".")
          ? parseFloat(currentCount.toFixed(1))
          : Math.floor(currentCount)
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [start, number, isNumeric, value]);

  if (!isNumeric) return <span>{value}</span>;

  return (
    <span>
      {start ? count : 0}
      {suffix}
    </span>
  );
}

export default function KetchupStats() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#FFF9F5] py-24 relative overflow-hidden border-y border-red-100"
    >
      {/* Decorative Organic Pattern - Subtle Circles instead of Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Icon Container with Round "Bottle-Cap" Vibe */}
              <div className="mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-white border-2 border-red-50 shadow-sm group-hover:border-red-500 group-hover:shadow-lg group-hover:shadow-red-500/10 transition-all duration-500">
                {item.icon}
              </div>

              {/* Stat Value */}
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-2">
                <AnimatedNumber value={item.value} start={isVisible} />
              </h3>

              {/* Label */}
              <p className="text-[10px] md:text-xs font-black text-red-600/70 uppercase tracking-[0.2em]">
                {item.label}
              </p>

              {/* "Squeeze" Line - Animated progress bar */}
              <div className="mt-6 w-12 h-1.5 bg-red-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isVisible ? { width: "100%" } : {}}
                  transition={{ duration: 1.5, delay: 0.5 + i * 0.2 }}
                  className="h-full bg-red-600"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
