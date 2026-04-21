"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

export default function KetchupFooter() {
  const router = useRouter();

  return (
    <footer className="bg-[#FFF9F5] text-slate-500 py-20 border-t border-red-50">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 px-6">
        {/* Brand & Mission */}
        <div className="lg:col-span-2">
          <motion.div
            whileHover={{ scale: 1.02 }}
            onClick={() => router.push("/")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="relative w-10 h-10 md:w-25 md:h-25 flex-shrink-0 overflow-hidden rounded-lg ">
              <Image
                src="/logo.png"
                alt="Funtom Logo"
                fill
                className="object-cover"
                priority={true}
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-lg md:text-4xl font-black tracking-tighter text-slate-900 uppercase leading-none">
                <span className="text-red-600">FUN</span>TOM
              </span>
              <span className="text-[10px] font-bold text-red-400/60 tracking-[0.2em] uppercase leading-none mt-1">
                Each Bite Has Flavour
              </span>
            </div>
          </motion.div>
          <p className="mt-6 font-medium text-slate-500 max-w-sm leading-relaxed text-sm">
            Add a spoonful or more ketchup to any food item if you want to add
            more flavors to your plate or if you would like to make your dish a
            little more interesting.
          </p>
        </div>

        {/* Product Lines */}
        <div>
          <h4 className="text-slate-900 font-black mb-6 text-[10px] uppercase tracking-[0.3em]">
            Products
          </h4>
          <ul className="space-y-4">
            <li className="font-bold text-xs uppercase tracking-tight cursor-pointer hover:text-red-600 transition-colors">
              Original Craft
            </li>
            <li className="font-bold text-xs uppercase tracking-tight cursor-pointer hover:text-red-600 transition-colors">
              Spicy Habanero
            </li>
            <li className="font-bold text-xs uppercase tracking-tight cursor-pointer hover:text-red-600 transition-colors">
              Smoked Garlic
            </li>
            <li className="font-bold text-xs uppercase tracking-tight cursor-pointer hover:text-red-600 transition-colors">
              Bulk Containers
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-slate-900 font-black mb-6 text-[10px] uppercase tracking-[0.3em]">
            Company
          </h4>
          <ul className="space-y-4">
            <Link
              href="/story"
              className="block font-bold text-xs uppercase tracking-tight hover:text-red-600 transition-colors"
            >
              Our Story
            </Link>
            <Link
              href="/privacy"
              className="block font-bold text-xs uppercase tracking-tight hover:text-red-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="block font-bold text-xs uppercase tracking-tight hover:text-red-600 transition-colors"
            >
              Terms of Flavor
            </Link>
            <Link
              href="/#contact-section"
              className="block font-bold text-xs uppercase tracking-tight hover:text-red-600 transition-colors"
            >
              Contact Team
            </Link>
          </ul>
        </div>

        {/* Social Connectivity */}
        <div>
          <h4 className="text-slate-900 font-black mb-6 text-[10px] uppercase tracking-[0.3em]">
            Connect
          </h4>
          <div className="flex gap-3">
            <a
              href="https://wa.me/917733999391"
              className="w-10 h-10 rounded-xl bg-white border border-red-50 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all shadow-sm"
            >
              <FaWhatsapp size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-xl bg-white border border-red-50 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all shadow-sm"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-xl bg-white border border-red-50 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all shadow-sm"
            >
              <FaTwitter size={18} />
            </a>
          </div>
          <p className="mt-8 text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            Kitchen Status: Simmering
          </p>
        </div>
      </div>

      {/* BOTTOM LEGAL SECTION */}
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-red-100">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center items-center gap-6">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} FUNTOM All Rights Reserved.
            </p>
            <span className="hidden md:block text-slate-200">|</span>
            {/* POWERED BY PIGOPI */}
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
              Powered by{" "}
              <a
                href="https://pigo-pi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-transparent bg-clip-text bg-linear-to-r from-[#2563eb] via-[#6366f1] to-[#9333ea] transition-colors decoration-red-200 decoration-2 underline-offset-4"
              >
                PigoPi
              </a>
            </p>
          </div>

          {/* <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-red-50 shadow-sm"> */}
          {/*   <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest"> */}
          {/*     Grown & Bottled in */}
          {/*   </p> */}
          {/*   <span className="font-black text-sm bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent"> */}
          {/*     Rajasthan */}
          {/*   </span> */}
          {/* </div> */}
        </div>
      </div>
    </footer>
  );
}
