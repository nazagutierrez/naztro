import { ArrowRight } from "lucide-react";
import { useState, Suspense, lazy, useEffect } from "react";
import { MenuBar } from "./ui/bottom-menu";
import InstagramSvg from "./svg/InstagramSvg";
import MailSvg from "./svg/MailSvg";
import WhatsappSvg from "./svg/WhatsappSvg";
import CallSvg from "./svg/CallSvg";
import { gsap } from "gsap";
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
    href: "https://wa.me/5492364514241",
  },
  {
    icon: () => <CallSvg className="text-xl" />,
    label: "Llamar",
    href: "tel:+5492364514241",
  },
];

export function CTASection() {
  const [isHovered, setIsHovered] = useState(false);

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
    <section className="py-12 w-full mb-10 flex justify-center items-center px-4 md:px-6">
      {/* ========= */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
        <div className="w-full h-screen" id="logo-mask"></div>
        <img
          src="/naztro.svg"
          alt="Logo"
          id="logo-img"
          className="absolute opacity-0 w-62 h-62 m-auto inset-0 object-contain origin-center"
        />
        <img
          src="/star-light.webp"
          alt="Logo"
          id="star-light-img"
          className="absolute opacity-0 w-40 h-40 rotate-105 m-auto right-0 left-26 top-86 object-contain origin-center"
        />
      </div>
      {/* ========= */}
      <div
        className="w-full mx-10 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        id="ttl-bg"
      >
        <div className="relative overflow-hidden rounded-[28px] border border-sky-700 shadow-sm min-h-[600px] md:min-h-[750px] flex flex-col items-center justify-center duration-500 z-40">
          <Suspense fallback={<div className="absolute inset-0 bg-muted/20" />}>
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-50 mix-blend-multiply dark:mix-blend-screen">
              <Dithering
                colorBack="#00000000" // Transparent
                colorFront="#1c8eff" // Accent
                shape="warp"
                type="4x4"
                speed={isHovered ? 0.6 : 0.2}
                className="size-full bg-black"
                minPixelRatio={1}
              />
            </div>
          </Suspense>

          <div className="relative z-10 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
              </span>
              Disponibles para nuevos proyectos
            </div>

            {/* Headline */}
            <h2 className="font-serif flex flex-col gap-y-2 text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight text-foreground mb-10 leading-[1.05]">
              <span className="main-font">NAZTRO </span>
              <span className="text-4xl">
                digitalizamos tu{" "}
                <span className="hero-font text-4xl">negocio.</span>
              </span>
            </h2>

            {/* Description */}
            <p className="text-white text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
              Desarrollamos soluciones web a medida para potenciar tu presencia
              digital, mejorando tiempos, organización y ventas.
            </p>

            <MenuBar className="mb-4 text-start" items={menuItems} />

            {/* Button */}
            <HeroButton href="#projects">Nuestro trabajo</HeroButton>
          </div>
        </div>
      </div>
    </section>
  );
}
