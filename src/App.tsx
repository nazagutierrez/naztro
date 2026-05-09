import { Testimonials } from "@/components/sections/Testimonials"
import { FAQ } from "@/components/sections/Faq"
import { CTA } from "@/components/sections/Cta"
import { Footer } from "@/components/sections/Footer"
import { CTASection } from "@/components/Hero"
import { SmoothScroll } from "@/components/ScrollWrapper"
import VerticalTabs from "@/components/VerticalTabs"
import AboutSection from "@/components/AboutSection"
import ServicesSection from "@/components/ServicesSection"
export default function App() {
  return (
    <SmoothScroll>
      <CTASection />
      <main>
        <VerticalTabs />
        <ServicesSection />
        <AboutSection />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
