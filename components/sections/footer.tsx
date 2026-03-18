"use client";

const navigation = {
  work: [
    { name: "Projects", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Process", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Team", href: "#" },
    { name: "Careers", href: "#" },
  ],
  resources: [
    { name: "Blog", href: "#" },
    { name: "Newsletter", href: "#" },
    { name: "Contact", href: "#" },
  ],
  social: [
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Dribbble", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#4b96e3] text-black border-t-2 border-black">
      <div className="py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-[95vw] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20 md:mb-32">
            {/* Work */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-50">
                Work
              </h3>
              <ul className="space-y-4">
                {navigation.work.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base md:text-lg font-medium uppercase tracking-tight hover:opacity-50 transition-opacity"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-50">
                Company
              </h3>
              <ul className="space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base md:text-lg font-medium uppercase tracking-tight hover:opacity-50 transition-opacity"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-50">
                Resources
              </h3>
              <ul className="space-y-4">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base md:text-lg font-medium uppercase tracking-tight hover:opacity-50 transition-opacity"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-50">
                Social
              </h3>
              <ul className="space-y-4">
                {navigation.social.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base md:text-lg font-medium uppercase tracking-tight hover:opacity-50 transition-opacity"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Large logo */}
          <div className="border-t-2 border-black pt-12 md:pt-20">
            <div className="text-[clamp(3rem,15vw,12rem)] font-bold uppercase tracking-tighter leading-none">
              KINETIC
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-8">
              <p className="text-sm uppercase tracking-widest opacity-50">
                Motion Design Studio
              </p>
              <p className="text-sm uppercase tracking-widest opacity-50">
                © {new Date().getFullYear()} All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
