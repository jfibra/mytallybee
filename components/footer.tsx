import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react"

/**
 * Professional site footer with comprehensive links and contact info
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-navy text-white relative overflow-hidden" role="contentinfo">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="container-width py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/mytallybee-logo.png"
                alt="MyTallyBee"
                width={150}
                height={50}
                className="h-20 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-blue-100 mb-6 max-w-md leading-relaxed">
              Professional remote bookkeeping services specializing in QuickBooks Online. We help small businesses
              maintain accurate financial records with transparency and expertise.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-blue-100">
                <Mail size={16} />
                <span>hello@mytallybee.com</span>
              </div>
              <div className="flex items-center gap-3 text-blue-100">
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-blue-100">
                <MapPin size={16} />
                <span>Remote Services Nationwide</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white transition-colors">
                  QuickBooks Setup
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white transition-colors">
                  Monthly Bookkeeping
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white transition-colors">
                  Financial Reports
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white transition-colors">
                  Tax Preparation Support
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white transition-colors">
                  Cleanup Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-blue-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-blue-100 hover:text-white transition-colors">
                  Schedule Consultation
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-blue-100 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-blue-100 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-blue-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-blue-100 text-sm">
              © {currentYear} MyTallyBee. All rights reserved. | QuickBooks Online ProAdvisor Certified
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/company/mytallybee"
                className="p-2 bg-blue-800 hover:bg-blue-700 rounded-lg transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://twitter.com/mytallybee"
                className="p-2 bg-blue-800 hover:bg-blue-700 rounded-lg transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
