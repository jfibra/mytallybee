import { Section } from "@/components/section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | MyTallyBee | Data Protection & Security",
  description: "MyTallyBee's privacy policy and data protection practices for our QuickBooks Online bookkeeping services. Your financial data security is our priority.",
  keywords: "privacy policy, data protection, financial data security, MyTallyBee privacy, bookkeeping confidentiality",
}

/**
 * Privacy policy page with comprehensive data protection information
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
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      At MyTallyBee, we collect information necessary to provide our QuickBooks Online bookkeeping services:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Business information (company name, contact details, tax ID)</li>
                      <li>Financial data from your QuickBooks Online account (read-only access)</li>
                      <li>Bank and credit card transaction data for reconciliation</li>
                      <li>Communication records related to our services</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-brand-navy mb-4">How We Use Your Information</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>We use your information solely for:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Providing bookkeeping and accounting services</li>
                      <li>Preparing financial reports and reconciliations</li>
                      <li>Communicating about your account and services</li>
                      <li>Compliance with legal and regulatory requirements</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-brand-navy mb-4">Data Security</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      MyTallyBee takes data security seriously and follows industry best practices:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Bank-level encryption for all data transmission</li>
                      <li>Secure, read-only access to your QuickBooks Online account</li>
                      <li>Regular security audits and updates</li>
                      <li>Limited access on a need-to-know basis</li>
                      <li>Secure storage of all client information</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-brand-navy mb-4">Information Sharing</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      We do not sell, trade, or rent your personal information. We may share information only in these circumstances:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>With your explicit consent</li>
                      <li>To comply with legal obligations</li>
                      <li>To your designated CPA or tax professional (with your authorization)</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-brand-navy mb-4">Your Rights</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>You have the right to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Access your personal information</li>
                      <li>Request corrections to your data</li>
                      <li>Request deletion of your information (subject to legal requirements)</li>
                      <li>Withdraw consent for processing</li>
                      <li>Data portability</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-brand-navy mb-4">Contact Us</h2>
                  <p className="text-gray-600 leading-relaxed">
                    If you have questions about this privacy policy or our data practices, please contact us through our 
                    <a href="/contact" className="text-brand-blue hover:underline"> contact form</a> or schedule a 
                    <a href="/schedule" className="text-brand-blue hover:underline"> consultation</a>.
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
