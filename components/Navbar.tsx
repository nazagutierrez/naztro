import React, { useState, useEffect } from 'react';
import { Menu, X, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Beneficios', href: '#why-us' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
];

const SOCIAL_LINKS = [
  { label: 'Twitter', href: '#', icon: Twitter },
  { label: 'Instagram', href: '#', icon: Instagram },
  { label: 'LinkedIn', href: '#', icon: Linkedin },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)');
    setIsDesktop(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  // Secuencia: width primero, luego height, luego content
  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => setContentVisible(true), 750);
      return () => clearTimeout(t);
    } else {
      setContentVisible(false);
    }
  }, [isOpen]);

  // panelStyle usa inline styles porque contiene la lógica de transición secuencial
  // (width primero, height después con delay) que no puede expresarse en Tailwind
  const panelStyle: React.CSSProperties = isOpen
    ? {
        width: 'min(500px, calc(100vw - 3rem))', // responsive: respeta márgenes en móvil
        height: `min(${isDesktop ? '800px' : '600px'}, calc(100vh - 10rem))`, // 500px en desktop, 400px en móvil
        maxHeight: '90vh',
        transition: [
          'width 420ms cubic-bezier(0.16, 1, 0.3, 1) 0ms',
          'height 500ms cubic-bezier(0.16, 1, 0.3, 1) 380ms',
          'opacity 200ms ease 0ms',
        ].join(', '),
        opacity: 1,
        pointerEvents: 'auto',
      }
    : {
        width: '0px',
        height: '20px',
        transition: [
          'height 400ms cubic-bezier(0.7, 0, 1, 1) 0ms',
          'width 350ms cubic-bezier(0.7, 0, 1, 1) 380ms',
          'opacity 200ms ease 700ms',
        ].join(', '),
        opacity: 0,
        pointerEvents: 'none',
      };

  return (
    <>
      {/* Botón flotante en la esquina superior derecha */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 md:top-10 md:right-10 z-50 w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white backdrop-blur-md hover:bg-white/10 hover:border-sky-600/50 transition-all duration-300 shadow-lg cursor-pointer"
        aria-label="Toggle menu"
      >
        <div className="relative w-6 h-6 flex items-center justify-center">
          <Menu className={`absolute w-5 h-5 transition-all duration-300 ${isOpen ? 'opacity-0 scale-50 rotate-90' : 'opacity-100 scale-100 rotate-0'}`} />
          <X className={`absolute w-6 h-6 transition-all duration-300 ${isOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-90'}`} />
        </div>
      </button>

      {/* Panel dropdown debajo del botón */}
      {/*
        Las propiedades de position/sizing/transition están en panelStyle (inline) porque son dinámicas.
        Las propiedades estáticas de estilo visual están en className (Tailwind).
      */}
      <div
        className="fixed top-28 right-6 z-49 rounded-3xl overflow-hidden bg-[#0a0f1a]/65 backdrop-blur-xl border border-white/8 shadow-[0_32px_80px_-10px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)]"
        style={panelStyle}
      >
        {/* Glows internos — radial-gradient no soportado en Tailwind, permanecen inline */}
        <div
          className="absolute top-0 right-0 w-75 h-75 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-62.5 h-62.5 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)' }}
        />

        {/* Contenido interior */}
        {/*
          opacity/transform dependen de contentVisible (estado React), deben ser inline.
          El resto se mueve a Tailwind.
        */}
        <div
          className="relative z-10 h-full flex flex-col justify-between p-6 md:p-10 overflow-y-auto"
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 350ms ease, transform 350ms ease',
          }}
        >
          {/* Nav links */}
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link, i) => {
              const isHovered = hoveredIndex === i;
              const activeHover = isHovered && isDesktop;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative flex items-center py-1"
                >
                  {/* Logo que desliza — solo en desktop */}
                  <div
                    className="absolute left-0 pointer-events-none hidden md:block"
                    style={{
                      opacity: activeHover ? 1 : 0,
                      transform: activeHover ? 'translateX(0) rotate(0deg)' : 'translateX(-1.5rem) rotate(-15deg)',
                      transition: 'opacity 300ms ease-in-out, transform 300ms ease-in-out',
                    }}
                  >
                    <img src="/naztro.svg" alt="" className="w-12 h-12 object-contain" />
                  </div>

                  {/* Texto — color/transform solo en desktop */}
                  <span
                    className="main-font uppercase tracking-tight block"
                    style={{
                      fontSize: 'clamp(1.8rem, 8vw, 3rem)',
                      lineHeight: 1.05,
                      transition: 'color 300ms ease-in-out, transform 300ms ease-in-out',
                      color: activeHover ? 'rgb(125, 211, 252)' : 'white',
                      transform: activeHover ? 'translateX(3rem)' : 'translateX(0)',
                    }}
                  >
                    {link.label}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Divider + footer */}
          <div>
            {/* Gradiente lineal no soportado directamente en Tailwind sin arbitrary values complejos */}
            <div
              className="h-px mb-6"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }}
            />

            <div className="flex flex-col sm:flex-row items-start md:items-center justify-between gap-6 md:gap-0">
              {/* Redes sociales */}
              <div className="flex items-center gap-4">
                {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-sky-500/60 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>

              {/* Botón contacto */}
              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-sky-500/60 hover:border-sky-500 text-white text-sm font-medium transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.3)]"
              >
                <Mail className="w-4 h-4" />
                Contactar
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay para cerrar al hacer click afuera */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
