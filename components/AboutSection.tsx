import React from "react";

// Puedes editar los nombres e info aquí:
const TEAM = [
  {
    name: <><span className="text-sky-500">Naz</span>areno Gutierrez</>,
    role: "Frontend Developer",
    description: "Especialista en construir interfaces atractivas y dinámicas. Mi enfoque está en dar vida a los diseños con precisión pixel-perfect, optimizando el rendimiento del cliente y garantizando una experiencia de usuario moderna y fluida.",
  },
  {
    name: <>Marcelo Mas<span className="text-sky-500">tro</span>iani</>,
    role: "Backend Developer",
    description: "Arquitecto de los sistemas invisibles que hacen que todo funcione. Me especializo en el desarrollo de APIs robustas, seguridad de datos y arquitecturas escalables para garantizar un rendimiento óptimo en los servidores.",
  }
];

export function AboutSection() {
  return (
    <section className="w-full min-h-screen bg-background flex items-center py-20 relative overflow-hidden">
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Team */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            <div className="space-y-4 mb-14">

              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1] flex flex-col">
                <span className="main-font">EL </span>
                <span className="hero-font text-sky-500">EQUIPO.</span>
              </h2>
              <p className="text-white/70 text-lg md:text-xl max-w-xl leading-relaxed mt-4">
                Somos una dupla creativa obsesionada con llevar la digitalización al siguiente nivel. Transformamos problemas complejos en productos simples, estéticos y altamente funcionales.
              </p>
            </div>

            <div className="flex flex-col space-y-10">
              {TEAM.map((member, i) => (
                <div 
                  key={i}
                  className="relative flex max-w-150 flex-col gap-2 transition-all duration-500"
                >
                  <div className="flex flex-row justify-between items-center mb-2">
                    <h3 className="text-2xl md:text-3xl font-thin text-white">
                      {member.name}
                    </h3>
                    <span className="text-[10px] md:text-xs font-mono text-sky-300/80 uppercase tracking-widest border border-sky-500/20 bg-sky-500/5 px-3 py-1 rounded-lg w-max">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed relative z-10 text-pretty">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Ascii Logo & Dithering */}
          <div className="lg:col-span-6 h-full min-h-[500px] flex flex-col justify-center order-1 lg:order-2">
            <div className="relative w-full aspect-square md:aspect-auto md:h-[700px] rounded-[28px] border border-sky-700/30 shadow-[0_0_80px_-20px_rgba(14,165,233,0.2)] overflow-hidden flex items-center justify-center group/card bg-[#030712]">
              
              {/* Background Image */}
              <div className="absolute inset-0 z-0 mix-blend-screen pointer-events-none duration-700 opacity-60">
                <img src="/naza-marce.png" className="h-full w-full object-cover" alt="Team" loading="lazy" decoding="async" />
              </div>

              {/* Gradient Overlays para profundidad */}
              <div className="absolute inset-0 z-1 bg-gradient-to-t from-[#0307123a] via-transparent to-[#030712]/20 pointer-events-none" />
              <div className="absolute inset-0 z-1 bg-gradient-to-r from-[#0307123a] via-transparent to-[#030712]/20 pointer-events-none" />

              {/* Contenedor del logo interactivo */}
              <div className="relative z-10 transform transition-transform duration-1000 ease-out group-hover/card:scale-105">
                {/* Glow detrás del logo */}
                <div className="absolute inset-0 rounded-full scale-150 opacity-50 group-hover/card:opacity-100 transition-opacity duration-700" style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.2) 0%, transparent 70%)' }} />
                {/* <AsciiLogo /> */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
