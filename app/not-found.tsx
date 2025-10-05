import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BackgroundGrid } from "@/components/background-grid"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-navy via-brand-blue to-brand-navy relative overflow-hidden">
      <BackgroundGrid />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="mb-8">
          <img
            src="/mytallybee.png"
            alt="MyTallyBee"
            width={120}
            height={80}
            className="mx-auto mb-6 animate-bounce"
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-amber mb-6">Oops! Page Not Found</h2>
        <p className="text-lg text-white/80 mb-8 max-w-md">
          The page you're looking for seems to have flown away like a busy bee. Let's get you back to where you need to
          be!
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-brand-amber text-brand-navy hover:bg-brand-amber/90">
            <Link href="/">Return Home</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-brand-navy bg-transparent"
          >
            <Link href="/services">View Services</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-brand-navy bg-transparent"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        <div className="mt-12 text-white/60">
          <p className="text-sm">
            Need help? Call us at{" "}
            <a href="tel:+1234567890" className="text-brand-amber hover:underline">
              (123) 456-7890
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
