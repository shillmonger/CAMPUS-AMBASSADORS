"use client";
import Image from "next/image";
import Header from "@/component/landing-page/header";
import Footer from "@/component/landing-page/footer";
import Events from "@/component/landing-page/our-events";
import About from "@/component/landing-page/about-us";
import Partners from "@/component/landing-page/partners";
import Speakers from "@/component/landing-page/speakers";
import Collaborators from "@/component/landing-page/collaborators";
import AnnouncementModal from "@/component/landing-page/AnnouncementModal";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <AnnouncementModal />
      <Header />



{/* Hero section */}
      <main className="relative flex flex-1 min-h-screen overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://i.postimg.cc/HWSLv5Kw/1.jpg"
            alt="Startup Abuja Hero Background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Content wrapper — full height, padded */}
        <div className="relative z-10 w-full max-w-8xl mx-auto px-4 py-10 pt-30 lg:px-30 lg:py-30 flex flex-col justify-center min-h-screen">

          {/* Brand name — top left, like in the image */}
          <p className="mb-5 text-sm lg:text-base font-extrabold tracking-[0.25em] text-white uppercase">
            Campus Ambassador Community
          </p>

          {/* Bottom section: headline + stats side by side */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mt-auto pt-8">

            {/* Left: Headline + description + buttons */}
            <div className="max-w-5xl">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
                Empowering the Next Generation of{" "}
                <span className="text-[#25D366]">Campus Leaders Across Africa</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300 md:text-xl">
                Join a fast-growing community of student ambassadors building careers in tech, marketing, and leadership while working with top brands.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/landing-page/innovation-challenge"
                  className="inline-flex h-13 items-center justify-center rounded-lg bg-[#25D366] px-7 py-3 text-base font-bold text-black transition-transform hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  Register for the Next Event
                </a>
                <a
                  href="#"
                  className="inline-flex h-13 items-center justify-center rounded-lg border-2 border-white px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-white hover:text-black whitespace-nowrap"
                >
                  Join the Accelerator Community
                </a>
              </div>
            </div>

            {/* Right: Stats card — bottom right, like in the image */}
            <div className="w-full sm:w-72 shrink-0 rounded-xl bg-white/10 backdrop-blur-md p-7 border border-white/10">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
                Stats Overview
              </p>
              <div className="space-y-5">
                <div>
                  <p className="text-4xl font-extrabold text-[#25D366]">125k+</p>
                  <p className="mt-1 text-sm text-zinc-400">OVER 125k CAMPUS AMBASSADORS IN NIGERIA </p>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <p className="text-4xl font-extrabold text-[#25D366]">7+</p>
                  <p className="mt-1 text-sm text-zinc-400">PARTNERED WITH OVER 7+ BRANDS/COMPANY</p>
                </div>
              </div>
            </div>

          </div>
        </div>




      </main>


      <Events />
      <About />
      <Partners />
      <Speakers />
      <Collaborators />


      <Footer />
    </div>
  );
}