"use client";

import { useRouter, usePathname } from "next/navigation";
import { FaWhatsapp, FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import {
  HiMenuAlt3,
  HiX,
  HiOutlineShoppingBag,
  HiPlus,
  HiMinus,
} from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // New State for Cart Drawer
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to sync cart data
  const updateCartData = () => {
    const cart = JSON.parse(localStorage.getItem("funtom-cart") || "[]");
    setCartItems(cart);
    const count = cart.reduce(
      (acc: number, item: any) => acc + item.quantity,
      0
    );
    setCartCount(count);
  };

  useEffect(() => {
    updateCartData();
    window.addEventListener("cartUpdated", updateCartData);
    return () => window.removeEventListener("cartUpdated", updateCartData);
  }, []);

  // Cart Actions
  const adjustQty = (id: string, amount: number) => {
    const newCart = cartItems.map((item) => {
      if (item.id === id)
        return { ...item, quantity: Math.max(1, item.quantity + amount) };
      return item;
    });
    localStorage.setItem("funtom-cart", JSON.stringify(newCart));
    updateCartData();
  };

  const removeItem = (id: string) => {
    const newCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("funtom-cart", JSON.stringify(newCart));
    updateCartData();
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "The Collection", path: "/products" },
    { name: "Our Story", path: "/our-story" },
  ];

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-red-50 py-2 shadow-sm"
            : "bg-white/90 py-2"
        }`}
      >
        <nav className="max-w-[1600px] mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* LOGO */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            onClick={() => router.push("/")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="relative w-10 h-10 md:w-20 md:h-20 flex-shrink-0 overflow-hidden rounded-lg ">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="object-cover"
                priority={true}
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-lg md:text-xl font-black tracking-tighter text-slate-900 uppercase leading-none">
                <span className="text-red-600">FUN</span>TOM
              </span>
              <span className="text-[10px] font-bold text-red-400/60 tracking-[0.2em] uppercase leading-none mt-1">
                Each Bite Has Flavour
              </span>
            </div>
          </motion.div>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li
                key={link.name}
                onClick={() => router.push(link.path)}
                className={`relative text-xs font-black uppercase tracking-widest cursor-pointer transition-colors ${
                  pathname === link.path
                    ? "text-red-600"
                    : "text-slate-700 hover:text-red-600"
                }`}
              >
                {link.name}
                {pathname === link.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-600"
                  />
                )}
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE ACTIONS */}
          <div className="flex items-center gap-3 md:gap-6">
            <a
              href="https://wa.me/917733999391"
              target="_blank"
              className="hidden sm:flex items-center gap-2 text-slate-600 hover:text-red-600 transition-colors"
            >
              <div className="bg-red-50 p-2 rounded-full text-green-600">
                <FaWhatsapp size={18} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-tighter">
                Support
              </span>
            </a>

            {/* Cart Icon - Trigger Drawer */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-slate-800 hover:text-red-600 transition-colors"
            >
              <HiOutlineShoppingBag size={24} />
              <span className="absolute top-0 right-0 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            </button>

            <button
              onClick={() => router.push("/taste-test")}
              className="relative hidden md:block bg-red-600 hover:bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-red-200"
            >
              Find Your Flavor
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-slate-800"
            >
              <HiMenuAlt3 size={30} />
            </button>
          </div>
        </nav>
      </header>

      {/* --- CART DRAWER --- */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-"
            />
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter">
                  Your Cart ({cartCount})
                </h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 text-slate-400 hover:text-red-600 transition-colors"
                >
                  <HiX size={24} />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-6 space-y-6">
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 items-center">
                      <div className="relative w-20 h-20 bg-slate-50 rounded-xl overflow-hidden flex-shrink-0 border border-slate-100">
                        <Image
                          src={item.imageUrl}
                          alt={item.name}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-sm font-black text-slate-900 leading-tight">
                          {item.name}
                        </h3>
                        <p className="text-red-600 font-bold text-sm mt-1">
                          ₹{item.price}
                        </p>
                        <div className="flex items-center gap-4 mt-3">
                          <div className="flex items-center border border-slate-200 rounded-full px-2 py-1 gap-4">
                            <button
                              onClick={() => adjustQty(item.id, -1)}
                              className="text-slate-400 hover:text-red-600"
                            >
                              <HiMinus size={14} />
                            </button>
                            <span className="text-xs font-black text-slate-900">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => adjustQty(item.id, 1)}
                              className="text-slate-400 hover:text-red-600"
                            >
                              <HiPlus size={14} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-slate-300 hover:text-red-600 transition-colors"
                          >
                            <FaTrash size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="h-full flex flex-col items-center justify-center opacity-40">
                    <HiOutlineShoppingBag size={48} />
                    <p className="mt-4 font-black uppercase text-xs tracking-widest">
                      Empty Pantry
                    </p>
                  </div>
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="p-8 bg-slate-50 border-t border-slate-200">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-black uppercase text-slate-400 tracking-widest">
                      Subtotal
                    </span>
                    <span className="text-2xl font-black text-slate-900">
                      ₹{totalAmount}
                    </span>
                  </div>
                  <button className="w-full bg-red-600 hover:bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-red-100">
                    Checkout Now
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* MOBILE SIDEBAR OVERLAY (Original Menu) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#2D0A0A]/40 backdrop-blur-sm z- lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z- lg:hidden p-8 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <p className="font-black uppercase tracking-tighter text-red-600">
                  Flavor Catalog
                </p>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 bg-red-50 rounded-full text-red-600"
                >
                  <HiX size={24} />
                </button>
              </div>

              <ul className="flex flex-col gap-8">
                {navLinks.map((link) => (
                  <li
                    key={link.name}
                    onClick={() => {
                      router.push(link.path);
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-xl font-black text-slate-900 uppercase tracking-tight hover:text-red-600 transition-colors"
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="h-[80px]" />
    </>
  );
}
