"use client";


import Image from "next/image";

const aboutSections = [
  {
    title: "Startup Abuja",
    description: "Startup Abuja is a social enterprise and accelerator platform dedicated to empowering founders, innovators, and small businesses across Nigeria and Africa. We exist to strengthen the startup ecosystem by providing access to training, mentorship, expert guidance, ecosystem events, and investor exposure. We bridge the gap between ideas and opportunities—helping founders build, scale, and grow sustainably.",
    image: "https://i.postimg.cc/YSJY20Pv/1.png",
  },
  {
    title: "Conferences, Meetups & Ecosystem Events",
    description: "High-powered gatherings that connect founders, investors, mentors, policymakers, and industry leaders.",
    image: "https://i.postimg.cc/yxKR95Bt/2.jpg",
  },
  {
    title: "Startup & SME Training Programs",
    description: "Hands-on trainings covering:",
    list: [
      "Business model development",
      "Pitching & fundraising",
      "Digital transformation",
      "Market and product development",
      "Growth & scaling strategies",
    ],
    image: "https://i.postimg.cc/yxKR95Bt/2.jpg",
  },
  {
    title: "Mentorship & Accelerator Support",
    description: "Guided mentorship from industry leaders to help refine your business model, validate your product, and position your startup for investor readiness.",
    image: "https://i.postimg.cc/tRdWyXNJ/4.jpg",
  },
  {
    title: "Funding Exposure",
    description: "We connect startups to:",
    list: [
      "Investors",
      "Grant opportunities",
      "Corporate partners",
      "Government innovation programs",
    ],
    subtext: "Startup Abuja does not directly fund startups but prepares and positions you for global and local investment pathways.",
    image: "https://i.postimg.cc/tRdWyXNJ/4.jpg",
  },
  {
    title: "Startup Abuja",
    description: "Our mission is to create a vibrant ecosystem where innovation flourishes, ideas are nurtured, and startups are empowered to reach their full potential. By bringing together entrepreneurs, investors, mentors, and industry experts, we aim to catalyze innovation, fuel economic growth, and create lasting impact in Abuja and beyond.",
    image: "https://i.postimg.cc/tRdWyXNJ/4.jpg",
  },
  {
    title: "Research & Startup Repository",
    description: "A growing database of Africa-based startups, ecosystem players, data insights, and research tools designed to help founders make smarter decisions.",
    image: "https://i.postimg.cc/tRdWyXNJ/4.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white pt-20">
      <div className="mx-auto w-full max-w-8xl px-4 lg:px-30">
        <h1 className="mb-10 text-center text-4xl font-bold text-black md:text-4xl">
          About Us
        </h1>

        <div className="flex flex-col gap-15 md:gap-10">
          {aboutSections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-10 md:flex-row md:gap-20 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Container */}
              <div className="relative cursor-pointer aspect-video w-full overflow-hidden rounded-2xl border border-zinc-100 shadow-lg md:w-1/2">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold text-black md:text-3xl">
                  {section.title}
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-zinc-600">
                  {section.description}
                </p>

                {section.list && (
                  <ul className="mt-4 space-y-2">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-zinc-600">
                        <span className="mt-1.5 text-[#25D366]">➜</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.subtext && (
                  <p className="mt-6 text-sm italic text-zinc-500">
                    {section.subtext}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}