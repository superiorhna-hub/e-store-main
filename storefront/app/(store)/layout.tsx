import Header from "@/components/Header"
import Footer from "@/components/Footer"
import RevealObserver from "@/components/RevealObserver"
import NewsletterPopup from "@/components/NewsletterPopup"

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <NewsletterPopup />
      <RevealObserver />
    </>
  )
}
// Force Fast Refresh again again
