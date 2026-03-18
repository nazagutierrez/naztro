"use client"

import { Marquee } from "@/components/marquee"

const testimonials = [
  {
    quote:
      "They transformed our entire digital presence. The motion design made our brand feel alive for the first time.",
    author: "Sarah Chen",
    role: "CEO, TechFlow",
  },
  {
    quote:
      "Bold doesn't begin to describe it. Our conversion rates jumped 45% after the redesign. Absolutely worth every penny.",
    author: "Marcus Reid",
    role: "Founder, Velocity",
  },
  {
    quote:
      "The best investment we made this year. Our users can't stop talking about the experience. Pure kinetic magic.",
    author: "Elena Voss",
    role: "CMO, Amplitude",
  },
  {
    quote:
      "We wanted something that screamed innovation. They delivered beyond our wildest expectations. Simply incredible.",
    author: "James Park",
    role: "Director, NeonLab",
  },
  {
    quote:
      "Motion design that actually converts. Not just beautiful but brutally effective. A rare combination in this industry.",
    author: "Ana Rodriguez",
    role: "VP Design, Prism",
  },
]

export function Testimonials() {
  return (
    <section className="py-32 border-t-2 border-[#3F3F46]">
      <div className="max-w-[95vw] mx-auto px-4 md:px-8 mb-16">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-none">
          What They Say
        </h2>
      </div>

      <Marquee speed={40}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[350px] md:w-[500px] lg:w-[600px] border-2 border-[#3F3F46] bg-[#09090B] p-8 md:p-12 mx-4"
          >
            <blockquote className="text-lg md:text-xl lg:text-2xl font-medium leading-tight mb-8 text-[#FAFAFA]">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div>
              <div className="text-base md:text-lg font-bold uppercase tracking-tight text-[#FAFAFA]">
                {testimonial.author}
              </div>
              <div className="text-sm md:text-base text-[#A1A1AA] uppercase tracking-wider">
                {testimonial.role}
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  )
}
