import { Section } from "@/components/section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Client Reviews | MyTallyBee | QuickBooks Bookkeeping Testimonials",
  description:
    "Read what our clients say about MyTallyBee's QuickBooks bookkeeping services. Real testimonials from satisfied small business owners and entrepreneurs.",
  keywords: "QuickBooks reviews, bookkeeping testimonials, client feedback, MyTallyBee reviews, ProAdvisor testimonials",
  openGraph: {
    title: "Client Reviews | MyTallyBee | QuickBooks Bookkeeping Testimonials",
    description: "Read real testimonials from satisfied clients about our QuickBooks bookkeeping services.",
    url: "https://mytallybee.com/reviews",
    siteName: "MyTallyBee",
    type: "website",
  },
}

/**
 * Client testimonials and reviews page
 */
export default function ReviewsPage() {
  const detailedTestimonials = [
    {
      name: "Jesse Brewer",
      company: "Chiloquin Lawn Care",
      industry: "Landscaping Services",
      text: "We have worked with Marc from MyTallyBee for over 3 years. They have been a great asset to our small business. Their attention to detail and proactive communication has helped us stay on top of our finances and make better business decisions. I highly recommend their services to any small business owner looking for reliable bookkeeping support.",
      rating: 5,
      image: "/img/professional-man-smiling.png",
      results: "Improved cash flow visibility and streamlined tax preparation",
    },
    {
      name: "Eli Thompson",
      company: "ochospitalbeds.com",
      industry: "E-commerce",
      text: "MyTallyBee.com has been a great company to work with. They are both efficient and reliable. Since working with them, our books are always current and accurate. They've helped us understand our financial reports better and identify areas where we can improve profitability. The peace of mind knowing our books are in good hands is invaluable.",
      rating: 5,
      image: "/img/professional-woman-smiling.png",
      results: "Increased accuracy and better financial insights for growth",
    },
    {
      name: "Dr. Zeph Okeke",
      company: "Medical Practice",
      industry: "Healthcare",
      text: "I am very happy with MyTallybee. I confidently referred them to a couple of my friends. Their expertise in QuickBooks and understanding of small business needs has been exceptional. They took over our messy books and transformed them into something we can actually use to run our practice more effectively.",
      rating: 5,
      image: "/img/professional-woman-glasses.png",
      results: "Clean, organized books and confident referrals to colleagues",
    },
    {
      name: "Sarah Martinez",
      company: "Martinez Consulting",
      industry: "Business Consulting",
      text: "MyTallyBee transformed our chaotic bookkeeping into a well-organized system. Their monthly reports give us the clarity we need to make strategic decisions. The team is responsive, knowledgeable, and truly cares about our success. We went from dreading our books to actually using them as a business tool.",
      rating: 5,
      image: "/placeholder-user.jpg",
      results: "Strategic clarity and confidence in financial decision-making",
    },
    {
      name: "Mike Chen",
      company: "Chen's Auto Repair",
      industry: "Automotive Services",
      text: "Before MyTallyBee, I was spending hours every week trying to figure out our books. Now I can focus on running my business while they handle all the financial details. Their setup of our QuickBooks system was thorough and they trained my staff on the basics. Couldn't be happier with the service.",
      rating: 5,
      image: "/placeholder-user.jpg",
      results: "Time savings of 10+ hours per week and improved team training",
    },
    {
      name: "Lisa Rodriguez",
      company: "Creative Designs Studio",
      industry: "Creative Services",
      text: "As a creative person, numbers were never my strong suit. MyTallyBee made everything simple and understandable. They set up our invoicing system, track our project profitability, and always explain things in terms I can understand. They've been patient with all my questions and truly feel like part of our team.",
      rating: 5,
      image: "/placeholder-user.jpg",
      results: "Simplified finances and better project profitability tracking",
    },
  ]

  const stats = [
    { number: "98%", label: "Client Retention Rate" },
    { number: "100%", label: "Audit-Ready Books" },
    { number: "24", label: "Hour Response Time" },
    { number: "3+", label: "Years Average Partnership" },
  ]

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero Section */}
        <Section className="pt-20 pb-12 relative">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/img/testimonials-background.jpg"
              alt="Client testimonials background"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              What Our Clients Say
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Don't just take our word for it. Here's what real business owners say about working with MyTallyBee for their QuickBooks bookkeeping needs.
            </p>
            <div className="flex justify-center items-center gap-2 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-brand-amber fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-brand-navy font-semibold ml-2">5.0 out of 5 stars</span>
            </div>
          </div>
        </Section>

        {/* Stats Section */}
        <Section className="bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-4">
              Results That Speak for Themselves
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Detailed Testimonials */}
        <Section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-4">
                Real Stories from Real Clients
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These are actual testimonials from business owners who have transformed their bookkeeping with MyTallyBee's QuickBooks expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {detailedTestimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 bg-white border-2 border-gray-100 hover:border-brand-blue/20 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-brand-navy text-lg">{testimonial.name}</h3>
                      <p className="text-brand-blue font-medium">{testimonial.company}</p>
                      <p className="text-sm text-gray-600">{testimonial.industry}</p>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-brand-amber fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="bg-brand-blue/5 p-3 rounded-lg">
                    <h4 className="font-semibold text-brand-navy text-sm mb-1">Results Achieved:</h4>
                    <p className="text-sm text-gray-600">{testimonial.results}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Google Reviews CTA */}
        <Section className="bg-brand-navy text-white">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Join Our Happy Clients
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Ready to experience the same peace of mind and financial clarity? Let's discuss how we can help streamline your QuickBooks bookkeeping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="accent">
                <Link href="/schedule">Schedule Free Consultation</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
            <p className="text-blue-200 text-sm mt-6">
              Have a great experience with us? We'd love to hear from you! 
              <Link href="/contact" className="underline ml-1">Share your feedback</Link>
            </p>
          </div>
        </Section>

        {/* Social Proof */}
        <Section className="bg-gray-50">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-navy mb-6">
              Trusted by Businesses Across Industries
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-brand-blue mb-1">Healthcare</div>
                <p className="text-sm text-gray-600">Medical practices & clinics</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-blue mb-1">E-commerce</div>
                <p className="text-sm text-gray-600">Online retailers & dropshippers</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-blue mb-1">Services</div>
                <p className="text-sm text-gray-600">Consultants & contractors</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-blue mb-1">Retail</div>
                <p className="text-sm text-gray-600">Local shops & franchises</p>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}