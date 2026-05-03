"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type EventItem = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  buttonText: string;
};

export default function OurEvents() {
  const [activeTab, setActiveTab] = useState<"hire" | "community">("hire");
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // On mobile, clientWidth is the width of one full card (100% width)
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const hireUsData: EventItem[] = [
    {
      id: 1,
      subtitle: "STARTUP ABUJA CONSULTANCY",
      title: "Corporate Innovation Training",
      description: "Scale your team's potential with our specialized training programs designed for modern African enterprises.",
      imageUrl: "https://i.postimg.cc/mZppYNJv/1.jpg",
      buttonText: "Hire Us Now",
    },
    {
      id: 2,
      subtitle: "STARTUP ABUJA SERVICES",
      title: "MVP Development Lab",
      description: "Hire our expert developers to turn your idea into a functional Minimum Viable Product in record time.",
      imageUrl: "https://i.postimg.cc/zBXpWVjw/2.jpg",
      buttonText: "Hire Us Now",
    },
  ];

  const communityData: EventItem[] = [
    {
      id: 1,
      subtitle: "STARTUP ABUJA CONSULTANCY",
      title: "Corporate Innovation Training",
      description: "Scale your team's potential with our specialized training programs designed for modern African enterprises.",
      imageUrl: "https://i.postimg.cc/YCqkyxbp/1.jpg",
      buttonText: "Join Us Now",
    },
    {
      id: 2,
      subtitle: "STARTUP ABUJA SERVICES",
      title: "MVP Development Lab",
      description: "Hire our expert developers to turn your idea into a functional Minimum Viable Product in record time.",
      imageUrl: "https://i.postimg.cc/hjxq7ZPZ/2.jpg",
      buttonText: "Join Us Now",
    },
    {
      id: 3,
      subtitle: "STARTUP ABUJA CONSULTANCY",
      title: "Corporate Innovation Training",
      description: "Scale your team's potential with our specialized training programs designed for modern African enterprises.",
      imageUrl: "https://i.postimg.cc/gk4bRZmL/3.jpg",
      buttonText: "Join Us Now",
    },
    {
      id: 4,
      subtitle: "STARTUP ABUJA SERVICES",
      title: "MVP Development Lab",
      description: "Hire our expert developers to turn your idea into a functional Minimum Viable Product in record time.",
      imageUrl: "https://i.postimg.cc/kgDzbYTV/4.jpg",
      buttonText: "Join Us Now",
    },
    {
      id: 5,
      subtitle: "STARTUP ABUJA CONSULTANCY",
      title: "Corporate Innovation Training",
      description: "Scale your team's potential with our specialized training programs designed for modern African enterprises.",
      imageUrl: "https://i.postimg.cc/sXPNrk2g/5.jpg",
      buttonText: "Join Us Now",
    },
  ]

  const currentData = activeTab === "hire" ? hireUsData : communityData;

  return (
    <section className="bg-white pt-20">
      <div className="mx-auto w-full max-w-8xl px-4 lg:px-30">
        
        {/* Header Section */}
        <div className="mb-12 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-black">Our Events</h2>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setActiveTab("hire")}
                className={`cursor-pointer rounded-full px-6 py-2 text-sm font-semibold transition-all hover:opacity-80 ${
                  activeTab === "hire" 
                  ? "bg-[#25D366] text-black" 
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                }`}
              >
                Hire us
              </button>
              <button
                onClick={() => setActiveTab("community")}
                className={`cursor-pointer rounded-full px-6 py-2 text-sm font-semibold transition-all hover:opacity-80 ${
                  activeTab === "community" 
                  ? "bg-[#25D366] text-black" 
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                }`}
              >
                Join our Community
              </button>
            </div>
          </div>

          {/* Navigation Arrows - Desktop Only */}
          <div className="hidden gap-2 md:flex">
            <button
              onClick={() => scroll("left")}
              className="cursor-pointer flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-colors hover:bg-[#25D366] hover:text-black"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="cursor-pointer flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-colors hover:bg-[#25D366] hover:text-black"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Scrolling Cards Area */}
        <div 
          ref={scrollRef}
          className="no-scrollbar flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory"
        >
          {currentData.map((item) => (
            <div 
              key={item.id} 
              className="w-full flex-shrink-0 snap-start overflow-hidden rounded-2xl border border-zinc-200 bg-white md:w-[750px]"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Placeholder */}
                <div className="relative h-64 w-full md:h-auto md:w-80">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 -z-10 bg-zinc-100 flex items-center justify-center text-zinc-400 text-xs px-4 text-center italic">
                    Add image URL here
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-center p-5 md:p-10">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#25D366]">
                    {item.subtitle}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-black md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-zinc-600 leading-relaxed">
                    {item.description}
                  </p>
                  <button
                    className="cursor-pointer w-full lg:w-auto md:w-auto mt-8 rounded-lg bg-[#25D366] px-8 py-3 font-bold text-sm lg:text-base text-white transition-transform hover:scale-105 active:scale-95"
                  >
                    {item.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Mobile Only */}
        <div className="flex justify-center gap-5 md:hidden">
          <button
            onClick={() => scroll("left")}
            className="cursor-pointer flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-600 transition-colors hover:bg-[#25D366] hover:text-black"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="cursor-pointer flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-600 transition-colors hover:bg-[#25D366] hover:text-black"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}