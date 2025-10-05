import type { MetadataRoute } from "next"

/**
 * Generate comprehensive sitemap.xml for MyTallyBee
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mytallybee.com"
  const lastModified = new Date()

  return [
    // Homepage - highest priority
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Core service pages - high priority
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/schedule`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // About page - important for trust
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Blog page - good for SEO
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    // FAQ page - helpful for users
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Reviews page - builds trust
    {
      url: `${baseUrl}/reviews`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Legal pages - lower priority but necessary
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]
}
