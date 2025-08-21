import Script from "next/script"

interface StructuredDataProps {
  type?: "organization" | "service" | "webpage" | "article"
  data?: Record<string, any>
}

export function StructuredData({ type = "organization", data = {} }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
    }

    switch (type) {
      case "organization":
        return {
          ...baseData,
          "@type": "Organization",
          name: "Tallybee",
          description: "Professional QuickBooks Online bookkeeping services for small businesses",
          url: "https://tallybee.vercel.app",
          logo: "https://tallybee.vercel.app/favicon-192.png",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-555-TALLYBEE",
            contactType: "customer service",
            availableLanguage: "English",
          },
          address: {
            "@type": "PostalAddress",
            addressCountry: "US",
          },
          sameAs: ["https://www.linkedin.com/company/tallybee", "https://twitter.com/tallybee"],
          serviceArea: {
            "@type": "Country",
            name: "United States",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Bookkeeping Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "QuickBooks Online Bookkeeping",
                  description: "Professional bookkeeping services using QuickBooks Online",
                },
              },
            ],
          },
          ...data,
        }

      case "service":
        return {
          ...baseData,
          "@type": "Service",
          name: "QuickBooks Online Bookkeeping",
          description: "Professional bookkeeping services for small businesses using QuickBooks Online",
          provider: {
            "@type": "Organization",
            name: "Tallybee",
          },
          serviceType: "Bookkeeping",
          areaServed: "United States",
          ...data,
        }

      case "webpage":
        return {
          ...baseData,
          "@type": "WebPage",
          name: data.title || "Tallybee - QuickBooks Online Bookkeeping",
          description: data.description || "Professional QuickBooks Online bookkeeping services",
          url: data.url || "https://tallybee.vercel.app",
          isPartOf: {
            "@type": "WebSite",
            name: "Tallybee",
            url: "https://tallybee.vercel.app",
          },
          ...data,
        }

      default:
        return { ...baseData, ...data }
    }
  }

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  )
}
