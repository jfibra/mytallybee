"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/section"
import { ValueCard } from "@/components/value-card"
import { Badge } from "@/components/badge"
import { IconAccurate, IconSimple, IconTransparent } from "@/components/icons"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CalendlyModal } from "@/components/calendly-embed"
import { trackEvent } from "@/components/analytics"
import { useWebVitals, preloadCriticalResources } from "@/lib/performance"
import { FloatingDashboard, FloatingReports, FloatingCalculator } from "@/components/floating-elements"
import { AnimatedBackground, FloatingNumbers } from "@/components/animated-background"
import { TestimonialsSection } from "@/components/testimonials"
import { IntegrationLogos } from "@/components/integration-logos"
import { ExpandedFAQ } from "@/components/expanded-faq"
import Link from "next/link"
import Image from "next/image"

/**
 * Home page with hero section, value propositions, and trust indicators
 */
export default function HomePage() {
  const [isCalendlyModalOpen, setIsCalendlyModalOpen] = useState(false)

  // Track Web Vitals for performance monitoring
  useWebVitals()

  // Preload critical resources
  useEffect(() => {
    preloadCriticalResources()
  }, [])

  const handleScheduleClick = () => {
    trackEvent("schedule_call_clicked", { location: "hero" })
    setIsCalendlyModalOpen(true)
  }

  const handleQuoteClick = () => {
    trackEvent("get_quote_clicked", { location: "hero" })
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Tallybee",
            description: "Professional QuickBooks Online bookkeeping services for small businesses",
            url: "https://tallybee.vercel.app",
            logo: "https://tallybee.vercel.app/favicon-192.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-555-TALLYBEE",
              contactType: "customer service",
            },
            address: {
              "@type": "PostalAddress",
              addressCountry: "US",
            },
            sameAs: ["https://calendly.com/johnryfibra2/30min"],
          }),
        }}
      />
      <Navbar />
      <main id="main-content">
        {/* Hero Section */}
        <Section className="pt-16 sm:pt-20 pb-12 sm:pb-16 relative overflow-hidden" showGrid>
          <AnimatedBackground />
          <FloatingNumbers />

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left px-4 sm:px-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-4 sm:mb-6 leading-tight">
                Accurate QuickBooks Bookkeeping. Zero Headaches.
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Specialists in QuickBooks Online (QBO) for small businesses. Get perfectly clean books, clear financial reports, and monthly reconciliation.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center mb-6 sm:mb-8">
                <Button
                  variant="accent"
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto w-full sm:w-auto"
                  onClick={handleScheduleClick}
                >
                  Schedule a Call
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto w-full sm:w-auto"
                >
                  <Link href="/contact" onClick={handleQuoteClick}>
                    Get a Quote
                  </Link>
                </Button>
              </div>

              {/* Trust Strip */}
              <div className="flex justify-center lg:justify-start">
                <Badge />
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-0 -z-10">
                <Image
                  src="/img/hero-bookkeeper-workspace.jpg"
                  alt="Professional bookkeeper workspace"
                  width={600}
                  height={400}
                  className="object-cover opacity-20 rounded-2xl"
                  priority
                />
              </div>
              <FloatingDashboard className="absolute top-0 left-0 animate-float-slow" />
              <FloatingReports className="absolute top-20 right-0 animate-float-medium" />
              <FloatingCalculator className="absolute bottom-0 left-20 animate-float-fast" />
            </div>
          </div>
        </Section>

        {/* Value Propositions */}
        <Section className="bg-gray-50 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 opacity-5">
            <Image
              src="/img/accurate-books-illustration-graphics.jpg"
              alt="Background pattern"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy mb-3 sm:mb-4">
                Remote QuickBooks Bookkeeping. Clear. Accurate. On time.
              </h2>
              <p className="text-xl sm:text-2xl font-bold text-brand-blue mb-3 sm:mb-4">
                98% of Our Clients are Audit-Ready, Year-Round.
              </p>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                We focus on one thing and do it exceptionally well: remote bookkeeping in QuickBooks Online.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              <ValueCard
                icon={<IconAccurate size={32} />}
                title="Accurate Books"
                description="Monthly reconciliations and tidy ledgers. Your financial data will be clean, organized, and audit-ready."
                image="/img/financial-reports-calculator.jpg"
              />
              <ValueCard
                icon={<IconSimple size={32} />}
                title="Simple Process"
                description="A quick setup and a consistent cadence. We handle the complexity so you can focus on growing your business."
                image="/img/laptop-calculator-workspace.jpg"
              />
              <ValueCard
                icon={<IconTransparent size={32} />}
                title="Transparent Pricing"
                description="No surprises. Clear scope, clear fees. You'll know exactly what you're getting and what it costs."
                image="/img/audit-magnifying-glass.jpg"
              />
            </div>
          </div>
        </Section>

        <Section className="px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 opacity-5">
            <Image
              src="/img/testimonials-background.jpg"
              alt="Background pattern"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-3 sm:mb-4">What our clients say</h2>
              <p className="text-base sm:text-lg text-gray-600">Real feedback from real small business owners</p>
            </div>
            <TestimonialsSection />
          </div>
        </Section>

        <Section className="bg-gray-50 px-4 sm:px-6 lg:px-8">
          <ExpandedFAQ />
        </Section>

        {/* Secondary CTA */}
        <Section className="px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-3 sm:mb-4">
              Ready to get your books in order?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              Let's discuss your bookkeeping needs and see how Tallybee can help your business thrive.
            </p>
            <Button
              variant="primary"
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto w-full sm:w-auto"
              onClick={() => {
                trackEvent("schedule_call_clicked", { location: "secondary_cta" })
                setIsCalendlyModalOpen(true)
              }}
            >
              Schedule Your Free Consultation
            </Button>
          </div>
        </Section>
      </main>
      <Footer />

      <CalendlyModal
        isOpen={isCalendlyModalOpen}
        onClose={() => setIsCalendlyModalOpen(false)}
        url="https://calendly.com/johnryfibra2/30min"
        title="Schedule Your Free Consultation"
      />
    </>
  )
}
