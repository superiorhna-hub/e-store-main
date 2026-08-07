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
  title: "Superior Harness & Assembly — US Custom Wire Harness Manufacturer",
  description:
    "Top-rated custom wire harness and cable assembly manufacturer in North America. We provide fast turnaround prototyping to high volume production for US and Canada clients.",
  keywords: ["fast turnaround wire harness USA", "B2B custom cable assemblies North America", "prototype to production wiring Canada", "superior harness co LLC", "high volume wire processing US"],
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
