"use client";

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import InstagramSvg from '@/components/svg/InstagramSvg';
import WhatsappSvg from '@/components/svg/WhatsappSvg';

export function CTA() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('naztrosoftwarejunin@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full min-h-[80vh] md:min-h-screen py-16 md:py-32 bg-background relative overflow-hidden flex flex-col items-center justify-center">
      
      <svg width="0" height="0" aria-hidden="true" className="absolute">
        <defs>
          <radialGradient id="instagramGradient" cx="30%" cy="107%" r="150%">
            <stop offset="0%" stopColor="#fdf497" />
            <stop offset="5%" stopColor="#fdf497" />
            <stop offset="45%" stopColor="#fd5949" />
            <stop offset="60%" stopColor="#d6249f" />
            <stop offset="90%" stopColor="#285AEB" />
          </radialGradient>
        </defs>
      </svg>

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

        <div className="flex flex-col items-center gap-12">
          <div className="relative group flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
            <a
              href="mailto:naztrosoftwarejunin@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-3xl text-white font-thin tracking-wide hover:text-sky-400 transition-colors duration-300 break-words md:break-normal underline decoration-1 underline-offset-8 decoration-sky-400/30 text-center block"
            >
              naztrosoftwarejunin@gmail.com
            </a>
            <button
              onClick={handleCopy}
              className={`px-4 py-2 md:p-2.5 rounded-full bg-white/5 hover:bg-sky-500/20 border border-white/10 hover:border-sky-500/30 transition-all duration-300 flex items-center justify-center gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:-translate-x-4 md:group-hover:translate-x-0 cursor-pointer mt-1 md:mt-0 ${copied ? 'text-sky-500' : 'text-white/70 hover:text-sky-400'}`}
              title="Copiar correo"
            >
              <span className="md:hidden text-sm font-medium tracking-wide">{copied ? "Copiado" : "Copiar"}</span>
              {copied ? <Check className="w-4 h-4 md:w-6 md:h-6" /> : <Copy className="w-4 h-4 md:w-6 md:h-6" />}
            </button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://wa.me/542364329720"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 hover:bg-[#25D366]/10 hover:border-[#25D366]/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.2)]"
              aria-label="WhatsApp"
            >
              <WhatsappSvg className="w-6 h-6 md:w-7 md:h-7 text-[#25D366] md:text-white/70 md:group-hover:text-[#25D366] transition-colors duration-300" />
            </a>
            <a
              href="https://www.instagram.com/naztrosoftware"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 hover:bg-[#E1306C]/10 hover:border-[#E1306C]/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(225,48,108,0.2)]"
              aria-label="Instagram"
            >
              <span className="relative flex items-center justify-center w-6 h-6 md:w-7 md:h-7" aria-hidden="true">
                <InstagramSvg className="absolute inset-0 w-full h-full text-white/70 opacity-0 md:opacity-100 transition-opacity duration-500 md:group-hover:opacity-0" />
                <InstagramSvg className="absolute inset-0 w-full h-full opacity-100 md:opacity-0 transition-opacity duration-500 md:group-hover:opacity-100 fill-[url(#instagramGradient)]" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
