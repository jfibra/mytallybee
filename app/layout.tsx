import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@/components/analytics"
import { ScrollToTop } from "@/components/scroll-to-top"
import { StructuredData } from "@/components/seo-structured-data"
import "./globals.css"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
})

export const metadata: Metadata = {
  title: "MyTallyBee - Remote QuickBooks Bookkeeping",
  description:
    "Remote QuickBooks Online bookkeeping service. Clear, accurate, on time. Specialized bookkeeping for small businesses.",
  generator: "Next.js",
  keywords: ["bookkeeping", "QuickBooks Online", "remote bookkeeping", "small business", "accounting"],
  authors: [{ name: "MyTallyBee" }],
  creator: "MyTallyBee",
  publisher: "MyTallyBee",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "MyTallyBee - Remote QuickBooks Bookkeeping",
    description: "Remote QuickBooks Online bookkeeping service. Clear, accurate, on time.",
    url: "/",
    siteName: "MyTallyBee",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MyTallyBee - Remote QuickBooks Bookkeeping",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyTallyBee - Remote QuickBooks Bookkeeping",
    description: "Remote QuickBooks Online bookkeeping service. Clear, accurate, on time.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon-192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/favicon-512.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/favicon-192.png" sizes="192x192" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="theme-color" content="#001f3f" />
        <meta name="msapplication-TileColor" content="#001f3f" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                    anonymize_ip: true,
                    cookie_flags: 'SameSite=None;Secure'
                  });
                `,
              }}
            />
          </>
        )}

        <script src="https://www.noupe.com/embed/0198a949c3697ee99eb2873dcafa46590d3d.js" async />
      </head>
      <body className="min-h-screen bg-white font-sans">
        <StructuredData type="organization" />
        <Suspense fallback={null}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-navy text-white px-4 py-2 rounded-xl z-50"
          >
            Skip to main content
          </a>
          {children}
          <ScrollToTop />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
