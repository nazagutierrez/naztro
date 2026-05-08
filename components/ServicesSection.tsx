import React from "react";
import AsciiLogo from "./AsciiLogo";

const SERVICES = [
  {
    id: "01",
    title: "Sitios Web & Landings",
    description: "Creamos sitios web de alto impacto visual diseñados para convertir. Optimizados para SEO, tiempos de carga rápidos y con un diseño moderno que transmite confianza.",
    icon: "🌐"
  },
  {
    id: "02",
    title: "Sistemas a Medida",
    description: "Desarrollo de aplicaciones web y plataformas complejas. Desde paneles administrativos y CRMs hasta sistemas de automatización internos para tu negocio.",
    icon: "⚙️"
  },
  {
    id: "03",
    title: "E-commerce",
    description: "Tiendas online escalables y seguras. Integramos pasarelas de pago y optimizamos todo el flujo de compra para maximizar tus ventas y fidelizar clientes.",
    icon: "🛒"
  },
  {
    id: "04",
    title: "Diseño UX/UI",
    description: "Interfaces pixel-perfect centradas 100% en el usuario. Nos aseguramos de que cada interacción sea intuitiva, moderna y visualmente increíble.",
    icon: "✨"
  }
];

export function ServicesSection() {
  return (
    <section className="w-full min-h-screen bg-background flex items-center py-24 relative overflow-hidden">
      
      {/* Luces de fondo ambientales */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none opacity-50" />
      
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20 mx-auto z-10 relative">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.1] flex flex-col items-center">
            <span className="main-font">NUESTROS </span>
            <span className="hero-font text-sky-500">SERVICIOS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Ascii Logo (El componente central que querías incluir) */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1 relative group w-full h-full min-h-[400px] items-center">
            <div className="absolute inset-0 bg-sky-500/5 blur-3xl rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="relative z-10 transform transition-transform duration-700 hover:scale-[1.02]">
               <AsciiLogo />
            </div>
          </div>

          {/* Right: Grid of services cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 order-1 lg:order-2">
            {SERVICES.map((service) => (
              <div 
                key={service.id} 
                className="group relative p-8 rounded-[24px] border border-white/5 bg-[#0a0f1a]/50 backdrop-blur-md hover:bg-[#0f172a]/80 hover:border-sky-500/40 hover:shadow-[0_0_40px_-10px_rgba(14,165,233,0.15)] transition-all duration-500 overflow-hidden flex flex-col"
              >
                {/* Glow interno (Top Right) */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full pointer-events-none" />

                <div className="flex justify-between items-start mb-6">
                  <span className="text-3xl filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-12">
                    {service.icon}
                  </span>
                  <span className="text-[10px] md:text-xs font-mono text-sky-300/40 group-hover:text-sky-300/90 transition-colors">
                    /{service.id}
                  </span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-medium text-white mb-3 group-hover:text-sky-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Línea decorativa inferior que se expande */}
                <div className="h-[2px] w-0 bg-gradient-to-r from-sky-400 to-sky-600 mt-6 group-hover:w-full transition-all duration-700 ease-out" />
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
