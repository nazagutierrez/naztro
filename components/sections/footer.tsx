"use client";

const navigation = {
  work: [
    { name: "Proyectos", href: "#" },
    { name: "Servicios", href: "#" },
    { name: "Testimonios", href: "#" },
  ],
  company: [
    { name: "Nosotros", href: "#" },
    { name: "El Equipo", href: "#" },
    { name: "Contacto", href: "#" },
  ],
  social: [
    { name: "Instagram", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "GitHub", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="w-full bg-[url('/rough-cloth-light.png')] bg-[#030712] border-t border-white/5 relative overflow-hidden">
      
      {/* Luces sutiles */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[300px] bg-sky-500/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Planeta asomándose */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[85%] w-[200vw] md:w-[120vw] lg:w-[100vw] max-w-[2000px] aspect-square rounded-full border-t border-sky-400/50 bg-sky-400/5 shadow-[0_-20px_80px_rgba(56,189,248,0.1)] pointer-events-none z-0">
        <img 
          src="/star-light.webp" 
          alt="Star Flare" 
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] opacity-80 mix-blend-screen pointer-events-none"
        />
      </div>

      <div className="py-20 md:py-32 px-4 md:px-8 max-w-[95vw] mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20 md:mb-32">
          {/* Brand/Info Column */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <span className="main-font text-3xl text-white tracking-tight">NAZTRO</span>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mt-2">
              Transformamos problemas complejos en productos simples, estéticos y altamente funcionales.
            </p>
          </div>

          {/* Work */}
          <div>
            <h3 className="text-sm font-mono text-sky-400 uppercase tracking-widest mb-6">
              Navegación
            </h3>
            <ul className="space-y-4">
              {navigation.work.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-sky-400 text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-mono text-sky-400 uppercase tracking-widest mb-6">
              Agencia
            </h3>
            <ul className="space-y-4">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-sky-400 text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-mono text-sky-400 uppercase tracking-widest mb-6">
              Sociales
            </h3>
            <ul className="space-y-4">
              {navigation.social.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-sky-400 text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Large logo */}
        <div className="border-t border-white/5 pt-12 md:pt-20 flex flex-col items-center">
          <div className="hero-font text-[clamp(4rem,18vw,16rem)] text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent leading-none select-none text-center w-full">
            NAZTRO
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-8 md:mt-12 w-full px-4">
            <p className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-white/30">
              Desarrollo Web & UI/UX
            </p>
            <p className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-white/30 text-center md:text-right">
              © {new Date().getFullYear()} Naztro. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
