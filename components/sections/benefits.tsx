"use client";

const benefits = [
  {
    title: "Increased Engagement",
    description:
      "Motion captures attention. Our kinetic designs keep users engaged 3x longer than static sites.",
  },
  {
    title: "Memorable Brand",
    description:
      "Stand out from the crowd. Bold typography and motion create lasting impressions.",
  },
  {
    title: "Higher Conversion",
    description:
      "Strategic animation guides users to action. See conversion rates jump by up to 40%.",
  },
  {
    title: "Modern Aesthetic",
    description:
      "Leave outdated design behind. Position your brand at the cutting edge of digital.",
  },
  {
    title: "Performance Optimized",
    description:
      "Beautiful doesn't mean slow. We deliver stunning motion at lightning speed.",
  },
  {
    title: "Accessibility First",
    description:
      "Motion for all. Respects user preferences while delivering impact for those who want it.",
  },
];

export function Benefits() {
  return (
    <section className="py-32 px-4 md:px-8 border-t-2 border-[#3F3F46]">
      <div className="max-w-[95vw] mx-auto">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-none mb-6">
            Why Choose Us
          </h2>
        </div>

        {/* Grid of benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#3F3F46]">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-[#09090B] p-8 md:p-12 transition-all duration-300 hover:bg-[#4b96e3]"
            >
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-tighter mb-4 transition-all duration-300 group-hover:text-black group-hover:translate-x-4">
                {benefit.title}
              </h3>
              <p className="text-base md:text-lg text-[#A1A1AA] leading-tight transition-all duration-300 group-hover:text-black/70 opacity-100 md:opacity-0 md:group-hover:opacity-100">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
