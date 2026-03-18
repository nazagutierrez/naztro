"use client";

const plans = [
  {
    name: "Starter",
    price: "5K",
    description: "Perfect for small projects and landing pages",
    features: [
      "Single page design",
      "Basic motion effects",
      "Mobile responsive",
      "2 revision rounds",
      "1 week delivery",
    ],
  },
  {
    name: "Pro",
    price: "15K",
    description: "Full website with advanced kinetic design",
    features: [
      "Up to 8 pages",
      "Advanced motion system",
      "Custom interactions",
      "Unlimited revisions",
      "3 week delivery",
      "3 months support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "50K+",
    description: "Complete digital transformation",
    features: [
      "Unlimited pages",
      "Bespoke motion design",
      "Design system included",
      "Dedicated team",
      "Priority support",
      "12 months partnership",
    ],
  },
];

export function Pricing() {
  return (
    <section className="py-32 px-4 md:px-8 border-t-2 border-[#3F3F46]">
      <div className="max-w-[95vw] mx-auto">
        {/* Section header */}
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-none mb-6">
            Pricing
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[#A1A1AA] max-w-2xl mx-auto leading-tight">
            Transparent pricing for bold design. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[#3F3F46]">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`group relative bg-[#09090B] p-8 md:p-12 transition-all duration-300 hover:bg-[#4b96e3] ${
                plan.featured ? "lg:-mt-8 lg:mb-8 lg:py-16" : ""
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-0 right-0 bg-[#4b96e3] text-black text-center py-2 text-sm font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tighter mb-4 transition-colors duration-300 group-hover:text-black">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-sm text-[#A1A1AA] transition-colors duration-300 group-hover:text-black/70">
                    $
                  </span>
                  <span className="text-[4rem] md:text-[5rem] lg:text-[6rem] font-bold leading-none tracking-tighter transition-colors duration-300 group-hover:text-black">
                    {plan.price}
                  </span>
                </div>
                <p className="text-base md:text-lg text-[#A1A1AA] leading-tight transition-colors duration-300 group-hover:text-black/70">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-12">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-base md:text-lg transition-colors duration-300 group-hover:text-black"
                  >
                    <span
                      className="w-2 h-2 bg-[#4b96e3] transition-colors duration-300 group-hover:bg-black"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full h-14 px-8 font-bold uppercase tracking-tighter text-lg transition-all hover:scale-105 active:scale-95 ${
                  plan.featured
                    ? "bg-[#4b96e3] text-black group-hover:bg-black group-hover:text-[#4b96e3]"
                    : "border-2 border-[#3F3F46] text-[#FAFAFA] group-hover:border-black group-hover:text-black"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
