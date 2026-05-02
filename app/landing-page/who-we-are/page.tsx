"use client";

import Image from "next/image";
import Header from "@/component/landing-page/header";
import Footer from "@/component/landing-page/footer";
import {
  CheckCircle2,
  Target,
  Eye,
  Rocket,
  Users,
  Briefcase,
  GraduationCap,
  BarChart3,
} from "lucide-react";

export default function WhoWeAre() {
  const coreValues = [
    {
      title: "Empowerment",
      desc: "Equipping startups with knowledge and tools.",
    },
    {
      title: "Collaboration",
      desc: "Fostering connections that drive innovation.",
    },
    {
      title: "Integrity",
      desc: "Upholding transparency and ethical standards.",
    },
    {
      title: "Inclusivity",
      desc: "Embracing diverse perspectives and backgrounds.",
    },
    { title: "Impact", desc: "Creating meaningful change for society." },
    {
      title: "Excellence",
      desc: "Delivering high-quality programs and services.",
    },
  ];

  const whatWeDo = [
    {
      title: "Conferences & Events",
      icon: <Users size={24} />,
      desc: "High-impact gatherings bringing together entrepreneurs, investors, and industry experts to spark collaboration.",
    },
    {
      title: "SME Training",
      icon: <GraduationCap size={24} />,
      desc: "Practical, hands-on training for building scalable products and understanding financial business models.",
    },
    {
      title: "Mentorship & Funding",
      icon: <Briefcase size={24} />,
      desc: "Connecting startups with experienced advisors to refine strategy, validate ideas, and unlock access to grants.",
    },
    {
      title: "Research & Repository",
      icon: <BarChart3 size={24} />,
      desc: "Maintaining an ecosystem repository that supports data-driven decisions for founders and industry players.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 pt-0">
       {/* --- FULL-WIDTH HERO SECTION --- */}
<section className="relative w-full h-[60vh] lg:h-[85vh] overflow-hidden bg-zinc-900">
  {/* The Image: Now truly 100% width and height of the container */}
  <Image
    src="https://i.postimg.cc/L6yk5wmw/4.jpg"
    alt="Startup Abuja Conference"
    fill
    className="object-cover object-center"
    priority
  />

  {/* Multiple Overlays for Depth */}
  <div className="absolute inset-0 bg-black/40" /> {/* Darkens the whole image slightly */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

  {/* Content Container: Aligned with your 30px global padding */}
  <div className="absolute inset-0 flex items-end pb-12 lg:pb-24">
    <div className="w-full px-4 lg:px-30">
      <div className="max-w-4xl">
        <h1 className="text-5xl font-black tracking-tighter text-white md:text-7xl lg:text-8xl">
          Who We <span className="text-[#25D366]">Are</span>
        </h1>
        
        <div className="mt-6 flex items-center gap-4">
          <div className="hidden lg:block h-1.5 w-24 rounded-full bg-[#25D366]" />
          <p className="text-lg font-medium text-zinc-300 md:text-xl max-w-xl">
            Driving innovation and empowering founders across the African continent.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* --- INTRO & WHAT WE DO SECTION --- */}
        <section className="px-4 py-16 lg:px-30">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-black">
                Empowering the next generation of{" "}
                <span className="text-[#25D366]">African Founders.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-zinc-600">
                Startup Abuja is a social enterprise and accelerator platform
                dedicated to empowering startups, SMEs, and emerging founders.
                We facilitate meaningful connections, structured training,
                mentorship, and market access to accelerate Africa's dynamic
                startup ecosystem.
              </p>

              <div className="mt-12 space-y-4">
                {[
                  "Conferences & ecosystem events",
                  "Training programs",
                  "Accelerator-style mentorship",
                  "A growing startup directory and resource hub",
                  "Exposure to investors, partners, and funding opportunities",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#25D366]" size={20} />
                    <span className="font-medium text-zinc-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid gap-6 content-start">
              <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-8 transition-all hover:border-[#25D366]/20 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
                  <Eye size={28} />
                </div>
                <h3 className="text-xl font-bold text-black">
                  Vision Statement
                </h3>
                <p className="mt-2 text-zinc-600">
                  To promote a thriving startup and technology ecosystem in
                  Nigeria and across Africa.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-8 transition-all hover:border-[#25D366]/20 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
                  <Target size={28} />
                </div>
                <h3 className="text-xl font-bold text-black">
                  Mission Statement
                </h3>
                <p className="mt-2 text-zinc-600">
                  To champion and strengthen the technology and startup
                  ecosystems by serving as catalysts for innovation and
                  investment.
                </p>
              </div>
            </div>
          </div>

          {/* WHAT WE DO (Added Content) */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-black mb-6">What We Do</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {whatWeDo.map((item, idx) => (
                <div
                  key={idx}
                  className="group rounded-xl border border-zinc-100 p-5 transition-all hover:bg-zinc-50"
                >
                  <div className="mb-3 text-[#25D366] group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-black text-lg uppercase tracking-wide">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-zinc-600 leading-relaxed text-zinc-500">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CORE VALUES GRID --- */}
        <section className="bg-black px-4 py-20 lg:px-30">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white">Our Core Values</h2>
            <p className="mt-2 text-zinc-400">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-white/5 bg-white/5 p-6 transition-colors hover:bg-white/10"
              >
                <h4 className="text-lg font-bold text-[#25D366]">
                  {value.title}
                </h4>
                <p className="mt-1 text-sm text-zinc-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- GALLERY SECTION --- */}
        <section className="px-4 py-20 lg:px-30">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold text-black">
                Impact in Action
              </h2>
              <p className="text-zinc-500">
                Snapshots from our recent ecosystem gatherings.
              </p>
            </div>
            <div className="hidden h-px flex-1 bg-zinc-100 mx-8 lg:block" />
            <Rocket className="text-[#25D366]" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              "https://i.postimg.cc/sgqp9WQm/1.jpg",
              "https://i.postimg.cc/yxKR95Bt/2.jpg",
              "https://i.postimg.cc/2SsZBfMK/3.jpg",
            ].map((img, idx) => (
              <div
                key={idx}
                className="group relative aspect-video overflow-hidden rounded-2xl bg-zinc-100 shadow-md"
              >
                <Image
                  src={img}
                  alt={`Gallery ${idx}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
