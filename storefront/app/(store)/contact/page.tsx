import type { Metadata } from "next"
import ContactClient from "./ContactClient"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Superior Harness & Assembly for project inquiries, product questions, or partnership opportunities. We respond within 1–2 business days.",
}

export default function ContactPage() {
  return <ContactClient />
}
