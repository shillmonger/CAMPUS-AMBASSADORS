"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Speaker = {
  _id: string;
  name: string;
  role: string;
  organization: string;
  imageUrl: string;
};

export default function PastSpeakers() {
  const [visibleCount, setVisibleCount] = useState(8);
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSpeakers();
  }, []);

  const fetchSpeakers = async () => {
    try {
      const response = await fetch('/api/speakers');
      const data = await response.json();
      
      if (data.success) {
        console.log('Speakers data:', data.data);
        setSpeakers(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch speakers:', error);
    } finally {
      setLoading(false);
    }
  };

  const showMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto w-full max-w-8xl px-4 lg:px-30">
        <h2 className="mb-10 text-center text-2xl font-bold text-black md:text-3xl">
          Past Speakers
        </h2>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
  {loading ? (
          <div className="text-center py-20 text-black">Loading speakers...</div>
        ) : speakers.length === 0 ? (
          <div className="text-center py-20 text-black">No speakers found</div>
        ) : (
          speakers.slice(0, visibleCount).map((speaker) => (
            <div
              key={speaker._id}
              className="group flex flex-col overflow-hidden rounded-[32px] bg-white p-2 shadow-sm border border-zinc-100 transition-all duration-300 hover:shadow-xl"
            >
      {/* 1. Header Section: Name & Role */}
      <div className="flex flex-col items-center text-center">
        <h3 className="text-xl font-bold text-black tracking-tight transition-colors group-hover:text-[#25D366]">
          {speaker.name}
        </h3>
        <p className="mt-1 text-xs font-bold uppercase tracking-widest text-[#25D366]">
          {speaker.role}
        </p>
      </div>

      {/* 2. Image Section: Matching the "download (2).jfif" window style */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] bg-zinc-100">
        <Image
          src={speaker.imageUrl}
          alt={speaker.name}
          fill
          className="object-cover cursor-pointer transition-transform duration-700 group-hover:scale-105"
          onError={(e) => console.error('Image load error:', speaker.imageUrl, e)}
          onLoad={() => console.log('Image loaded successfully:', speaker.imageUrl)}
        />
      </div>

      {/* 3. Bottom Bar: Organization Info (No Buttons) */}
      <div className="flex items-center justify-center p-5">
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            Representing
          </span>
          <span className="text-sm font-bold text-black">
            {speaker.organization}
          </span>
        </div>
      </div>
    </div>
  ))
        )}
        </div>

        {/* Show More Button */}
        {!loading && speakers.length > 0 && visibleCount < speakers.length && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={showMore}
              className="cursor-pointer rounded-xl border-2 border-[#25D366] px-10 py-4 text-sm font-bold text-black transition-all hover:bg-[#25D366] hover:text-black active:scale-95"
            >
              See More Speakers
            </button>
          </div>
        )}
      </div>
    </section>
  );
}