"use client"

import React, { useEffect, useRef } from "react"

type Props = {
  children: React.ReactNode
  direction?: "left" | "right" | "up" | "down"
  className?: string
  delay?: number // milliseconds
  rootMargin?: string
  threshold?: number
}

/**
 * Wrap sections with <ScrollReveal direction="left" delay={120}>...</ScrollReveal>
 */
export default function ScrollReveal({
  children,
  direction = "up",
  className = "",
  delay = 0,
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.15,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.setProperty("--reveal-delay", `${delay}ms`)
            el.classList.add("revealed")
            observer.unobserve(el)
          }
        })
      },
      { root: null, rootMargin, threshold }
    )

    // initial attributes
    el.setAttribute("data-direction", direction)
    el.classList.add("reveal")
    observer.observe(el)

    return () => observer.disconnect()
  }, [direction, delay, rootMargin, threshold])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
