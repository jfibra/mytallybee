import { NextResponse } from "next/server"

/**
 * Generate robots.txt file
 */
export function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/sitemap.xml

# Disallow admin or sensitive areas (none currently)
# Disallow: /admin
`

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
