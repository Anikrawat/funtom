"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const articles = [
  {
    id: 1,
    category: "Recipes",
    readTime: "5 min read",
    title: "The Ultimate Summer Dipping Board",
    description:
      "Discover how to pair our Reserve Vinegar with fresh seasonal produce for the perfect...",
    image: "/FOK1.png",
  },
  {
    id: 2,
    category: "Behind the Scenes",
    readTime: "8 min read",
    title: "Sourcing the World's Spiciest Chilies",
    description:
      "Our journey through Southeast Asia in search of the perfect pepper for Red Bottle's signature...",
    image: "/FOK2.png",
  },
  {
    id: 3,
    category: "Techniques",
    readTime: "4 min read",
    title: "Mastering the Art of the Reduction",
    description:
      "Our Head Chef explains why patience is the secret ingredient in every bottle of our sauce.",
    image: "/FOK3.png",
  },
];

// Duplicate the items to ensure the loop is seamless
const doubleArticles = [...articles, ...articles];

export default function KitchenBlog() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-5xl font-black text-slate-900 tracking-tighter">
          From Our Kitchen
        </h2>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-10 pr-10"
          animate={{
            x: ["0%", "-50%"], // Moves halfway because the array is doubled
          }}
          transition={{
            ease: "linear",
            duration: 25, // Adjust speed here (higher = slower)
            repeat: Infinity,
          }}
        >
          {doubleArticles.map((article, index) => (
            <div
              key={`${article.id}-${index}`}
              className="group cursor-pointer w-[350px] flex-shrink-0"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden rounded-[2rem] mb-6 shadow-lg">
                <div className="w-full h-full">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-black uppercase tracking-[0.15em] text-red-600">
                  {article.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {article.readTime}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-tight mb-3 group-hover:text-red-600 transition-colors">
                {article.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium line-clamp-2">
                {article.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
