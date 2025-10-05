import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  noindex?: boolean
}

/**
 * Reusable SEO head component for pages that need custom metadata
 */
export function SEOHead({
  title = "Tallybee - Remote QuickBooks Bookkeeping",
  description = "Remote QuickBooks Online bookkeeping service. Clear, accurate, on time.",
  canonical,
  ogImage = "/og-image.png",
  noindex = false,
}: SEOHeadProps) {
  const fullTitle = title.includes("Tallybee") ? title : `${title} | Tallybee`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Tallybee",
            description: "Remote QuickBooks Online bookkeeping service",
            url: process.env.NEXT_PUBLIC_SITE_URL,
            logo: `${process.env.NEXT_PUBLIC_SITE_URL}/mytallybee.png`,
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              availableLanguage: "English",
            },
            sameAs: [],
          }),
        }}
      />
    </Head>
  )
}
