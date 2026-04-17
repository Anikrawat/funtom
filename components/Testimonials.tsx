"use client";

import { useEffect, useState, useRef } from "react";
import { Plus, X, Upload, Star, Loader2, Film, Image as ImageIcon, CheckCircle2, Quote, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

// --- UPDATED ENGINEERING MOCK DATA ---
const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    _id: "1",
    name: "Industrial Tech Park",
    text: "The 1.2MW solar deployment by RPS has reduced our operational costs by 35%. Their engineering team handled the grid synchronization flawlessly.",
    reviewUrl: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop", // Large Solar Array
    resourceType: "image",
  },
  {
    _id: "2",
    name: "Apex Manufacturing",
    text: "Professional panel upgrades and load balancing. The technical documentation provided post-install helped our internal safety audit pass without issues.",
    reviewUrl: "https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?q=80&w=2070&auto=format&fit=crop", // Industrial Control Panel
    resourceType: "image",
  },
  {
    _id: "3",
    name: "Skyline Residency",
    text: "RPS managed the entire electrical infrastructure for our new 200-unit complex. Reliable, safety-focused, and delivered ahead of schedule.",
    reviewUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop", // Construction/Electrical wiring
    resourceType: "image",
  },
  {
    _id: "4",
    name: "Global Data Solutions",
    text: "Their understanding of UPS systems and industrial backup power is unmatched. We haven't had a single power-related downtime since the upgrade.",
    reviewUrl: "https://images.unsplash.com/photo-1558441711-76c114a076f9?q=80&w=2070&auto=format&fit=crop", // Battery/UPS room
    resourceType: "image",
  },
];

type Testimonial = {
  _id: string;
  name: string;
  text: string;
  reviewUrl?: string;
  resourceType?: string;
};

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(MOCK_TESTIMONIALS);
  const [openForm, setOpenForm] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [status, setStatus] = useState<"idle" | "uploading" | "success">("idle");

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      if (selected.size > 15 * 1024 * 1024) {
        alert("File size exceeds 15MB limit");
        return;
      }
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  };

  const handleSubmit = async () => {
    if (!name || !text) return alert("Please fill in your company name and project feedback");
    setStatus("uploading");

    setTimeout(() => {
      const newEntry: Testimonial = {
        _id: Math.random().toString(),
        name,
        text,
        reviewUrl: preview || undefined,
        resourceType: file?.type.startsWith("video") ? "video" : "image",
      };
      
      setTestimonials([newEntry, ...testimonials]);
      setStatus("success");
      
      setTimeout(() => {
        setOpenForm(false);
        setStatus("idle");
        setName("");
        setText("");
        setFile(null);
        setPreview(null);
      }, 2000);
    }, 1500);
  };

  const displayList = [...testimonials, ...testimonials];

  return (
    <section className="py-24 overflow-hidden bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
        <div className="text-center md:text-left">
          <p className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-3">Project Proof</p>
          <h2 className="text-5xl font-black tracking-tighter text-slate-900">
            Field <span className="text-blue-600">Performance.</span>
          </h2>
          <p className="text-slate-500 mt-4 text-sm flex items-center justify-center md:justify-start gap-2 font-bold uppercase tracking-tight">
            <CheckCircle2 size={16} className="text-blue-600" />
            Verified Industrial Deployments
          </p>
        </div>

        <Button
          onClick={() => setOpenForm(true)}
          className="rounded-xl bg-slate-900 hover:bg-blue-600 text-white px-8 h-14 flex items-center gap-3 transition-all shadow-xl shadow-slate-200"
        >
          <Plus size={18} />
          <span className="text-sm font-black uppercase tracking-widest">Register Feedback</span>
        </Button>
      </div>

      {/* Industrial Carousel */}
      <div className="relative flex" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <motion.div
          className="flex gap-8 pr-8"
          animate={{ x: isPaused ? undefined : ["0%", "-50%"] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" } }}
        >
          {displayList.map((item, index) => (
            <Card key={`${item._id}-${index}`} className="min-w-[350px] md:min-w-[450px] border border-slate-200 rounded-[2.5rem] shadow-sm bg-white overflow-hidden group">
              <CardContent className="p-0">
                {item.reviewUrl && (
                  <div className="aspect-[16/10] w-full bg-slate-100 overflow-hidden relative">
                    {item.resourceType === "video" ? (
                      <video src={item.reviewUrl} className="w-full h-full object-cover" muted loop autoPlay playsInline />
                    ) : (
                      <img src={item.reviewUrl} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                    )}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-2">
                       <Zap size={12} className="text-blue-600 fill-blue-600" />
                       <span className="text-[10px] font-black uppercase text-slate-900 tracking-tighter">Live Project</span>
                    </div>
                  </div>
                )}
                <div className="p-10">
                  <Quote className="text-slate-100 mb-6" size={48} fill="currentColor" />
                  <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium italic">"{item.text}"</p>
                  
                  <div className="flex items-center gap-4 border-t border-slate-100 pt-8">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-sm font-black">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                        <span className="block text-base font-black text-slate-900 uppercase tracking-tight">{item.name}</span>
                        <span className="text-[10px] text-blue-600 font-black uppercase tracking-[0.2em]">Authorized Signatory</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>

      {/* Engineering Form Modal */}
      <AnimatePresence>
        {openForm && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white border border-slate-200 rounded-[3rem] p-12 max-w-lg w-full shadow-2xl relative">
              <button onClick={() => setOpenForm(false)} className="absolute top-8 right-8 text-slate-400 hover:text-black transition-colors">
                <X size={24} />
              </button>
              
              {status === "success" ? (
                <div className="text-center py-12 flex flex-col items-center">
                    <div className="w-24 h-24 bg-blue-50 rounded-3xl flex items-center justify-center mb-8 rotate-3">
                        <CheckCircle2 className="text-blue-600" size={48} />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 uppercase">Log Successful</h3>
                    <p className="text-slate-500 text-sm mt-4 font-bold uppercase tracking-tight">Your project data has been recorded.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-3xl font-black text-slate-900 mb-2 uppercase tracking-tight">Technical Log</h3>
                  <p className="text-slate-500 text-sm mb-10 font-bold uppercase tracking-widest">Post-Commissioning Feedback</p>
                  
                  <div className="space-y-5">
                    <input type="file" ref={fileInputRef} className="hidden" accept="image/*,video/*" onChange={handleFileSelect} />
                    
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full h-44 border-2 border-dashed border-slate-200 rounded-[2rem] flex flex-col items-center justify-center text-slate-400 hover:bg-slate-50 hover:border-blue-500 cursor-pointer overflow-hidden relative transition-all"
                    >
                      {preview ? (
                        file?.type.startsWith("video") ? (
                          <div className="flex flex-col items-center"><Film className="text-blue-600 mb-2" /><span className="text-[10px] font-black uppercase tracking-widest">Video Log Attached</span></div>
                        ) : (
                          <img src={preview} className="w-full h-full object-cover" alt="Preview" />
                        )
                      ) : (
                        <>
                          <div className="p-4 bg-blue-50 rounded-2xl mb-4"><Upload size={24} className="text-blue-600" /></div>
                          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Attach Project Image</span>
                        </>
                      )}
                    </div>

                    <input 
                      placeholder="Company / Client Name" 
                      value={name} onChange={(e) => setName(e.target.value)}
                      className="w-full px-8 py-5 bg-slate-50 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-blue-600/20 font-bold uppercase tracking-tight" 
                    />
                    <textarea 
                      placeholder="Technical Performance Summary..." 
                      rows={4} value={text} onChange={(e) => setText(e.target.value)}
                      className="w-full px-8 py-5 bg-slate-50 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-blue-600/20 resize-none font-bold uppercase tracking-tight" 
                    />
                    
                    <Button 
                      disabled={status === "uploading"} 
                      onClick={handleSubmit} 
                      className="w-full bg-blue-600 hover:bg-slate-900 h-16 rounded-2xl text-white font-black text-lg shadow-2xl shadow-blue-200 transition-all uppercase tracking-widest"
                    >
                      {status === "uploading" ? <Loader2 className="animate-spin" size={24} /> : "Submit Log"}
                    </Button>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
