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
    image: "/piso-blue.png",
  },
  {
    id: "02",
    title: "Nordicaps",
    href: "nordicaps.vercel.app",
    description: "Building high-performance, animated websites with Framer.",
    image: "/nordicaps-blue.png",
  },
  {
    id: "03",
    title: "Dymo",
    href: "dymo.tpeoficial.com",
    description:
      "Defining your brand visual identity and voice for a lasting impression.",
    image: "/dymo-blue.png",
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

  const imageVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
    center: { zIndex: 1, y: 0, opacity: 1 },
    exit: (direction: number) => ({
      zIndex: 0,
      y: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const overlayVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "60%" : "-60%",
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? "-60%" : "60%",
      opacity: 0,
    }),
  };

  return (
    <section className="w-full bg-transparent min-h-screen h-auto flex items-center py-16 lg:py-0 [overflow-anchor:none]">
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20 mx-auto">

        {/* Titulo: solo visible en mobile (lg lo muestra dentro del grid) */}
        <div className="block lg:hidden space-y-1 mb-8">
          <h2 className="main-font text-balance text-4xl font-medium text-neutral-300">
            NUESTROS TRABAJOS
          </h2>
          <span className="text-[10px] font-medium text-muted-neutral-300 uppercase tracking-[0.3em] block ml-0.5">
            (RESUMEN)
          </span>
        </div>

        {/* Layout mobile (menor a lg) */}
        <div className="block lg:hidden">
          <div
            className="relative rounded-xl overflow-hidden shadow-[0px_0px_80px_-20px_rgba(13,148,255,0.2)] border border-sky-500/30 aspect-4/5 sm:aspect-4/3 md:aspect-video max-h-[75vh]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Imagen de fondo animada */}
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={"img-" + activeIndex}
                custom={direction}
                variants={imageVariants}
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
                  className="w-full h-full object-cover block"
                />
              </motion.div>
            </AnimatePresence>

            {/* Gradient para legibilidad */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10 pointer-events-none" />

            {/* Overlay info animado horizontalmente */}
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={"info-" + activeIndex}
                custom={direction}
                variants={overlayVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-x-0 bottom-0 z-20 px-5 pb-20 pt-6"
              >
                <p className="text-[10px] font-medium text-neutral-400 uppercase tracking-[0.3em] mb-2">
                  /{SERVICES[activeIndex].id}
                </p>
                <h3 className="text-3xl font-normal text-neutral-100 tracking-tight leading-tight">
                  {SERVICES[activeIndex].title}
                </h3>
                <a
                  href={SERVICES[activeIndex].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-400 opacity-70 hover:opacity-100 hover:underline underline-offset-2 decoration-1 mt-1 block"
                  onClick={(e) => e.stopPropagation()}
                >
                  {SERVICES[activeIndex].href}
                </a>
                <p className="text-sm text-neutral-300/80 leading-relaxed mt-3 max-w-xs">
                  {SERVICES[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Bullets de navegacion */}
            <div className="absolute bottom-5 left-5 z-30 flex gap-2 items-center">
              {SERVICES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleTabClick(i)}
                  className={"transition-all duration-300 rounded-full cursor-pointer " + (
                    i === activeIndex
                      ? "w-6 h-2 bg-white"
                      : "w-2 h-2 bg-white/40 hover:bg-white/70"
                  )}
                  aria-label={"Ir a " + SERVICES[i].title}
                />
              ))}
            </div>

            {/* Botones prev/next */}
            <div className="absolute bottom-4 right-5 z-30 flex gap-2">
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); setIsPaused(false); }}
                className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-md border border-sky-600/40 flex items-center justify-center text-neutral-300 hover:border-sky-600/70 transition-all active:scale-90 cursor-pointer"
                aria-label="Previous"
              >
                <ChevronSvg className="rotate-180 text-2xl" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); setIsPaused(false); }}
                className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-md border border-sky-600/40 flex items-center justify-center text-neutral-300 hover:border-sky-600/70 transition-all active:scale-90 cursor-pointer"
                aria-label="Next"
              >
                <ChevronSvg className="text-2xl" />
              </button>
            </div>

            {/* Barra de progreso auto-play */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-white/10 z-30">
              <motion.div
                key={"progress-mobile-" + activeIndex + "-" + isPaused}
                className="h-full bg-sky-400 origin-left"
                initial={{ scaleX: 0 }}
                animate={isPaused ? { scaleX: 0 } : { scaleX: 1 }}
                transition={{
                  duration: AUTO_PLAY_DURATION / 1000,
                  ease: "linear",
                }}
                style={{ transformOrigin: "left" }}
              />
            </div>
          </div>
        </div>

        {/* Layout desktop (lg+): grid original */}
        <div className="hidden lg:grid grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="col-span-5 flex flex-col justify-start order-2 lg:order-1 pt-4 lg:pt-0 h-auto lg:h-[600px]">
            <div className="space-y-1 mb-12">
              <h2 className="main-font text-balance text-5xl font-medium lg:text-5xl text-neutral-300">
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
                      "group relative flex items-start gap-4 py-6 md:py-8 text-left transition-all duration-500 border-t border-sky-500/50 first:border-0 cursor-pointer " +
                      (isActive ? "text-neutral-300" : "text-neutral-300/60 hover:text-neutral-300")
                    }
                  >
                    <div className="absolute left-[-16px] md:left-[-24px] top-0 bottom-0 w-[2px] bg-muted">
                      {isActive && (
                        <motion.div
                          key={"progress-" + index + "-" + isPaused}
                          className="absolute top-0 left-0 w-full bg-neutral-400 origin-top"
                          initial={{ height: "0%" }}
                          animate={isPaused ? { height: "0%" } : { height: "100%" }}
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
                        className={"text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight transition-colors duration-500 " + (isActive ? "text-neutral-300" : "")}
                      >
                        {service.title}
                        <span className="text-neutral-300 text-xl opacity-40"> - </span>
                        <a
                          href={service.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl mt-1 tabular-nums opacity-50 hover:underline decoration-1 underline-offset-2"
                        >
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

          {/* Right Column: Image */}
          <div className="col-span-7 flex flex-col order-1 lg:order-2 shadow-[0px_0px_80px_-20px_rgba(13,148,255,0.2)] border border-sky-500/30 rounded-xl overflow-hidden">
            <div
              className="relative group/gallery"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative aspect-4/5 md:aspect-4/3 lg:aspect-16/11 rounded-xl overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={imageVariants}
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
                    onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur-md border border-sky-600/40 flex items-center justify-center text-neutral-300 hover:border-sky-600/70 transition-all active:scale-90 cursor-pointer"
                    aria-label="Previous"
                  >
                    <ChevronSvg className="rotate-180 text-2xl" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleNext(); }}
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

export default VerticalTabs;
