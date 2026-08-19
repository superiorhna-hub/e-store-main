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
    "A leading North American provider in custom wire harness manufacturing and engineered wiring solutions. Specializing in automatic cut/strip, connector loading, and ultrasonic splicing for the US and Canadian markets.",
  keywords: [
    "custom wire harness manufacturer USA",
    "OEM wire harnessing",
    "cable assembly manufacturing North America",
    "Michigan wire harness company",
    "Pennsylvania wire processing",
    "Philadelphia custom cable assemblies",
    "Charlotte wire harness suppliers",
    "New York wire harness manufacturer",
    "Texas OEM wiring solutions",
    "North Carolina cable assembly",
    "Illinois industrial wire harnesses",
    "California medical wire harnesses",
    "Boston custom electrical harnesses",
    "Ohio heavy equipment wiring",
    "IPC/WHMA-A-620 certified wire harness",
    "low volume high mix wire harness USA"
  ],
  metadataBase: new URL("https://www.superiorharness.com"),
  alternates: {
    canonical: "/",
  },
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
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VG1DPLRRCB"></script>
        {/* Google Ads */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18391804952"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VG1DPLRRCB');
            gtag('config', 'AW-18391804952');
          `
        }} />
      </head>
      <body suppressHydrationWarning className={`${hanken.variable} ${inter.variable} ${mono.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
