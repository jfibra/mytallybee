import { Section } from "@/components/section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | MyTallyBee | QuickBooks Tips & Small Business Insights",
  description:
    "Stay updated with the latest QuickBooks tips, bookkeeping best practices, and small business financial insights from MyTallyBee's certified ProAdvisors.",
  keywords: "QuickBooks tips, bookkeeping blog, small business finance, accounting insights, ProAdvisor advice",
  openGraph: {
    title: "Blog | MyTallyBee | QuickBooks Tips & Small Business Insights",
    description: "Stay updated with QuickBooks tips and small business financial insights from certified ProAdvisors.",
    url: "https://mytallybee.com/blog",
    siteName: "MyTallyBee",
    type: "website",
    images: [
      {
        url: "https://mytallybee.com/img/typing-bookkeeping-software.jpg",
        width: 1200,
        height: 630,
        alt: "MyTallyBee blog - QuickBooks tips and small business insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | MyTallyBee | QuickBooks Tips & Small Business Insights",
    description: "Stay updated with QuickBooks tips and small business financial insights from certified ProAdvisors.",
    images: ["https://mytallybee.com/img/typing-bookkeeping-software.jpg"],
  },
}

/**
 * Blog page with bookkeeping and QuickBooks insights
 */
export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Essential QuickBooks Online Setup Tips for Small Businesses",
      excerpt: "Getting started with QuickBooks Online? Here are the essential setup steps that will save you time and ensure accurate bookkeeping from day one.",
      date: "2025-10-01",
      readTime: "5 min read",
      category: "QuickBooks Tips",
      image: "/img/bookkeeping-keyboard-concept.jpg",
    },
    {
      id: 2,
      title: "Monthly Reconciliation: Why It's Critical for Your Business",
      excerpt: "Learn why monthly bank reconciliation is essential for accurate financial reporting and how it can help you catch errors before they become problems.",
      date: "2025-09-28",
      readTime: "4 min read",
      category: "Best Practices",
      image: "/img/financial-reports-calculator.jpg",
    },
    {
      id: 3,
      title: "Preparing for Tax Season: A Small Business Owner's Checklist",
      excerpt: "Get your books ready for tax season with this comprehensive checklist. Ensure you have all the documentation your CPA needs.",
      date: "2025-09-25",
      readTime: "7 min read",
      category: "Tax Preparation",
      image: "/img/audit-magnifying-glass.jpg",
    },
    {
      id: 4,
      title: "Understanding Your Financial Reports: P&L vs Balance Sheet",
      excerpt: "Demystify your financial reports. Learn what your Profit & Loss statement and Balance Sheet tell you about your business performance.",
      date: "2025-09-22",
      readTime: "6 min read",
      category: "Financial Reports",
      image: "/img/data-analysis-pencil.jpg",
    },
  ]

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero Section */}
        <Section className="pt-20 pb-12 relative">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/img/typing-bookkeeping-software.jpg"
              alt="Blog background"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              QuickBooks Tips & Business Insights
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Stay updated with the latest bookkeeping best practices, QuickBooks tips, and small business financial insights from our certified ProAdvisors.
            </p>
          </div>
        </Section>

        {/* Blog Posts Grid */}
        <Section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold text-brand-navy mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/blog/${post.id === 1 ? 'quickbooks-setup-tips' : post.id === 2 ? 'monthly-reconciliation' : post.id === 3 ? 'tax-season-checklist' : 'understanding-financial-reports'}`}>
                        Read Full Article
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            {/* Coming Soon Notice */}
            <div className="text-center mt-12 p-8 bg-gray-50 rounded-xl">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">More Content Coming Soon!</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We're working on bringing you more valuable insights about QuickBooks, bookkeeping best practices, and small business financial management. 
                Check back regularly for new articles!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="accent">
                  <Link href="/schedule">Schedule a Consultation</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Get Personalized Advice</Link>
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* Newsletter Signup */}
        <Section className="bg-brand-navy text-white">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Stay Updated with Our Latest Tips
            </h2>
            <p className="text-blue-100 mb-8">
              Get notified when we publish new articles about QuickBooks tips, bookkeeping best practices, and small business insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-brand-navy"
                disabled
              />
              <Button variant="accent" disabled>
                Coming Soon
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              Newsletter signup will be available soon. For now, <Link href="/contact" className="underline">contact us</Link> for personalized bookkeeping advice.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}