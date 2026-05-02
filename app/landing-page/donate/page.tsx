"use client";

import { useState } from "react";
import Header from "@/component/landing-page/header";
import Footer from "@/component/landing-page/footer";
import { Copy, Check, Heart } from "lucide-react";

export default function DonatePage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const bankDetails = [
    { id: "providus", bank: "Providus Bank", account: "8059268860" },
    { id: "access", bank: "Access Bank Plc", account: "8059268860" },
  ];

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 pt-32 pb-20">
        <div className="mx-auto w-full max-w-8xl px-4 lg:px-30">
          <div className="flex flex-col gap-16 lg:flex-row lg:items-start">
            
            {/* Left Content Column */}
            <div className="flex flex-1 flex-col">
              <div className="flex items-center gap-2 text-[#25D366]">
                <Heart size={24} fill="currentColor" />
                <h1 className="text-2xl font-bold tracking-tight text-black">Donate</h1>
              </div>

              <div className="mt-8 space-y-6">
                <p className="text-xl leading-relaxed text-zinc-600">
                  By donating to Campus Ambassador Community, you are investing in the future of
                  African entrepreneurship and contributing to long-term economic
                  transformation. Every contribution—big or small—makes a
                  meaningful difference.
                </p>

                <div className="h-px w-full bg-zinc-100" />

                <h2 className="text-3xl font-bold text-black">
                  Let's Build the Future Together
                </h2>

                <p className="text-lg leading-relaxed text-zinc-500">
                  We would be honoured to connect with you to share more about our work
                  and how your donation will be utilized to create measurable and sustainable
                  impact. A digital concept note and impact brief can be provided upon
                  request.
                </p>

                <p className="text-lg leading-relaxed text-zinc-500">
                  By donating to Campus Ambassador Community, you are making a direct and lasting
                  contribution to shaping the future of entrepreneurs and innovators in Africa.
                </p>

                <button className="mt-4 w-fit cursor-pointer rounded-lg border-2 border-[#25D366] px-10 py-3 font-bold text-black transition-all hover:bg-[#25D366] active:scale-95">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right Payment Card Column */}
            <div className="w-full lg:w-[450px]">
              <div className="relative overflow-hidden rounded-3xl bg-zinc-900 p-8 text-white shadow-2xl md:p-10">
                {/* Decorative background element */}
                <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#25D366]/10 blur-3xl" />
                
                <div className="relative z-10">
                  <span className="inline-block rounded-md bg-[#25D366] px-4 py-1 text-xs font-black uppercase tracking-widest text-black">
                    Payment Details
                  </span>

                  <p className="mt-6 text-sm leading-relaxed text-zinc-400">
                    To facilitate your donation, we have provided our account details
                    below for your convenience. Your generous support will be
                    instrumental in advancing our mission.
                  </p>

                  <div className="mt-10 space-y-8">
                    {bankDetails.map((item) => (
                      <div key={item.id} className="group">
                        <p className="text-sm font-bold text-zinc-500">{item.bank}</p>
                        <p className="text-xs text-zinc-400">Campus Ambassador Community</p>
                        <div className="mt-2 flex items-center justify-between gap-4 rounded-xl bg-white/5 p-4 transition-colors group-hover:bg-white/10">
                          <span className="text-2xl font-mono font-bold tracking-wider text-[#25D366]">
                            {item.account}
                          </span>
                          <button
                            onClick={() => copyToClipboard(item.account, item.id)}
                            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 transition-all hover:bg-[#25D366] hover:text-black"
                            title="Copy Account Number"
                          >
                            {copiedId === item.id ? <Check size={18} /> : <Copy size={18} />}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 flex items-center gap-3 rounded-2xl bg-[#25D366]/5 p-4 border border-[#25D366]/20">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-black">
                      <Heart size={20} fill="currentColor" />
                    </div>
                    <p className="text-xs font-medium text-zinc-300 italic">
                      Thank you for supporting the African startup ecosystem.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}