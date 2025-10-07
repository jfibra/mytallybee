"use client"

import { useState, useRef } from "react"
import { Section } from "@/components/section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { submitContactForm } from "@/app/actions/contact" // Import server action
import Link from "next/link"
import Image from "next/image"
import { CheckCircle, AlertCircle, Send, Mail, Phone, MapPin, Clock } from "lucide-react"
import { SEOHead } from "@/components/seo-head"

/**
 * Contact page with quote request form - Server Action + Nodemailer
 */
export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log('Form submit handler called')
    
    event.preventDefault()
    event.stopPropagation()
    
    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      const formData = new FormData(event.currentTarget)
      
      console.log('Calling server action with form data')
      
      // Call the server action
      const result = await submitContactForm(formData)
      
      console.log('Server action result:', result)
      setSubmitResult(result)

      // Reset form if successful
      if (result.success && formRef.current) {
        formRef.current.reset()
      }

    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitResult({
        success: false,
        message: 'An unexpected error occurred. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <SEOHead
        title="Contact MyTallyBee | Get a Quote | QuickBooks Online Bookkeeping"
        description="Get a personalized quote for QuickBooks Online bookkeeping services. Contact MyTallyBee to discuss your business needs. Free consultation available."
        canonical="/contact"
        openGraph={{
          title: "Contact MyTallyBee | Get a Quote for Bookkeeping Services",
          description: "Get a personalized quote for QuickBooks Online bookkeeping services. Free consultation available.",
          url: "https://mytallybee.com/contact",
          images: [
            {
              url: "/img/bookkeeper-phone-consultation.jpg",
              width: 1200,
              height: 630,
              alt: "Contact MyTallyBee for bookkeeping consultation",
            },
          ],
        }}
        twitter={{
          card: "summary_large_image",
          title: "Contact MyTallyBee | Get a Quote for Bookkeeping Services",
          description: "Get a personalized quote for QuickBooks Online bookkeeping services.",
          images: ["/img/bookkeeper-phone-consultation.jpg"],
        }}
      />
      
      <Navbar />
      <main id="main-content">
        {/* Hero Section */}
        <Section className="pt-20 pb-16 bg-gradient-to-br from-brand-navy to-brand-navy/90 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/img/mobile-bookkeeping-calculation.jpg"
              alt="Professional consultation background"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get Your Custom Quote</h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Tell us about your business and we'll provide a detailed proposal for your QuickBooks Online bookkeeping
              needs. Most quotes are delivered within 24 hours.
            </p>
          </div>
        </Section>

        {/* Contact Form Section */}
        <Section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div>
                <Card className="shadow-xl border-0 overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-brand-navy to-brand-navy/90 text-white">
                    <CardTitle className="text-2xl flex items-center">
                      <Send className="w-6 h-6 mr-3" />
                      Send Us a Message
                    </CardTitle>
                    <CardDescription className="text-blue-100">
                      Fill out the form below and we'll get back to you within 24 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 bg-white">
                    
                    {/* Success/Error Message */}
                    {submitResult && (
                      <div className={`mb-6 p-4 rounded-lg flex items-start ${
                        submitResult.success 
                          ? 'bg-green-50 text-green-800 border border-green-200' 
                          : 'bg-red-50 text-red-800 border border-red-200'
                      }`}>
                        {submitResult.success ? (
                          <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                        ) : (
                          <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                        )}
                        <span className="text-sm">{submitResult.message}</span>
                      </div>
                    )}

                    {/* Server Action Form */}
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="Your full name"
                            className="w-full border-gray-300 focus:border-brand-amber focus:ring-brand-amber"
                            disabled={isSubmitting}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="your@email.com"
                            className="w-full border-gray-300 focus:border-brand-amber focus:ring-brand-amber"
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="(555) 123-4567"
                            className="w-full border-gray-300 focus:border-brand-amber focus:ring-brand-amber"
                            disabled={isSubmitting}
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                            Company Name
                          </label>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            placeholder="Your company name"
                            className="w-full border-gray-300 focus:border-brand-amber focus:ring-brand-amber"
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          placeholder="Tell us about your bookkeeping needs, current QuickBooks setup, monthly transaction volume, or any specific questions..."
                          className="w-full resize-none border-gray-300 focus:border-brand-amber focus:ring-brand-amber"
                          disabled={isSubmitting}
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-brand-amber hover:bg-brand-amber/90 text-white py-3 text-lg font-semibold h-auto"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-3" />
                            Send Message
                          </>
                        )}
                      </Button>

                      <p className="text-sm text-gray-600 text-center">
                        * Required fields. We typically respond within 24 hours.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                
                {/* Contact Info Card */}
                <Card className="shadow-xl border-0 overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-brand-amber to-brand-amber/90 text-white">
                    <CardTitle className="text-2xl">Contact Information</CardTitle>
                    <CardDescription className="text-amber-100">
                      Multiple ways to reach our team
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 bg-white space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-brand-navy/10 p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-brand-navy" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Email</h3>
                        <p className="text-gray-600">ziy@mytallybee.com</p>
                        <p className="text-sm text-gray-500">We respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-brand-amber/10 p-3 rounded-lg">
                        <Phone className="w-6 h-6 text-brand-amber" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Phone</h3>
                        <p className="text-gray-600">Schedule a call</p>
                        <p className="text-sm text-gray-500">Free consultation available</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Service Area</h3>
                        <p className="text-gray-600">Remote services nationwide</p>
                        <p className="text-sm text-gray-500">Serving small businesses everywhere</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Response Time Card */}
                <Card className="shadow-xl border-0 overflow-hidden bg-gradient-to-br from-blue-50 to-amber-50">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <Clock className="w-6 h-6 text-brand-navy mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">What to Expect</h3>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        Response within 24 hours
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        Free consultation call
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        Custom quote for your needs
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        No obligation or pressure
                      </li>
                    </ul>
                  </CardContent>
                </Card>

              </div>
            </div>
          </div>
        </Section>

        {/* Alternative CTA */}
        <Section className="bg-white border-t">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Prefer to talk first?</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Schedule a free 30-minute consultation to discuss your needs before getting a formal quote.
            </p>
            <Button asChild size="lg" className="bg-brand-navy hover:bg-brand-navy/90 text-white text-lg px-8 py-4 h-auto">
              <Link href="/schedule">
                <Phone className="w-5 h-5 mr-2" />
                Schedule a Call Instead
              </Link>
            </Button>
          </div>
        </Section>

        {/* Added visible contact info for users who prefer email/phone */}
        <section className="max-w-3xl mx-auto mt-8">
          <div className="mt-8 bg-gray-50 p-4 rounded-md">
            <h3 className="text-lg font-semibold text-brand-navy mb-2">Prefer to contact us directly?</h3>
            <p className="text-sm text-gray-700">
              Email: <a href="mailto:ziy@mytallybee.com" className="text-brand-amber underline">ziy@mytallybee.com</a><br />
              Phone: <a href="tel:+12138683048" className="text-brand-amber underline">(213) 868-3048</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
