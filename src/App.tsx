import { StatsMarquee } from "@/components/sections/stats-marquee"
import { Features } from "@/components/sections/features"
import { Benefits } from "@/components/sections/benefits"
import { Testimonials } from "@/components/sections/testimonials"
import { Pricing } from "@/components/sections/pricing"
import { FAQ } from "@/components/sections/faq"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"
import { CTASection } from "@/components/hero-dithering-card"
import { SmoothScroll } from "@/components/smooth-scroll"
import VerticalTabs from "@/components/VerticalTabs"

export default function App() {
  return (
    <SmoothScroll>
      {/* <Header /> */}
      <CTASection />
      {/* <NoiseTexture /> */}
      <main>
        {/* <Hero /> */}
        <StatsMarquee />
        <Features />
        <Benefits />
        <VerticalTabs />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
