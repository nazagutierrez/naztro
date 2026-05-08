"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <section className="w-full py-32 bg-background relative overflow-hidden flex flex-col items-center">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20 mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Header */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-sm font-medium text-sky-400 backdrop-blur-sm w-max mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              Resolvemos tus dudas
            </div>
            
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1] flex flex-col mb-6">
              <span className="main-font">PREGUNTAS </span>
              <span className="hero-font text-sky-500">FRECUENTES.</span>
            </h2>
            
            <p className="text-white/60 text-lg max-w-md">
              Todo lo que necesitas saber sobre nuestro proceso, tecnologías y cómo podemos ayudarte a escalar tu producto digital.
            </p>
          </div>

          {/* Questions */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`border transition-all duration-300 rounded-[16px] overflow-hidden ${
                    isOpen 
                      ? "border-sky-500/40 bg-[#0f172a]/80 shadow-[0_0_30px_-5px_rgba(14,165,233,0.15)]" 
                      : "border-white/5 bg-[#0a0f1a]/50 hover:bg-[#0a0f1a]/80 hover:border-white/10"
                  }`}
                >
                  <button
                    className="w-full px-6 py-6 flex items-center justify-between text-left group"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className={`text-lg md:text-xl font-medium tracking-tight transition-colors duration-300 ${isOpen ? "text-sky-400" : "text-white group-hover:text-sky-300"}`}>
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center text-lg transition-all duration-300 ${
                        isOpen 
                          ? "border-sky-500 bg-sky-500/10 text-sky-400 rotate-180" 
                          : "border-white/20 text-white/50 group-hover:border-sky-500/50 group-hover:text-sky-400"
                      }`}
                      aria-hidden="true"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm md:text-base text-white/60 leading-relaxed px-6 pb-6">
                          {faq.answer}
                        </p>
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
