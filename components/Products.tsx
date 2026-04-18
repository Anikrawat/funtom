"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Oregano",
    price: 24.0,
    image: "/oregano.png",
    tags: ["Aged 12Y", "Organic"],
    isFeatured: false,
  },
  {
    id: 2,
    name: "Red Chili Sauce",
    price: 18.0,
    image: "/chilli.png",
    tags: ["Extra Spicy", "Best Seller"],
    isFeatured: false,
  },
  {
    id: 3,
    name: "Cheese Spread",
    price: 21.0,
    image: "/cheese.png",
    tags: ["Small Batch"],
    isFeatured: false,
  },
];

export default function Bestsellers() {
  // Logic to handle adding items to the cart
  const addToCart = (product: any) => {
    const existingCart = JSON.parse(
      localStorage.getItem("funtom-cart") || "[]"
    );

    // Check if item already exists to increment quantity
    const itemIndex = existingCart.findIndex(
      (item: any) => item.id === product.id
    );

    if (itemIndex > -1) {
      existingCart[itemIndex].quantity += 1;
    } else {
      // Mapping your local product keys to the expected cart format
      existingCart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.image,
        quantity: 1,
      });
    }

    localStorage.setItem("funtom-cart", JSON.stringify(existingCart));

    // Dispatch event so the Navbar/Sidebar updates immediately
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <section className="py-24 px-6 bg-[#F0F1F1] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-5xl font-black text-slate-900 tracking-tighter">
              The Bestsellers
            </h2>
            <p className="text-slate-500 mt-2 font-medium">
              Curated essentials for the gourmet explorer.
            </p>
          </div>
          <button className="flex items-center gap-2 text-red-600 font-bold hover:gap-4 transition-all duration-300">
            View Catalog <ArrowRight size={20} />
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative rounded-[2.5rem] p-8 flex flex-col transition-all duration-500 ${
                product.isFeatured
                  ? "bg-white ring-2 ring-red-100 shadow-2xl z-10 scale-105"
                  : "bg-white/60 hover:bg-white hover:shadow-xl"
              }`}
            >
              {/* Product Image Container */}
              <div className="relative h-72 w-full mb-8 flex items-center justify-center flex-shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-black text-slate-800 tracking-tight">
                      {product.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                            tag === "Best Seller" || tag === "Extra Spicy"
                              ? "bg-orange-100 text-orange-600"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-xl font-black text-red-600">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Action Button Area */}
              <div className="h-16 mt-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => addToCart(product)}
                  className="w-full h-full bg-red-600 text-white rounded-2xl font-black flex items-center justify-center gap-3 shadow-xl shadow-red-200"
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
