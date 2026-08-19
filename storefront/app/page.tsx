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
  title: "Superior Harness & Assembly — Custom Wire Harness & Cable Assembly Manufacturer",
  description:
    "Leading US manufacturer specializing in aerospace wire assemblies, medical equipment cable assemblies, robotics cables, and automotive wiring. We support OEMs and startups with small batch production to high-volume manufacturing.",
  keywords: ["aerospace wire assemblies", "medical equipment cable assemblies", "robotics cables", "automotive cable assemblies", "OEM wire harnessing", "small batch production wire harness", "white goods manufacturers wire harness", "custom cable assemblies for startups"],
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
