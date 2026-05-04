"use client";
import Image from "next/image";
import Link from "next/link";

export default function Collaborators() {
  const collaboratorLogos = [
    "https://i.postimg.cc/V6tCTwDL/1.png",
    "https://i.postimg.cc/wBCtDPHw/2.png",
    "https://i.postimg.cc/Y9QvR3CS/3.png",
    "https://i.postimg.cc/C5NzTx8W/4.png",
    "https://i.postimg.cc/WbNdm0L1/5.png",
    "https://i.postimg.cc/CxddXYx6/6.png",
    "https://i.postimg.cc/T3ShXSyc/7.png",
    "https://i.postimg.cc/DZ3ZSXdD/8.png",
    "https://i.postimg.cc/wv5BLjwh/9.png",
    "https://i.postimg.cc/RhMZRx89/10.png",
  ];

  return (
    <section className="bg-white pb-30">
      <div className="mx-auto w-full max-w-8xl px-4 lg:px-30">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start">
          
          {/* Left Content Column */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold tracking-tight text-black md:text-3xl">
              Collaborators
            </h2>
            <h3 className="mt-4 text-xl font-medium text-[#25D366]">
              Who you'll meet
            </h3>
            
            <ul className="mt-8 space-y-4">
              {[
                "Startups seeking business and growth solutions",
                "Organizations supporting startup ecosystems",
                "Innovative teams in the tech and business space",
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-lg text-zinc-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                  {text}
                </li>
              ))}
            </ul>

            <p className="mt-10 text-lg leading-relaxed text-zinc-500">
              We work with partners dedicated to helping startups make informed, strategic decisions. If that's you, let's talk.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#"
                className="cursor-pointer rounded-lg bg-[#25D366] px-5 py-3 text-center font-bold text-white transition-transform hover:scale-105 active:scale-95"
              >
                Partner With Us
              </Link>
              <Link
                href="#"
                className="cursor-pointer rounded-lg border-2 border-zinc-200 px-5 py-3 text-center font-bold text-black transition-all hover:border-[#25D366] hover:text-[#25D366]"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Logo Grid Column */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {collaboratorLogos.map((url, index) => (
                <div
                  key={index}
                  className="group relative flex h-25 items-center justify-center rounded-xl border border-zinc-100 bg-white p-6 shadow-sm transition-all hover:border-[#25D366]/30 hover:shadow-md"
                >
                  <div className="relative cursor-pointer h-full w-full grayscale-0 transition-all group-hover:grayscale">
                    <Image
                      src={url}
                      alt={`Collaborator ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}