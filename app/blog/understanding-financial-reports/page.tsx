import { Section } from "@/components/section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Understanding Your Financial Reports: P&L vs Balance Sheet | MyTallyBee",
  description:
    "Demystify your financial reports. Learn what your Profit & Loss statement and Balance Sheet tell you about your business performance and financial health.",
  keywords: "profit and loss statement, balance sheet, financial reports, QuickBooks reports, business financial analysis",
  openGraph: {
    title: "Understanding Your Financial Reports: P&L vs Balance Sheet",
    description: "Learn to read and understand your essential business financial reports for better decision-making.",
    url: "https://mytallybee.com/blog/understanding-financial-reports",
    siteName: "MyTallyBee",
    type: "article",
    publishedTime: "2025-09-22T00:00:00Z",
    images: [
      {
        url: "https://mytallybee.com/img/data-analysis-pencil.jpg",
        width: 1200,
        height: 630,
        alt: "Financial reports analysis showing P&L and Balance Sheet concepts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Understanding Your Financial Reports: P&L vs Balance Sheet",
    description: "Learn to read and understand your essential business financial reports for better decision-making.",
    images: ["https://mytallybee.com/img/data-analysis-pencil.jpg"],
  },
}

export default function UnderstandingFinancialReportsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Article Header */}
        <Section className="pt-20 pb-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="bg-brand-blue text-white px-4 py-2 rounded-full text-sm font-medium">
                Financial Reports
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6 leading-tight">
              Understanding Your Financial Reports: P&amp;L vs Balance Sheet
            </h1>
            <div className="flex items-center justify-center gap-6 text-gray-600 mb-8">
              <time dateTime="2025-09-22" className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                September 22, 2025
              </time>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                6 min read
              </span>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Your financial reports are powerful tools for understanding your business. Learn to read your Profit &amp; Loss statement and Balance Sheet to make informed decisions about your company's future.
            </p>
          </div>
        </Section>

        {/* Featured Image */}
        <Section className="py-0">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
              <Image
                src="/img/data-analysis-pencil.jpg"
                alt="Financial report analysis with charts and data"
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
                Your financial reports are the story of your business told in numbers. While they might seem intimidating at first, understanding your Profit &amp; Loss statement and Balance Sheet is crucial for making informed business decisions. Let's break down these essential reports in plain English.
              </p>

              <div className="bg-brand-blue/10 border border-brand-blue/20 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-brand-navy mb-3">🎯 Quick Overview</h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold text-brand-blue mb-2">Profit &amp; Loss (P&amp;L)</h4>
                    <p className="text-gray-700">Shows your business performance over a period of time. "How much money did I make this month/quarter/year?"</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-blue mb-2">Balance Sheet</h4>
                    <p className="text-gray-700">Shows your business financial position at a specific point in time. "What do I own vs. what do I owe right now?"</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mt-12 mb-6">
                The Profit &amp; Loss Statement (Income Statement)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Think of your P&amp;L as a movie—it shows what happened over a specific period. It answers the fundamental question: "Did my business make money or lose money during this time period?"
              </p>

              <h3 className="text-xl font-semibold text-brand-navy mt-8 mb-4">
                Key Components of a P&amp;L Statement
              </h3>

              <div className="space-y-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-brand-blue text-lg mb-3">1. Revenue (Income)</h4>
                  <p className="text-gray-700 mb-3">All money coming into your business from sales, services, or other income sources.</p>
                  <div className="bg-gray-50 p-4 rounded text-sm">
                    <strong>Example:</strong> If you sold $50,000 worth of products and $20,000 in services, your total revenue is $70,000.
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-brand-blue text-lg mb-3">2. Cost of Goods Sold (COGS)</h4>
                  <p className="text-gray-700 mb-3">Direct costs to produce your products or deliver your services.</p>
                  <div className="bg-gray-50 p-4 rounded text-sm">
                    <strong>Includes:</strong> Materials, direct labor, shipping costs
                    <br />
                    <strong>Excludes:</strong> Office rent, administrative salaries, marketing
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-brand-blue text-lg mb-3">3. Gross Profit</h4>
                  <p className="text-gray-700 mb-3">Revenue minus COGS. This shows how much you make before operating expenses.</p>
                  <div className="bg-gray-50 p-4 rounded text-sm font-mono">
                    Gross Profit = Revenue - Cost of Goods Sold
                    <br />
                    $70,000 - $25,000 = $45,000 Gross Profit
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-brand-blue text-lg mb-3">4. Operating Expenses</h4>
                  <p className="text-gray-700 mb-3">All the costs to run your business that aren't directly tied to producing your product.</p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-50 p-3 rounded">
                      <strong>Common Operating Expenses:</strong>
                      <ul className="mt-2 space-y-1 text-gray-600">
                        <li>• Rent and utilities</li>
                        <li>• Salaries and benefits</li>
                        <li>• Marketing and advertising</li>
                        <li>• Professional services</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <strong>Also Include:</strong>
                      <ul className="mt-2 space-y-1 text-gray-600">
                        <li>• Insurance premiums</li>
                        <li>• Software subscriptions</li>
                        <li>• Office supplies</li>
                        <li>• Travel expenses</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-brand-blue text-lg mb-3">5. Net Income (Bottom Line)</h4>
                  <p className="text-gray-700 mb-3">What's left after all expenses. This is your actual profit or loss.</p>
                  <div className="bg-gray-50 p-4 rounded text-sm font-mono">
                    Net Income = Gross Profit - Operating Expenses
                    <br />
                    $45,000 - $30,000 = $15,000 Net Income
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
                <h3 className="font-semibold text-green-800 mb-2">💡 P&amp;L Analysis Tips</h3>
                <ul className="text-green-700 space-y-1 text-sm">
                  <li>• Compare month-to-month and year-over-year trends</li>
                  <li>• Calculate your gross profit margin (Gross Profit ÷ Revenue)</li>
                  <li>• Track your largest expense categories</li>
                  <li>• Look for seasonal patterns in your business</li>
                </ul>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mt-12 mb-6">
                The Balance Sheet
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If the P&amp;L is like a movie, the Balance Sheet is like a photograph—it shows your business's financial position at one specific moment in time. It follows the fundamental accounting equation:
              </p>

              <div className="bg-brand-navy text-white rounded-lg p-6 text-center mb-8">
                <p className="text-2xl font-bold">Assets = Liabilities + Equity</p>
                <p className="text-blue-100 mt-2">What you own = What you owe + What you've invested</p>
              </div>

              <h3 className="text-xl font-semibold text-brand-navy mt-8 mb-4">
                Understanding the Three Main Sections
              </h3>

              <div className="space-y-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-brand-blue text-lg mb-3">1. Assets (What You Own)</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-brand-navy mb-2">Current Assets</h5>
                      <p className="text-sm text-gray-700 mb-2">Things you can convert to cash within a year:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Cash in bank accounts</li>
                        <li>• Accounts receivable (money owed to you)</li>
                        <li>• Inventory</li>
                        <li>• Prepaid expenses</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-navy mb-2">Fixed Assets</h5>
                      <p className="text-sm text-gray-700 mb-2">Long-term assets used in business:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Equipment and machinery</li>
                        <li>• Vehicles</li>
                        <li>• Property and buildings</li>
                        <li>• Software and technology</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-brand-blue text-lg mb-3">2. Liabilities (What You Owe)</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-brand-navy mb-2">Current Liabilities</h5>
                      <p className="text-sm text-gray-700 mb-2">Debts due within one year:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Accounts payable (bills you owe)</li>
                        <li>• Credit card balances</li>
                        <li>• Payroll taxes owed</li>
                        <li>• Short-term loans</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-navy mb-2">Long-term Liabilities</h5>
                      <p className="text-sm text-gray-700 mb-2">Debts due over a longer period:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Business loans</li>
                        <li>• Equipment financing</li>
                        <li>• Mortgages</li>
                        <li>• Deferred tax liabilities</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-brand-blue text-lg mb-3">3. Equity (Your Ownership Stake)</h4>
                  <p className="text-gray-700 mb-3">What's left over after subtracting liabilities from assets. This represents your actual ownership in the business.</p>
                  <div className="bg-gray-50 p-4 rounded text-sm">
                    <strong>Includes:</strong> Initial investment, retained earnings (accumulated profits), owner draws
                  </div>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mt-12 mb-6">
                Key Financial Ratios to Track
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Numbers alone don't tell the whole story. These key ratios help you understand your business's financial health:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 border border-brand-blue/20 rounded-lg p-6">
                  <h4 className="font-semibold text-brand-navy mb-3">Profitability Ratios</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong>Gross Profit Margin:</strong>
                      <div className="font-mono text-xs bg-white p-2 rounded mt-1">
                        (Gross Profit ÷ Revenue) × 100
                      </div>
                      <p className="text-gray-600 mt-1">Shows how efficiently you produce your product/service</p>
                    </div>
                    <div>
                      <strong>Net Profit Margin:</strong>
                      <div className="font-mono text-xs bg-white p-2 rounded mt-1">
                        (Net Income ÷ Revenue) × 100
                      </div>
                      <p className="text-gray-600 mt-1">Shows overall profitability after all expenses</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-400/20 rounded-lg p-6">
                  <h4 className="font-semibold text-brand-navy mb-3">Liquidity Ratios</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong>Current Ratio:</strong>
                      <div className="font-mono text-xs bg-white p-2 rounded mt-1">
                        Current Assets ÷ Current Liabilities
                      </div>
                      <p className="text-gray-600 mt-1">Measures ability to pay short-term debts (aim for 1.5-3)</p>
                    </div>
                    <div>
                      <strong>Quick Ratio:</strong>
                      <div className="font-mono text-xs bg-white p-2 rounded mt-1">
                        (Cash + Receivables) ÷ Current Liabilities
                      </div>
                      <p className="text-gray-600 mt-1">More conservative liquidity measure</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mt-12 mb-6">
                Using Your Reports for Better Business Decisions
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-2">Cash Flow Management</h3>
                    <p className="text-gray-700">Use your Balance Sheet to monitor accounts receivable and payable. Track how quickly customers pay and manage your payment timing to vendors.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-2">Pricing Decisions</h3>
                    <p className="text-gray-700">Analyze your gross profit margins to ensure your pricing covers costs and provides adequate profit. Compare margins across different products or services.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-2">Growth Planning</h3>
                    <p className="text-gray-700">Track trends in your P&amp;L to identify growth opportunities and plan for future expansion. Monitor your debt-to-equity ratio for financing decisions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-2">Expense Control</h3>
                    <p className="text-gray-700">Identify your largest expense categories and look for trends. Are costs increasing faster than revenue? Where can you optimize spending?</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-brand-amber p-6 mb-8">
                <h3 className="font-semibold text-brand-navy mb-2">📈 Monthly Review Checklist</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>□ Compare this month's P&amp;L to last month and same month last year</li>
                  <li>□ Review cash position and upcoming payment obligations</li>
                  <li>□ Check accounts receivable aging—follow up on overdue invoices</li>
                  <li>□ Analyze expense trends and identify any unusual items</li>
                  <li>□ Calculate key ratios and compare to industry benchmarks</li>
                </ul>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mt-12 mb-6">
                Common Report Reading Mistakes to Avoid
              </h2>

              <div className="space-y-4 mb-12">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                  <p className="text-gray-700"><strong>Confusing cash flow with profitability:</strong> You can be profitable but still have cash flow problems if customers pay slowly.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                  <p className="text-gray-700"><strong>Ignoring trends:</strong> One month's numbers don't tell the full story. Look for patterns over time.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                  <p className="text-gray-700"><strong>Not comparing to benchmarks:</strong> Your numbers are only meaningful in context. Compare to industry averages and your own historical performance.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                  <p className="text-gray-700"><strong>Waiting until year-end:</strong> Review your reports monthly to catch issues early and make timely adjustments.</p>
                </div>
              </div>

              <div className="bg-brand-navy text-white rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Get Monthly Financial Reports You Can Understand</h2>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Stop staring at confusing reports. We provide clean, accurate financial statements with plain-English explanations so you can make confident business decisions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="accent">
                    <Link href="/schedule">Schedule a Financial Review</Link>
                  </Button>
                  <Button asChild variant="secondary">
                    <Link href="/services">Learn About Our Reporting</Link>
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
              <Link href="/blog/quickbooks-setup-tips" className="group">
                <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="relative h-32">
                    <Image
                      src="/img/bookkeeping-keyboard-concept.jpg"
                      alt="QuickBooks setup tips"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-brand-navy group-hover:text-brand-blue transition-colors">
                      5 Essential QuickBooks Online Setup Tips for Small Businesses
                    </h3>
                  </div>
                </div>
              </Link>
              <Link href="/blog/tax-season-checklist" className="group">
                <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="relative h-32">
                    <Image
                      src="/img/audit-magnifying-glass.jpg"
                      alt="Tax season preparation"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-brand-navy group-hover:text-brand-blue transition-colors">
                      Preparing for Tax Season: A Small Business Owner's Checklist
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