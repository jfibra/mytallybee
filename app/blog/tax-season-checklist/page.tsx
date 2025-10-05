import { Section } from "@/components/section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Preparing for Tax Season: A Small Business Owner's Checklist | MyTallyBee",
  description:
    "Get your books ready for tax season with this comprehensive checklist. Ensure you have all the documentation your CPA needs and maximize your deductions.",
  keywords: "tax season preparation, small business taxes, bookkeeping for taxes, CPA preparation, business tax checklist",
  openGraph: {
    title: "Preparing for Tax Season: A Small Business Owner's Checklist",
    description: "Complete tax preparation checklist to ensure your books are ready and you maximize your deductions.",
    url: "https://mytallybee.com/blog/tax-season-checklist",
    siteName: "MyTallyBee",
    type: "article",
    publishedTime: "2025-09-25T00:00:00Z",
    images: [
      {
        url: "https://mytallybee.com/img/audit-magnifying-glass.jpg",
        width: 1200,
        height: 630,
        alt: "Tax season preparation checklist and business documents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preparing for Tax Season: A Small Business Owner's Checklist",
    description: "Complete tax preparation checklist to ensure your books are ready and you maximize your deductions.",
    images: ["https://mytallybee.com/img/audit-magnifying-glass.jpg"],
  },
}

export default function TaxSeasonChecklistPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Article Header */}
        <Section className="pt-20 pb-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="bg-brand-blue text-white px-4 py-2 rounded-full text-sm font-medium">
                Tax Preparation
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6 leading-tight">
              Preparing for Tax Season: A Small Business Owner's Checklist
            </h1>
            <div className="flex items-center justify-center gap-6 text-gray-600 mb-8">
              <time dateTime="2025-09-25" className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                September 25, 2025
              </time>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                7 min read
              </span>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Tax season doesn't have to be stressful. With proper preparation and organized records, you can streamline the process and potentially maximize your deductions.
            </p>
          </div>
        </Section>

        {/* Featured Image */}
        <Section className="py-0">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
              <Image
                src="/img/audit-magnifying-glass.jpg"
                alt="Tax preparation and audit documents"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Section>

        {/* Article Content */}
        <Section className="py-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Tax season can be overwhelming for small business owners, but it doesn't have to be. With proper preparation throughout the year and a systematic approach, you can make the process smooth and potentially save money through proper deductions. This comprehensive checklist will help ensure you're ready when it's time to file.
              </p>

              <div className="bg-brand-blue/10 border border-brand-blue/20 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-brand-navy mb-3">📅 Important Tax Season Dates for 2026</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>March 17, 2026:</strong> Partnership and S-Corp returns due (Form 1065, 1120S)</p>
                    <p><strong>April 15, 2026:</strong> Individual and C-Corp returns due (Form 1040, 1120)</p>
                  </div>
                  <div>
                    <p><strong>January 31, 2026:</strong> 1099s and W-2s due to recipients</p>
                    <p><strong>February 28, 2026:</strong> 1099s due to IRS (March 31 if filing electronically)</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mt-12 mb-6">
                Financial Records Checklist
              </h2>

              <h3 className="text-xl font-semibold text-brand-navy mt-8 mb-4">
                ✅ Income Documentation
              </h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" disabled />
                    <span><strong>All 1099s received:</strong> 1099-NEC (non-employee compensation), 1099-MISC, 1099-K (payment processing)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" disabled />
                    <span><strong>Sales records:</strong> Complete sales summaries from your accounting software</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" disabled />
                    <span><strong>Payment processor statements:</strong> PayPal, Stripe, Square, etc.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" disabled />
                    <span><strong>Bank deposit records:</strong> All business bank statements showing deposits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" disabled />
                    <span><strong>Cash transactions:</strong> Documentation for any cash sales</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-brand-navy mt-8 mb-4">
                ✅ Business Expense Documentation
              </h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-brand-blue mb-3">Office &amp; Equipment</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>□ Office supplies and materials</li>
                      <li>□ Computer and equipment purchases</li>
                      <li>□ Software subscriptions</li>
                      <li>□ Office rent or home office expenses</li>
                      <li>□ Utilities (if home office)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-blue mb-3">Business Operations</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>□ Professional services (legal, accounting)</li>
                      <li>□ Insurance premiums</li>
                      <li>□ Marketing and advertising</li>
                      <li>□ Business licenses and permits</li>
                      <li>□ Professional development and training</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-blue mb-3">Travel &amp; Transportation</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>□ Mileage logs for business travel</li>
                      <li>□ Business meal receipts (50% deductible)</li>
                      <li>□ Hotel and accommodation receipts</li>
                      <li>□ Conference and event expenses</li>
                      <li>□ Vehicle expenses (if not using mileage)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-blue mb-3">Employee Related</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>□ Payroll summaries and tax deposits</li>
                      <li>□ Contractor payments (1099s issued)</li>
                      <li>□ Employee benefits costs</li>
                      <li>□ Workers' compensation insurance</li>
                      <li>□ Retirement plan contributions</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-brand-amber p-6 mb-8">
                <h3 className="font-semibold text-brand-navy mb-2">💡 Pro Tip: The Receipt Rule</h3>
                <p className="text-gray-700">
                  Keep receipts for any business expense over $75. For smaller amounts, a credit card or bank statement may suffice, but receipts provide better documentation and help you remember the business purpose.
                </p>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mt-12 mb-6">
                QuickBooks Preparation Steps
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-2">Complete Year-End Reconciliation</h3>
                    <p className="text-gray-700 mb-2">Reconcile all bank accounts, credit cards, and loan accounts through December 31st.</p>
                    <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                      <strong>Action:</strong> In QuickBooks, go to Banking &gt; Reconcile for each account
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-2">Review and Categorize All Transactions</h3>
                    <p className="text-gray-700 mb-2">Ensure every transaction is properly categorized with the correct account and class (if applicable).</p>
                    <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                      <strong>Action:</strong> Run the "Uncategorized Transactions" report and clean up any remaining items
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-2">Run Tax Reports</h3>
                    <p className="text-gray-700 mb-2">Generate the reports your tax preparer needs, including profit &amp; loss, balance sheet, and detailed transaction reports.</p>
                    <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                      <strong>Essential Reports:</strong> Tax Summary, Profit &amp; Loss Detail, Balance Sheet, and General Ledger
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-2">Prepare 1099s for Contractors</h3>
                    <p className="text-gray-700 mb-2">If you paid contractors $600 or more during the year, you must issue 1099-NEC forms by January 31st.</p>
                    <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                      <strong>Action:</strong> Use QuickBooks' 1099 preparation feature or gather contractor information for your tax preparer
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mt-12 mb-6">
                Common Deductions Small Businesses Miss
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Don't leave money on the table. Here are commonly overlooked deductions that could reduce your tax liability:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="font-semibold text-brand-navy mb-3">🏠 Home Office Deduction</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    If you use part of your home exclusively for business, you may qualify for the home office deduction.
                  </p>
                  <div className="text-xs text-gray-600">
                    <strong>Options:</strong> Simplified method ($5/sq ft, max $1,500) or actual expense method
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="font-semibold text-brand-navy mb-3">🚗 Vehicle Expenses</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Business use of your vehicle is deductible using either mileage or actual expense method.
                  </p>
                  <div className="text-xs text-gray-600">
                    <strong>2025 Rate:</strong> 67 cents per business mile (track all business trips!)
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="font-semibold text-brand-navy mb-3">📱 Cell Phone &amp; Internet</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    The business percentage of your phone and internet bills is deductible.
                  </p>
                  <div className="text-xs text-gray-600">
                    <strong>Tip:</strong> Document business use percentage with call logs or usage records
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="font-semibold text-brand-navy mb-3">🎓 Education &amp; Training</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Courses, books, and conferences that improve your business skills are deductible.
                  </p>
                  <div className="text-xs text-gray-600">
                    <strong>Include:</strong> Online courses, professional development, industry conferences
                  </div>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mt-12 mb-6">
                Questions to Ask Your Tax Preparer
              </h2>
              <div className="bg-blue-50 border border-brand-blue/20 rounded-lg p-6 mb-8">
                <ul className="space-y-3 text-gray-700">
                  <li>• Should I be making quarterly estimated tax payments next year?</li>
                  <li>• Are there any business expenses I should track differently?</li>
                  <li>• Would changing my business entity type save on taxes?</li>
                  <li>• What retirement planning options could reduce my tax liability?</li>
                  <li>• Are there any tax law changes affecting my business this year?</li>
                  <li>• Should I consider any year-end tax planning strategies for next year?</li>
                </ul>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mt-12 mb-6">
                Year-Round Tax Preparation Tips
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The best tax preparation happens all year long. Here's how to stay organized:
              </p>

              <div className="space-y-4 mb-12">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-brand-blue rounded-full mt-2"></div>
                  <p className="text-gray-700"><strong>Monthly reconciliation:</strong> Keep your books current with monthly bank reconciliations and transaction reviews.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-brand-blue rounded-full mt-2"></div>
                  <p className="text-gray-700"><strong>Digital receipt storage:</strong> Use apps like Expensify or Receipt Bank to capture receipts immediately.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-brand-blue rounded-full mt-2"></div>
                  <p className="text-gray-700"><strong>Mileage tracking:</strong> Use apps like MileIQ or manually log business trips as they happen.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-brand-blue rounded-full mt-2"></div>
                  <p className="text-gray-700"><strong>Quarterly reviews:</strong> Meet with your bookkeeper or accountant quarterly to stay on track.</p>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
                <h3 className="font-semibold text-red-800 mb-2">⚠️ Important Reminders</h3>
                <ul className="text-red-700 space-y-1 text-sm">
                  <li>• Keep records for at least 3 years (7 years for certain situations)</li>
                  <li>• Backup your QuickBooks data before tax season</li>
                  <li>• Don't wait until the last minute—start gathering documents in January</li>
                  <li>• Consider filing an extension if you need more time to prepare properly</li>
                </ul>
              </div>

              <div className="bg-brand-navy text-white rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Let Us Handle Your Tax Preparation</h2>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Stop stressing about tax season. Our team ensures your books are always audit-ready and tax-prepared, so you can focus on growing your business instead of organizing receipts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="accent">
                    <Link href="/schedule">Schedule Tax Prep Consultation</Link>
                  </Button>
                  <Button asChild variant="secondary">
                    <Link href="/services">Learn About Our Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Related Articles */}
        <Section className="bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-brand-navy mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/monthly-reconciliation" className="group">
                <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="relative h-32">
                    <Image
                      src="/img/financial-reports-calculator.jpg"
                      alt="Monthly reconciliation"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-brand-navy group-hover:text-brand-blue transition-colors">
                      Monthly Reconciliation: Why It's Critical for Your Business
                    </h3>
                  </div>
                </div>
              </Link>
              <Link href="/blog/understanding-financial-reports" className="group">
                <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="relative h-32">
                    <Image
                      src="/img/data-analysis-pencil.jpg"
                      alt="Understanding financial reports"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-brand-navy group-hover:text-brand-blue transition-colors">
                      Understanding Your Financial Reports: P&amp;L vs Balance Sheet
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="mt-8">
              <Button asChild variant="outline">
                <Link href="/blog">View All Articles</Link>
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}