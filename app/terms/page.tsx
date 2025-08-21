import { Section } from "@/components/section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Tallybee",
  description: "Tallybee's terms of service for our QuickBooks Online bookkeeping services.",
}

/**
 * Terms of service placeholder page
 */
export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Section className="pt-20 pb-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-brand-navy mb-8">Terms of Service</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                <em>Last updated: {new Date().toLocaleDateString()}</em>
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-brand-navy mb-4">Service Agreement</h2>
                  <p className="text-gray-600 leading-relaxed">
                    This is a placeholder terms of service page. Comprehensive terms will be implemented that cover
                    service agreements, payment terms, liability, and other legal considerations specific to bookkeeping
                    services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-brand-navy mb-4">Service Scope</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Tallybee provides remote bookkeeping services specifically for QuickBooks Online, as detailed in our
                    services page.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-brand-navy mb-4">Contact Information</h2>
                  <p className="text-gray-600 leading-relaxed">
                    For questions about these terms, please contact us through our contact form.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
