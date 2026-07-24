import React, { useState, useRef, useEffect } from "react";

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Todo a medida",
    subtitle: "Zero templates",
    description:
      "Cero plantillas, cero soluciones genéricas. Cada proyecto nace desde cero, pensado exclusivamente para tu negocio, tus usuarios y tus objetivos. Lo que construimos no existe en ningún otro lado.",
    tag: "Custom build",
  },
  {
    number: "02",
    title: "Pixel-perfect",
    subtitle: "Diseño sin concesiones",
    description:
      "Obsesionados con los detalles. Desde el kerning tipográfico hasta las micro-animaciones, cada elemento está refinado hasta que se siente exactamente bien — no 'suficientemente bien'.",
    tag: "Design craft",
  },
  {
    number: "03",
    title: "Una dupla, no una fábrica",
    subtitle: "Comunicación directa",
    description:
      "Trabajás directamente con los dos desarrolladores que ejecutan tu proyecto. Sin capas intermedias, sin malentendidos. Tu visión llega sin distorsión.",
    tag: "Direct access",
  },
  {
    number: "04",
    title: "Código que escala",
    subtitle: "Arquitectura pensada al futuro",
    description:
      "No construimos para hoy. Cada línea está pensada para crecer con tu negocio. Arquitecturas limpias, mantenibles y preparadas para el futuro.",
    tag: "Future proof",
  },
  {
    number: "05",
    title: "Velocidad real",
    subtitle: "Entregamos en tiempo y forma",
    description:
      "Sin excusas, sin sorpresas. Proceso ágil y comunicación constante para que siempre sepas en qué punto estamos. Lo acordado, cumplido.",
    tag: "On time",
  },
  {
    number: "06",
    title: "Resultados medibles",
    subtitle: "No solo código bonito",
    description:
      "Entregamos conversiones, retención y crecimiento. Cada decisión de diseño y técnica está tomada pensando en el impacto real en tu negocio.",
    tag: "ROI focused",
  },
];

function DifferentiatorRow({
  item,
  index,
}: {
  item: (typeof DIFFERENTIATORS)[0];
  index: number;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTimeout(() => setVisible(true), index * 60);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.5s ease ${index * 60}ms, transform 0.5s ease ${index * 60}ms`,
      }}
    >
      {/* Top separator line with fill animation */}
      <div className="relative h-px bg-white/8 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-sky-500/60 to-blue-500/40 origin-left scale-x-0 md:group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
      </div>

      {/* Row content */}
      <div
        className="flex flex-col md:grid md:grid-cols-12 items-start gap-3 md:gap-8 py-7 md:py-9 cursor-default relative"
      >
        {/* Number & Mobile Tag */}
        <div className="flex w-full justify-between items-center md:items-start md:w-auto md:col-span-1 md:block pt-1">
          <span
            className="font-mono text-xs md:text-sm tracking-widest transition-colors duration-300 text-[rgba(56,189,248,0.9)] md:text-[rgba(255,255,255,0.2)] md:group-hover:text-[rgba(56,189,248,0.9)]"
          >
            /{item.number}
          </span>
          <span
            className="md:hidden font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border whitespace-nowrap transition-all duration-300 border-[rgba(56,189,248,0.4)] text-[rgba(56,189,248,0.9)] bg-[rgba(56,189,248,0.06)]"
          >
            {item.tag}
          </span>
        </div>

        {/* Title + description */}
        <div className="w-full md:col-span-9">
          {/* Title */}
          <h3
            className="font-sans mb-2 font-medium tracking-tight leading-none transition-colors duration-300 text-white md:text-[rgba(255,255,255,0.7)] md:group-hover:text-white"
            style={{
              fontSize: "clamp(1.6rem, 4vw, 3.2rem)",
            }}
          >
            {item.title}
          </h3>

          {/* Subtitle */}
          <p
            className="font-mono text-xs md:text-sm mt-1 transition-colors duration-300 text-[rgba(56,189,248,0.7)] md:text-[rgba(255,255,255,0.65)] md:group-hover:text-[rgba(56,189,248,0.7)]"
          >
            {item.subtitle}
          </p>

          {/* Description — always open on mobile, expands on hover on desktop */}
          <div
            className="grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] grid-rows-[1fr] opacity-100 md:grid-rows-[0fr] md:opacity-0 md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100"
          >
            <div style={{ overflow: "hidden", minHeight: 0 }}>
              <p className="text-white/80 text-sm md:text-base leading-relaxed pt-4 max-w-xl">
                {item.description}
              </p>
            </div>
          </div>
        </div>

        {/* Tag */}
        <div className="hidden md:flex md:col-span-2 justify-end items-start pt-1">
          <span
            className="font-mono md:text-xs uppercase tracking-widest px-2.5 py-1 rounded-full border whitespace-nowrap transition-all duration-300 border-[rgba(255,255,255,0.16)] text-[rgba(255,255,255,0.5)] bg-transparent md:group-hover:border-[rgba(56,189,248,0.4)] md:group-hover:text-[rgba(56,189,248,0.9)] md:group-hover:bg-[rgba(56,189,248,0.06)]"
          >
            {item.tag}
          </span>
        </div>
      </div>
    </div>
  );
}

export function WhyUs() {
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
    <section className="w-full py-16 md:py-32 bg-background relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)' }} />

      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20 mx-auto relative z-10">

        {/* Header — left-aligned, editorial */}
        <div
          ref={titleRef}
          className="mb-13 md:mb-16"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="inline-flex mb-10 items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/5 px-4 py-1.5 text-xs font-mono text-sky-400 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            Por qué elegirnos
          </div>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.05] flex flex-col">
              <span className="main-font">LO QUE NOS</span>
              <span className="hero-font pb-5">diferencia.</span>
            </h2>
            <div className="text-white text-base md:text-lg max-w-xs leading-relaxed md:text-right">
              <h4 className="hero-font text-2xl">No somos una agencia más.</h4>
            </div>
          </div>
        </div>

        {/* Differentiators — editorial list. */}
        <div className="relative lg:h-screen">
          {DIFFERENTIATORS.map((item, i) => (
            <DifferentiatorRow key={item.number} item={item} index={i} />
          ))}
          {/* Bottom line */}
          <div className="h-px bg-white/8" />
        </div>

      </div>
    </section>
  );
}

export default WhyUs;
