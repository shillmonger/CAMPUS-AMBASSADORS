"use client";

import Image from "next/image";

export default function PartnersAndVideo() {
  // Add your logo URLs here
  const partnerLogos = [
    { name: "Kokomo-Games", url: "https://i.postimg.cc/BQFDDMYm/Kokomo-Games.jpg" },
    { name: "Young-Innovators", url: "https://i.postimg.cc/FHgLC1QL/Young-Innovators-Nigeria.jpg" },
    { name: "Cowrywise", url: "https://i.postimg.cc/SKgzq5RL/Cowrywise.jpg" },
    { name: "Monochrome", url: "https://i.postimg.cc/bdfZ3fC6/Monochrome-Travel-App.jpg" },
    { name: "Kegow-App", url: "https://i.postimg.cc/FF8ngFmg/Kegow-App.jpg" },
    { name: "Kokomo-Games", url: "https://i.postimg.cc/BQFDDMYm/Kokomo-Games.jpg" },
    { name: "Young-Innovatorns", url: "https://i.postimg.cc/FHgLC1QL/Young-Innovators-Nigeria.jpg" },
    { name: "Cowrywise", url: "https://i.postimg.cc/SKgzq5RL/Cowrywise.jpg" },
    { name: "Monochrome", url: "https://i.postimg.cc/bdfZ3fC6/Monochrome-Travel-App.jpg" },
    { name: "Kegow-App", url: "https://i.postimg.cc/FF8ngFmg/Kegow-App.jpg" },
  ];

  return (
    <section className="bg-white">
      {/* --- Partners Sliding Section --- */}
      <div className="pt-30">
        <div className="mx-auto w-full max-w-8xl px-4 lg:px-30">
          <h2 className="mb-12 text-center text-2xl font-bold text-black md:text-3xl">
            Our Partners
          </h2>
        </div>

        {/* Infinite Slider Container */}
        <div className="group relative flex overflow-x-hidden border-y border-zinc-100 py-10">
          <div className="animate-marquee flex whitespace-nowrap items-center">
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg overflow-hidden hover:border-[#25D366] hover:shadow-2xl hover:shadow-[#25D366]/20 p-4 min-w-[140px] max-w-[140px]">
                  {/* Logo Container */}
                  <div className="relative h-16 w-16 mx-auto mb-3">
                    <Image
                      src={logo.url}
                      alt={logo.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {/* Partner Name */}
                  <div className="text-center">
                    <p className="text-xs font-semibold text-gray-700 line-clamp-2 leading-tight">
                      {logo.name.replace(/-/g, ' ')}
                    </p>
                  </div>
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
              <h2 className="text-3xl font-bold leading-tight md:text-5xl">
                Our Equity-Free
                <span className="text-[#25D366]"> Grant Beneficiaries</span>
              </h2>
              <a 
                href="https://www.youtube.com/embed/IAdUr0foYEg?si=9HvyH8AEwWLn3iLb&amp;controls=0"
                target="_blank"
                className="w-full lg:hidden lg:w-auto mt-10 inline-flex cursor-pointer items-center justify-center rounded-lg bg-[#25D366] px-10 py-3 text-sm lg:text-lg font-bold text-white transition-transform hover:scale-105 active:scale-95"
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
