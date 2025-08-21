"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { submitContactForm } from "@/lib/actions"
import { CheckCircle, AlertCircle } from "lucide-react"

interface FormData {
  name: string
  email: string
  company: string
  transactionVolume: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  transactionVolume?: string
  message?: string
  general?: string
}

/**
 * Contact form component with validation and server action submission
 */
export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    transactionVolume: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const transactionVolumeOptions = [
    { value: "", label: "Select transaction volume" },
    { value: "0-50", label: "0-50 transactions/month" },
    { value: "51-150", label: "51-150 transactions/month" },
    { value: "151-300", label: "151-300 transactions/month" },
    { value: "301-500", label: "301-500 transactions/month" },
    { value: "500+", label: "500+ transactions/month" },
  ]

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.transactionVolume) {
      newErrors.transactionVolume = "Please select your monthly transaction volume"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell us about your bookkeeping needs"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please provide more details (at least 10 characters)"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        setIsSubmitted(true)
      } else {
        setErrors({ general: result.error || "Something went wrong. Please try again." })
      }
    } catch (error) {
      setErrors({ general: "Something went wrong. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  // Success state
  if (isSubmitted) {
    return (
      <div className="text-center p-8 bg-green-50 rounded-xl border border-green-200">
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-green-800 mb-2">Thank you for your inquiry!</h2>
        <p className="text-green-700 mb-4">
          We've received your request and will get back to you with a detailed quote within 24 hours.
        </p>
        <p className="text-sm text-green-600">
          In the meantime, feel free to{" "}
          <a href="/schedule" className="underline hover:no-underline">
            schedule a call
          </a>{" "}
          if you'd like to discuss your needs directly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-brand-navy mb-6">Tell us about your business</h2>

        {/* General Error */}
        {errors.general && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-red-700">{errors.general}</p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-brand-navy mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors ${
                errors.name ? "border-red-300 bg-red-50" : "border-gray-300"
              }`}
              placeholder="Your full name"
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-600">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-navy mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors ${
                errors.email ? "border-red-300 bg-red-50" : "border-gray-300"
              }`}
              placeholder="your@email.com"
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-600">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Company */}
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-brand-navy mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors"
              placeholder="Your business name (optional)"
            />
          </div>

          {/* Transaction Volume */}
          <div>
            <label htmlFor="transactionVolume" className="block text-sm font-medium text-brand-navy mb-2">
              Monthly Transaction Volume *
            </label>
            <select
              id="transactionVolume"
              value={formData.transactionVolume}
              onChange={(e) => handleInputChange("transactionVolume", e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors ${
                errors.transactionVolume ? "border-red-300 bg-red-50" : "border-gray-300"
              }`}
              aria-describedby={errors.transactionVolume ? "volume-error" : undefined}
            >
              {transactionVolumeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.transactionVolume && (
              <p id="volume-error" className="mt-1 text-sm text-red-600">
                {errors.transactionVolume}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-brand-navy mb-2">
            Tell us about your bookkeeping needs *
          </label>
          <textarea
            id="message"
            rows={5}
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors resize-vertical ${
              errors.message ? "border-red-300 bg-red-50" : "border-gray-300"
            }`}
            placeholder="Please describe your current bookkeeping situation, any specific challenges you're facing, and what you're looking for in a bookkeeping service..."
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-600">
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            variant="accent"
            size="lg"
            className="w-full text-lg py-4 h-auto"
          >
            {isSubmitting ? "Sending..." : "Get My Quote"}
          </Button>
        </div>

        <p className="text-sm text-gray-500 text-center mt-4">
          We typically respond within 24 hours with a detailed proposal.
        </p>
      </div>
    </form>
  )
}
