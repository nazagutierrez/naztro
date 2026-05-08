"use client";

import { useState } from "react";

export function CTA() {
  const [email, setEmail] = useState("");

  return (
    <section className="w-full py-32 bg-background relative overflow-hidden flex flex-col items-center">
      
      {/* Glow central intenso */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full max-w-4xl px-4 mx-auto z-10 relative text-center">
        
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-sm font-medium text-sky-400 backdrop-blur-sm w-max mb-8 mx-auto">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          Listos para empezar
        </div>

        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.1] flex flex-col items-center mb-6">
          <span className="main-font">EMPECEMOS </span>
          <span className="hero-font text-sky-500">TU PROYECTO.</span>
        </h2>
        
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Déjanos tu correo y nos pondremos en contacto contigo en menos de 24 horas para hablar sobre cómo podemos digitalizar tu idea.
        </p>

        {/* Email input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Handle form submission
            console.log("Email submitted:", email);
            setEmail("");
          }}
          className="max-w-2xl mx-auto relative group"
        >
          {/* Border glow en el hover del form */}
          <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-sky-300 rounded-[20px] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 pointer-events-none"></div>
          
          <div className="relative flex flex-col sm:flex-row gap-3 bg-[#0a0f1a] p-2 rounded-[18px] border border-white/10 backdrop-blur-md shadow-xl">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="flex-1 h-14 md:h-16 px-6 bg-transparent text-white text-lg font-medium placeholder:text-white/30 focus:outline-none focus:ring-0"
              required
            />
            <button
              type="submit"
              className="h-14 md:h-16 px-8 md:px-12 bg-sky-500 hover:bg-sky-400 text-[#030712] rounded-[12px] font-bold tracking-wide text-lg transition-all active:scale-95 shadow-[0_0_20px_rgba(14,165,233,0.3)]"
            >
              ENVIAR
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
