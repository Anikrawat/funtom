"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag, Star, Filter, ArrowUpDown } from "lucide-react";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/api/admin/products");
        setProducts(res.data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. PREMIUM HEADER SECTION */}
      <section className="bg-slate-50 py-20 px-6 border-b border-slate-100">
        <div className="max-w-[1600px] mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4"
          >
            The Full Collection
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter"
          >
            Science-Backed <br /> 
            <span className="text-green-600">Ayurvedic Actives.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-xl text-slate-500 max-w-2xl mx-auto font-medium"
          >
            Clean formulations designed to target hair loss at the root. 
            Free from minoxidil, parabens, and synthetic fragrances.
          </motion.p>
        </div>
      </section>

      {/* 2. UTILITY BAR (Filter & Sort) */}
      <div className="sticky top-[80px] z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm font-bold text-slate-900 px-4 py-2 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
              <Filter size={16} /> Filter
            </button>
            <p className="hidden md:block text-slate-400 text-sm font-medium">
              Showing {products.length} Results
            </p>
          </div>
          <button className="flex items-center gap-2 text-sm font-bold text-slate-900">
            Sort <ArrowUpDown size={16} />
          </button>
        </div>
      </div>

      {/* 3. PRODUCTS GRID */}
      <main className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16">
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-[4/5] bg-slate-50 rounded-[2rem] animate-pulse" />
            ))}
          </div>
        ) : (
          <div className={`grid gap-8 lg:gap-12 ${
            products.length === 1 
            ? "grid-cols-1 place-items-center" 
            : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          }`}>
            {products.map((product, index) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-slate-100 border border-slate-100">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />
                  
                  {/* Hover Quick Add */}
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <button className="w-full bg-white text-slate-900 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 hover:bg-green-600 hover:text-white transition-all">
                      <ShoppingBag size={18} />
                      Quick Add
                    </button>
                  </div>
                </div>

                {/* Info Container */}
                <div className="mt-6 text-center">
                  <div className="flex justify-center text-amber-400 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-green-600 transition-colors">
                    {product.name}
                  </h2>
                  
                  <p className="text-slate-500 text-sm mt-2 line-clamp-1 max-w-[250px] mx-auto font-medium">
                    {product.description}
                  </p>

                  <div className="mt-4 flex items-center justify-center gap-4">
                    <span className="text-2xl font-black text-slate-900">
                      ₹{product.price}
                    </span>
                    <span className="text-[10px] font-black uppercase text-green-600 bg-green-50 px-3 py-1 rounded-full tracking-widest">
                      In Stock
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>

      {/* 4. FOOTER MOTIVATOR */}
      <section className="py-20 border-t border-slate-100 bg-white">
        <div className="text-center">
          <p className="text-slate-400 font-bold uppercase tracking-[0.4em] text-[10px]">
            Fast Shipping • Easy Returns • Science Based
          </p>
        </div>
      </section>
    </div>
  );
}
