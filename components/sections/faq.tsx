"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope. A single landing page can be completed in 1-2 weeks, while a full website redesign typically takes 4-8 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you work with clients globally?",
    answer:
      "Absolutely. We work with clients worldwide and have established efficient remote workflows. Our team is distributed across multiple time zones, ensuring we can accommodate various schedules.",
  },
  {
    question: "What's your design process?",
    answer:
      "We start with discovery and strategy, move into wireframing and prototyping, then design and development. Throughout the process, we involve you at key decision points to ensure the final product exceeds expectations.",
  },
  {
    question: "Do you handle development as well?",
    answer:
      "Yes, we're a full-service studio. Our team includes designers, developers, and motion specialists who work together to bring your vision to life. We deliver fully functional, production-ready websites.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We primarily work with React, Next.js, and Framer Motion for web development. For design, we use Figma. Our stack is chosen for performance and scalability, ensuring your site runs smoothly at any scale.",
  },
  {
    question: "Can you work with our existing brand?",
    answer:
      "Definitely. We love working with established brands and bringing kinetic energy to existing visual systems. We'll adapt our approach to complement and elevate your current brand identity.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-4 md:px-8 border-t-2 border-[#3F3F46]">
      <div className="max-w-[95vw] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Header */}
          <div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-none mb-6 sticky top-32">
              FAQ
            </h2>
          </div>

          {/* Questions */}
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b-2 border-[#3F3F46] last:border-b-0"
              >
                <button
                  className="w-full py-8 flex items-center justify-between text-left group"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-tighter pr-8 transition-colors duration-300 group-hover:text-[#4b96e3]">
                    {faq.question}
                  </span>
                  <span
                    className="flex-shrink-0 w-10 h-10 border-2 border-[#3F3F46] flex items-center justify-center text-2xl transition-all duration-300 group-hover:border-[#4b96e3] group-hover:text-[#4b96e3]"
                    aria-hidden="true"
                  >
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-base md:text-lg text-[#A1A1AA] leading-relaxed pb-8">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
