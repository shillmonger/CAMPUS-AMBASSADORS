"use client";

import React, { useState, useRef, useEffect } from "react";
import { Lock, ShieldCheck, AlertCircle } from "lucide-react";
import Header from "@/component/landing-page/header";
import Footer from "@/component/landing-page/footer";
import { useRouter } from "next/navigation";

const AdminAuthPage = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [error, setError] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();

  // Handle digit input
  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Only numbers

    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);

    // Move to next box if value is entered
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const finalCode = code.join("");
    
    try {
      const response = await fetch('/api/auth/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ passcode: finalCode }),
      });

      const data = await response.json();

      if (data.success) {
        // API will set the cookie, just redirect
        router.push('/admin-dashboard/dashboard');
      } else {
        setError(true);
        setTimeout(() => setError(false), 2000);
      }
    } catch (error) {
      console.error('Verification error:', error);
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  // Auto-focus first input on mount
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafa]">
      {/* <Header /> */}

      <main className="flex flex-grow mx-4 items-center justify-center lg:px-30 py-20">
        <div className="w-full max-w-lg rounded-2xl bg-white py-5 px-4 shadow-xl border border-zinc-100 lg:py-10 px-10">
          
          {/* Header Icon */}
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#f0f9f4]">
            <ShieldCheck size={40} className="text-[#25D366]" />
          </div>

          {/* Text Content */}
          <div className="text-center space-y-3">
            <h1 className="text-3xl font-black text-black">Admin Access Only</h1>
            <p className="text-zinc-500 font-medium leading-relaxed">
              This area is restricted to authorized Startup Abuja administrators. 
              Please enter your 4-digit security code to proceed.
            </p>
          </div>

          {/* 4-Digit Input Boxes */}
          <div className="mt-10 flex justify-center gap-3">
            {code.map((digit, idx) => (
              <input
                key={idx}
                ref={(el) => {
                  inputRefs.current[idx] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                className={`h-16 w-14 rounded-2xl border-2 bg-white text-center text-2xl font-bold text-black transition-all outline-none
                  ${error ? 'border-red-500 animate-shake' : 'border-zinc-200 focus:border-[#25D366] focus:bg-white focus:ring-4 focus:ring-[#25D366]/10'}
                `}
              />
            ))}
          </div>

          {/* Error Message */}
          {error && (
            <div className="mt-4 flex items-center justify-center gap-2 text-red-500 text-sm font-bold">
              <AlertCircle size={16} />
              <span>Invalid security code. Try again.</span>
            </div>
          )}

          {/* Action Button */}
          <button
            onClick={handleVerify}
            className="mt-10 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-base font-black text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-95"
          >
            <Lock size={20} />
            Verify Access
          </button>

          <p className="mt-6 text-center text-xs text-zinc-400 font-semibold uppercase tracking-widest">
            Security Protocol v2.026
          </p>
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake { animation: shake 0.2s ease-in-out 0s 2; }
      `}</style>
    </div>
  );
};

export default AdminAuthPage;
