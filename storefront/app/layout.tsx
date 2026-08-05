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
    default: "Superior Harness Co. LLC | Custom Wire Harness Manufacturing",
    template: "%s | Superior Harness Co. LLC",
  },
  description:
    "A leading provider in custom wire harness manufacturing and engineered wiring solutions. Specializing in automatic cut/strip, connector loading, and ultrasonic splicing.",
  keywords: ["wire harness", "cable assembly", "custom wiring solutions", "Superior Harness Co. LLC", "wire manufacturing"],
  metadataBase: new URL("https://www.superiorharness.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.superiorharness.com",
    title: "Superior Harness Co. LLC | Custom Wire Harness Manufacturing",
    description: "A leading provider in custom wire harness manufacturing and engineered wiring solutions.",
    siteName: "Superior Harness Co. LLC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Superior Harness Co. LLC",
    description: "A leading provider in custom wire harness manufacturing and engineered wiring solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
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
