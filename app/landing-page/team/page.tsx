"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/component/landing-page/header";
import Footer from "@/component/landing-page/footer";
import Collaborators from "@/component/landing-page/collaborators";
import { Mail } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";

type TeamMember = {
  _id: string;
  name: string;
  role: string;
  email: string;
  linkedinUrl: string;
  imageUrl: string;
};

export default function TeamPage() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    try {
      const response = await fetch("/api/team");
      const data = await response.json();

      if (data.success) {
        console.log("Team data:", data.data);
        setTeam(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch team:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <section className="relative w-full h-[60vh] lg:h-[85vh] overflow-hidden bg-zinc-900">
        {/* The Image: Now truly 100% width and height of the container */}
        <Image
          src="https://i.postimg.cc/j2KZbfR5/conference.jpg"
          alt="Startup Abuja Conference"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Multiple Overlays for Depth */}
        <div className="absolute inset-0 bg-black/40" />{" "}
        {/* Darkens the whole image slightly */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        {/* Content Container: Aligned with your 30px global padding */}
        <div className="absolute inset-0 flex items-end pb-12 lg:pb-24">
          <div className="w-full px-4 lg:px-30">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-black tracking-tighter text-white md:text-7xl lg:text-8xl">
                Our <span className="text-[#25D366]">Team</span>
              </h1>

              <div className="mt-6 flex items-center gap-4">
                <div className="hidden lg:block h-1.5 w-24 rounded-full bg-[#25D366]" />
                <p className="text-lg font-medium text-zinc-300 md:text-xl max-w-xl">
                  Meet the people driving our vision and building impactful
                  solutions across Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 py-20">
        <div className="mx-auto w-full max-w-8xl px-4 lg:px-30">
          <div className="mb-16 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-black md:text-4xl">
              Our Team
            </h1>

            <p className="mt-4 text-zinc-600 max-w-2xl mx-auto text-lg font-medium text-zinc-300 md:text-xl">
              Meet the talented people behind our work — designers, developers,
              and creators dedicated to building impactful experiences.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {loading ? (
              <div className="col-span-full text-center py-20 text-black">
                Loading team...
              </div>
            ) : team.length === 0 ? (
              <div className="col-span-full text-center py-20 text-black">
                No team members found
              </div>
            ) : (
              team.map((member) => (
                <div
                  key={member._id}
                  className="group flex flex-col overflow-hidden rounded-[32px] bg-white p-2 shadow-sm border border-zinc-100 transition-all duration-300 hover:shadow-xl"
                >
                  {/* 1. Header Section (Top Info) */}
                  <div className="flex flex-col items-center py-6">
                    <h3 className="text-xl font-bold text-black tracking-tight">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-xs font-bold uppercase tracking-widest text-[#25D366]">
                      {member.role}
                    </p>
                  </div>

                  {/* 2. Central Image Section (Contained Window) */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] bg-zinc-100">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      className="object-cover cursor-pointer transition-transform duration-700 group-hover:scale-105"
                      onError={(e) =>
                        console.error(
                          "Team image load error:",
                          member.imageUrl,
                          e,
                        )
                      }
                      onLoad={() =>
                        console.log(
                          "Team image loaded successfully:",
                          member.imageUrl,
                        )
                      }
                    />
                  </div>

                  {/* 3. Bottom Action Bar */}
                  <div className="flex items-center justify-between p-4">
                    <a
                      href={member.linkedinUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 items-center justify-center rounded-xl bg-zinc-900 px-4 text-xs font-bold text-white transition-all hover:bg-[#25D366]"
                    >
                      LinkedIn
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-100 text-zinc-600 transition-all hover:bg-zinc-200"
                    >
                      <Mail size={14} />
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>

      {/* Collaborators section imported after our team */}
      <Collaborators />

      <Footer />
    </div>
  );
}
