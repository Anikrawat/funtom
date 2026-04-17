"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const articles = [
  {
    id: 1,
    category: "Recipes",
    readTime: "5 min read",
    title: "The Ultimate Summer Dipping Board",
    description:
      "Discover how to pair our Reserve Vinegar with fresh seasonal produce for the perfect...",
    image: "/FOK1.png", // Replace with your image path
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

export default function KitchenBlog() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header with Navigation */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl font-black text-slate-900 tracking-tighter">
            From Our Kitchen
          </h2>
          <div className="flex gap-3">
            <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 hover:text-slate-900 transition-all">
              <ChevronLeft size={24} />
            </button>
            <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 hover:bg-slate-50 transition-all">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {articles.map((article) => (
            <motion.div
              key={article.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden rounded-[2rem] mb-6 shadow-lg">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  className="w-full h-full"
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
