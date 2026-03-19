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
      opacity: 1,
      duration: 0.5,
    });

    tl.to("#star-light-img", {
      opacity: 1,
      scale: .6,
      duration: 0.4,
    });

    tl.to("#star-light-img", {
      opacity: 0,
      ease: "circ",
      scale: 2,
      duration: 1,
    });

    tl.to("#logo-img", {
      opacity: 1,
      duration: 0.3,
      scale: 0.8,
    }, "<0.7");

    tl.to("#logo-img", {
      delay: 0.1,
      duration: 2,
      scale: 30,
      opacity: 0,
    }, "<0.3");

    tl.fromTo(
      "#logo-mask",
      {
        "--size": "0px",
      },
      {
        "--size": "15000px", // ajustá según pantalla
        duration: 2,
        ease: "power3.out",
      },
      "<"
    );
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
        <div className="w-full h-screen" id="logo-mask"></div>
        <img
          src="/naztro.svg"
          alt="Logo"
          id="logo-img"
          className="absolute opacity-0 w-62 h-62 m-auto inset-0 object-contain origin-center"
        />
        <img
          src="/star-light.webp"
          alt="Logo"
          id="star-light-img"
          className="absolute opacity-0 w-40 h-40 rotate-105 m-auto right-0 left-26 top-86 object-contain origin-center"
        />
      </div>
      <section
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

      </section>
    </div>
  );
}
