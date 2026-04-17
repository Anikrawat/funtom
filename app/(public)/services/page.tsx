"use client";

import { motion } from "framer-motion";
import {
  Sun,
  Zap,
  ShieldCheck,
  Settings,
  Droplets,
  Battery,
  Construction,
  Globe,
  Cpu,
  BarChart3,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const ServicePage = () => {
  const solarServices = [
    {
      title: "Solar Panel Installation",
      desc: "High-efficiency mounting and wiring for residential & industrial projects.",
      icon: <Sun className="w-6 h-6" />,
    },
    {
      title: "On-Grid Solar System",
      desc: "Connected to the government grid with full net-metering support.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "Off-Grid Solar System",
      desc: "Independent battery-backed setups for remote or unstable areas.",
      icon: <Battery className="w-6 h-6" />,
    },
    {
      title: "Hybrid Solar System",
      desc: "The best of both worlds: Grid connectivity + Battery backup.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Solar Rooftop Plant",
      desc: "Professional installation for homes, factories, and institutions.",
      icon: <Construction className="w-6 h-6" />,
    },
    {
      title: "Solar Water Pumps",
      desc: "Reliable solar pumping systems designed for agriculture.",
      icon: <Droplets className="w-6 h-6" />,
    },
    {
      title: "Solar AMC",
      desc: "Annual maintenance including cleaning and health checks.",
      icon: <Settings className="w-6 h-6" />,
    },
    {
      title: "Repair & Troubleshooting",
      desc: "Quick fault detection for inverters, batteries, and panels.",
      icon: <Cpu className="w-6 h-6" />,
    },
  ];

  const electricalServices = [
    {
      title: "Residential Wiring",
      desc: "Safety-first house wiring with optimized load management.",
    },
    {
      title: "Commercial & Industrial",
      desc: "Heavy-duty setups for malls, hospitals, and factories.",
    },
    {
      title: "Panel Board (LT/HT)",
      desc: "Expert installation of distribution boards and control panels.",
    },
    {
      title: "Earthing & Lightning",
      desc: "Advanced protection for buildings and sensitive equipment.",
    },
    {
      title: "Transformers & DG Sets",
      desc: "Commissioning and maintenance of high-power hardware.",
    },
    {
      title: "UPS & Inverters",
      desc: "Seamless backup solutions for homes and offices.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* --- HERO SECTION --- */}
      <section className="bg-slate-900 text-white py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <Zap className="absolute top-10 right-10 w-64 h-64 text-blue-500" />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4"
        >
          Our <span className="text-blue-500">Services</span>
        </motion.h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Complete Solar and Electrical solutions engineered for efficiency,
          safety, and long-term sustainability.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 mt-[-60px] relative z-10">
        {/* --- SOLAR SERVICES --- */}
        <section className="mb-20">
          {/* 2. Added 'pt-10' or 'mt-4' here to create a gap between the Hero text and this container */}
          <div className="flex items-center gap-4 mb-10 bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            <div className="bg-orange-100 text-orange-600 p-3 rounded-xl flex-shrink-0">
              <Sun size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900">
                Solar Energy Solutions
              </h2>
              <p className="text-slate-500 text-sm">
                Harness the power of the sun
              </p>
            </div>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {solarServices.map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5 transition-all group"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* --- ELECTRICAL SERVICES --- */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
              <Zap size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900">
                Electrical Services
              </h2>
              <p className="text-slate-500 text-sm">
                Industrial grade reliability
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {electricalServices.map((service, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-100 items-start"
              >
                <div className="mt-1 bg-slate-100 p-2 rounded-lg text-slate-900">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SPECIAL SERVICES & WHY CHOOSE US --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Special Services List */}
          <div className="bg-blue-600 rounded-[2rem] p-10 text-white">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter">
              🔌 Special Services
            </h2>
            <ul className="space-y-4">
              {[
                "Solar Subsidy & Net Metering Assistance",
                "EV Charging Station Installation",
                "Smart Electrical Automation",
                "Energy Audit & Load Calculation",
                "Turnkey Solar & Electrical Projects",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-lg font-medium border-b border-blue-500 pb-4"
                >
                  <ArrowRight size={20} className="text-blue-200" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="py-6">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter text-slate-900">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: "Certified Techs", icon: <ShieldCheck /> },
                { label: "Quality Materials", icon: <BarChart3 /> },
                { label: "On-Time Delivery", icon: <Clock /> },
                { label: "After-Sales Support", icon: <Settings /> },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm"
                >
                  <div className="text-blue-600">{item.icon}</div>
                  <span className="font-bold text-slate-700">{item.label}</span>
                </div>
              ))}
            </div>

            <button className="w-full mt-10 bg-slate-900 text-white py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-600 transition-colors flex items-center justify-center gap-3">
              Request a Free Quote <Zap size={20} className="fill-current" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
