"use client";

import Header from "@/component/landing-page/header";
import Footer from "@/component/landing-page/footer";
import { Send, Search, Ticket } from "lucide-react";

export default function SupportPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 pb-20 pt-32">
        <div className="mx-auto w-full max-w-4xl px-4 lg:px-30">
          {/* Header Section */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#25D366]/10 text-[#25D366]">
              <Ticket size={32} />
            </div>
            <h1 className="text-4xl font-bold text-black">Submit a Support Request</h1>
            <p className="mt-3 text-zinc-500">
              Campus Ambassador Community — Describe your issue below and we'll get back to you.
            </p>
            
            <button className="mt-8 flex items-center gap-2 mx-auto rounded-full border border-zinc-200 px-6 py-2 text-sm text-zinc-400 transition-all hover:border-[#25D366] hover:text-[#25D366]">
              <Search size={16} />
              Check existing ticket status
            </button>
          </div>

          {/* Form Card */}
          <div className="rounded-3xl border border-zinc-100 bg-zinc-50 px-5 py-7  shadow-sm md:p-10">
            <form className="space-y-10">
              {/* Section: Your Details */}
              <div>
                <h3 className="mb-6 text-xs font-black uppercase tracking-widest text-zinc-400">
                  Your Details
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-black">Full Name <span className="text-[#25D366]">*</span></label>
                    <input 
                      type="text" 
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-black outline-none focus:border-[#25D366]" 
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-black">Email Address <span className="text-[#25D366]">*</span></label>
                    <input 
                      type="email" 
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-black outline-none focus:border-[#25D366]" 
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-black">Phone Number <span className="text-zinc-400 font-normal">(optional)</span></label>
                    <input 
                      type="tel" 
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-black outline-none focus:border-[#25D366]" 
                    />
                  </div>
                </div>
              </div>

              <div className="h-px w-full bg-zinc-200/60" />

              {/* Section: Your Request */}
              <div>
                <h3 className="mb-6 text-xs font-black uppercase tracking-widest text-zinc-400">
                  Your Request
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-black">Category</label>
                    <select className="w-full appearance-none rounded-xl border border-zinc-200 bg-white px-4 py-3 text-black outline-none focus:border-[#25D366]">
                      <option>General Inquiry</option>
                      <option>Technical Support</option>
                      <option>Partnership</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-black">Priority</label>
                    <div className="flex gap-2">
                      {['Low', 'Medium', 'High'].map((p) => (
                        <button key={p} type="button" className="flex-1 rounded-lg border border-zinc-200 py-3   text-sm font-medium text-zinc-500 hover:border-[#25D366] hover:text-[#25D366] transition-colors">
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-black">Subject / Title <span className="text-[#25D366]">*</span></label>
                    <input 
                      type="text" 
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-black outline-none focus:border-[#25D366]" 
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-black">Description <span className="text-[#25D366]">*</span></label>
                    <textarea 
                      rows={5}
                      className="w-full resize-none rounded-xl border border-zinc-200 bg-white px-4 py-3 text-black outline-none focus:border-[#25D366]" 
                      placeholder="Please provide as much detail as possible..."
                    />
                  </div>
                </div>
              </div>

              <button className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl bg-[#25D366] py-3 text-lg font-bold text-black transition-all hover:shadow-lg hover:shadow-[#25D366]/20 active:scale-[0.98]">
                <Send size={20} />
                Submit Ticket
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}