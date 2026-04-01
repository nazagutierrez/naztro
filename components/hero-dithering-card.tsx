import { ArrowRight } from "lucide-react"
import { useState, Suspense, lazy } from "react"
import { MenuBar } from "./ui/bottom-menu"
import InstagramSvg from "./svg/InstagramSvg"
import MailSvg from "./svg/MailSvg"
import WhatsappSvg from "./svg/WhatsappSvg"
import CallSvg from "./svg/CallSvg"

const Dithering = lazy(() => 
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
)

const menuItems = [
  {
    icon: () => (
      <InstagramSvg className="text-xl" />
    ),
    label: "Instagram",
    href: "https://www.instagram.com/naztrosoftware/"
  },
  {
    icon: () => (
      <MailSvg className="text-xl" />
    ),
    label: "Mail",
    href: "mailto:naztrosoftwarejunin@gmail.com"
  },
  {
    icon: () => (
      <WhatsappSvg className="text-xl" />
    ),
    label: "Whatsapp",
    href: "https://wa.me/5492364514241"
  },
  {
    icon: () => (
      <CallSvg className="text-xl" />
    ),
    label: "Llamar",
    href: "tel:+5492364514241"
  }
]

export function CTASection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-12 w-full mb-10 flex justify-center items-center px-4 md:px-6">      
      <div 
        className="w-full mx-10 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-[28px] border border-sky-700 shadow-sm min-h-[600px] md:min-h-[750px] flex flex-col items-center justify-center duration-500">
          <Suspense fallback={<div className="absolute inset-0 bg-muted/20" />}>            
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-50 mix-blend-multiply dark:mix-blend-screen">
              <Dithering
                colorBack="#00000000" // Transparent
                colorFront="#1c8eff"  // Accent
                shape="warp"
                type="4x4"
                speed={isHovered ? 0.6 : 0.2}
                className="size-full"
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
              <span className="text-5xl">digitalizamos tu <span className="hero-font text-5xl">negocio.</span></span>
            </h2>
            
            {/* Description */}
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
              Desarrollamos soluciones web a medida para potenciar tu presencia en digital, mejorando tiempos, organización y ventas.
            </p>

            <MenuBar className="mb-4 text-start" items={menuItems} />

            {/* Button */}
            <button className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-12 text-base font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105 active:scale-95 hover:ring-4 hover:ring-primary/20">
              <span className="relative z-10">Nuestro trabajo</span>
              <ArrowRight className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}