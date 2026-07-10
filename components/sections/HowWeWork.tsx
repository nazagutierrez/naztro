import React, { useRef, useEffect, useState } from "react";

const STEPS = [
  {
    number: "01",
    title: "Nos ponemos en contacto",
    description:
      "Todo empieza con una charla. Nos contás de tu negocio, tu idea o el problema que querés resolver. Sin formularios eternos, sin presupuestos ciegos — solo una conversación directa.",
    detail: "WhatsApp · Mail · Llamada",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Diagnóstico y propuesta",
    description:
      "Analizamos en profundidad tu caso. Exploramos referencias, definimos el alcance real del proyecto y te presentamos una propuesta detallada con tiempos y costos claros.",
    detail: "Propuesta · Alcance · Timeline",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Diseño y arquitectura",
    description:
      "Diseñamos el sistema visual y la estructura técnica antes de escribir una sola línea de código. Componentes, flujos, paleta, tipografía — todo definido y aprobado por vos.",
    detail: "UI/UX · Componentes · Tech stack",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Desarrollo iterativo",
    description:
      "Construimos en sprints cortos con entregas parciales. Ves el producto crecer en tiempo real, podés dar feedback en cada etapa y el resultado final es exactamente lo que imaginaste.",
    detail: "Sprints · Reviews · Ajustes",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Lanzamiento",
    description:
      "Deploy, configuración de dominio, optimización final y pruebas exhaustivas. Nos aseguramos de que todo esté perfecto antes de que el mundo lo vea. Cero improvisación.",
    detail: "Deploy · Testing · Optimización",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Soporte y evolución",
    description:
      "El lanzamiento no es el final, es el inicio. Permanecemos disponibles para mantener, mejorar y escalar tu producto a medida que tu negocio crece.",
    detail: "Mantenimiento · Mejoras · Escala",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
];

function StepCard({
  step,
  index,
  isLast,
}: {
  step: (typeof STEPS)[0];
  index: number;
  isLast: boolean;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTimeout(() => setVisible(true), index * 100);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  const isLastInLgRow = (index + 1) % 3 === 0 || index === STEPS.length - 1;

  return (
    <div
      ref={ref}
      className="relative flex flex-row lg:flex-col gap-6 lg:gap-8 group h-full"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease ${index * 100}ms, transform 0.6s ease ${index * 100}ms`,
      }}
    >
      {/* Icon & Connectors Area */}
      <div className="relative flex-shrink-0 w-14 h-14 lg:w-full flex items-center">
        
        {/* Circle Icon */}
        <div
          className="relative w-14 h-14 rounded-full border border-sky-500/30 bg-[#0a0f1a]/80 backdrop-blur-sm
            flex items-center justify-center text-sky-400
            group-hover:border-sky-400 group-hover:bg-sky-500/10 group-hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.3)]
            transition-all duration-300 z-10"
        >
          <span className="text-sky-400 group-hover:scale-110 transition-transform duration-300">
            {step.icon}
          </span>
        </div>

        {/* MOBILE: Vertical connector line (Downwards) */}
        {!isLast && (
          <div 
            className="lg:hidden absolute top-14 left-7 w-px -translate-x-1/2 bg-sky-500/20 z-0 overflow-hidden"
            style={{ height: 'calc(100% - 0.5rem)' }}
          >
            <div 
              className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-sky-400 to-transparent"
              style={{ animation: visible ? "stepDotFlowDown 2s ease-in-out infinite" : "none" }}
            />
          </div>
        )}

        {/* DESKTOP: Horizontal connector line (Rightwards) */}
        {!isLastInLgRow && (
          <div 
            className="hidden lg:block absolute top-7 left-14 h-px -translate-y-1/2 bg-sky-500/20 z-0 overflow-hidden"
            style={{ width: 'calc(100% - 0.5rem)' }}
          >
            <div 
              className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-sky-400 to-transparent"
              style={{ animation: visible ? "stepDotFlowRight 2s ease-in-out infinite" : "none" }}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col pt-1 lg:pt-0 pb-8 lg:pb-0 h-full">
        <span className="font-mono text-sm text-sky-400 mb-2">/{step.number}</span>
        <h3 className="text-xl md:text-2xl font-medium text-white mb-3 group-hover:text-sky-300 transition-colors">
          {step.title}
        </h3>
        <p className="text-white/50 text-sm md:text-base leading-relaxed mb-4 flex-1">
          {step.description}
        </p>
        <span className="inline-block text-[10px] md:text-xs uppercase tracking-widest text-sky-300/50">
          {step.detail}
        </span>
      </div>
    </div>
  );
}

export function HowWeWork() {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTitleVisible(true); },
      { threshold: 0.2 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-24 md:py-32 bg-background relative overflow-hidden">
      
      {/* Keyframe animations for the connector glowing dots */}
      <style>{`
        @keyframes stepDotFlowDown {
          0% { top: -30%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes stepDotFlowRight {
          0% { left: -30%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
      `}</style>

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-20 relative z-10">
        
        {/* Header */}
        <div
          ref={titleRef}
          className="flex flex-col items-center text-center mb-16 md:mb-24"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/5 px-4 py-1.5 text-xs font-mono text-sky-400 tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            Nuestro Proceso
          </div>

          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.1] flex flex-col items-center">
            <span className="main-font">CÓMO </span>
            <span className="hero-font pb-3">trabajamos.</span>
          </h2>

          <p className="text-white/50 text-lg md:text-xl max-w-2xl mt-6 leading-relaxed">
            Metodología clara, transparente y ágil. Sin vueltas ni sorpresas.
            Así es como llevamos tu idea desde el primer mail hasta el lanzamiento.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="w-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-y-20 gap-x-12">
            {STEPS.map((step, index) => (
              <StepCard
                key={step.number}
                step={step}
                index={index}
                isLast={index === STEPS.length - 1}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default HowWeWork;
