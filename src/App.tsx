import { Testimonials } from "@/components/sections/Testimonials"
import { FAQ } from "@/components/sections/Faq"
import { CTA } from "@/components/sections/Cta"
import { Footer } from "@/components/sections/Footer"
import { CTASection } from "@/components/Hero"
import { SmoothScroll } from "@/components/ScrollWrapper"
import VerticalTabs from "@/components/VerticalTabs"
import AboutSection from "@/components/AboutSection"
import ServicesSection from "@/components/ServicesSection"
import { WhyUs } from "@/components/sections/WhyUs"
import { HowWeWork } from "@/components/sections/HowWeWork"
export default function App() {
  return (
    <SmoothScroll>
      <CTASection />
      <main>
        <VerticalTabs />
        <ServicesSection />
        <WhyUs />
        <HowWeWork />
        <AboutSection />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
