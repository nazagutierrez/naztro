"use client"

import { Marquee } from "@/components/Marquee"

const testimonials = [
  {
    quote: "El trabajo que hicieron superó nuestras expectativas. Lograron captar la esencia de la marca a la perfección y la web ahora refleja el verdadero nivel de nuestros productos.",
    author: "Valentina Carini",
    role: "Nordicaps",
  },
  {
    quote: "Necesitábamos una presencia online fuerte y moderna, y Naztro lo hizo realidad. La atención, la rapidez y el diseño final del sitio son de primera clase.",
    author: "Jose Alberto",
    role: "Piso Fuerte",
  },
  {
    quote: "Rediseñaron nuestra identidad digital por completo. Son muy profesionales y el sitio no solo es extremadamente rápido sino que estéticamente es increíble.",
    author: "Javier",
    role: "Dymo",
  },
  {
    quote: "La experiencia de usuario que crearon para nosotros es brutal. Entendieron al instante nuestro nicho y el resultado fue una web súper dinámica e interactiva.",
    author: "Javier Taboada",
    role: "Rave dates",
  },
];

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
        <Marquee speed={90}>
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
