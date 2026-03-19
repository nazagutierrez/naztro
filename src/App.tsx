import { Header } from "@/components/header"
import { Hero } from "@/components/sections/hero"
import { StatsMarquee } from "@/components/sections/stats-marquee"
import { Features } from "@/components/sections/features"
import { Benefits } from "@/components/sections/benefits"
import { Testimonials } from "@/components/sections/testimonials"
import { Pricing } from "@/components/sections/pricing"
import { FAQ } from "@/components/sections/faq"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"
import { NoiseTexture } from "@/components/noise-texture"

export default function App() {
  return (
    <>
      <NoiseTexture />
      <Header />
      <main>
        <Hero />
        <StatsMarquee />
        <Features />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
