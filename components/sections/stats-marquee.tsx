"use client";

import { Marquee } from "@/components/marquee";

const stats = [
  { number: "250+", label: "Projects Delivered" },
  { number: "15M", label: "Users Reached" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "12", label: "Design Awards" },
  { number: "24/7", label: "Support Available" },
  { number: "50+", label: "Team Members" },
];

export function StatsMarquee() {
  return (
    <section className="bg-[#4b96e3] py-8 md:py-12 border-y-2 border-[#000000]">
      <Marquee speed={80}>
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center gap-4 md:gap-6 px-4 md:px-8"
          >
            <span className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold text-black leading-none tracking-tighter">
              {stat.number}
            </span>
            <span className="text-sm md:text-base lg:text-lg uppercase tracking-widest text-black/70 font-medium">
              {stat.label}
            </span>
            <span
              className="text-[2rem] md:text-[3rem] text-black/30"
              aria-hidden="true"
            >
              /
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
