import type { Metadata } from "next"
import { Hanken_Grotesk, Inter, JetBrains_Mono } from "next/font/google"
import "@/styles/globals.css"
import Providers from "@/components/Providers"

// Display / headline font — tight tracking, bold weights
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",   // keep same CSS var name — no component changes needed
  display: "swap",
})

// Body copy — exceptional legibility across locales
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans", // keep same CSS var name — no component changes needed
  display: "swap",
})

// Labels, metadata, technical specs — "Precision" brand pillar
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
})


export const metadata: Metadata = {
  title: {
    default: "Superior Harness & Assembly | Custom Cable Assembly Manufacturer",
    template: "%s | Superior Harness & Assembly",
  },
  description:
    "Custom wire harness and cable assembly manufacturer providing engineered wiring solutions for OEMs, medical devices, robotics, EV applications, and more.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_STORE_URL ?? "https://clientstore.com"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Superior Harness & Assembly",
  },
  twitter: {
    card: "summary_large_image",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VG1DPLRRCB"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VG1DPLRRCB');
          `
        }} />
      </head>
      <body suppressHydrationWarning className={`${hanken.variable} ${inter.variable} ${mono.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
