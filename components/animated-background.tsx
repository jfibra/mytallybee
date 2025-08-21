"use client"

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-brand-blue/10 rounded-full animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-brand-amber/10 rounded-lg animate-float-medium rotate-45"></div>
      <div className="absolute bottom-40 left-20 w-20 h-20 bg-brand-navy/5 rounded-full animate-float-slow"></div>
      <div className="absolute bottom-20 right-10 w-8 h-8 bg-brand-blue/10 rounded-lg animate-float-fast"></div>

      {/* Grid pattern */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgb(0, 31, 63)" strokeWidth="0.5" opacity="0.1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  )
}

export function FloatingNumbers() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-32 left-1/4 text-brand-blue/20 text-6xl font-bold animate-float-slow">$</div>
      <div className="absolute top-64 right-1/3 text-brand-amber/20 text-4xl font-bold animate-float-medium">%</div>
      <div className="absolute bottom-48 left-1/3 text-brand-navy/20 text-5xl font-bold animate-float-slow">+</div>
      <div className="absolute bottom-32 right-1/4 text-brand-blue/20 text-3xl font-bold animate-float-fast">=</div>
    </div>
  )
}
