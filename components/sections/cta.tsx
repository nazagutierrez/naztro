"use client";

import { useState } from "react";

export function CTA() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-32 px-4 md:px-8 border-t-2 border-[#3F3F46]">
      <div className="max-w-[95vw] mx-auto text-center">
        {/* Massive headline */}
        <h2 className="text-[clamp(2.5rem,10vw,10rem)] font-bold uppercase tracking-tighter leading-[0.85] mb-8">
          Let&apos;s Build
          <br />
          <span className="text-[#4b96e3]">Something Bold</span>
        </h2>

        <p className="text-lg md:text-xl lg:text-2xl text-[#A1A1AA] max-w-2xl mx-auto leading-tight mb-16">
          Ready to make your digital presence impossible to ignore? Drop your
          email and let&apos;s start the conversation.
        </p>

        {/* Email input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Handle form submission
          }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="YOUR@EMAIL.COM"
              className="flex-1 h-20 md:h-24 px-6 bg-transparent border-b-2 border-[#3F3F46] text-2xl md:text-4xl font-bold uppercase tracking-tighter placeholder:text-[#27272A] focus:border-[#4b96e3] focus:outline-none transition-colors"
              required
            />
            <button
              type="submit"
              className="h-20 md:h-24 px-12 bg-[#4b96e3] text-black font-bold uppercase tracking-tighter text-xl md:text-2xl transition-all hover:scale-105 active:scale-95"
            >
              Send
            </button>
          </div>
        </form>

        {/* Decorative background number */}
        <div
          className="relative mt-32 text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-[#27272A] leading-none select-none pointer-events-none"
          aria-hidden="true"
        >
          24/7
        </div>
      </div>
    </section>
  );
}
