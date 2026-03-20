"use client";

import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#2a2a80] bg-[#09090B]/60 backdrop-blur-sm">
      <div className="flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
        {/* Logo */}
        <a
          href="#"
          className="text-xl md:text-2xl font-bold uppercase tracking-tighter"
        >
          KINETIC
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#work"
            className="text-sm font-bold uppercase tracking-wider text-[#A1A1AA] hover:text-[#4b96e3] transition-colors"
          >
            Work
          </a>
          <a
            href="#services"
            className="text-sm font-bold uppercase tracking-wider text-[#A1A1AA] hover:text-[#4b96e3] transition-colors"
          >
            Services
          </a>
          <a
            href="#pricing"
            className="text-sm font-bold uppercase tracking-wider text-[#A1A1AA] hover:text-[#4b96e3] transition-colors"
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="text-sm font-bold uppercase tracking-wider text-[#A1A1AA] hover:text-[#4b96e3] transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <button className="hidden md:block h-10 px-6 bg-[#4b96e3] text-black font-bold uppercase tracking-tighter text-sm transition-all hover:scale-105 active:scale-95">
          Start Project
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-[#FAFAFA] transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#FAFAFA] transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#FAFAFA] transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden border-t-2 border-[#3F3F46] bg-[#09090B]">
          <div className="flex flex-col p-4 gap-4">
            <a
              href="#work"
              className="text-lg font-bold uppercase tracking-wider py-4 border-b-2 border-[#3F3F46]"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </a>
            <a
              href="#services"
              className="text-lg font-bold uppercase tracking-wider py-4 border-b-2 border-[#3F3F46]"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#pricing"
              className="text-lg font-bold uppercase tracking-wider py-4 border-b-2 border-[#3F3F46]"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-lg font-bold uppercase tracking-wider py-4 border-b-2 border-[#3F3F46]"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <button className="h-14 px-8 bg-[#4b96e3] text-black font-bold uppercase tracking-tighter text-lg mt-4">
              Start Project
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
