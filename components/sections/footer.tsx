"use client";

import { motion } from "framer-motion";
import WhatsappSvg from "../svg/WhatsappSvg";
import InstagramSvg from "../svg/InstagramSvg";
import starLightImg from "@/src/assets/star-light.webp";
import MailSvg from "../svg/MailSvg";

const navigation = {
  work: [
    { name: "Proyectos", href: "#trabajos" },
    { name: "Servicios", href: "#servicios" },
    { name: "Testimonios", href: "#testimonios" },
  ],
  company: [
    { name: "Nosotros", href: "#nosotros" },
    { name: "Proceso", href: "#proceso" },
    { name: "Contacto", href: "#contacto" },
  ],
  social: [
    { name: "Instagram", href: "https://www.instagram.com/naztrosoftware/" },
    { name: "Mail", href: "mailto:naztrosoftwarejunin@gmail.com" },
    { name: "WhatsApp", href: "https://wa.me/542364329720" },
  ],
};

export function Footer() {
  return (
    <footer className="w-full bg-[url('/buried.png')] bg-[#030712] border-t border-white/5 relative overflow-hidden">
      <style>{`
        @keyframes starPulse {
          0%, 50%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.8;
            filter: brightness(1) drop-shadow(0 0 10px rgba(56,189,248,0.1));
          }
          75% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 1;
            filter: brightness(1.5) drop-shadow(0 0 20px rgba(56,189,248,0.3));
          }
        }
        .star-pulse-animated {
          animation: starPulse 4s ease-in-out infinite;
          transform-origin: center center;
        }
      `}</style>
      
      {/* Luces sutiles */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[300px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(14,165,233,0.1) 0%, transparent 70%)' }} />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[85%] w-[200vw] md:w-[120vw] lg:w-[100vw] max-w-[2000px] aspect-square rounded-full border-t border-sky-400/50 bg-sky-400/5 shadow-[0_-20px_80px_rgba(56,189,248,0.1)] pointer-events-none z-0">
        <img 
          src={starLightImg}
          alt="Star Flare" 
          className="absolute top-0 left-1/2 w-[300px] md:w-[500px] mix-blend-screen pointer-events-none star-pulse-animated"
          style={{ transform: "translate(-50%, -50%)" }}
        />
      </div>

      <div className="pb-20 md:pb-32 pt-12 md:pt-20 px-4 md:px-8 max-w-[95vw] mx-auto relative z-10">
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand/Info Column */}
          <div className="col-span-3 sm:col-span-3 md:col-span-1 flex flex-col gap-4">
            <span className="main-font text-3xl text-white tracking-tight">NAZTRO</span>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mt-2">
              Transformamos problemas complejos en productos simples, estéticos y altamente funcionales.
            </p>
            {/* Redes sociales - Mobile solo */}
            <div className="flex sm:hidden items-center gap-4 mt-2">
              <a 
                href="https://www.instagram.com/naztrosoftware"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-sky-400 hover:border-sky-400/30 hover:bg-sky-400/10 transition-all">
                <InstagramSvg className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/542364329720"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-sky-400 hover:border-sky-400/30 hover:bg-sky-400/10 transition-all"
              >
                <WhatsappSvg className="w-5 h-5" />
              </a>
              <a 
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:naztrosoftwarejunin@gmail.com"
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-sky-400 hover:border-sky-400/30 hover:bg-sky-400/10 transition-all">
                <MailSvg className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Work */}
          <div className="col-span-2 sm:col-span-1">
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
          <div className="hidden sm:block">
            <h3 className="text-sm font-mono text-sky-400 uppercase tracking-widest mb-6">
              Sociales
            </h3>
            <ul className="space-y-4">
              {navigation.social.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
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
        <div className="pt-12 md:pt-20 flex flex-col items-center">
          <div className="hero-font text-[clamp(4rem,18vw,16rem)] text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent leading-none select-none text-center w-full">
            NAZTRO
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-8 md:mt-12 w-full px-4">
            <p className="text-[10px] hidden md:block md:text-xs font-mono uppercase tracking-widest text-white/30">
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
