import { Section } from "@/components/section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact MyTallyBee | Get a Quote | QuickBooks Online Bookkeeping",
  description:
    "Get a personalized quote for QuickBooks Online bookkeeping services. Contact MyTallyBee to discuss your business needs. Free consultation available.",
  keywords: "contact MyTallyBee, bookkeeping quote, QuickBooks Online services, free consultation, small business accounting",
  openGraph: {
    title: "Contact MyTallyBee | Get a Quote for Bookkeeping Services",
    description: "Get a personalized quote for QuickBooks Online bookkeeping services. Free consultation available.",
    url: "https://mytallybee.com/contact",
    siteName: "MyTallyBee",
    type: "website",
    images: [
      {
        url: "/img/bookkeeper-phone-consultation.jpg",
        width: 1200,
        height: 630,
        alt: "Contact MyTallyBee for bookkeeping consultation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact MyTallyBee | Get a Quote for Bookkeeping Services",
    description: "Get a personalized quote for QuickBooks Online bookkeeping services.",
    images: ["/img/bookkeeper-phone-consultation.jpg"],
  },
}

/**
 * Contact page with quote request form
 */
export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero Section */}
        <Section className="pt-20 pb-12 relative" showGrid>
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/img/mobile-bookkeeping-calculation.jpg"
              alt="Professional consultation background"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">Get Your Custom Quote</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Tell us about your business and we'll provide a detailed proposal for your QuickBooks Online bookkeeping
              needs. Most quotes are delivered within 24 hours.
            </p>
          </div>
        </Section>

        {/* Contact Form Section */}
        <Section className="relative">
          <div className="absolute inset-0 opacity-5">
            <Image
              src="/img/typing-bookkeeping-software.jpg"
              alt="Contact form background"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </Section>

        {/* Alternative CTA */}
        <Section className="bg-gray-50">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">Prefer to talk first?</h2>
            <p className="text-gray-600 mb-6">
              Schedule a free 30-minute consultation to discuss your needs before getting a formal quote.
            </p>
            <Button asChild variant="secondary" size="lg" className="text-lg px-8 py-4 h-auto">
              <Link href="/schedule">Schedule a Call Instead</Link>
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
