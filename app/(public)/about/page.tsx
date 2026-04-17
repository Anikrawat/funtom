"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Cpu,
  ShieldCheck,
  Sun,
  Activity,
  Layers,
  MousePointer2,
  Factory,
  BatteryCharging
} from "lucide-react";

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Technical Expertise specifically for Solar & Electrical
  const technicalExpertise = [
    { title: "Solar PV Architecture", desc: "On-grid, Off-grid, and Hybrid system design." },
    { title: "Industrial Electrification", desc: "LT/HT Panel board and heavy-duty DB installation." },
    { title: "Energy Storage", desc: "Advanced Lithium-ion and Lead-Acid battery integration." },
    { title: "Power Protection", desc: "Earthing and Lightning safety for industrial units." },
    { title: "EV Infrastructure", desc: "Turnkey EV charging station deployment." },
  ];

  return (
    <main className="bg-slate-950 text-white overflow-hidden selection:bg-blue-500/30">
      
      {/* ================= HERO: RENEWABLE FOCUS ================= */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
          <motion.div 
            style={{ y: y1 }}
            className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] [background-size:4rem_4rem]"
          />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 w-full text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="text-blue-500"
              >
                <Sun size={24} />
              </motion.div>
              <p className="text-blue-500 font-black uppercase tracking-[0.5em] text-[10px]">
                Sustainable Infrastructure v2.0
              </p>
            </div>
            
            <h1 className="text-6xl md:text-[12rem] font-black leading-[0.8] tracking-tighter mb-10">
              SOLAR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-blue-500 to-indigo-500 animate-gradient-x">
                EMPOWERED.
              </span>
            </h1>

            <div className="flex flex-col lg:flex-row items-center gap-8">
               <motion.button 
                 whileHover={{ scale: 1.05 }}
                 className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl shadow-blue-500/20 flex items-center gap-3"
               >
                 Consult an Engineer <ArrowRight size={16} />
               </motion.button>
               <p className="text-slate-500 font-medium max-w-xs text-sm leading-relaxed text-center lg:text-left">
                 Specializing in high-efficiency solar farms and heavy-duty industrial electrical contracting.
               </p>
            </div>
          </motion.div>
        </div>

        {/* Floating Solar Status */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-10 hidden lg:block p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Generation Sync</span>
          </div>
          <div className="space-y-3">
             <div className="flex justify-between text-[10px] font-bold text-blue-400 uppercase">
                <span>Solar Output</span>
                <span>98.4%</span>
             </div>
            <div className="h-1.5 w-40 bg-slate-800 rounded-full overflow-hidden">
               <motion.div animate={{ width: ["0%", "98%"] }} transition={{ duration: 2 }} className="h-full bg-blue-500" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 py-32 relative">
        <div className="grid lg:grid-cols-2 gap-24">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
              The Solar <br /> <span className="text-blue-500">Pioneers.</span>
            </h2>
            <p className="text-xl text-slate-400 font-medium leading-relaxed">
              Our engineering leadership bridges the gap between traditional electrical contracting and next-generation renewable energy.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              { name: "Santosh Keshri", role: "Principal Solar Engineer", icon: <Sun /> },
              { name: "Anik Singh Rawat", role: "Industrial Ops Lead", icon: <Factory /> }
            ].map((leader, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 20 }}
                className="group p-10 rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center justify-between transition-all"
              >
                <div>
                  <h3 className="text-3xl font-black mb-1">{leader.name}</h3>
                  <p className="text-blue-500 font-bold uppercase tracking-widest text-xs">{leader.role}</p>
                </div>
                <div className="p-4 bg-blue-600/10 rounded-2xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {leader.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BENTO BOX: SERVICE CAPABILITIES ================= */}
      <section className="py-32 bg-slate-950 relative">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="max-w-2xl"
            >
              <p className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Division Portfolio</p>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85]">
                BUILT FOR THE <br /> 
                <span className="text-slate-800 outline-text">NEW GRID.</span>
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Solar Panel Card */}
            <motion.div 
              whileHover={{ scale: 0.99 }}
              className="md:col-span-8 relative group overflow-hidden rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5 p-12"
            >
              <div className="absolute top-0 right-0 p-8">
                <Sun className="text-blue-500/10 group-hover:text-blue-500/30 transition-colors" size={150} />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-600/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-widest mb-8">
                  <Sun size={12} /> High-Efficiency PV
                </div>
                <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-none text-white">
                  Renewable <br /> Ecosystems.
                </h3>
                <p className="text-slate-500 max-w-sm font-medium">
                  Designing On-Grid and Hybrid solar plants that maximize ROI through government net metering.
                </p>
              </div>
            </motion.div>

            {/* Electrical & Automation */}
            <div className="md:col-span-4 grid gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="rounded-[3rem] bg-slate-900/50 border border-white/10 p-10 group"
              >
                <div className="p-4 rounded-2xl bg-blue-600 w-fit mb-6 shadow-lg shadow-blue-500/20 text-white">
                  <Zap size={24} />
                </div>
                <h4 className="text-2xl font-black mb-3">Power Logic</h4>
                <p className="text-slate-400 text-sm font-medium">
                  LT/HT distribution boards engineered for zero-downtime industrial ops.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="rounded-[3rem] bg-slate-900/50 border border-white/10 p-10 group"
              >
                <div className="p-4 rounded-2xl bg-emerald-600 w-fit mb-6 shadow-lg shadow-emerald-500/20 text-white">
                  <BatteryCharging size={24} />
                </div>
                <h4 className="text-2xl font-black mb-3">Hybrid Storage</h4>
                <p className="text-slate-400 text-sm font-medium">
                  Seamless battery backup solutions for off-grid and rural deployments.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .outline-text {
            -webkit-text-stroke: 1px rgba(255,255,255,0.1);
            color: transparent;
          }
        `}</style>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-40 bg-slate-900 text-center">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="max-w-4xl mx-auto px-6"
        >
          <Sun className="mx-auto mb-10 text-amber-500" size={64} />
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-12">
            Go Solar <br /> Today.
          </h2>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            className="group flex items-center gap-4 mx-auto bg-blue-600 text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-xs"
          >
            Get a Site Audit <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
}
