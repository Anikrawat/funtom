"use client";

import { useRouter, usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX, HiOutlineShoppingBag } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "The Collection", path: "/shop" },
    { name: "Our Story", path: "/story" },
    { name: "Bulk Orders", path: "/bulk-order" },
  ];

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-red-50 py-3 shadow-sm"
            : "bg-white/90 py-5"
        }`}
      >
        <nav className="max-w-[1600px] mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* LOGO - Ketchup Co. Brand */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            onClick={() => router.push("/")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0 overflow-hidden rounded-lg shadow-sm border border-red-100">
              <Image
                src="/logo.png" // Update with your actual logo path
                alt="Red Bottle Co. Logo"
                fill
                className="object-cover"
                priority={true}
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-lg md:text-xl font-black tracking-tighter text-slate-900 uppercase leading-none">
                <span className="text-red-600">RED</span> BOTTLE
              </span>
              <span className="text-[10px] font-bold text-red-400/60 tracking-[0.2em] uppercase leading-none mt-1">
                Craft Sauce Co.
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
              <div className="bg-red-50 p-2 rounded-full text-red-600">
                <FaWhatsapp size={18} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-tighter">
                Chef Support
              </span>
            </a>

            {/* Cart Icon */}
            <button className="relative p-2 text-slate-800 hover:text-red-600 transition-colors">
              <HiOutlineShoppingBag size={24} />
              <span className="absolute top-0 right-0 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            <button
              onClick={() => router.push("/taste-test")}
              className="relative hidden md:block bg-[#2D0A0A] hover:bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-6 py-3 rounded-md transition-all shadow-xl shadow-red-950/10"
            >
              Find Your Flavor
            </button>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-slate-800"
            >
              <HiMenuAlt3 size={30} />
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE SIDEBAR OVERLAY */}
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

              <div className="absolute bottom-10 left-8 right-8 flex flex-col gap-4">
                <button
                  onClick={() => router.push("/orders")}
                  className="w-full bg-slate-100 text-slate-900 py-4 rounded-lg font-black uppercase tracking-widest text-xs border border-slate-200"
                >
                  Track Shipment
                </button>
                <button
                  onClick={() => router.push("/shop")}
                  className="w-full bg-red-600 text-white py-4 rounded-lg font-black uppercase tracking-widest text-xs shadow-lg shadow-red-200"
                >
                  Shop All Flavors
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="h-[80px]" />
    </>
  );
}
