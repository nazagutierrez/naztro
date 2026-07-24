import React, { useRef, useEffect, useState } from "react";
import AsciiLogo from "./AsciiLogo";
import { LayoutTemplate, Code2, ShoppingCart, PenTool, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    id: "01",
    title: "Sitios Web & Landings",
    description: "Creamos sitios web de alto impacto visual diseñados para convertir. Optimizados para SEO, tiempos de carga rápidos y con un diseño moderno que transmite confianza extrema en tu marca.",
    icon: LayoutTemplate,
  },
  {
    id: "02",
    title: "Sistemas a Medida",
    description: "Desarrollo de aplicaciones web y plataformas complejas. Desde paneles administrativos y CRMs hasta sistemas de automatización internos diseñados para escalar con tu negocio.",
    icon: Code2,
  },
  {
    id: "03",
    title: "E-commerce",
    description: "Tiendas online escalables y seguras. Integramos pasarelas de pago y optimizamos obsesivamente todo el flujo de compra para maximizar tus ventas y retener clientes.",
    icon: ShoppingCart,
  },
  {
    id: "04",
    title: "Diseño UX/UI",
    description: "Interfaces pixel-perfect centradas 100% en el usuario. Nos aseguramos de que cada interacción sea intuitiva, moderna y visualmente increíble. El diseño no es un adorno, es función.",
    icon: PenTool,
  }
];

function ServiceCard({ service, index }: { service: typeof SERVICES[0], index: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const Icon = service.icon;

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease ${index * 100}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 100}ms`
      }}
      className="group relative p-8 md:p-10 rounded-[2rem] border border-white/5 bg-[#0a0f1a]/40 overflow-hidden transition-all duration-500 hover:bg-[#0a0f1a]/80 hover:border-sky-500/30 hover:shadow-[0_0_80px_-15px_rgba(14,165,233,0.15)] flex flex-col justify-between min-h-[320px]"
    >
      {/* Corner Glow */}
      <div className="absolute -top-32 -right-32 w-64 h-64 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 70%)' }} />
      
      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />

      {/* Hover Background Logo */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <img
          src="/naztro.svg"
          alt=""
          className={`absolute w-[85%] h-[85%] object-contain opacity-0 transition-all duration-700 ease-out
            ${index % 2 === 0 ? 'translate-x-1/2' : '-translate-x-1/2'}
            ${index < 2 ? 'translate-y-1/2' : '-translate-y-1/2'}
            group-hover:opacity-[0.1] group-hover:translate-x-0 group-hover:translate-y-0
          `}
        />
      </div>

      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-8">
          <div className="w-14 h-14 rounded-2xl bg-[#030712]/80 border border-white/10 flex items-center justify-center text-white/70 group-hover:border-sky-500/50 group-hover:text-sky-400 transition-all shadow-lg">
            <Icon strokeWidth={1.5} className="w-6 h-6" />
          </div>
          <span className="font-mono text-3xl md:text-4xl font-light text-white/5 group-hover:text-sky-500/20 transition-colors duration-500 select-none">
            {service.id}
          </span>
        </div>
        
        <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-sky-300 transition-colors duration-300">
          {service.title}
        </h3>
        
        <p className="text-white/50 text-sm md:text-base leading-relaxed group-hover:text-white/70 transition-colors duration-300 flex-1">
          {service.description}
        </p>

        <div className="mt-8 flex items-center text-sky-400 font-mono text-xs tracking-widest uppercase opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
          Descubrir más <ArrowRight className="w-4 h-4 ml-2" />
        </div>
      </div>
    </div>
  );
}

export function ServicesSection() {
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
    <section className="w-full relative overflow-hidden bg-background py-16 md:py-32">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full pointer-events-none -translate-x-1/2" style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full pointer-events-none translate-x-1/3" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)' }} />

      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        
        {/* Top Header Row: Title & AsciiLogo Showcase */}
        <div className="flex  flex-col lg:flex-row items-stretch gap-6 md:gap-8 mb-6 md:mb-8">
          
          {/* Title Area */}
          <div 
            ref={titleRef}
            className="lg:w-7/12 md:p-12 lg:p-16 flex flex-col justify-center relative group"
            style={{
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/5 px-4 py-1.5 text-xs font-mono text-sky-400 tracking-widest uppercase mb-8 w-max">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                Nuestras áreas
              </div>
              
              <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.05] flex flex-col mb-6">
                <span className="main-font">LO QUE</span>
                <span className="hero-font pb-2">hacemos.</span>
              </h2>
              
              <p className="text-white/50 text-base md:text-lg max-w-xl leading-relaxed">
                Transformamos ideas complejas en productos digitales de alto rendimiento. 
                Diseño obsesivo, código impecable y un enfoque total en tus resultados.
              </p>
            </div>
          </div>
          
          {/* AsciiLogo Showcase Container */}
          <div className="lg:w-5/12 min-h-[350px] absolute -right-10 sm:right-0 -top-30 md:-top-4 lg:top-0 lg:min-h-0 rounded-[2rem] lg:relative group flex flex-col items-center justify-center">
            {/* Background Glow */}
            <div className="absolute w-60 h-60 rounded-full scale-150 opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.25) 0%, transparent 70%)' }} />
            
            {/* Interaction Hint */}
            <div className="absolute  top-18 right-8 font-mono text-[10px] text-sky-400/70 uppercase tracking-widest hidden md:flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-400/70 animate-ping" />
              Interactua
            </div>

            {/* Logo */}
            <div className="relative z-10 opacity-70 md:opacity-100 w-full max-h-120 aspect-square transition-transform duration-700 ease-out group-hover:scale-105">
               <AsciiLogo />
            </div>
          </div>

        </div>

        {/* Bottom Row: 2x2 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;
