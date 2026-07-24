"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "¿Cuánto tarda el desarrollo de un proyecto?",
    answer:
      "Depende del alcance. Una landing page interactiva puede tomar de 1 a 2 semanas, mientras que plataformas complejas o e-commerce pueden llevar de 4 a 8 semanas. Siempre entregamos un cronograma claro antes de empezar.",
  },
  {
    question: "¿Ofrecen rediseño de sitios ya existentes?",
    answer:
      "Sí. Analizamos tu plataforma actual, identificamos los cuellos de botella en experiencia de usuario o rendimiento, y reescribimos o rediseñamos las partes clave para llevarlo al siguiente nivel.",
  },
  {
    question: "¿Qué tecnologías utilizan?",
    answer:
      "Nos especializamos en el ecosistema moderno: React, Next.js, TypeScript y TailwindCSS para el frontend. En el backend, usamos Node, APIs robustas o soluciones modernas según lo requiera la escalabilidad de tu negocio.",
  },
  {
    question: "¿Cómo es el flujo de trabajo con ustedes?",
    answer:
      "Trabajamos por sprints. Empezamos con el diseño UI/UX y aprobaciones iterativas. Luego pasamos a código y hacemos despliegues constantes para que puedas ir probando la aplicación en tiempo real.",
  },
  {
    question: "¿Dan soporte una vez terminado el sitio?",
    answer:
      "Por supuesto. Ofrecemos planes de mantenimiento para monitorear el rendimiento, actualizar herramientas y agregar nuevas features a medida que tu negocio crezca.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full h-[1000px] sm:h-[1100px] lg:h-[850px] xl:h-screen py-16 md:py-32 lg:pb-0 bg-background relative overflow-hidden flex flex-col items-center">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)' }} />

      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20 mx-auto z-10 relative">
        <div className="flex flex-col lg:flex-row gap-x-14 gap-y-7 justify-center">
          
          {/* Header */}
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-sm font-medium text-sky-400 backdrop-blur-sm w-max mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              Resolvemos tus dudas
            </div>
            
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1] flex flex-col mb-6">
              <span className="main-font">PREGUNTAS </span>
              <span className="hero-font text-sky-500">FRECUENTES.</span>
            </h2>
            
            <p className="text-white/60 text-lg max-w-md">
              Todo lo que necesitas saber sobre nuestro proceso, tecnologías y cómo podemos ayudarte a escalar tu producto digital.
            </p>
          </div>

          {/* Questions */}
          <div className="w-full space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`relative bg-[#0a0f1a]/60 overflow-hidden transition-all duration-500 rounded-2xl ${
                    isOpen 
                      ? "border border-sky-500/30 shadow-[0_0_40px_-10px_rgba(14,165,233,0.15)]" 
                      : "border border-white/5 hover:border-white/10"
                  }`}
                >
                  {/* Decorative glowing gradient for active item */}
                  {isOpen && (
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-transparent pointer-events-none" />
                  )}
                  
                  <button
                    className="relative cursor-pointer w-full px-6 py-4 md:py-6 md:px-8 flex items-center justify-between text-left group z-10"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className={`text-lg md:text-xl tracking-wide transition-colors duration-300 ${isOpen ? "text-sky-200" : "text-white/90 group-hover:text-white"}`}>
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 ml-6 flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border transition-all duration-300 ${
                        isOpen 
                          ? "border-sky-500/50 text-sky-400 rotate-45 shadow-[0_0_15px_-3px_rgba(14,165,233,0.3)]" 
                          : "border-white/10 text-white/50 group-hover:border-white/20 group-hover:text-white/80"
                      }`}
                      aria-hidden="true"
                    >
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300">
                        <path d="M7.5 1V14M1 7.5H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="z-10 relative"
                      >
                        <div className="px-6 md:px-8 pb-8 pt-2">
                          <div className="w-62 absolute -top-2.5 h-px bg-gradient-to-r from-sky-500 to-transparent mb-4 rounded-full opacity-50" />
                          <p className="text-base text-white/70 leading-relaxed font-light">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
