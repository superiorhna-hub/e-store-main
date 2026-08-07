import type { Metadata } from "next"
import Hero from "@/components/Hero"
import About from "@/components/About"
import IndustriesStrip from "@/components/IndustriesStrip"
import Capabilities from "@/components/Capabilities"
import WhyUs from "@/components/WhyUs"
import Cta from "@/components/Cta"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import NewsletterPopup from "@/components/NewsletterPopup"
import RevealObserver from "@/components/RevealObserver"
import Faqs from "@/components/Faqs"

export const metadata: Metadata = {
  title: "Superior Harness & Assembly — Custom Wire Harness Manufacturer",
  description:
    "Custom wire harness and cable assembly manufacturer specializing in high-quality engineered wiring solutions for OEMs, medical devices, robotics, and EV applications.",
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <IndustriesStrip />
        <Capabilities />
        <WhyUs />
        <Faqs />
        <Cta />
      </main>
      <Footer />
      <NewsletterPopup />
      <RevealObserver />
    </>
  )
}
