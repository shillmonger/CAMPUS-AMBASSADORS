"use client";


import Image from "next/image";

const aboutSections = [
  {
    title: "Who We Are",
    description: "Campus Student Ambassadors Community (CSAC) is a fast-growing network of student leaders across African campuses, focused on building powerful connections between students and brands. We are not just a digital community — we are an on-ground and online activation platform that helps companies build real visibility, engagement, and trust within the student market.",
    list: [
      "Mission: To empower students with opportunities while helping brands achieve meaningful visibility and engagement through campus-driven strategies.",
      "Vision: To become Africa's leading campus marketing and ambassador network, driving brand growth through student-led innovation and real-world engagement.",
    ],
    image: "https://i.postimg.cc/fyTW8TDd/1.jpg",
  },
  {
    title: "What We Do",
    description: "At CSAC, we go beyond traditional advertising. We help brands build real experiences, not just promotions.",
    list: [
      "Build strong visibility across campuses",
      "Execute targeted marketing campaigns", 
      "Create engaging, student-driven content",
      "Run ambassador-led promotions and activations",
      "Generate authentic user experiences and feedback",
      "Campus activation campaigns",
      "Student ambassador programs",
      "Product promotion and visibility",
      "Commercial content production",
      "Brand awareness campaigns",
      "Community-driven engagement strategies",
    ],
    subtext: "We don't just promote brands — we create real experiences around them.",
    image: "https://i.postimg.cc/fyTW8TDd/1.jpg",
  },
  {
    title: "Our Unique Approach",
    description: "We don't rely on basic advertising. Instead, we focus on authentic campus-driven strategies that deliver real results.",
    list: [
      "Produce real campus-based commercials and content",
      "Drive peer-to-peer promotion through ambassadors",
      "Focus on real-life usage, interaction, and storytelling",
      "Real Customer Interaction - Students experience, use, and share products",
      "Targeted Campus Reach - Precision penetration of specific campuses",
      "Content That Converts - Commercial-style content for ads and campaigns",
      "Peer Influence Marketing - Natural, trusted, relatable promotion",
      "Authentic Feedback & Insights - Real reviews from target audience",
    ],
    subtext: "This allows brands to get: Authentic content, Relatable campaigns, Higher engagement and trust",
    image: "https://i.postimg.cc/fyTW8TDd/1.jpg",
  },
  {
    title: "Why Campus Marketing Matters",
    description: "Over 70% of students on campus fall within the 18–30 age range — a highly active, trend-driven, and influential demographic.",
    list: [
      "Students quickly adopt and promote products",
      "Influence purchasing decisions among peers",
      "Drive trends both online and offline",
      "Traditional advertising is losing trust among young people",
      "Students believe in people they relate to and real experiences",
    ],
    subtext: "Reaching them early means building long-term brand loyalty and market dominance.",
    image: "https://i.postimg.cc/fyTW8TDd/1.jpg",
  },
  {
    title: "Our Communities & Impact",
    description: "We drive engagement through focused communities while building a system where everyone benefits.",
    list: [
      "Code Ninjas – Tech and innovation",
      "Singles & Couples Connect – Social engagement", 
      "Campus Ambassador Network – Leadership and promotion",
      "Web3 Builders Hub – Future-focused digital innovation",
      "Students gain real-world experience",
      "Brands gain real market penetration",
      "Communities grow stronger through collaboration",
    ],
    subtext: "CSAC exists to help brands connect, not just advertise.",
    image: "https://i.postimg.cc/fyTW8TDd/1.jpg",
  },
  {
    title: "Partner With Us",
    description: "Whether you're a student ready to lead or a brand ready to grow, CSAC is your ideal growth partner.",
    list: [
      "Build strong visibility among students",
      "Launch impactful campus campaigns",
      "Create relatable and engaging content",
      "Scale your brand through trusted networks",
    ],
    subtext: "We are building the future of campus-driven brand influence",
    image: "https://i.postimg.cc/fyTW8TDd/1.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white pt-20">
      <div className="mx-auto w-full max-w-8xl px-4 lg:px-30">
        <h1 className="mb-10 text-center text-2xl font-bold text-black md:text-3xl">
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
                <h2 className="text-xl font-bold text-black md:text-2xl">
                  {section.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-zinc-600">
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