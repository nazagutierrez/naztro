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
import { Navbar } from "@/components/Navbar"

export default function App() {
  return (
    <>
      <Navbar />
      <SmoothScroll>
        <CTASection />
        <main>
          <section id="trabajos">
            <VerticalTabs />
          </section>
          <section id="servicios">
            <ServicesSection />
          </section>
          <section id="why-us">
            <WhyUs />
          </section>
          <section id="proceso">
            <HowWeWork />
          </section>
          <section id="nosotros">
            <AboutSection />
          </section>
          {/* <section id="testimonios">
            <Testimonials />
          </section> */}
          <section id="faq">
            <FAQ />
          </section>
          <section id="contacto">
            <CTA />
          </section>
        </main>
        <Footer />
      </SmoothScroll>
    </>
  )
}
