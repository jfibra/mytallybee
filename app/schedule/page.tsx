import { Section } from "@/components/section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CalendlyEmbed } from "@/components/calendly-embed"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { StructuredData } from "@/components/seo-structured-data"

export const metadata: Metadata = {
  title: "Schedule a Call | MyTallyBee Bookkeeping | Free QuickBooks Consultation",
  description:
    "Schedule a free 30-minute consultation to discuss your QuickBooks Online bookkeeping needs with MyTallyBee. Certified ProAdvisor available.",
  keywords: "schedule bookkeeping consultation, QuickBooks Online help, free accounting consultation, MyTallyBee appointment",
  openGraph: {
    title: "Schedule a Call | MyTallyBee Bookkeeping",
    description:
      "Schedule a free 30-minute consultation to discuss your QuickBooks Online bookkeeping needs with MyTallyBee.",
    url: "https://mytallybee.com/schedule",
    siteName: "MyTallyBee",
    type: "website",
    images: [
      {
        url: "/img/bookkeeper-phone-consultation.jpg",
        width: 1200,
        height: 630,
        alt: "Schedule consultation with MyTallyBee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schedule a Call | MyTallyBee Bookkeeping",
    description:
      "Schedule a free 30-minute consultation to discuss your QuickBooks Online bookkeeping needs with MyTallyBee.",
    images: ["/img/bookkeeper-phone-consultation.jpg"],
  },
}

/**
 * Schedule page with Calendly embed
 */
export default function SchedulePage() {
  return (
    <>
      <StructuredData
        type="webpage"
        data={{
          title: "Schedule a Call | Tallybee Bookkeeping",
          description:
            "Schedule a free 30-minute consultation to discuss your QuickBooks Online bookkeeping needs with Tallybee.",
          url: "https://tallybee.vercel.app/schedule",
        }}
      />
      <Navbar />
      <main id="main-content">
        {/* Hero Section */}
        <Section className="pt-20 pb-12 relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          >
            <source src="/videos/bookkeeper-phone-consultation.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">Schedule Your Free Consultation</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Pick a time that works for you. We'll discuss your bookkeeping needs and how MyTallyBee can help your
              business grow.
            </p>
          </div>
        </Section>

        {/* Calendly Embed Section */}
        <Section className="relative">
          <div className="absolute inset-0 opacity-5">
            <Image
              src="/img/monthly-budget-tablet.jpg"
              alt="Calendar background"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-semibold text-brand-navy mb-6 text-center">30-Minute Discovery Call</h2>

              <CalendlyEmbed url="https://calendly.com/johnryfibra2/30min" className="min-h-[600px] w-full" />

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500 mb-4">
                  Can't find a suitable time? Contact us directly and we'll work something out.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="outline">
                    <Link href="/contact">Contact Us Instead</Link>
                  </Button>
                  <Button asChild variant="secondary">
                    <Link href="/services">Learn About Our Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
