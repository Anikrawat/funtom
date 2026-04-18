"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ShoppingBag,
  Filter,
  ArrowUpDown,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

const DUMMY_PRODUCTS = [
  {
    id: "4",
    name: "Original Craft Ketchup",
    description:
      "Enjoy Tomato Ketchup, Made From Best Quality Juicy Tomatoes. Our Technique Saves The Natural Flavor Of Tomatoes Selected From The Finest Sources Of India. We Serve The Taste With Quality Ingredients.Make YourSnacks More Delicious With AOne Tomato Ketchup.",
    price: 499,
    imageUrl: "/chilli.png", // Replace with your actual asset paths
    tags: ["Best Seller"],
  },
  {
    id: "5",
    name: "Cheese Spread",
    description:
      "Enjoy Cheese Spread Made From Fresh Cheese. Or Technique Saves The Natural Flavor Of All Ingredients Selected From The Finest Sources Of India.We Serve The Taste With Quality Ingredients.",
    price: 549,
    imageUrl: "/cheese.png",
    tags: ["Limited"],
  },
  {
    id: "6",
    name: "Oregano",
    description:
      "Intensely Fragrant Oregano Will Give Your Pizza, Soups, Sauteed Veggies And Pa",
    price: 599,
    imageUrl: "/oregano.png",
    tags: ["Extra Hot"],
  },
  {
    id: "7",
    name: "Mixed Pickle",
    description:
      "EnjoyThe Taste OfYourChoice With MixPickle,We Are Serving You A Delicious Natural Flavor Of Food Mix Pickle With A Unique Combination Of Spices Like, Coriander, Turmeric, Cumin And Asafoetida Is The Real Saviour Of Traditional Flavor Indian Recipes.",
    price: 299,
    imageUrl: "/pickle.png",
    tags: ["Organic"],
  },
  {
    id: "8",
    name: "Soya Sauce",
    description:
      "Soya Sauce Is The Essential Dipping Sauce ForSpicyTaste OrNatural FlavorOf Soya Bean Selected From The Finest Sources OfIndia.We Serve The Taste With Quality Ingredients. Make Your Snacks More Delicious With Soya Sauce.",
    price: 449,
    imageUrl: "/soya.png",
    tags: ["Handmade"],
  },
  {
    id: "9",
    name: "Tandoori Mayonaise",
    description:
      "Enjoy Tandoori Mayonnaise Made From Fresh Cream, Vegetable Oil, Herbs Garlic, Etc. Our Technique Saves The Natural Flavor Of All Ingredients Selected From The Finest Sources OfIndia.",
    price: 649,
    imageUrl: "/tandooriMayo.png",
    tags: ["Small Batch"],
  },
];

export default function ProductsPage() {
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [lastAdded, setLastAdded] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // --- CART LOGIC ---
  const addToCart = (product: any) => {
    // 1. Get existing cart from localStorage
    const existingCart = JSON.parse(
      localStorage.getItem("funtom-cart") || "[]"
    );

    // 2. Check if product already exists
    const existingItemIndex = existingCart.findIndex(
      (item: any) => item.id === product.id
    );

    if (existingItemIndex > -1) {
      // If it exists, increment quantity
      existingCart[existingItemIndex].quantity += 1;
    } else {
      // If new, add with quantity 1
      existingCart.push({ ...product, quantity: 1 });
    }

    // 3. Save back to localStorage
    localStorage.setItem("funtom-cart", JSON.stringify(existingCart));

    // 4. Trigger UI Feedback
    setLastAdded(product.name);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);

    // Optional: Dispatch a custom event so a Navbar/Header component can update its counter
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // Simulated mount delay for the skeleton effect
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#F0F1F1]">
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-slate-700"
          >
            <CheckCircle2 size={18} className="text-green-400" />
            <span className="text-xs font-black uppercase tracking-widest">
              {lastAdded} Added to Cart
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      {/* 1. PREMIUM HEADER SECTION */}
      <section className="relative overflow-hidden bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="flex-1 space-y-8 z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <span className="h-[1px] w-12 bg-red-600" />
              <p className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">
                Crafting Flavor Since 1994
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]"
            >
              The <br />
              <span className="text-red-600">Bestsellers.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-slate-500 max-w-md font-medium leading-relaxed"
            >
              Curated essentials for the gourmet explorer. From our sun-drenched
              fields to your kitchen table, experience the art of the perfect
              reduction.
            </motion.p>

            <motion.button
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-red-600 group"
            >
              View Full Catalog
              <ChevronRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.button>
          </div>

          {/* Featured Image Collage - Inspired by the "Trio" shot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[500px]"
          >
            <div className="absolute inset-0 bg-slate-100 rounded-[3rem] overflow-hidden">
              {/* Replace this with your actual "Bestseller Trio" lifestyle image */}
              <Image
                src="/slide2.png"
                alt="Gourmet Ingredients"
                fill
                className="object-cover mix-blend-multiply opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
            </div>

            {/* Floating Price Badge */}
            {/* <motion.div */}
            {/*   animate={{ y: [0, -10, 0] }} */}
            {/*   transition={{ repeat: Infinity, duration: 4 }} */}
            {/*   className="absolute -bottom-6 -left-6 bg-amber-400 p-6 rounded-2xl shadow-2xl rotate-3" */}
            {/* > */}
            {/*   <p className="text-[10px] font-black uppercase tracking-widest text-amber-900"> */}
            {/*     Try the Trio */}
            {/*   </p> */}
            {/*   <p className="text-2xl font-black text-amber-950">Save ₹150</p> */}
            {/* </motion.div> */}
          </motion.div>
        </div>
      </section>
      {/* 2. UTILITY BAR */}
      <div className="sticky top-0 z-40 bg-[#F0F1F1]/80 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-900 px-5 py-2.5 bg-white border border-slate-200 rounded-full hover:shadow-md transition-all">
              <Filter size={14} /> Filter
            </button>
            <p className="hidden md:block text-slate-400 text-[10px] font-black uppercase tracking-widest">
              {loading
                ? "Sorting results..."
                : `${DUMMY_PRODUCTS.length} Varieties Available`}
            </p>
          </div>
          <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-900">
            Sort <ArrowUpDown size={14} />
          </button>
        </div>
      </div>

      {/* 3. PRODUCTS GRID */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-[550px] bg-white/40 rounded-[2.5rem] animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {DUMMY_PRODUCTS.map((product, index) => (
              <motion.div
                key={product.id}
                // ... animation props ...
                className="group relative rounded-[2.5rem] p-8 flex flex-col bg-white/60 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/5"
              >
                {/* Product Image & Tags */}
                <div className="relative h-72 w-full mb-8 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-contain p-6 transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute top-0 right-0">
                    <span className="text-[9px] font-black uppercase tracking-widest bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">
                      {product.tags}
                    </span>
                  </div>
                </div>

                {/* Info Container */}
                <div className="flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-red-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-slate-500 text-sm font-medium line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto pt-6 flex items-center justify-between">
                    <span className="text-2xl font-black text-slate-900">
                      ₹{product.price}
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-colors"
                    >
                      <ShoppingBag size={18} />
                    </button>
                  </div>
                </div>

                {/* Quick Add Button */}
                <div className="mt-8">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => addToCart(product)}
                    className="w-full py-4 bg-red-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-red-200 transition-all hover:bg-slate-900"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>
      {/* 4. FOOTER MOTIVATOR */}
      <section className="py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-400 font-black uppercase tracking-[0.4em] text-[10px] mb-8">
            Farm to Bottle • No Preservatives • Artisan Made
          </p>
          <div className="h-[1px] w-20 bg-red-600 mx-auto" />
        </div>
      </section>
    </div>
  );
}
