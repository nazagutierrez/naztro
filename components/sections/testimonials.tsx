"use client"

import { Marquee } from "@/components/Marquee"

const testimonials = [
  {
    quote: "Entendieron perfectamente lo que buscábamos. Nuestra nueva landing no solo se ve increíble, sino que aumentó las conversiones un 45%.",
    author: "Federico L.",
    role: "CEO, StartFlow",
  },
  {
    quote: "La atención al detalle y las micro-animaciones marcan la diferencia. El producto final se siente premium de principio a fin.",
    author: "Camila V.",
    role: "Dir. de Marketing, Prisma",
  },
  {
    quote: "Un equipo brutal. Reestructuraron todo nuestro frontend y la plataforma ahora vuela. Gran experiencia trabajando con Naztro.",
    author: "Martín R.",
    role: "CTO, NextGen Logistics",
  },
  {
    quote: "Buscábamos algo que gritara innovación y superaron las expectativas. El diseño es limpio, moderno y exactamente lo que necesitábamos.",
    author: "Julieta S.",
    role: "Founder, NeonLab",
  },
  {
    quote: "Desarrollo a medida real. No usaron plantillas, todo fue hecho desde cero para nuestras necesidades. Totalmente recomendados.",
    author: "Alejandro G.",
    role: "Director, Apex E-commerce",
  },
]

export function Testimonials() {
  return (
    <section className="w-full py-16 md:py-32 bg-background relative flex flex-col items-center" style={{ overflowX: 'clip' }}>
      
      {/* Luces de fondo ambientales */}
      <div className="absolute overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)' }} />

      <div className="w-full overflow-hidden px-4 md:px-8 lg:px-12 xl:px-20 mx-auto z-10 relative mb-16 text-center">
        <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.1] flex flex-col items-center">
          <span className="main-font">LO QUE </span>
          <span className="hero-font text-sky-500">DICEN.</span>
        </h2>
      </div>

      <div 
        className="w-full overflow-hidden relative z-10 py-4"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}
      >
        <Marquee speed={40}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] sm:w-[350px] md:w-[450px] lg:w-[500px] relative p-6 sm:p-8 md:p-10 mx-3 md:mx-4 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.05] hover:border-sky-500/30 hover:shadow-[0_0_40px_-10px_rgba(14,165,233,0.15)] transition-all duration-500 overflow-hidden group flex flex-col justify-between min-h-[260px] md:min-h-[320px]"
            >
              {/* Comillas flotantes de fondo */}
              <div className="absolute top-4 right-8 text-6xl md:text-8xl font-serif text-sky-500/10 group-hover:text-sky-500/20 transition-colors duration-500 pointer-events-none select-none">
                "
              </div>

              <blockquote className="text-base md:text-xl font-normal leading-relaxed text-white/90 relative z-10 mb-6 md:mb-8 flex-grow">
                {testimonial.quote}
              </blockquote>
              
              <div className="relative z-10 flex items-center gap-4">
                {/* Un pequeño avatar decorativo con la inicial */}
                <div className="w-12 h-12 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 font-medium text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="text-base font-medium text-white group-hover:text-sky-400 transition-colors">
                    {testimonial.author}
                  </div>
                  <div className="text-sm font-mono text-sky-300/50 uppercase tracking-wider mt-0.5">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
