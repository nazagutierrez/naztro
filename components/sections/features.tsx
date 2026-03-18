"use client";

const features = [
  {
    number: "01",
    title: "Kinetic Design",
    description:
      "Every element moves with purpose. We create motion that tells stories and captures attention instantly.",
  },
  {
    number: "02",
    title: "Bold Typography",
    description:
      "Typography as architecture. Massive, unapologetic type that commands the screen and refuses to whisper.",
  },
  {
    number: "03",
    title: "Brutal Aesthetic",
    description:
      "Sharp edges, hard contrasts, zero compromise. Design that stands out in a sea of soft gradients and rounded corners.",
  },
  {
    number: "04",
    title: "Performance First",
    description:
      "Stunning motion at 60fps. We obsess over performance so your users never experience lag or jank.",
  },
];

export function Features() {
  return (
    <section className="py-32 px-4 md:px-8">
      <div className="max-w-[95vw] mx-auto">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-none mb-6">
            What We Do
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[#A1A1AA] max-w-2xl leading-tight">
            We specialize in creating digital experiences that move, breathe,
            and demand attention.
          </p>
        </div>

        {/* Sticky scroll cards */}
        <div className="space-y-8">
          {features.map((feature, index) => (
            <div
              key={feature.number}
              className="sticky top-24 md:top-32"
              style={{ zIndex: index }}
            >
              <div className="group border-2 border-[#3F3F46] bg-[#09090B] p-8 md:p-12 transition-all duration-300 hover:bg-[#4b96e3] hover:border-[#4b96e3]">
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  {/* Number */}
                  <span
                    className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold text-[#27272A] leading-none tracking-tighter transition-colors duration-300 group-hover:text-black"
                    aria-hidden="true"
                  >
                    {feature.number}
                  </span>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tighter mb-4 transition-all duration-300 group-hover:text-black group-hover:translate-x-4">
                      {feature.title}
                    </h3>
                    <p className="text-lg md:text-xl text-[#A1A1AA] leading-tight max-w-2xl transition-all duration-300 group-hover:text-black/70 opacity-100 md:opacity-0 md:group-hover:opacity-100">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
