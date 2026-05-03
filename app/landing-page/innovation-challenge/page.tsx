import React from "react";
import Image from "next/image";
import Header from "@/component/landing-page/header";
import Footer from "@/component/landing-page/footer";
import {
  Trophy,
  CheckCircle2,
  Globe,
  Lightbulb,
  Settings,
  Users,
  Info,
  Calendar,
  ArrowRightCircle,
} from "lucide-react";

const InnovationChallengePage = () => {
  // const WhyJoinSection = () => {
  const benefits = [
    "Over ₦100 million worth of prizes (cash + AWS credits + mentorship + business support)",
    "Access to at least ₦1,500,000 in AWS credits via Transnet Cloud",
    "Mentorship, visibility, and investor-readiness support",
    "Free AWS-powered environment to build during the innovation challenge",
  ];

  // const PrizeAndEligibility = () => {
  const prizes = [
    {
      place: "1st Place",
      value: "₦10 million value",
      details: [
        "₦5M Cash",
        "₦4M AWS Credits",
        "₦1M Business Mentorship/Training",
      ],
      color: "border-orange-400",
    },
    {
      place: "2nd Place",
      value: "₦8 million value",
      details: [
        "₦3M Cash",
        "₦4M AWS Credits",
        "₦1M Business Mentorship/Training",
      ],
      color: "border-zinc-400",
    },
    {
      place: "3rd Place",
      value: "₦7 million value",
      details: [
        "₦2M Cash",
        "₦4M AWS Credits",
        "₦1M Business Mentorship/Training",
      ],
      color: "border-orange-300",
    },
  ];

  const categories = [
    "EduTech",
    "HealthTech",
    "FinTech",
    "AgroTech",
    "Web3 / Blockchain",
    "E-commerce",
    "SaaS",
    "Logistics / Transportation",
    "Real Estate",
    "And more...",
  ];

  const details = [
    {
      title: "Application Deadline",
      desc: "Application is open and will close on Sunday, 31st May 2026 by 11:59pm.",
      icon: <Calendar className="text-[#25D366]" size={20} />,
    },
    {
      title: "Active Digital Presence",
      desc: "Please ensure that your domain, website, and custom email remain active throughout the duration of the innovation challenge.",
      icon: <Globe className="text-[#25D366]" size={20} />,
    },
    {
      title: "Next Steps",
      desc: "If you qualify for the next stage, we will reach out to you directly after the application window closes.",
      icon: <ArrowRightCircle className="text-[#25D366]" size={20} />,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* --- FULL-WIDTH HERO SECTION --- */}
        <section className="relative h-[100vh] w-full overflow-hidden bg-zinc-900 lg:h-screen">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://i.postimg.cc/yxSqx55Y/Corporate-Event-2.jpg"
              alt="Startup Innovation Challenge Background"
              fill
              className="object-cover opacity-60"
              priority
            />
            {/* Gradient to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex h-full items-center justify-center text-center">
            <div className="w-full px-4 lg:px-30">
              <div className="mx-auto max-w-6xl">
                {/* Partnership Text */}
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#25D366] md:text-base lg:text-lg">
                  Startup Abuja in Partnership with Transnet Cloud & AWS
                  present.
                </h3>

                {/* Main Title */}
                <h1 className="mt-6 text-5xl font-black leading-tight text-white md:text-7xl lg:text-8xl">
                  Startup Innovation Challenge
                  <span className="text-[#25D366]"> 2026</span>
                </h1>

                {/* Subtext */}
                <p className="mx-auto mt-8 max-w-3xl text-lg font-medium text-zinc-200 md:text-xl lg:text-2xl">
                  An online innovation challenge and business growth experience
                  for startups, SMEs, tech innovators, and entrepreneurs across
                  Nigeria.
                </p>

                {/* CTA Button */}
                <div className="mt-12">
                  <button className="rounded-xl cursor-pointer bg-[#25D366] px-5 py-3 text-base font-bold text-white transition-transform hover:scale-105 active:scale-95">
                    Apply Now — It&apos;s Free!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section className="bg-white py-20 lg:px-30">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
            {/* Left Side: Content */}
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl font-bold leading-tight text-[#075e54] md:text-4xl">
                Why You Shouldn't Miss This Opportunity
              </h2>

              <ul className="space-y-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-[#25D366]" />
                    <p className="text-lg font-medium text-zinc-600 md:text-lg">
                      {benefit}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side: Poster Image with Fixed Height Control */}
            <div className="flex-1 flex justify-center w-full">
              <div className="relative overflow-hidden rounded-[32px] shadow-2xl transition-transform duration-500 hover:scale-[1.02] bg-zinc-50">
                <div className="relative h-full max-h-[550px] w-full overflow-hidden">
                  <Image
                    src="https://i.postimg.cc/mZppYNJv/1.jpg"
                    alt="Startup Innovation Challenge Poster"
                    width={800}
                    height={1000}
                    className="h-full w-full object-contain"
                    style={{ maxHeight: "550px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        {/* --- TOP PART: PRIZE CATEGORIES --- */}
        <div className="bg-[#f0f9f4] py-10 lg:px-30">
          <div className="container mx-auto px-4 lg:px-0">
            <div className="mb-12 flex items-center justify-center gap-3">
              {/* <Trophy className="text-[#25D366]" size={32} /> */}
              <h2 className="text-3xl font-bold text-[#075e54]">
                Prize Categories (Equity-free)
              </h2>
            </div>

            {/* Top 3 Prizes */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {prizes.map((prize, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl bg-white p-8 shadow-sm ${prize.color}`}
                >
                  <h4 className="text-center text-lg font-bold text-orange-500">
                    {prize.place}
                  </h4>
                  <p className="mt-2 text-center text-2xl font-black text-zinc-800">
                    {prize.value}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {prize.details.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm font-medium text-zinc-500"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-zinc-800" />{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Secondary Prizes */}
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-2xl border-[#25D366] bg-white p-8 shadow-sm">
                <h4 className="text-center text-lg font-bold text-orange-500">
                  10 Runner-Ups
                </h4>
                <p className="mt-2 text-center text-2xl font-black text-zinc-800">
                  ₦8 million value
                </p>
                <ul className="mt-4 flex flex-col items-center gap-2 text-sm font-medium text-zinc-500">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-zinc-800" />{" "}
                    ₦200,000 Cash
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-zinc-800" />{" "}
                    ₦1.5M AWS Credits each person/team
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border-orange-400 bg-white p-8 shadow-sm flex flex-col justify-center">
                <h4 className="text-center text-lg font-bold text-orange-500">
                  All selected participants
                </h4>
                <p className="mt-2 text-center text-2xl font-black text-zinc-800">
                  ₦500,000 worth of AWS credits
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM PART: CHALLENGE & ELIGIBILITY --- */}
        <div className="bg-white py-24 lg:px-30">
          <div className="container mx-auto px-4 lg:px-0">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Challenge Categories */}
              <div className="rounded-[32px] border-2 border-[#25D366] p-8 lg:p-12">
                <h3 className="mb-8 text-2xl font-black text-[#075e54]">
                  Challenge Categories :
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {categories.map((cat, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-[#25D366]/20 bg-[#f0f9f4]/50 px-5 py-3 font-semibold text-zinc-700"
                    >
                      {cat}
                    </div>
                  ))}
                </div>
              </div>

              {/* Who Can Apply */}
              <div className="rounded-[32px] border border-zinc-100 bg-white p-8 shadow-xl lg:p-12">
                <h3 className="mb-8 text-2xl font-black text-[#075e54]">
                  Who Can Apply :
                </h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <CheckCircle2
                      className="mt-1 flex-shrink-0 text-[#25D366]"
                      size={22}
                    />
                    <p className="text-zinc-600">
                      <strong>Both genders</strong> (age is not a restriction)
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <Users
                      className="mt-1 flex-shrink-0 text-[#25D366]"
                      size={22}
                    />
                    <p className="text-zinc-600">
                      <strong>Nigerian</strong> or any other Africans
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <Globe
                      className="mt-1 flex-shrink-0 text-[#25D366]"
                      size={22}
                    />
                    <p className="text-zinc-600">
                      <strong>Non-Africans</strong> building for the African
                      market
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <Lightbulb
                      className="mt-1 flex-shrink-0 text-[#25D366]"
                      size={22}
                    />
                    <p className="text-zinc-600">
                      Your solution is <strong>tech-enabled</strong>
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <Settings
                      className="mt-1 flex-shrink-0 text-[#25D366]"
                      size={22}
                    />
                    <p className="text-zinc-600">
                      You have at least a <strong>working prototype/MVP</strong>{" "}
                      for your solution (with a functional website)
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafa] py-24 lg:px-30">
        <div className="container mx-auto px-4 lg:px-0">
          {/* Section Header */}
          <div className="mb-12 flex items-center justify-center gap-2 text-[#075e54]">
            <h2 className="text-3xl font-black">Important Details</h2>
          </div>

          {/* Details Card */}
          <div className="mx-auto max-w-4xl rounded-[32px] bg-white p-8 shadow-sm border border-zinc-100 lg:p-16">
            <div className="space-y-12">
              {details.map((item, idx) => (
                <div key={idx} className="flex-col lg:flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#f0f9f4]">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-zinc-900">
                      {item.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-zinc-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA Area */}
          <div className="mt-24 text-center">
            <p className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-zinc-600">
              This is more than a competition — it&apos;s a gateway to funding,
              mentorship, visibility, and tools to build something impactful.
            </p>

            <div className="mt-10">
              <button className="rounded-xl cursor-pointer bg-[#25D366] px-5 py-3 text-base font-bold text-white transition-transform hover:scale-105 active:scale-95">
                Apply Now — It&apos;s Free!
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InnovationChallengePage;
