import { Section } from "@/components/section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ | MyTallyBee | QuickBooks Bookkeeping Questions Answered",
  description:
    "Get answers to frequently asked questions about our QuickBooks bookkeeping services, pricing, processes, and more. Expert advice from certified ProAdvisors.",
  keywords: "QuickBooks FAQ, bookkeeping questions, ProAdvisor help, small business accounting, bookkeeping pricing",
  openGraph: {
    title: "FAQ | MyTallyBee | QuickBooks Bookkeeping Questions Answered",
    description: "Get answers to frequently asked questions about our QuickBooks bookkeeping services and processes.",
    url: "https://mytallybee.com/faq",
    siteName: "MyTallyBee",
    type: "website",
  },
}

/**
 * FAQ page with comprehensive answers about bookkeeping services
 */
export default function FAQPage() {
  const faqItems = [
    {
      id: "what-is-quickbooks",
      question: "What is QuickBooks and why should I use it?",
      answer: "QuickBooks is the leading accounting software for small to medium businesses. It helps you track income and expenses, manage invoices, run payroll, and generate financial reports. We recommend QuickBooks because it's user-friendly, integrates with many business tools, and provides the financial insights you need to make informed business decisions.",
    },
    {
      id: "pricing",
      question: "How much do your bookkeeping services cost?",
      answer: "Our pricing depends on your business size, transaction volume, and specific needs. We offer packages starting from basic monthly bookkeeping to comprehensive financial management. Contact us for a free consultation where we'll assess your needs and provide a custom quote that fits your budget.",
    },
    {
      id: "what-included",
      question: "What's included in your monthly bookkeeping service?",
      answer: "Our monthly service includes: transaction categorization, bank reconciliation, accounts payable/receivable management, monthly financial statements (P&L, Balance Sheet), sales tax preparation support, and regular check-ins. We also provide year-end support for tax preparation and answer any QuickBooks questions you have.",
    },
    {
      id: "how-long-setup",
      question: "How long does it take to set up my QuickBooks?",
      answer: "Initial QuickBooks setup typically takes 1-2 weeks, depending on your business complexity and how much historical data needs to be entered. We'll work with you to prioritize the most important information first, so you can start using QuickBooks for day-to-day operations quickly while we handle the detailed historical cleanup.",
    },
    {
      id: "data-security",
      question: "Is my financial data secure?",
      answer: "Absolutely. We take data security very seriously. We use secure, encrypted connections for all data transfers, follow QuickBooks ProAdvisor security protocols, and never store sensitive information locally. QuickBooks Online itself uses bank-level security with 128-bit SSL encryption and multi-factor authentication.",
    },
    {
      id: "communication",
      question: "How often will we communicate about my books?",
      answer: "We provide monthly financial statements and are available for questions anytime via email or phone. Many clients prefer quarterly business review calls to discuss financial performance and planning. We're always proactive about reaching out if we notice anything that needs your attention.",
    },
    {
      id: "cleanup-services",
      question: "My books are a mess. Can you help clean them up?",
      answer: "Yes! We specialize in QuickBooks cleanup services. We'll assess your current situation, identify and fix errors, properly categorize transactions, reconcile accounts, and get your books accurate and up-to-date. Most cleanup projects take 2-4 weeks depending on complexity.",
    },
    {
      id: "tax-preparation",
      question: "Do you prepare tax returns?",
      answer: "We prepare your books to be tax-ready and work closely with your CPA or tax preparer. We provide all the organized financial reports and documentation they need. While we don't file tax returns directly, our accurate bookkeeping makes tax preparation much smoother and often less expensive.",
    },
    {
      id: "multiple-locations",
      question: "Can you handle businesses with multiple locations or entities?",
      answer: "Yes, we work with businesses that have multiple locations, entities, or even franchises. We can set up separate QuickBooks files for each entity or use class tracking to separate different locations within one file, depending on what works best for your business structure.",
    },
    {
      id: "getting-started",
      question: "How do I get started?",
      answer: "Simply schedule a free consultation call where we'll discuss your business needs, current bookkeeping situation, and goals. We'll then provide a custom proposal with pricing and timeline. Once you're ready to move forward, we can typically start within a few days of receiving your information.",
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
              src="/img/financial-reports-calculator.jpg"
              alt="FAQ background"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Get answers to common questions about our QuickBooks bookkeeping services, processes, and how we can help streamline your business finances.
            </p>
          </div>
        </Section>

        {/* FAQ Content */}
        <Section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="bg-white border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-brand-navy hover:text-brand-blue py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Still Have Questions CTA */}
            <div className="text-center mt-12 p-8 bg-gray-50 rounded-xl">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Still Have Questions?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Can't find the answer you're looking for? We're here to help! Schedule a free consultation 
                or contact us directly to discuss your specific bookkeeping needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="accent">
                  <Link href="/schedule">Schedule Free Consultation</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* Quick Links Section */}
        <Section className="bg-brand-navy text-white">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              Ready to Get Started?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Learn More</h3>
                <p className="text-blue-100 mb-4">
                  Discover our comprehensive QuickBooks bookkeeping services
                </p>
                <Button asChild variant="secondary">
                  <Link href="/services">View Services</Link>
                </Button>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Meet Our Team</h3>
                <p className="text-blue-100 mb-4">
                  Learn about our certified ProAdvisors and company story
                </p>
                <Button asChild variant="secondary">
                  <Link href="/about">About Us</Link>
                </Button>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Get Insights</h3>
                <p className="text-blue-100 mb-4">
                  Read our latest tips and insights for small business owners
                </p>
                <Button asChild variant="secondary">
                  <Link href="/blog">Read Blog</Link>
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
