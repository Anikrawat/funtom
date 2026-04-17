"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Plus, Zap } from "lucide-react";
import toast from "react-hot-toast";
import { useState } from "react";

export default function AddServiceForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/admin/services", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error();

      toast.success("Service deployed successfully");
      window.location.reload();
    } catch {
      toast.error("Failed to add service");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest px-6 rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-95">
          <Plus className="mr-2 h-5 w-5 stroke-[3px]" />
          Add Service
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] bg-white rounded-[2rem] border-none shadow-2xl">
        <DialogHeader>
          <div className="bg-slate-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-blue-600">
            <Zap size={24} fill="currentColor" />
          </div>
          <DialogTitle className="text-2xl font-black uppercase tracking-tighter text-slate-900">
            New <span className="text-blue-600">Service</span> Entry
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-5 py-4">
          {/* Service Name (Full Width) */}
          <div className="grid gap-2">
            <Label className="font-bold uppercase text-[10px] tracking-widest text-slate-500">Service Name</Label>
            <Input 
              name="name" 
              placeholder="e.g., On-Grid Solar System" 
              className="rounded-xl border-slate-200 h-12 font-medium w-full" 
              required 
            />
          </div>

          {/* 50/50 Split for Category and Status */}
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="flex flex-col gap-2">
              <Label className="font-bold uppercase text-[10px] tracking-widest text-slate-500">Category</Label>
              <Select name="category" required defaultValue="Solar">
                <SelectTrigger className="w-full rounded-xl border-slate-200 h-12 font-medium bg-white">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Solar">Solar</SelectItem>
                  <SelectItem value="Electrical">Electrical</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <Label className="font-bold uppercase text-[10px] tracking-widest text-slate-500">Initial Status</Label>
              <Select name="status" required defaultValue="Active">
                <SelectTrigger className="w-full rounded-xl border-slate-200 h-12 font-medium bg-white">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Maintenance">Maintenance</SelectItem>
                  <SelectItem value="Coming Soon">Soon</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* 50/50 Split for Price and Unit */}
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="flex flex-col gap-2">
              <Label className="font-bold uppercase text-[10px] tracking-widest text-slate-500">Starting Price</Label>
              <Input 
                name="price" 
                placeholder="45,000" 
                className="rounded-xl border-slate-200 h-12 font-mono w-full" 
                required 
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="font-bold uppercase text-[10px] tracking-widest text-slate-500">Unit (e.g. /kW)</Label>
              <Input 
                name="unit" 
                placeholder="/kW" 
                className="rounded-xl border-slate-200 h-12 font-medium w-full" 
              />
            </div>
          </div>

          <Button 
            type="submit" 
            disabled={loading}
            className="w-full bg-slate-900 hover:bg-blue-600 text-white h-14 rounded-2xl font-black uppercase tracking-widest transition-colors mt-2"
          >
            {loading ? "Processing..." : "Deploy Service"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
