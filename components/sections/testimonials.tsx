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
    <section className="w-full py-32 bg-background relative overflow-hidden flex flex-col items-center">
      
      {/* Luces de fondo ambientales */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)' }} />

      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20 mx-auto z-10 relative mb-16 text-center">
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.1] flex flex-col items-center">
          <span className="main-font">LO QUE </span>
          <span className="hero-font text-sky-500">DICEN.</span>
        </h2>
      </div>

      <div className="w-full relative z-10 py-4">
        {/* Sombras laterales para fundir el marquee con el fondo suavemente */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[#030712] to-transparent z-20 pointer-events-none" />
        
        <Marquee speed={40}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[350px] md:w-[450px] lg:w-[500px] relative p-8 md:p-10 mx-4 rounded-sm border border-white/5 bg-[#0a0f1a]/60 backdrop-blur-md hover:bg-[#0f172a]/90 hover:border-sky-500/40 hover:shadow-[0_0_40px_-10px_rgba(14,165,233,0.15)] transition-all duration-500 overflow-hidden group flex flex-col justify-between min-h-[300px] md:min-h-[320px]"
            >
              {/* Comillas flotantes de fondo */}
              <div className="absolute top-4 right-8 text-8xl font-serif text-sky-500/10 group-hover:text-sky-500/20 transition-colors duration-500 pointer-events-none select-none">
                "
              </div>
              
              {/* Glow interno (Top Left) */}
              <div className="absolute top-0 left-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 70%)' }} />

              <blockquote className="text-lg md:text-xl font-normal leading-relaxed text-white/80 relative z-10 mb-8 flex-grow">
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

        {/* Sombra derecha */}
        <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[#030712] to-transparent z-20 pointer-events-none" />
      </div>
    </section>
  )
}
