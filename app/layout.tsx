import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@/components/analytics"
import { Analytics as VercelAnalytics } from "@vercel/analytics/react"
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
  title: "MyTallyBee - Remote QuickBooks Bookkeeping | Certified ProAdvisor",
  description:
    "Remote QuickBooks Online bookkeeping service. Clear, accurate, on time. Specialized bookkeeping for small businesses. 98% of clients audit-ready year-round.",
  generator: "Next.js",
  keywords: [
    "bookkeeping",
    "QuickBooks Online",
    "remote bookkeeping",
    "small business",
    "accounting",
    "ProAdvisor",
    "certified",
    "audit-ready",
  ],
  authors: [{ name: "MyTallyBee" }],
  creator: "MyTallyBee",
  publisher: "MyTallyBee",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mytallybee.com"),
  openGraph: {
    title: "MyTallyBee - Remote QuickBooks Bookkeeping | Certified ProAdvisor",
    description:
      "Remote QuickBooks Online bookkeeping service. Clear, accurate, on time. 98% of clients audit-ready year-round.",
    url: "/",
    siteName: "MyTallyBee",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/img/hero-bookkeeper-workspace.jpg",
        width: 1200,
        height: 630,
        alt: "MyTallyBee - Professional QuickBooks Online Bookkeeping Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyTallyBee - Remote QuickBooks Bookkeeping | Certified ProAdvisor",
    description:
      "Remote QuickBooks Online bookkeeping service. Clear, accurate, on time. 98% of clients audit-ready year-round.",
    images: ["/img/hero-bookkeeper-workspace.jpg"],
    creator: "@MyTallyBee",
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
        {/* DNS prefetch for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/android-chrome-192x192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/android-chrome-512x512.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme and browser config */}
        <meta name="theme-color" content="#001f3f" />
        <meta name="msapplication-TileColor" content="#001f3f" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Security meta tags */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* Google Analytics */}
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

        {/* Google Ads */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11093596364" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11093596364');
            `,
          }}
        />

        {/* Google Ads Conversion Event */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('event', 'ads_conversion_Request_quote_1', {
                // event_parameters can be added here as needed
              });
            `,
          }}
        />
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
        <VercelAnalytics />
      </body>
    </html>
  )
}
