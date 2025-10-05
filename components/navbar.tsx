"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Main navigation component with responsive mobile menu
 */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-width">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center" aria-label="MyTallyBee home">
            <Image
              src="/mytallybee-logo.png"
              alt="MyTallyBee"
              width={150}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-brand-navy hover:text-brand-blue transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-brand-amber hover:bg-brand-blue text-brand-navy hover:text-white transition-all duration-200"
            >
              <Link href="/schedule">Schedule a Call</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-brand-navy hover:text-brand-blue transition-colors"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="py-4 space-y-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-brand-navy hover:text-brand-blue transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="w-full bg-brand-amber hover:bg-brand-blue text-brand-navy hover:text-white transition-all duration-200"
            >
              <Link href="/schedule" onClick={() => setIsOpen(false)}>
                Schedule a Call
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
