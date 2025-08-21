import { Section } from "@/components/section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Tallybee",
  description: "Tallybee's privacy policy and data protection practices for our bookkeeping services.",
}

/**
 * Privacy policy placeholder page
 */
export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Section className="pt-20 pb-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-brand-navy mb-8">Privacy Policy</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                <em>Last updated: {new Date().toLocaleDateString()}</em>
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-brand-navy mb-4">Information We Collect</h2>
                  <p className="text-gray-600 leading-relaxed">
                    This is a placeholder privacy policy. A comprehensive privacy policy will be implemented that covers
                    data collection, usage, storage, and protection practices specific to bookkeeping services and
                    QuickBooks Online integration.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-brand-navy mb-4">Data Security</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Tallybee takes data security seriously and follows industry best practices for protecting client
                    financial information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-brand-navy mb-4">Contact Us</h2>
                  <p className="text-gray-600 leading-relaxed">
                    If you have questions about this privacy policy, please contact us through our contact form or
                    email.
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
