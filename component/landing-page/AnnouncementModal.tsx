"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

export default function AnnouncementModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Automatically show the popup after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 lg:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl">
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://i.postimg.cc/zvm2KdHL/hero-image.jpg" 
            alt="Event Background"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>

        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute right-4 cursor-pointer top-4 z-20 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-6 py-16 text-center lg:px-20 lg:py-20">
          <h3 className="text-sm font-bold uppercase tracking-widest text-[#25D366] lg:text-base">
            Startup Abuja in Partnership with Transnet Cloud & AWS presents.
          </h3>
          
          <h1 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
            Startup Innovation <br /> 
            <span className="text-[#25D366]">Challenge 2026</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg font-medium text-zinc-300 lg:text-xl">
            An online innovation challenge and business growth experience for startups, SMEs, tech innovators, and entrepreneurs across Nigeria.
          </p>
 

 <Link href="/landing-page/innovation-challenge" >
          <button className="mt-10 cursor-pointer rounded-full bg-[#25D366] px-10 py-3 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95">
            Learn More & Apply
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}