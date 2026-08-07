import type { Metadata } from "next"
import dynamic from "next/dynamic"
import Hero from "@/components/Hero"
import Header from "@/components/Header"

const About = dynamic(() => import("@/components/About"))
const IndustriesStrip = dynamic(() => import("@/components/IndustriesStrip"))
const Capabilities = dynamic(() => import("@/components/Capabilities"))
const WhyUs = dynamic(() => import("@/components/WhyUs"))
const Cta = dynamic(() => import("@/components/Cta"))
const Footer = dynamic(() => import("@/components/Footer"))
const NewsletterPopup = dynamic(() => import("@/components/NewsletterPopup"))
const RevealObserver = dynamic(() => import("@/components/RevealObserver"))
const Faqs = dynamic(() => import("@/components/Faqs"))

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
