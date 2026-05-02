"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Rocket, Info, FileText } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Ongoing");
  const [eventTab, setEventTab] = useState("Upcoming");
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const projectCategories = {
    Past: ["Completed Accelerator 2025", "Past Innovation Hub"],
    Ongoing: [
      "Innovation Challenge",
      "The Agentic AI Innovation Challenge",
      "SME & Development Program",
      "Public Sector Digitalization",
    ],
    Future: ["2027 Tech Summit Planning", "Upcoming Green Energy Initiative"],
  };

  // const eventCategories = {
  //   Upcoming: [
  //     "Community Meetup",
  //     "EduTech Conference 2026",
  //     "Investor Pitch Day",
  //   ],
  //   Past: ["Founder Workshop", "Demo Day 2025", "Networking Night"],
  // };

  const aboutLinks = [
    { name: "Our Team", href: "/landing-page/team" },
    { name: "Who We Are", href: "/landing-page/who-we-are" },
  ];

  const reportLinks = [
    { name: "Startup Abuja Conference", href: "https://www.startupabuja.com.ng/reports/event1.pdf" },
    { name: "Startup Abuja Event Organizer Conference", href: "https://www.startupabuja.com.ng/reports/event_organizer.pdf" },
  ];

  const toggleMobileDropdown = (name: string) => {
    setMobileDropdown(mobileDropdown === name ? null : name);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-white/10 bg-black backdrop-blur-md">
      <div className="mx-auto w-full max-w-8xl px-4 lg:px-30">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="relative h-10 w-32">
                <Image
                  src="/your-logo-url-here.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {/* About Us Dropdown */}
            <div className="group relative">  
              <button className={`flex items-center cursor-pointer gap-1 text-sm font-medium transition-colors ${
                pathname?.startsWith('/landing-page/team') || pathname?.startsWith('/landing-page/who-we-are')
                  ? 'text-[#25D366]'
                  : 'text-white hover:text-[#25D366]'
              }`}>
                About Us{" "}
                <ChevronDown
                  size={14}
                  className="transition-transform group-hover:rotate-180"
                />
              </button>
              <div className="invisible absolute left-0 top-full w-48 pt-4 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                <div className="rounded-xl border border-white/10 bg-[#0A0C10] p-2 shadow-2xl">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm transition-colors ${
                        pathname === link.href
                          ? 'bg-white/10 text-[#25D366]'
                          : 'text-zinc-300 hover:bg-white/5 hover:text-[#25D366]'
                      }`}
                    >
                      <Info size={14} /> {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Events Tabbed Dropdown */}
            {/* <div className="group relative">
              <button className="flex items-center cursor-pointer gap-1 text-sm font-medium text-white transition-colors hover:text-[#25D366]">
                Events{" "}
                <ChevronDown
                  size={14}
                  className="transition-transform group-hover:rotate-180"
                />
              </button>
              <div className="invisible absolute left-1/2 top-full w-80 -translate-x-1/2 pt-4 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0A0C10] shadow-2xl">
                  <div className="flex border-b border-white/5 bg-white/5">
                    {Object.keys(eventCategories).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setEventTab(tab)}
                        className={`flex-1 py-3 text-xs font-bold uppercase transition-colors ${
                          eventTab === tab
                            ? "border-b-2 border-[#25D366] text-[#25D366]"
                            : "text-zinc-500 hover:text-white"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                  <div className="p-4 space-y-1">
                    {eventCategories[
                      eventTab as keyof typeof eventCategories
                    ].map((item) => (
                      <Link
                        key={item}
                        href="#"
                        className="flex items-center gap-3 rounded-lg p-3 text-sm text-zinc-300 hover:bg-white/5 hover:text-white transition-all"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div> */}

            {/* Reports Dropdown */}
            <div className="group relative">
              <button className="flex items-center cursor-pointer gap-1 text-sm font-medium text-white transition-colors hover:text-[#25D366]">
                Reports{" "}
                <ChevronDown
                  size={14}
                  className="transition-transform group-hover:rotate-180"
                />
              </button>
              <div className="invisible w-[400px] absolute left-0 top-full w-56 pt-4 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                <div className="rounded-xl border border-white/10 bg-[#0A0C10] p-2 shadow-2xl">
                  {reportLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm text-zinc-300 hover:bg-white/5 hover:text-[#25D366]"
                    >
                      <FileText size={14} /> {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Our Projects Tabbed Dropdown */}
            <div className="group relative">
              <button className="flex items-center cursor-pointer gap-1 text-sm font-medium text-white transition-colors hover:text-[#25D366]">
                Our Projects{" "}
                <ChevronDown
                  size={14}
                  className="transition-transform group-hover:rotate-180"
                />
              </button>
              <div className="invisible absolute left-1/2 top-full w-[400px] -translate-x-1/2 pt-4 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0A0C10] shadow-2xl">
                  <div className="flex border-b border-white/5 bg-white/5 text-center">
                    {Object.keys(projectCategories).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 py-3 cursor-pointer text-xs font-bold uppercase transition-all ${
                          activeTab === tab
                            ? "border-b-2 border-[#25D366] text-[#25D366]"
                            : "text-zinc-500 hover:text-white"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                  <div className="max-h-[350px] overflow-y-auto p-4 space-y-1">
                    {projectCategories[
                      activeTab as keyof typeof projectCategories
                    ].map((project) => (
                      <Link
                        key={project}
                        href="#"
                        className="group/item flex items-center gap-4 rounded-lg px-2 transition-all hover:bg-white/5"
                      >
                        <div className="flex h-10 w-10 items-center justify-center border-white/5 text-zinc-300 group-hover/item:border-[#25D366]/30">
                          <Rocket size={18} />
                        </div>
                        <span className="text-sm font-medium text-zinc-300 group-hover/item:text-white">
                          {project}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/landing-page/donate"
              className={`text-sm font-medium transition-colors ${
                pathname === '/landing-page/donate'
                  ? 'text-[#25D366]'
                  : 'text-white hover:text-[#25D366]'
              }`}
            >
              Donate
            </Link>
            <Link
              href="/landing-page/support"
              className={`text-sm font-medium transition-colors ${
                pathname === '/landing-page/support'
                  ? 'text-[#25D366]'
                  : 'text-white hover:text-[#25D366]'
              }`}
            >
              Support
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/landing-page/innovation-challenge"
              className="rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black"
            >
              Acceleration Program
            </Link>
            <Link
              href="#"
              className="rounded-lg bg-[#25D366] px-5 py-2.5 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white lg:hidden"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>






      {/* Mobile Navigation (Slide from Top) */}
      <div
        className={`absolute left-0 right-0 top-16 z-[-1] border-b border-white/10 bg-black transition-all duration-500 ease-in-out lg:hidden ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-2 px-6 py-8 max-h-[80vh] overflow-y-auto">
          {/* Mobile About Dropdown */}
          <button
            onClick={() => toggleMobileDropdown("about")}
            className={`flex items-center justify-between py-3 text-lg font-medium transition-colors ${
              pathname?.startsWith('/landing-page/team') || pathname?.startsWith('/landing-page/who-we-are')
                ? 'text-[#25D366]'
                : 'text-white'
            }`}
          >
            About Us{" "}
            <ChevronDown
              size={18}
              className={mobileDropdown === "about" ? "rotate-180" : ""}
            />
          </button>
          {mobileDropdown === "about" && (
            <div className="ml-4 flex flex-col gap-2 border-l border-white/10 pl-4">
              {aboutLinks.map((l) => (
                <Link 
                  key={l.name} 
                  href={l.href} 
                  className={`py-2 transition-colors ${
                    pathname === l.href
                      ? 'text-[#25D366]'
                      : 'text-zinc-400'
                  }`}
                >
                  {l.name}
                </Link>
              ))}
            </div>
          )}



          {/* Mobile Events Dropdown */}
          {/* <button
            onClick={() => toggleMobileDropdown("events")}
            className="flex items-center justify-between py-3 text-lg font-medium text-white"
          >
            Events{" "}
            <ChevronDown
              size={18}
              className={mobileDropdown === "events" ? "rotate-180" : ""}
            />
          </button>
          {mobileDropdown === "events" && (
            <div className="ml-4 flex flex-col gap-2 border-l border-white/10 pl-4">
              <p className="text-[10px] uppercase tracking-widest text-[#25D366] mt-2">
                Upcoming
              </p>
              {eventCategories.Upcoming.map((e) => (
                <Link key={e} href="#" className="py-1 text-zinc-400">
                  {e}
                </Link>
              ))}
              <p className="text-[10px] uppercase tracking-widest text-zinc-500 mt-2">
                Past
              </p>
              {eventCategories.Past.map((e) => (
                <Link key={e} href="#" className="py-1 text-zinc-400">
                  {e}
                </Link>
              ))}
            </div>
          )} */}

          {/* Mobile Reports */}
          <button
            onClick={() => toggleMobileDropdown("reports")}
            className="flex items-center justify-between py-3 text-lg font-medium text-white"
          >
            Reports{" "}
            <ChevronDown
              size={18}
              className={mobileDropdown === "reports" ? "rotate-180" : ""}
            />
          </button>
          {mobileDropdown === "reports" && (
            <div className="ml-4 flex flex-col gap-2 border-l border-white/10 pl-4">
              {reportLinks.map((l) => (
                <Link key={l.name} href={l.href} className="py-2 text-zinc-400">
                  {l.name}
                </Link>
              ))}
            </div>
          )}

          {/* Mobile Projects */}
          <button
            onClick={() => toggleMobileDropdown("projects")}
            className="flex items-center justify-between py-3 text-lg font-medium text-white"
          >
            Our Projects{" "}
            <ChevronDown
              size={18}
              className={mobileDropdown === "projects" ? "rotate-180" : ""}
            />
          </button>
          {mobileDropdown === "projects" && (
            <div className="ml-4 flex flex-col gap-2 border-l border-white/10 pl-4">
              <p className="text-[10px] uppercase tracking-widest text-[#25D366] mt-2">
                Ongoing
              </p>
              {projectCategories.Ongoing.map((p) => (
                <Link key={p} href="#" className="py-1 text-zinc-400">
                  {p}
                </Link>
              ))}
            </div>
          )}

          <Link
            href="/landing-page/donate"
            className={`py-3 text-lg font-medium transition-colors ${
              pathname === '/landing-page/donate'
                ? 'text-[#25D366]'
                : 'text-white'
            }`}
          >
            Donate
          </Link>
          <Link
            href="/landing-page/support"
            className={`py-3 text-lg font-medium transition-colors ${
              pathname === '/landing-page/support'
                ? 'text-[#25D366]'
                : 'text-white'
            }`}
          >
            Support
          </Link>

          <div className="h-px bg-white/10 my-4" />
          <Link
            href="/landing-page/innovation-challenge"
            className="rounded-lg border border-white/20 px-5 py-4 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black"
          >
            Acceleration Program
          </Link>
          <Link
            href="#"
            className="w-full rounded-lg bg-[#25D366] py-3 text-center font-bold text-black"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
