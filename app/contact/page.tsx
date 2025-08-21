import { Section } from "@/components/section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Get a Quote | Tallybee",
  description:
    "Get a personalized quote for QuickBooks Online bookkeeping services. Contact Tallybee to discuss your business needs.",
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
        <Section className="pt-20 pb-12" showGrid>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">Get Your Custom Quote</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Tell us about your business and we'll provide a detailed proposal for your QuickBooks Online bookkeeping
              needs. Most quotes are delivered within 24 hours.
            </p>
          </div>
        </Section>

        {/* Contact Form Section */}
        <Section>
          <div className="max-w-2xl mx-auto">
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
