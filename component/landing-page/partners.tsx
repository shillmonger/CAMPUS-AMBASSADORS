"use client";

import Image from "next/image";

export default function PartnersAndVideo() {
  // Add your logo URLs here
  const partnerLogos = [
    { name: "Cbtportal", url: "/logo1.png" },
    { name: "TransNet", url: "/logo2.png" },
    { name: "Gov Anambra", url: "/logo3.png" },
    { name: "Uni Nigeria", url: "/logo4.png" },
    { name: "Federal Uni", url: "/logo5.png" },
    { name: "Ibrahim Uni", url: "/logo6.png" },
    { name: "State Uni", url: "/logo7.png" },
  ];

  return (
    <section className="bg-white">
      {/* --- Partners Sliding Section --- */}
      <div className="pt-30">
        <div className="mx-auto w-full max-w-8xl px-4 lg:px-30">
          <h2 className="mb-12 text-center text-4xl font-bold text-black md:text-4xl">
            Our Partners
          </h2>
        </div>

        {/* Infinite Slider Container */}
        <div className="group relative flex overflow-x-hidden border-y border-zinc-100 py-10">
          <div className="animate-marquee flex whitespace-nowrap gap-16 items-center">
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
              <div key={index} className="relative h-12 w-48 flex-shrink-0 grayscale transition-all hover:grayscale-0 cursor-pointer">
                <Image
                  src={logo.url}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
                {/* Visual indicator for missing URLs */}
                <div className="absolute inset-0 flex items-center justify-center text-[10px] text-zinc-400 opacity-20">
                  {logo.name} URL
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- Equity-Free Grant Section (Video) --- */}
      <div className="bg-black py-10 text-white">
        <div className="mx-auto w-full max-w-8xl px-4 lg:px-30">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Our Equity-Free
                <span className="text-[#25D366]"> Grant Beneficiaries</span>
              </h2>
              <a 
                href="https://www.youtube.com/embed/IAdUr0foYEg?si=9HvyH8AEwWLn3iLb&amp;controls=0"
                target="_blank"
                className="w-full lg:w-auto mt-10 inline-flex cursor-pointer items-center justify-center rounded-lg bg-[#25D366] px-10 py-3 text-lg font-bold text-black transition-transform hover:scale-105 active:scale-95"
              >
                Watch Now
              </a>
            </div>

            {/* Right Video - Embedded YouTube */}
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl lg:w-1/2">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/IAdUr0foYEg"
                  title="Startup Abuja EduTech Conference"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Custom Styles for the Infinite Marquee */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}