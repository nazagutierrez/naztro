"use client";

export function CTA() {
  return (
    <section className="w-full min-h-[80vh] md:min-h-screen py-16 md:py-32 bg-background relative overflow-hidden flex flex-col items-center justify-center">
      
      {/* Glow central intenso */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 70%)' }} />

      <div className="w-full max-w-4xl px-4 mx-auto z-10 relative text-center">
        
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-sm font-medium text-sky-400 backdrop-blur-sm w-max mb-8 mx-auto">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          Listos para empezar
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.1] flex flex-col items-center mb-6">
          <span className="main-font">EMPECEMOS </span>
          <span className="hero-font text-sky-500">TU PROYECTO.</span>
        </h2>
        
        <p className="text-white/60 text-lg md:text-xl sm:px-10 max-w-2xl mx-auto mb-12">
          Escríbenos a nuestro correo y nos pondremos en contacto contigo en menos de 24 horas para hablar sobre cómo podemos digitalizar tu idea.
        </p>

        <div className="max-w-2xl mx-auto relative group">
          <a
            href="mailto:naztrosoftwarejunin@gmail.com"
            className="text-xl md:text-3xl text-white font-thin tracking-wide hover:text-sky-400 transition-colors duration-300 break-words md:break-normal underline decoration-1 underline-offset-8 decoration-sky-400/30 text-center block"
          >
            naztrosoftwarejunin@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
