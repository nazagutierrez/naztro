"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Plasma from "../Plasma";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const tl = gsap.timeline({
      ease: "power2.out",
    });

    tl.to("#logo-img", {
      delay: 0.1,
      duration: 2,
      scale: 30,
      opacity: 0,
    });

    tl.to(
      "#logo-mask",
      {
        duration: 2,
        webkitMaskImage:
          "radial-gradient(circle 2000px at center, white 0%, white 10%, transparent 100%)",
        maskImage:
          "radial-gradient(circle 2000px at center, white 0%, white 10%, transparent 100%)",
      },
      "<",
    );
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
        <img
          src="/naztro.svg"
          alt="Logo"
          id="logo-img"
          className="absolute w-62 h-62 m-auto inset-0 object-contain origin-center"
        />
      </div>
      <section
        id="logo-mask"
        ref={containerRef}
        className="relative min-h-screen flex flex-col justify-center px-4 md:px-8 py-32 overflow-hidden"
      >
        <motion.div
          style={{ scale, opacity }}
          className="max-w-[95vw] mx-auto w-full z-20"
        >
          {/* Massive headline */}
          <h1 className="text-[clamp(3rem,12vw,13rem)] font-bold uppercase tracking-tighter leading-[0.85] mb-8">
            <span className="block">Soluciones</span>
            <span className="block text-[#4b96e3]">Digitales</span>
            <span className="block">a medida</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-[#A1A1AA] max-w-2xl leading-tight mb-12">
            Digitalizamos tu negocio para que puedas destacar en el mundo
            digital. Diseñamos experiencias únicas y memorables que cautivan a
            tus clientes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="h-14 px-8 bg-[#4b96e3] text-black font-bold uppercase tracking-tighter text-lg transition-all hover:scale-105 active:scale-95">
              Start Project
            </button>
            <button className="h-14 px-8 border-2 border-[#3F3F46] text-[#FAFAFA] font-bold uppercase tracking-tighter text-lg transition-all hover:bg-[#FAFAFA] hover:text-black">
              View Work
            </button>
          </div>
        </motion.div>

        {/* Decorative background number */}
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 text-[20rem] md:text-[30rem] lg:text-[40rem] font-bold text-[#27272A] leading-none z-10 select-none pointer-events-none"
          aria-hidden="true"
        >
          <div className="relative w-screen ps-250 h-[1120px]">
            <Plasma
              color="#4b96e3"
              speed={0.6}
              direction="forward"
              scale={0.4}
              opacity={0.8}
              mouseInteractive={true}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
