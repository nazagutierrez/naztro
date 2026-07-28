import { useState, Suspense, lazy, useEffect, useRef } from "react";
import { MenuBar } from "./ui/bottom-menu";
import InstagramSvg from "./svg/InstagramSvg";
import MailSvg from "./svg/MailSvg";
import WhatsappSvg from "./svg/WhatsappSvg";
import CallSvg from "./svg/CallSvg";
import { gsap } from "gsap";
import { useInView } from "framer-motion";
import HeroButton from "./ui/HeroButton";

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({
    default: mod.Dithering,
  })),
);

const menuItems = [
  {
    icon: () => <InstagramSvg className="text-xl" />,
    label: "Instagram",
    href: "https://www.instagram.com/naztrosoftware/",
  },
  {
    icon: () => <MailSvg className="text-xl" />,
    label: "Mail",
    href: "mailto:naztrosoftwarejunin@gmail.com",
  },
  {
    icon: () => <WhatsappSvg className="text-xl" />,
    label: "Whatsapp",
    href: "https://wa.me/542364329720",
  },
  {
    icon: () => <CallSvg className="text-xl" />,
    label: "Llamar",
    href: "tel:+542364329720",
  },
];

export function CTASection() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "100px" });

  useEffect(() => {
    const tl = gsap.timeline({
      ease: "power2.out",
    });

    tl.to("#logo-img", {
      opacity: 1,
      duration: 0.5,
    });

    tl.to("#star-light-img", {
      opacity: 1,
      scale: 0.6,
      duration: 0.4,
    });

    tl.to("#star-light-img", {
      opacity: 0,
      ease: "circ",
      scale: 2,
      duration: 1,
    });

    tl.to(
      "#logo-img",
      {
        opacity: 1,
        duration: 0.3,
        scale: 0.8,
      },
      "<0.7",
    );

    tl.to(
      "#logo-img",
      {
        delay: 0.1,
        duration: 1,
        scale: 30,
        opacity: 0,
        display: "none",
      },
      "<0.3",
    );

    tl.fromTo(
      "#logo-mask",
      {
        "--size": "0px",
      },
      {
        "--size": "15000px", // ajustá según pantalla
        duration: 1,
        ease: "power3.out",
      },
      "<",
    );

    tl.to(
      "#logo-mask",
      {
        opacity: 0,
        duration: 2,
        ease: "power1.inOut",
      },
      "-=1",
    );

    // tl.fromTo(
    //   "#ttl-bg",
    //   {
    //     opacity: 0,
    //     scale: 0.8,
    //   },
    //   {
    //     opacity: 1,
    //     scale: 1,
    //     duration: 0.5,
    //     ease: "back.inOut",
    //   },
    //   "<0.2",
    // );

    tl.fromTo(
      ["#ttl-bg"],
      {
        opacity: 0,
        scale: 1,
      },
      {
        duration: 1,
        scale: 1,
        opacity: 1,
        ease: "power2.out",
      },
      "<0.3",
    );
  }, []);

  return (
    <section ref={containerRef} className="py-4 sm:py-12 w-full mb-6 md:mb-10 flex justify-center items-center px-4 md:px-6">
      {/* ========= */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-50 flex items-center justify-center">
        <div className="absolute inset-0 w-full h-screen" id="logo-mask"></div>
        
        <div className="relative flex items-center justify-center w-56 h-56 sm:w-64 sm:h-64">
          <img
            src="/naztro.svg"
            alt="Logo"
            id="logo-img"
            className="absolute opacity-0 w-full h-full object-contain origin-center"
          />
          <img
            src="/star-light.webp"
            alt="Star"
            id="star-light-img"
            className="absolute opacity-0 w-28 h-28 sm:w-40 sm:h-40 rotate-105 object-contain origin-center bottom-20 right-0.5 sm:bottom-20 sm:-right-3"
          />
        </div>
      </div>
      {/* ========= */}
      <div
        className="w-full sm:mx-10 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        id="ttl-bg"
      >
        <div className="relative overflow-hidden rounded-[28px] border border-sky-700 shadow-sm min-h-[95dvh] sm:min-h-[600px] md:min-h-[750px] flex flex-col items-center justify-center duration-500 z-40">
          <Suspense fallback={<div className="absolute inset-0 bg-muted/20" />}>
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-50 mix-blend-multiply dark:mix-blend-screen">
              {isInView && (
                <Dithering
                  colorBack="#00000000" // Transparent
                  colorFront="#1c8eff" // Accent
                  shape="warp"
                  type="4x4"
                  speed={isHovered ? 0.6 : 0.2}
                  className="size-full bg-black"
                  minPixelRatio={1}
                />
              )}
            </div>
          </Suspense>

          <div className="relative z-10 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
              </span>
              <p className="hidden sm:block">Disponibles para nuevos proyectos</p>
              <p className="block sm:hidden">Disponibles</p>
            </div>

            {/* Headline */}
            <h1 className="font-serif flex flex-col gap-y-2 text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight text-foreground mb-8 md:mb-10 leading-[1.05]">
              <span className="main-font">NAZTRO </span>
              <span className="text-3xl md:text-4xl">
                digitalizamos tu{" "}
                <span className="hero-font text-3xl md:text-4xl">negocio.</span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-white text-base md:text-lg lg:text-xl max-w-2xl mb-8 md:mb-10 leading-relaxed">
              Desarrollamos soluciones web a medida para potenciar tu presencia
              digital, mejorando tiempos, organización y ventas.
            </p>

            <MenuBar className="mb-8 md:mb-10 text-start" items={menuItems} />

            {/* Button */}
            <HeroButton href="#trabajos">Nuestro trabajo</HeroButton>
          </div>
        </div>
      </div>
    </section>
  );
}
