/**
 * @file next.config.ts
 * @description Next.js configuration for Client Store.
 *   - Security headers on every response (CSP, HSTS, no-sniff, frame deny, etc.)
 *   - Allowed image domains for next/image remote patterns
 *   - Turbopack / build settings
 *
 * @owner Heet-P
 * @lastModified May 16, 2026
 */

import type { NextConfig } from "next"

// ── Security headers applied to every route ──────────────────────────────────
const securityHeaders = [
  // Block pages from being embedded in iframes (clickjacking protection)
  { key: "X-Frame-Options", value: "DENY" },

  // Prevent MIME-type sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },

  // Control referrer info sent with requests
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },

  // Restrict browser feature access
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },

  // Enable DNS prefetch for performance
  { key: "X-DNS-Prefetch-Control", value: "on" },

  // Strict HTTPS — 1 year, include subdomains (only active over HTTPS)
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },

  // Content Security Policy
  // Allows: self, Google Fonts, Google OAuth, trusted image CDNs
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Scripts: self + inline/eval (Next.js needs these) + Google Analytics (consent-gated)
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https: http://localhost:*",
      // Frames: Google OAuth
      "frame-src https://accounts.google.com",
      // Fetch/XHR: own API + Google OAuth + Google Analytics
      "connect-src 'self' https://accounts.google.com https://oauth2.googleapis.com https://www.googleapis.com https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com",
      "form-action 'self'",
      "base-uri 'self'",
    ].join("; "),
  },
]

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Remove console.logs in production to shave off JS weight
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    // Enable optimizePackageImports for smaller bundles
    optimizePackageImports: ["lucide-react", "date-fns"],
  },
  async redirects() {
    return [
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true, // 308 redirect
      },
    ]
  },
  // Apply security headers to all responses
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ]
  },

  // Allowed remote image hostnames for next/image
  // Add any CDN or external image host your products use here
  images: {
    remotePatterns: [
      // Google user profile photos (used in OAuth track-order page)
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      // General HTTPS images (product images, blog covers stored externally)
      { protocol: "https", hostname: "**" },
      // Local dev only
      { protocol: "http", hostname: "localhost" },
    ],
  },
  serverExternalPackages: ["pdfkit"],
}

export default nextConfig
