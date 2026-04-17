"use client";
import { useEffect, useRef, useState } from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
  FaUtensils,
} from "react-icons/fa";

export default function KetchupContact() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiryType, setInquiryType] = useState("Restaurant Bulk Order");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "917733999391";
    const whatsappMessage = `🍅 *New Flavor Inquiry: The Red Bottle Co.*\n\n👤 Name: ${name}\n📧 Email: ${email}\n🍴 Interest: ${inquiryType}\n📝 Message:\n${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-white px-6 scroll-mt-20 border-t border-red-50"
      id="contact-section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE: Brand Support Info */}
          <div
            className={`transition-all duration-1000 ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <p className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4">
              Direct Channel
            </p>
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-slate-900 tracking-tighter leading-[0.9]">
              Talk to our <br />
              <span className="text-red-600">Sauciers.</span>
            </h2>
            <p className="text-slate-500 text-lg mb-12 font-medium max-w-md">
              Looking for a custom batch for your restaurant or need to stock
              your shelves? Reach out for bulk pricing and tasting samples.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="bg-[#2D0A0A] p-4 rounded-2xl text-red-500 shadow-xl group-hover:bg-red-600 group-hover:text-white transition-all">
                    <FaPhoneAlt size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                      Call Our Kitchen
                    </p>
                    <p className="font-bold text-slate-900">+91 77339 99391</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-[#2D0A0A] p-4 rounded-2xl text-red-500 shadow-xl group-hover:bg-red-600 group-hover:text-white transition-all">
                    <FaEnvelope size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                      Email The Lab
                    </p>
                    <p className="font-bold text-slate-900 break-all">
                      hello@redbottle.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="bg-[#2D0A0A] p-4 rounded-2xl text-red-500 shadow-xl group-hover:bg-red-600 group-hover:text-white transition-all">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                      The Bottlery
                    </p>
                    <p className="font-bold text-slate-900">
                      Tomato Valley, Rajasthan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-[#2D0A0A] p-4 rounded-2xl text-red-500 shadow-xl group-hover:bg-red-600 group-hover:text-white transition-all">
                    <FaWhatsapp size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                      Squeeze Text
                    </p>
                    <p className="font-bold text-slate-900">
                      WhatsApp Active 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Flavor Inquiry Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#1a0505] p-10 md:p-14 rounded-[3rem] shadow-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-3xl rounded-full" />

              <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-tighter">
                Sample Request
              </h3>

              <div className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-red-200/40 ml-1">
                      Chef/Business Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-red-500 text-white transition-all text-sm"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-red-200/40 ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="chef@kitchen.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-red-500 text-white transition-all text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-[0.2em] text-red-200/40 ml-1">
                    Nature of Inquiry
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full bg-[#2D0A0A] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-red-500 text-white transition-all text-sm appearance-none cursor-pointer"
                  >
                    <option>Restaurant Bulk Order</option>
                    <option>Retail Partnership</option>
                    <option>Custom White Label</option>
                    <option>Just Saying Hello</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-[0.2em] text-red-200/40 ml-1">
                    Your Flavor Profile/Needs
                  </label>
                  <textarea
                    placeholder="Tell us about your kitchen or project..."
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-red-500 text-white transition-all text-sm resize-none"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-10 bg-red-600 hover:bg-white hover:text-red-950 text-white py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all duration-500 flex items-center justify-center gap-3 shadow-2xl shadow-red-500/20"
              >
                Send to the Saucier
                <FaWhatsapp size={18} />
              </button>

              <div className="mt-8 flex items-center justify-center gap-6 opacity-40">
                <div className="h-[1px] flex-1 bg-white/10" />
                <span className="text-[8px] font-black text-red-200/40 uppercase tracking-widest whitespace-nowrap">
                  FSSAI Certified Quality
                </span>
                <div className="h-[1px] flex-1 bg-white/10" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
