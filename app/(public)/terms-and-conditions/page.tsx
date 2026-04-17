"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  Zap, 
  FileText, 
  AlertTriangle, 
  ChevronRight,
  CheckCircle,
  Cpu,
  ShieldAlert,
  Lock,
  HardHat,
  Sun
} from "lucide-react";

export default function PoliciesPage() {
  const [activeTab, setActiveTab] = useState("terms");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (["logistics", "data", "warranty", "terms", "safety"].includes(hash)) {
        setActiveTab(hash);
      }
    }
  }, []);

  const sections = [
    { id: "terms", title: "Terms of Service", icon: <FileText size={20} />, desc: "Project Framework" },
    { id: "logistics", title: "Site & Logistics", icon: <Truck size={20} />, desc: "Deployment Terms" },
    { id: "warranty", title: "Component Warranty", icon: <Zap size={20} />, desc: "Solar & Electrical" },
    { id: "safety", title: "Safety & Liability", icon: <HardHat size={20} />, desc: "Operational Risk" },
    { id: "data", title: "Data & Privacy", icon: <ShieldCheck size={20} />, desc: "System Telemetry" },
  ];

  return (
    <main className="bg-slate-950 text-slate-200 min-h-screen selection:bg-blue-500/30">
      
      {/* ================= HEADER ================= */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4">RPS Electric Solutions • Governance</p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
              SERVICE <span className="text-slate-800">CHARTER.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ================= DASHBOARD LAYOUT ================= */}
      <section className="max-w-[1400px] mx-auto px-6 py-12 lg:py-24">
        <div className="grid lg:grid-cols-[380px_1fr] gap-12">
          
          {/* SIDEBAR NAVIGATION */}
          <aside className="space-y-2">
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => setActiveTab(sec.id)}
                className={`w-full flex items-center justify-between p-6 rounded-2xl transition-all duration-300 border ${
                  activeTab === sec.id
                    ? "bg-blue-600 border-blue-500 text-white shadow-xl shadow-blue-500/20"
                    : "bg-white/5 border-white/5 text-slate-400 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`${activeTab === sec.id ? "text-white" : "text-blue-500"}`}>
                    {sec.icon}
                  </span>
                  <div className="text-left">
                    <p className="font-black uppercase tracking-widest text-[10px]">{sec.title}</p>
                    <p className={`text-[10px] opacity-60 ${activeTab === sec.id ? "text-blue-100" : "text-slate-500"}`}>
                      {sec.desc}
                    </p>
                  </div>
                </div>
                <ChevronRight size={14} className={`transition-transform ${activeTab === sec.id ? "rotate-90" : "opacity-20"}`} />
              </button>
            ))}
          </aside>

          {/* CONTENT MODULE */}
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden backdrop-blur-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                {/* Terms Module */}
                {activeTab === "terms" && (
                  <div>
                    <h2 className="text-4xl font-black text-white tracking-tight mb-4 uppercase text-balance">General Terms of Engagement</h2>
                    <p className="text-blue-500 font-bold text-xs uppercase tracking-widest mb-10">Updated: February 2026</p>
                    <div className="space-y-8 text-slate-400 leading-relaxed font-medium">
                      <p className="bg-blue-500/5 border-l-2 border-blue-500 p-6 italic">Contracting RPS Electric Solutions for Solar or Electrical projects constitutes acceptance of these industrial service standards.</p>
                      
                      <div className="grid gap-6">
                        <div className="space-y-2">
                          <h3 className="text-lg font-bold text-white flex items-center gap-2"><CheckCircle size={18} className="text-blue-500"/> Project Scope</h3>
                          <p className="text-sm italic">Service includes installation, wiring, and commissioning. Civil works (unless specified) or government liaisoning fees are the client's responsibility.</p>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-bold text-white flex items-center gap-2"><CheckCircle size={18} className="text-blue-500"/> Subsidies & Net Metering</h3>
                          <p className="text-sm">RPS assists in Solar Subsidy applications; however, final approval and timelines are governed by state electricity boards (DISCOMs).</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Logistics & Site Module */}
                {activeTab === "logistics" && (
                  <div>
                    <h2 className="text-4xl font-black text-white tracking-tight mb-8 uppercase">Site Readiness & Logistics</h2>
                    <div className="space-y-6 text-slate-400 font-medium">
                      <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                        <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-3">Client Obligations:</h4>
                        <ul className="space-y-3 text-sm">
                          <li className="flex gap-3"><ChevronRight size={14} className="text-blue-500 shrink-0 mt-1"/> Continuous water and power supply for installation.</li>
                          <li className="flex gap-3"><ChevronRight size={14} className="text-blue-500 shrink-0 mt-1"/> Structural stability certification for rooftop solar projects.</li>
                          <li className="flex gap-3"><ChevronRight size={14} className="text-blue-500 shrink-0 mt-1"/> Provision of a secure storage area for panels and LT/HT equipment.</li>
                        </ul>
                      </div>
                      <p className="text-sm px-2">Deployment timelines are subject to weather conditions (for solar) and site access clearances.</p>
                    </div>
                  </div>
                )}

                {/* Warranty Module */}
                {activeTab === "warranty" && (
                  <div>
                    <h2 className="text-4xl font-black text-white tracking-tight mb-8 uppercase">Component Warranty</h2>
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                      <div className="p-6 rounded-3xl bg-blue-600/10 border border-blue-500/20 text-center">
                        <Sun className="mx-auto mb-3 text-blue-500" />
                        <p className="text-xl font-black text-white">25 Years</p>
                        <p className="text-[10px] uppercase font-bold text-slate-500">Solar Panel Performance</p>
                      </div>
                      <div className="p-6 rounded-3xl bg-blue-600/10 border border-blue-500/20 text-center">
                        <Zap className="mx-auto mb-3 text-blue-500" />
                        <p className="text-xl font-black text-white">5-10 Years</p>
                        <p className="text-[10px] uppercase font-bold text-slate-500">Inverter & Battery Sets</p>
                      </div>
                    </div>
                    <div className="p-6 rounded-2xl bg-slate-900 border border-white/5">
                      <p className="text-sm font-bold text-slate-300">RPS guarantees workmanship for 12 months. Individual component warranties are honored by the respective manufacturers (e.g., Luminous, Tata Power, Havells).</p>
                    </div>
                  </div>
                )}

                {/* Safety & Liability Module */}
                {activeTab === "safety" && (
                  <div>
                    <h2 className="text-4xl font-black text-red-500 tracking-tight mb-8 uppercase">Safety & Liability</h2>
                    <div className="p-8 rounded-3xl bg-red-500/5 border border-red-500/20 text-slate-300">
                      <p className="mb-6 leading-relaxed font-medium italic">Electrical infrastructure is high-risk. Unauthorized tampering voids all safety certifications and warranties.</p>
                      <div className="flex items-start gap-4 p-6 bg-red-600 text-white rounded-2xl">
                        <ShieldAlert className="shrink-0 mt-1" size={24} />
                        <div>
                          <p className="text-sm font-black uppercase tracking-tight mb-1">Safety Exclusion</p>
                          <p className="text-xs font-medium leading-relaxed">RPS Electric Solutions is not liable for damages caused by grid surges, lightning strikes (where protection was not opted), or third-party modifications.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Data Integrity Module */}
                {activeTab === "data" && (
                  <div>
                    <h2 className="text-4xl font-black text-white tracking-tight mb-8 uppercase">System Telemetry</h2>
                    <div className="space-y-6 text-slate-400">
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                        <Cpu size={32} className="text-blue-500 opacity-50" />
                        <p className="text-sm">Remote monitoring data for Smart Inverters and EV Stations is used solely for system health diagnostics and performance optimization.</p>
                      </div>
                      <p className="text-sm px-2 italic">Client data is encrypted and never sold to third-party marketing entities. We strictly follow industrial privacy standards for energy consumption profiles.</p>
                    </div>
                  </div>
                )}
                
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ================= CLOSING ================= */}
      <section className="py-24 text-center border-t border-white/5">
        <p className="text-slate-600 font-black uppercase tracking-[0.6em] text-[10px] mb-4">Official Compliance</p>
        <p className="text-slate-500 text-sm max-w-lg mx-auto italic font-medium px-6">
          Integrity in every watt. For specific AMC (Annual Maintenance) contract documents, please reach out to our legal desk.
        </p>
      </section>
    </main>
  );
}
