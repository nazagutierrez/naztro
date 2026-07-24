import { Suspense, lazy } from "react";
import { Footer } from "@/components/sections/footer";
import { CTASection } from "@/components/Hero";
import { SmoothScroll } from "@/components/ScrollWrapper";
import { Navbar } from "@/components/Navbar";

// Lazy load below-the-fold components
const VerticalTabs = lazy(() => import("@/components/VerticalTabs"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const WhyUs = lazy(() => import("@/components/sections/WhyUs").then(mod => ({ default: mod.WhyUs })));
const HowWeWork = lazy(() => import("@/components/sections/HowWeWork").then(mod => ({ default: mod.HowWeWork })));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const FAQ = lazy(() => import("@/components/sections/faq").then(mod => ({ default: mod.FAQ })));
const CTA = lazy(() => import("@/components/sections/cta").then(mod => ({ default: mod.CTA })));

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
          <section id="testimonios">
            <Testimonials />
          </section>
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
  );
}

