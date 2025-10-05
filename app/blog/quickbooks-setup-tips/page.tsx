import { Section } from "@/components/section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "5 Essential QuickBooks Online Setup Tips for Small Businesses | MyTallyBee",
  description:
    "Learn the 5 essential QuickBooks Online setup steps that will save you time and ensure accurate bookkeeping from day one. Expert tips from certified ProAdvisors.",
  keywords: "QuickBooks Online setup, small business accounting, QuickBooks tips, bookkeeping setup, ProAdvisor advice",
  openGraph: {
    title: "5 Essential QuickBooks Online Setup Tips for Small Businesses",
    description: "Expert QuickBooks setup tips to ensure accurate bookkeeping from day one.",
    url: "https://mytallybee.com/blog/quickbooks-setup-tips",
    siteName: "MyTallyBee",
    type: "article",
    publishedTime: "2025-10-01T00:00:00Z",
    images: [
      {
        url: "https://mytallybee.com/img/bookkeeping-keyboard-concept.jpg",
        width: 1200,
        height: 630,
        alt: "QuickBooks Online setup guide for small businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "5 Essential QuickBooks Online Setup Tips for Small Businesses",
    description: "Expert QuickBooks setup tips to ensure accurate bookkeeping from day one.",
    images: ["https://mytallybee.com/img/bookkeeping-keyboard-concept.jpg"],
  },
}

export default function QuickBooksSetupTipsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "5 Essential QuickBooks Online Setup Tips for Small Businesses",
    description: "Learn the 5 essential QuickBooks Online setup steps that will save you time and ensure accurate bookkeeping from day one. Expert tips from certified ProAdvisors.",
    image: "https://mytallybee.com/img/bookkeeping-keyboard-concept.jpg",
    author: {
      "@type": "Organization",
      name: "MyTallyBee",
      url: "https://mytallybee.com",
    },
    publisher: {
      "@type": "Organization",
      name: "MyTallyBee",
      logo: {
        "@type": "ImageObject",
        url: "https://mytallybee.com/mytallybee.png",
      },
    },
    datePublished: "2025-10-01T00:00:00Z",
    dateModified: "2025-10-01T00:00:00Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://mytallybee.com/blog/quickbooks-setup-tips",
    },
    articleSection: "QuickBooks Tips",
    keywords: ["QuickBooks Online setup", "small business accounting", "QuickBooks tips", "bookkeeping setup", "ProAdvisor advice"],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main id="main-content">
        {/* Article Header */}
        <Section className="pt-20 pb-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="bg-brand-blue text-white px-4 py-2 rounded-full text-sm font-medium">
                QuickBooks Tips
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6 leading-tight">
              5 Essential QuickBooks Online Setup Tips for Small Businesses
            </h1>
            <div className="flex items-center justify-center gap-6 text-gray-600 mb-8">
              <time dateTime="2025-10-01" className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                October 1, 2025
              </time>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                5 min read
              </span>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Getting started with QuickBooks Online? These essential setup steps will save you time, prevent costly mistakes, and ensure accurate bookkeeping from day one.
            </p>
          </div>
        </Section>

        {/* Featured Image */}
        <Section className="py-0">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
              <Image
                src="/img/bookkeeping-keyboard-concept.jpg"
                alt="QuickBooks Online setup on computer"
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
                Setting up QuickBooks Online correctly from the start is crucial for maintaining accurate financial records and making tax time a breeze. As certified QuickBooks ProAdvisors, we've helped hundreds of small businesses get their books organized. Here are the five most important steps you should never skip.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mt-12 mb-6">
                1. Choose the Right QuickBooks Online Plan
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Before diving into setup, make sure you're on the right plan. QuickBooks Online offers several tiers, and choosing the wrong one can limit your functionality or waste money on features you don't need.
              </p>
              <div className="bg-blue-50 border-l-4 border-brand-blue p-6 mb-8">
                <h3 className="font-semibold text-brand-navy mb-2">Our Recommendation:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Simple Start:</strong> Solo entrepreneurs with basic needs</li>
                  <li>• <strong>Essentials:</strong> Small businesses with employees or multiple users</li>
                  <li>• <strong>Plus:</strong> Growing businesses needing inventory tracking or project profitability</li>
                  <li>• <strong>Advanced:</strong> Established businesses requiring advanced reporting and workflows</li>
                </ul>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mt-12 mb-6">
                2. Set Up Your Chart of Accounts Properly
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Your Chart of Accounts is the foundation of your financial tracking. QuickBooks provides a default chart, but customizing it for your specific business type is essential for meaningful reports.
              </p>
              <div className="bg-amber-50 border-l-4 border-brand-amber p-6 mb-8">
                <h3 className="font-semibold text-brand-navy mb-2">Pro Tip:</h3>
                <p className="text-gray-700">
                  Don't create too many accounts initially. Start with the basics and add more specific accounts as your business grows. You can always merge accounts later, but splitting them is more complex.
                </p>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mt-12 mb-6">
                3. Connect and Categorize Your Bank Accounts
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Connecting your bank accounts to QuickBooks Online is one of its most powerful features. This automation saves hours of manual data entry and reduces errors.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-brand-navy mb-3">What to Connect:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Primary business checking account</li>
                    <li>• Business savings accounts</li>
                    <li>• Business credit cards</li>
                    <li>• Business loan accounts</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-brand-navy mb-3">Initial Categorization:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Review and categorize the first 30 days</li>
                    <li>• Create rules for recurring transactions</li>
                    <li>• Split transactions when necessary</li>
                    <li>• Mark personal expenses as owner draws</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mt-12 mb-6">
                4. Configure Your Sales Tax Settings
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If your business collects sales tax, setting this up correctly from the beginning will save you countless headaches. QuickBooks can automatically calculate and track sales tax for you.
              </p>
              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
                <h3 className="font-semibold text-red-800 mb-2">Important:</h3>
                <p className="text-red-700">
                  Sales tax requirements vary significantly by state and locality. Consult with a tax professional or your state's department of revenue to ensure you're collecting the correct rates and filing properly.
                </p>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mt-12 mb-6">
                5. Set Up Your Customer and Vendor Lists
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Creating organized customer and vendor lists from the start will streamline your invoicing, expense tracking, and reporting. Include all the information you'll need for tax reporting.
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-brand-navy mb-4">Essential Information to Include:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-brand-blue mb-2">For Customers:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Complete contact information</li>
                      <li>• Tax ID numbers (for 1099 reporting)</li>
                      <li>• Payment terms</li>
                      <li>• Billing and shipping addresses</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-brand-blue mb-2">For Vendors:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Business name and contact details</li>
                      <li>• Tax ID or SSN for 1099s</li>
                      <li>• Payment terms and methods</li>
                      <li>• Account numbers</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mt-12 mb-6">
                Bonus Tips for Success
              </h2>
              <div className="space-y-6 mb-12">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-2">Start with Clean Data</h3>
                    <p className="text-gray-700">Enter your starting balances as of a specific date (like the beginning of your fiscal year) and work forward from there.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-2">Set a Regular Schedule</h3>
                    <p className="text-gray-700">Plan to review and categorize transactions at least weekly. This prevents the overwhelming backlog that many business owners face.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-2">Learn the Basics</h3>
                    <p className="text-gray-700">Invest time in understanding QuickBooks fundamentals, or consider working with a ProAdvisor to ensure proper setup.</p>
                  </div>
                </div>
              </div>

              <div className="bg-brand-navy text-white rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Need Help with Your QuickBooks Setup?</h2>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Setting up QuickBooks Online correctly is crucial, but it doesn't have to be overwhelming. Our certified ProAdvisors can handle the entire setup process for you, ensuring everything is configured properly from day one.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="accent">
                    <Link href="/schedule">Schedule a Setup Consultation</Link>
                  </Button>
                  <Button asChild variant="secondary">
                    <Link href="/services">View Our Services</Link>
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
                      Understanding Your Financial Reports: P&L vs Balance Sheet
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
