import { Section } from "@/components/section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About MyTallyBee | Certified QuickBooks ProAdvisor | Remote Bookkeeping",
  description:
    "Learn about MyTallyBee's mission to provide accurate, clear, and consistent QuickBooks Online bookkeeping services. Certified QuickBooks ProAdvisor with 98% audit-ready clients.",
  keywords: "about MyTallyBee, QuickBooks ProAdvisor, remote bookkeeping team, small business accounting, certified bookkeeper",
  openGraph: {
    title: "About MyTallyBee | Certified QuickBooks ProAdvisor",
    description:
      "Learn about MyTallyBee's mission to provide accurate, clear, and consistent QuickBooks Online bookkeeping services.",
    url: "https://mytallybee.com/about",
    siteName: "MyTallyBee",
    type: "website",
    images: [
      {
        url: "/img/team-bookkeeping-analysis.jpg",
        width: 1200,
        height: 630,
        alt: "MyTallyBee team providing professional bookkeeping services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About MyTallyBee | Certified QuickBooks ProAdvisor",
    description:
      "Learn about MyTallyBee's mission to provide accurate, clear, and consistent QuickBooks Online bookkeeping services.",
    images: ["/img/team-bookkeeping-analysis.jpg"],
  },
}

/**
 * About page with company story, principles, and team information
 */
export default function AboutPage() {
  const principles = [
    {
      title: "Accuracy",
      description:
        "Every transaction is properly categorized, every reconciliation is thorough, and every report reflects the true financial position of your business.",
    },
    {
      title: "Clarity",
      description:
        "We communicate in plain English, provide clear reports, and ensure you understand your financial position without confusion or jargon.",
    },
    {
      title: "Consistency",
      description:
        "Reliable monthly delivery, standardized processes, and dependable service you can count on month after month.",
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Tallybee",
            description:
              "Learn about Tallybee's mission to provide accurate, clear, and consistent QuickBooks Online bookkeeping services",
            mainEntity: {
              "@type": "Organization",
              name: "Tallybee",
              description: "Professional QuickBooks Online bookkeeping services for small businesses",
            },
          }),
        }}
      />
      <Navbar />
      <main id="main-content">
        {/* Hero Section */}
        <Section className="pt-16 sm:pt-20 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 relative" showGrid>
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/img/bookkeeper-services-portfolio.jpg"
              alt="Professional bookkeeping services"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mb-4 sm:mb-6">Why MyTallyBee?</h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              We believe small business owners should spend their time growing their business, not wrestling with
              bookkeeping software.
            </p>
          </div>
        </Section>

        {/* Story Section */}
        <Section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-4 sm:mb-6">Our Story</h2>
                <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                  <p>
                    At MyTallyBee.com (Pryime, Inc), our mission is to transform financial complexity into clarity. We were founded by Ziyadah Alease ("Zee"), a Certified QuickBooks ProAdvisor with over seven years of strategic experience in accounting, finance management, and multi-entity bookkeeping.
                  </p>
                  <p>
                    Zee is known for her precision and strategic approach, having helped businesses streamline financial processes and gain clear, actionable insights into their operations.
                  </p>
                  <p>
                    Together, she and her small team provide professional bookkeeping and accounting services designed not just to keep the books accurate, but to save you time, ensure full compliance, and fuel smarter business decisions. We deliver the reliability and expertise your business deserves.
                  </p>
                </div>
              </div>
              <div className="flex justify-center relative">
                <div className="relative">
                  <Image
                    src="/img/ziyadah.jpeg"
                    alt="Ziyadah Alease (Zee), Certified QuickBooks ProAdvisor and Founder of MyTallyBee"
                    width={400}
                    height={500}
                    className="rounded-2xl shadow-lg object-cover"
                  />
                  <div className="absolute -bottom-4 -right-4">
                    <Badge className="text-base sm:text-lg px-4 sm:px-6 py-3 sm:py-4 bg-white shadow-lg" />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional story content */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="lg:order-2">
                <h3 className="text-xl sm:text-2xl font-bold text-brand-navy mb-4">Our Approach</h3>
                <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                  <p>
                    MyTallyBee was founded on a simple observation: most small businesses struggle with bookkeeping not
                    because it's inherently difficult, but because it requires specialized knowledge and consistent
                    attention to detail.
                  </p>
                  <p>
                    By focusing exclusively on QuickBooks Online, we've developed streamlined processes that deliver
                    exceptional results. We're not trying to be everything to everyone – we're the specialists you call
                    when you want your QuickBooks done right.
                  </p>
                </div>
              </div>
              <div className="lg:order-1 flex justify-center relative">
                <Image
                  src="/img/woman-laptop-financial-review.jpg"
                  alt="Professional bookkeeper reviewing financial data"
                  width={400}
                  height={300}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Principles Section */}
        <Section className="bg-gray-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-6 sm:mb-8 text-center">Our Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {principles.map((principle, index) => (
                <div key={index} className="text-center p-4 sm:p-6 bg-white rounded-xl border border-gray-100">
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3 sm:mb-4">{principle.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Team Section */}
        <Section className="px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 opacity-5">
            <Image
              src="/img/team-bookkeeping-analysis.jpg"
              alt="Team collaboration background"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-4 sm:mb-6">
              Expert Bookkeeping, Personal Service
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              MyTallyBee combines the expertise of seasoned bookkeeping professionals with the personal attention that
              only comes from a dedicated, specialized service. When you work with us, you're not just another account
              number – you're a valued partner in building something great.
            </p>
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="p-4 sm:p-6 bg-brand-blue/10 rounded-xl border border-brand-blue/20 max-w-md relative">
                <div className="absolute top-4 right-4">
                  <Image
                    src="/img/data-analysis-pencil.jpg"
                    alt="Professional certification"
                    width={60}
                    height={60}
                    className="rounded-lg opacity-20"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-brand-navy mb-2">
                  Certified QuickBooks ProAdvisor
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Advanced certification in QuickBooks Online with ongoing training to stay current with the latest
                  features and best practices.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="bg-brand-navy text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          >
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_L3pfcF4KLbLXtR6MlXGxLOliDPN5/b5jWKCOtBWcTfQNOvl4g9p/public/videos/team-collaboration-tablet.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Ready to experience the MyTallyBee difference?
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90">
              Let's talk about how we can bring accuracy, clarity, and consistency to your bookkeeping.
            </p>
            <Button
              asChild
              variant="accent"
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto w-full sm:w-auto"
            >
              <Link href="/schedule">Schedule Your Consultation</Link>
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
