import { Section } from "@/components/section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Tallybee | Remote QuickBooks Bookkeeping",
  description:
    "Learn about Tallybee's mission to provide accurate, clear, and consistent QuickBooks Online bookkeeping services for small businesses.",
  keywords: "about Tallybee, QuickBooks ProAdvisor, remote bookkeeping team, small business accounting",
  openGraph: {
    title: "About Tallybee | Remote QuickBooks Bookkeeping",
    description:
      "Learn about Tallybee's mission to provide accurate, clear, and consistent QuickBooks Online bookkeeping services.",
    url: "https://tallybee.vercel.app/about",
    siteName: "Tallybee",
    type: "website",
  },
}

/**
 * About page with company story, principles, and team information
 */
export default function AboutPage() {
  const principles = [
    {
      title: "Accuracy",
      description:
        "Every transaction is properly categorized, every reconciliation is thorough, and every report reflects the true financial position of your business.",
    },
    {
      title: "Clarity",
      description:
        "We communicate in plain English, provide clear reports, and ensure you understand your financial position without confusion or jargon.",
    },
    {
      title: "Consistency",
      description:
        "Reliable monthly delivery, standardized processes, and dependable service you can count on month after month.",
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Tallybee",
            description:
              "Learn about Tallybee's mission to provide accurate, clear, and consistent QuickBooks Online bookkeeping services",
            mainEntity: {
              "@type": "Organization",
              name: "Tallybee",
              description: "Professional QuickBooks Online bookkeeping services for small businesses",
            },
          }),
        }}
      />
      <Navbar />
      <main id="main-content">
        {/* Hero Section */}
        <Section className="pt-16 sm:pt-20 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8" showGrid>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mb-4 sm:mb-6">Why Tallybee?</h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              We believe small business owners should spend their time growing their business, not wrestling with
              bookkeeping software.
            </p>
          </div>
        </Section>

        {/* Story Section */}
        <Section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-4 sm:mb-6">Our Story</h2>
                <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                  <p>
                    Tallybee was founded on a simple observation: most small businesses struggle with bookkeeping not
                    because it's inherently difficult, but because it requires specialized knowledge and consistent
                    attention to detail.
                  </p>
                  <p>
                    By focusing exclusively on QuickBooks Online, we've developed streamlined processes that deliver
                    exceptional results. We're not trying to be everything to everyone – we're the specialists you call
                    when you want your QuickBooks done right.
                  </p>
                  <p>
                    Every business deserves clean, accurate books. That's what we deliver, month after month, with the
                    reliability and expertise that comes from doing one thing exceptionally well.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <Badge className="text-base sm:text-lg px-4 sm:px-6 py-3 sm:py-4" />
              </div>
            </div>
          </div>
        </Section>

        {/* Principles Section */}
        <Section className="bg-gray-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-6 sm:mb-8 text-center">Our Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {principles.map((principle, index) => (
                <div key={index} className="text-center p-4 sm:p-6 bg-white rounded-xl border border-gray-100">
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3 sm:mb-4">{principle.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Team Section */}
        <Section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-4 sm:mb-6">
              Expert Bookkeeping, Personal Service
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Tallybee combines the expertise of seasoned bookkeeping professionals with the personal attention that
              only comes from a dedicated, specialized service. When you work with us, you're not just another account
              number – you're a valued partner in building something great.
            </p>
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="p-4 sm:p-6 bg-brand-blue/10 rounded-xl border border-brand-blue/20 max-w-md">
                <h3 className="text-base sm:text-lg font-semibold text-brand-navy mb-2">
                  Certified QuickBooks ProAdvisor
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Advanced certification in QuickBooks Online with ongoing training to stay current with the latest
                  features and best practices.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="bg-brand-navy text-white px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Ready to experience the Tallybee difference?
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90">
              Let's talk about how we can bring accuracy, clarity, and consistency to your bookkeeping.
            </p>
            <Button
              asChild
              variant="accent"
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto w-full sm:w-auto"
            >
              <Link href="/schedule">Schedule Your Consultation</Link>
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
