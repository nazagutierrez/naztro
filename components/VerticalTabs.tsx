"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import ChevronSvg from "./svg/ChevronSvg";

// Change Here
const SERVICES = [
  {
    id: "01",
    title: "Piso Fuerte",
    href: "www.pisofuerte.com.ar",
    description:
      "Creating beautiful, functional, and user-centric digital experiences.",
    image:
      "/piso-blue.png",
  },
  {
    id: "02",
    title: "Nordicaps",
    href: "nordicaps.vercel.app",
    description: "Building high-performance, animated websites with Framer.",
    image:
      "/nordicaps-blue.png",
  },
  {
    id: "03",
    title: "Dymo",
    href: "dymo.tpeoficial.com",
    description:
      "Defining your brand's visual identity and voice for a lasting impression.",
    image:
      "/dymo-blue.png",
  },
];

const AUTO_PLAY_DURATION = 5000;

export function VerticalTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % SERVICES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
  }, []);

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, AUTO_PLAY_DURATION);

    return () => clearInterval(interval);
  }, [activeIndex, isPaused, handleNext]);

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      y: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section className="w-full bg-transparent h-screen flex items-center [overflow-anchor:none]">
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Content */}
          <div className="lg:col-span-5 flex flex-col justify-start order-2 lg:order-1 pt-4 h-[600px]">
            <div className="space-y-1 mb-12">
              <h2 className="main-font text-balance text-6xl! font-medium md:text-4xl lg:text-5xl text-neutral-300">
                NUESTROS TRABAJOS
              </h2>
              <span className="text-[10px] font-medium text-muted-neutral-300 uppercase tracking-[0.3em] block ml-0.5">
                (RESUMEN)
              </span>
            </div>

            <div className="flex flex-col space-y-0 flex-1">
              {SERVICES.map((service, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={service.id}
                    onClick={() => handleTabClick(index)}
                    className={
                      `group relative flex items-start gap-4 py-6 md:py-8 text-left transition-all duration-500 border-t border-sky-500/50 first:border-0 cursor-pointer ${isActive
                        ? "text-neutral-300"
                        : "text-neutral-300/60 hover:text-neutral-300"
                      }`
                    }
                  >
                    <div className="absolute left-[-16px] md:left-[-24px] top-0 bottom-0 w-[2px] bg-muted">
                      {isActive && (
                        <motion.div
                          key={`progress-${index}-${isPaused}`}
                          className="absolute top-0 left-0 w-full bg-neutral-400 origin-top"
                          initial={{ height: "0%" }}
                          animate={
                            isPaused ? { height: "0%" } : { height: "100%" }
                          }
                          transition={{
                            duration: AUTO_PLAY_DURATION / 1000,
                            ease: "linear",
                          }}
                        />
                      )}
                    </div>

                    <span className="text-[9px] md:text-[10px] font-medium mt-1 tabular-nums opacity-50">
                      /{service.id}
                    </span>

                    <div className="flex flex-col gap-2 flex-1">
                      <span
                        className={`text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight transition-colors duration-500 ${isActive ? "text-neutral-300" : "" }`}
                      >
                        {service.title} 
                        <span className="text-neutral-300 text-xl opacity-40"> - </span>
                        <a href={service.href} target="_blank" rel="noopener noreferrer" className="text-xl mt-1 tabular-nums opacity-50 hover:underline decoration-1 underline-offset-2">
                         {service.href}
                        </a>
                      </span>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isActive ? "auto" : 0,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{
                          duration: 0.5,
                          ease: [0.32, 0.72, 0, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="text-muted-neutral-300 text-sm md:text-base font-normal leading-relaxed max-w-sm pb-4">
                          {service.description}
                        </p>
                      </motion.div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-end h-full order-1 lg:order-2 shadow-[0px_0px_80px_-20px_rgba(13,148,255,0.2)] border border-sky-500/30 rounded-xl">
            <div
              className="relative group/gallery"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative aspect-4/5 md:aspect-4/3 lg:aspect-16/11 rounded-xl overflow-hidden">
                <AnimatePresence
                  initial={false}
                  custom={direction}
                  mode="popLayout"
                >
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      y: { type: "spring", stiffness: 260, damping: 32 },
                      opacity: { duration: 0.4 },
                    }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={SERVICES[activeIndex].image}
                      alt={SERVICES[activeIndex].title}
                      className="w-full h-full object-cover transition-transform duration-700 m-0! p-0! block"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-60" />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 flex gap-2 md:gap-3 z-20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur-md border border-sky-600/40 flex items-center justify-center text-neutral-300 hover:border-sky-600/70 transition-all active:scale-90 cursor-pointer"
                    aria-label="Previous"
                  >
                    <ChevronSvg className="rotate-180 text-2xl" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur-md border border-sky-600/40 flex items-center justify-center text-neutral-300 hover:border-sky-600/70 transition-all active:scale-90 cursor-pointer"
                    aria-label="Next"
                  >
                    <ChevronSvg className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VerticalTabs
