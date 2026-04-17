"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Play } from "lucide-react";

type Testimonial = {
  _id: string;
  name: string;
  role: string;
  videoUrl: string;
};

export default function VideoTestimonials() {
  const [videos, setVideos] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [mutedStates, setMutedStates] = useState<{ [key: string]: boolean }>({});
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const res = await fetch("/api/admin/video-testimonials");
        const data = await res.json();
        // Shuffle and take 6
        const shuffled = data.sort(() => Math.random() - 0.5).slice(0, 6);
        setVideos(shuffled);
        
        // Initialize all as muted
        const initialMuted = shuffled.reduce((acc: any, curr: Testimonial) => {
          acc[curr._id] = true;
          return acc;
        }, {});
        setMutedStates(initialMuted);
      } catch (error) {
        console.error("Failed to load testimonials");
      } finally {
        setLoading(false);
      }
    };
    loadTestimonials();
  }, []);

  useEffect(() => {
    if (videos.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });
    return () => observer.disconnect();
  }, [videos]);

  const toggleMute = (id: string, index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.muted = !video.muted;
      setMutedStates((prev) => ({ ...prev, [id]: video.muted }));
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">
              Real Stories. <br />
              <span className="text-green-600">Real Results.</span>
            </h2>
            <p className="mt-6 text-lg text-slate-500 font-medium">
              See how our community is transforming their hair health with science-backed natural solutions.
            </p>
          </div>
          <div className="hidden md:block bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100">
             <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Verified Transformations</p>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
             {[...Array(6)].map((_, i) => (
               <div key={i} className="aspect-[9/16] bg-slate-100 animate-pulse rounded-[2rem]" />
             ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {videos.map((item, index) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-[9/16] rounded-[2rem] overflow-hidden bg-slate-900 shadow-2xl"
              >
                {/* Video Component */}
                <video
                  ref={(el) => { if (el) videoRefs.current[index] = el; }}
                  src={item.videoUrl}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out cursor-pointer"
                  onClick={() => toggleMute(item._id, index)}
                />

                {/* Glass Overlay UI */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none">
                  <h4 className="text-white font-bold text-lg leading-tight">{item.name}</h4>
                  <p className="text-green-400 text-[10px] font-black uppercase tracking-widest mt-1">
                    {item.role || "Verified User"}
                  </p>
                </div>

                {/* Mute/Unmute Toggle Indicator */}
                <button 
                  onClick={() => toggleMute(item._id, index)}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20 hover:bg-white/20 transition-all"
                >
                  {mutedStates[item._id] ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>

                {/* Play Icon (Visible when paused/unfocused) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="p-4 bg-green-600/20 backdrop-blur-sm rounded-full text-white border border-green-500/50">
                      <Play size={24} fill="currentColor" />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
            <p className="text-slate-400 font-medium italic">
               "Nature's relief, backed by science."
            </p>
        </div>
      </div>
    </section>
  );
}
