"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Trash2, 
  Check, 
  PlayCircle, 
  MessageSquare, 
  Zap, 
  Settings, 
  ShieldCheck 
} from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

// Import your new form component
import AddServiceForm from "./AddServiceForm";

export default function AdminDashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/admin");
  };

  // DUMMY DATA: Solar & Electrical Services
  const [services] = useState([
    { id: "1", name: "On-Grid Solar System", category: "Solar", status: "Active", price: "45,000/kW" },
    { id: "2", name: "Hybrid Solar Setup", category: "Solar", status: "Active", price: "75,000/kW" },
    { id: "3", name: "Industrial Wiring", category: "Electrical", status: "Maintenance", price: "Quote Based" },
    { id: "4", name: "Solar Water Pump", category: "Solar", status: "Active", price: "32,000" },
  ]);

  const [userTestimonials] = useState([
    { id: "1", name: "Rajesh Kumar", role: "Factory Owner", text: "The industrial wiring setup was top-notch. Highly professional team.", approved: true },
    { id: "2", name: "Sita Sharma", role: "Homeowner", text: "Reduced my electricity bill by 80% with the On-Grid system!", approved: false },
  ]);

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans">
      {/* --- HERO SECTION --- */}
      <section className="bg-slate-900 text-white py-16 px-8 relative overflow-hidden mb-12">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <Zap className="w-64 h-64 -mr-16 -mt-16 text-blue-500" />
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl font-black uppercase tracking-tighter"
            >
              Service <span className="text-blue-500">Command</span>
            </motion.h1>
            <p className="text-slate-400 mt-2 font-medium">Control Volt Engineering's service catalog and feedback</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 bg-slate-800/50 p-3 rounded-2xl border border-white/5 backdrop-blur-md">
            {/* --- INTEGRATED ADD SERVICE FORM --- */}
            <AddServiceForm />
            
            <div className="h-8 w-px bg-slate-700 mx-2" />
            
            <Button 
              onClick={handleLogout} 
              variant="ghost" 
              className="text-slate-300 hover:text-white font-bold uppercase text-xs tracking-widest"
            >
              Log Out
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* --- SERVICES SECTION --- */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-2 rounded-lg shadow-lg shadow-blue-500/20">
              <Settings size={24} />
            </div>
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900">Active Services</h2>
          </div>

          <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl overflow-hidden">
            <CardContent className="p-0">
              <Table>
                <TableHeader className="bg-slate-100/50">
                  <TableRow className="hover:bg-transparent border-slate-200">
                    <TableHead className="font-bold text-slate-900 uppercase text-xs tracking-widest p-6">Category</TableHead>
                    <TableHead className="font-bold text-slate-900 uppercase text-xs tracking-widest">Service Name</TableHead>
                    <TableHead className="font-bold text-slate-900 uppercase text-xs tracking-widest text-center">Starting Price</TableHead>
                    <TableHead className="font-bold text-slate-900 uppercase text-xs tracking-widest text-center">Status</TableHead>
                    <TableHead className="font-bold text-slate-900 uppercase text-xs tracking-widest text-right p-6">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {services.map((s) => (
                    <TableRow key={s.id} className="group hover:bg-slate-50/50 transition-colors border-slate-100">
                      <TableCell className="p-6">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                          s.category === 'Solar' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'
                        }`}>
                          {s.category}
                        </span>
                      </TableCell>
                      <TableCell className="font-bold text-slate-800 text-lg">{s.name}</TableCell>
                      <TableCell className="text-center font-mono font-bold text-slate-600">{s.price}</TableCell>
                      <TableCell className="text-center">
                        <span className="flex items-center justify-center gap-1.5 text-xs font-bold text-green-600">
                          <ShieldCheck size={14} /> {s.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right p-6">
                        <div className="flex justify-end gap-2">
                          <Button size="icon" variant="ghost" className="rounded-xl text-red-400 hover:text-red-600 hover:bg-red-50">
                            <Trash2 size={20} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* --- TESTIMONIALS & REVIEWS GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Video Uploads */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-orange-500 text-white p-2 rounded-lg shadow-lg shadow-orange-500/20">
                <PlayCircle size={24} />
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900">Project Videos</h2>
            </div>
            <div className="space-y-4">
              {["Installation Highlights", "Client Interview - Solar"].map((video, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center justify-between group hover:shadow-lg transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-14 rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center relative">
                       <PlayCircle className="text-white/50" size={20} />
                    </div>
                    <span className="font-bold text-slate-800">{video}</span>
                  </div>
                  <Button size="icon" variant="ghost" className="text-red-400">
                    <Trash2 size={18} />
                  </Button>
                </div>
              ))}
            </div>
          </section>

          {/* User Testimonials */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-600 text-white p-2 rounded-lg shadow-lg shadow-green-500/20">
                <MessageSquare size={24} />
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900">Feedbacks</h2>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
              <div className="max-h-[500px] overflow-y-auto">
                {userTestimonials.map((t) => (
                  <div key={t.id} className="p-6 border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-100 border-2 border-white shadow-sm flex items-center justify-center text-slate-400 font-bold uppercase text-xs">
                           {t.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900">{t.name}</h4>
                          <p className="text-xs text-blue-600 font-bold uppercase tracking-wider">{t.role}</p>
                          <p className="text-sm text-slate-500 mt-2 italic">"{t.text}"</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        {!t.approved && (
                          <Button size="sm" className="bg-green-600 hover:bg-green-700 rounded-lg h-8 px-3 text-[10px] font-black uppercase">
                            <Check size={14} className="mr-1" /> Approve
                          </Button>
                        )}
                        <Button size="sm" variant="ghost" className="text-red-400 h-8 px-3 text-[10px] font-black uppercase">
                           Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
