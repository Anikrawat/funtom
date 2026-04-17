"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Salad } from "lucide-react";

export default function KetchupFooter() {
  const router = useRouter();

  return (
    <footer className="bg-[#0d0202] text-red-100/40 py-20 border-t border-white/5">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 px-6">
        {/* Brand & Mission */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 text-white font-black text-2xl mb-6 tracking-tighter">
            <div className="bg-red-600 p-1.5 rounded-lg">
              <Salad size={20} fill="white" className="text-white" />
            </div>
            RED<span className="text-red-600">BOTTLE</span>CO.
          </div>
          <p className="font-medium text-red-100/30 max-w-sm leading-relaxed text-sm">
            Crafting the world's most vibrant, small-batch ketchups. From
            vine-ripened Rajasthani tomatoes to your dinner table, we believe in
            flavor without compromise.
          </p>
        </div>

        {/* Product Lines */}
        <div>
          <h4 className="text-white font-black mb-6 text-[10px] uppercase tracking-[0.3em]">
            Products
          </h4>
          <ul className="space-y-4">
            <li className="font-bold text-xs uppercase tracking-tight cursor-pointer hover:text-red-500 transition-colors">
              Original Craft
            </li>
            <li className="font-bold text-xs uppercase tracking-tight cursor-pointer hover:text-red-500 transition-colors">
              Spicy Habanero
            </li>
            <li className="font-bold text-xs uppercase tracking-tight cursor-pointer hover:text-red-500 transition-colors">
              Smoked Garlic
            </li>
            <li className="font-bold text-xs uppercase tracking-tight cursor-pointer hover:text-red-500 transition-colors">
              Bulk Containers
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-black mb-6 text-[10px] uppercase tracking-[0.3em]">
            Company
          </h4>
          <ul className="space-y-4">
            <Link
              href="/story"
              className="block font-bold text-xs uppercase tracking-tight hover:text-red-500 transition-colors"
            >
              Our Story
            </Link>
            <Link
              href="/privacy"
              className="block font-bold text-xs uppercase tracking-tight hover:text-red-500 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="block font-bold text-xs uppercase tracking-tight hover:text-red-500 transition-colors"
            >
              Terms of Flavor
            </Link>
            <Link
              href="/#contact-section"
              className="block font-bold text-xs uppercase tracking-tight hover:text-red-500 transition-colors"
            >
              Contact Team
            </Link>
          </ul>
        </div>

        {/* Social Connectivity */}
        <div>
          <h4 className="text-white font-black mb-6 text-[10px] uppercase tracking-[0.3em]">
            Connect
          </h4>
          <div className="flex gap-3">
            <a
              href="https://wa.me/917733999391"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-red-500 hover:bg-red-600 hover:text-white transition-all shadow-lg"
            >
              <FaWhatsapp size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-red-500 hover:bg-red-600 hover:text-white transition-all shadow-lg"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-red-500 hover:bg-red-600 hover:text-white transition-all shadow-lg"
            >
              <FaTwitter size={18} />
            </a>
          </div>
          <p className="mt-8 text-[9px] font-black text-red-200/20 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            Kitchen Status: Simmering
          </p>
        </div>
      </div>

      {/* BOTTOM LEGAL SECTION */}
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center items-center gap-6">
            <p className="text-[10px] font-black text-red-200/20 uppercase tracking-[0.2em]">
              © 2026 Red Bottle Co. All Rights Reserved.
            </p>
            <span className="hidden md:block text-white/5">|</span>
            <p className="text-[10px] font-black text-red-200/20 uppercase tracking-[0.2em]">
              FSSAI Certified Excellence
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <p className="text-[9px] font-black text-red-200/30 uppercase tracking-widest">
              Grown & Bottled in
            </p>
            <span className="font-black text-sm bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Rajasthan
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
