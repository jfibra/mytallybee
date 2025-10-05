import { Section } from "@/components/section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | MyTallyBee | QuickBooks Bookkeeping Agreement",
  description: "MyTallyBee's terms of service for our QuickBooks Online bookkeeping services. Service agreements, payment terms, and legal considerations.",
  keywords: "terms of service, bookkeeping agreement, MyTallyBee terms, service contract, QuickBooks Online services",
}

/**
 * Terms of service page with comprehensive service agreements
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
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      By engaging MyTallyBee for bookkeeping services, you agree to these terms and conditions:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Services are provided remotely using QuickBooks Online</li>
                      <li>You grant read-only access to your QuickBooks Online account</li>
                      <li>You provide timely access to financial documents and information</li>
                      <li>Services are performed by certified QuickBooks ProAdvisors</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-brand-navy mb-4">Service Scope</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>MyTallyBee provides the following bookkeeping services:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Monthly bank and credit card reconciliations</li>
                      <li>Transaction categorization and coding</li>
                      <li>Monthly financial reports (P&L and Balance Sheet)</li>
                      <li>Chart of accounts management</li>
                      <li>Accounts payable and receivable tracking</li>
                      <li>Year-end preparation for CPA handoff</li>
                    </ul>
                    <p>
                      Services not included: Tax preparation, payroll processing, financial advisory, 
                      audit services, or legal advice.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-brand-navy mb-4">Payment Terms</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Monthly fees are billed in advance</li>
                      <li>Payment is due within 30 days of invoice date</li>
                      <li>Late payments may incur additional fees</li>
                      <li>Services may be suspended for non-payment</li>
                      <li>Pricing is based on transaction volume and complexity</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-brand-navy mb-4">Client Responsibilities</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>Clients are responsible for:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Providing accurate and complete financial information</li>
                      <li>Maintaining QuickBooks Online subscription</li>
                      <li>Timely communication regarding business changes</li>
                      <li>Review and approval of monthly reports</li>
                      <li>Compliance with applicable laws and regulations</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-brand-navy mb-4">Limitation of Liability</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      MyTallyBee's liability is limited to the monthly service fee. We are not liable for:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Decisions made based on financial reports</li>
                      <li>Tax penalties or interest</li>
                      <li>Business losses or lost profits</li>
                      <li>Third-party software issues</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-brand-navy mb-4">Termination</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Either party may terminate services with 30 days written notice. 
                      Upon termination, all client data will be returned or destroyed as requested.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-brand-navy mb-4">Contact Information</h2>
                  <p className="text-gray-600 leading-relaxed">
                    For questions about these terms, please 
                    <a href="/contact" className="text-brand-blue hover:underline"> contact us</a> or 
                    <a href="/schedule" className="text-brand-blue hover:underline"> schedule a consultation</a>.
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
