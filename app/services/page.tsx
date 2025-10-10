import { Section } from "@/components/section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FloatingReports, FloatingCalculator } from "@/components/floating-elements"
import { AnimatedBackground } from "@/components/animated-background"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "QuickBooks Online Bookkeeping Services | MyTallyBee | Certified ProAdvisor",
  description:
    "Professional remote bookkeeping services specializing in QuickBooks Online. Monthly reconciliations, financial reports, and year-end CPA handoff. 98% audit-ready clients.",
  keywords:
    "QuickBooks Online, bookkeeping services, remote bookkeeping, small business accounting, monthly reconciliations, QuickBooks ProAdvisor, audit-ready books",
  openGraph: {
    title: "QuickBooks Online Bookkeeping Services | MyTallyBee",
    description: "Professional remote bookkeeping services specializing in QuickBooks Online for small businesses. 98% audit-ready clients.",
    url: "https://mytallybee.com/services",
    siteName: "MyTallyBee",
    type: "website",
    images: [
      {
        url: "/img/financial-reports-calculator.jpg",
        width: 1200,
        height: 630,
        alt: "Professional bookkeeping services and financial reports",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuickBooks Online Bookkeeping Services | MyTallyBee",
    description: "Professional remote bookkeeping services specializing in QuickBooks Online for small businesses.",
    images: ["/img/financial-reports-calculator.jpg"],
  },
}

/**
 * Services page detailing QuickBooks Online bookkeeping offerings
 */
export default function ServicesPage() {
  const services = [
    {
      title: "Monthly Reconciliations",
      description: "Bank and credit card reconciliations to ensure your books match your actual accounts.",
      icon: "💳",
    },
    {
      title: "Chart of Accounts Cleanup",
      description: "Organize and optimize your chart of accounts for better financial reporting and tax preparation.",
      icon: "📊",
    },
    {
      title: "Accounts Payable & Receivable",
      description: "Track what you owe and what's owed to you, keeping your cash flow clear and manageable.",
      icon: "💰",
    },
    {
      title: "Monthly Financial Reports",
      description: "Profit & Loss statements and Balance Sheets delivered on schedule, every month.",
      icon: "📈",
    },
    {
      title: "Payroll Categorization",
      description: "Properly categorize payroll entries from your payroll service for accurate financial reporting.",
      icon: "👥",
    },
    {
      title: "Year-End CPA Handoff",
      description: "Clean, organized books ready for your CPA to handle tax preparation efficiently.",
      icon: "🎯",
    },
  ]

  const faqs = [
    {
      question: "What do you need to get started?",
      answer:
        "Read-only access to your bank feeds and your QuickBooks Online file. We'll walk you through the setup process during our initial call.",
    },
    {
      question: "Do you work with payroll?",
      answer:
        "We categorize payroll entries provided by your payroll app (like Gusto, ADP, or Paychex). We don't process payroll directly, but we ensure it's properly recorded in your books.",
    },
    {
      question: "How often do I get reports?",
      answer:
        "Monthly Profit & Loss and Balance Sheet reports, delivered by the 15th of each month for the previous month's activity.",
    },
    {
      question: "What about data security?",
      answer:
        "We use read-only access whenever possible and follow bank-level security protocols. Your data is encrypted and we never store sensitive information locally.",
    },
    {
      question: "What's your pricing model?",
      answer:
        "Our pricing is based on monthly transaction volume and complexity. We provide transparent, fixed monthly rates with no surprise fees.",
    },
    {
      question: "How long does the initial setup take?",
      answer:
        "Most setups are completed within 1-2 weeks. For catch-up bookkeeping, we typically need 2-4 weeks depending on how far behind your books are.",
    },
    {
      question: "Do you handle sales tax?",
      answer:
        "We can set up sales tax tracking in QuickBooks Online and ensure proper categorization, but we recommend working with a tax professional for filing requirements.",
    },
    {
      question: "What if I need to switch from another bookkeeper?",
      answer:
        "We'll review your existing books, clean up any issues, and ensure a smooth transition. Most transitions are completed within 2-3 weeks.",
    },
  ]

  const pricingTiers = [
    {
      name: "Starter",
      transactions: "Up to 20 transactions/month",
      price: "$150",
      features: ["Monthly reconciliations", "Basic P&L and Balance Sheet", "Email support"],
    },
    {
      name: "Growth",
      transactions: "21-50 transactions/month",
      price: "$250",
      features: ["Monthly reconciliations", "Basic P&L and Balance Sheet", "Email support"],
    },
    {
      name: "Mid",
      transactions: "51-150 transactions/month",
      price: "$450",
      features: [
        "Everything in Starter",
        "Accounts payable/receivable",
        "Payroll categorization",
        "Priority support"
      ],
    },
    {
      name: "Scale",
      transactions: "151+ transactions/month",
      price: "Custom",
      features: [
        "Everything in Growth",
        "Custom reporting",
        "Dedicated bookkeeper",
        "Phone support"
      ],
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "QuickBooks Online Bookkeeping Services",
            description: "Professional remote bookkeeping services specializing in QuickBooks Online",
            provider: {
              "@type": "Organization",
              name: "Tallybee",
            },
            serviceType: "Bookkeeping Services",
            areaServed: "United States",
          }),
        }}
      />
      <Navbar />
      <main id="main-content">
        {/* Hero Section */}
        <Section className="pt-16 sm:pt-20 pb-8 sm:pb-12 relative overflow-hidden px-4 sm:px-6 lg:px-8" showGrid>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          >
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_L3pfcF4KLbLXtR6MlXGxLOliDPN5/uqEW858OAUkN4ith5EkpMY/public/videos/financial-data-analysis.mp4" type="video/mp4" />
          </video>
          <AnimatedBackground />

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <Badge className="mb-4 sm:mb-6" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mb-4 sm:mb-6">
                QuickBooks Online Bookkeeping Services
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                We focus on one thing and do it exceptionally well: remote bookkeeping in QuickBooks Online. Our
                specialized approach ensures your books are accurate, timely, and ready for tax season.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  asChild
                  variant="accent"
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto w-full sm:w-auto"
                >
                  <Link href="/schedule">Schedule a Call</Link>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto w-full sm:w-auto"
                >
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-0 -z-10">
                <Image
                  src="/img/accountant-calculator-work.jpg"
                  alt="Professional bookkeeping workspace"
                  width={600}
                  height={400}
                  className="object-cover opacity-30 rounded-2xl"
                />
              </div>
              <FloatingReports className="absolute top-0 left-0 animate-float-slow" />
              <FloatingCalculator className="absolute bottom-0 right-0 animate-float-medium" />
            </div>
          </div>
        </Section>

        {/* Services List */}
        <Section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-8 sm:mb-12 text-center">
              What's Included in Our Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl border-2 border-gray-100 hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section className="bg-gray-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-3 sm:mb-4">Transparent Pricing</h2>
              <p className="text-base sm:text-lg text-gray-600">Choose the plan that fits your business size</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`p-8 bg-white rounded-xl border-2 ${index === 1 ? "border-brand-blue shadow-lg scale-105" : "border-gray-100"} hover:shadow-xl transition-all duration-300`}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-brand-navy mb-2">{tier.name}</h3>
                    <p className="text-gray-600 mb-4">{tier.transactions}</p>
                    <div className="text-4xl font-bold text-brand-blue mb-2">{tier.price}</div>
                    {tier.price !== "Custom" && <p className="text-gray-500">/month</p>}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <svg
                          className="w-5 h-5 text-brand-amber mr-3 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button asChild variant={index === 1 ? "accent" : "secondary"} className="w-full">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-8 sm:mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-2 border-gray-100 rounded-xl px-6 hover:border-brand-blue/20 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-brand-navy hover:text-brand-blue">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="bg-brand-navy text-white px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to streamline your bookkeeping?</h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 text-blue-100">
              Let's discuss your specific needs and create a bookkeeping solution that works for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                asChild
                variant="accent"
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto w-full sm:w-auto"
              >
                <Link href="/schedule">Schedule a Call</Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto w-full sm:w-auto bg-white text-brand-navy hover:bg-gray-100"
              >
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
