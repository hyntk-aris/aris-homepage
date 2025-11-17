"use client"

import { useEffect, useRef, useState } from "react"

interface NumberTickerProps {
  value: number
  direction?: "up" | "down"
  delay?: number
  decimalPlaces?: number
}

export function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  decimalPlaces = 0,
}: NumberTickerProps) {
  const [count, setCount] = useState<number>(direction === "down" ? value : 0)
  const containerRef = useRef<HTMLSpanElement>(null)
  const hasStarted = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true
          const timer = setTimeout(() => {
            let start = direction === "down" ? value : 0
            const end = direction === "down" ? 0 : value
            const duration = 1000 // 1 second animation
            const startTime = Date.now()

            const animate = () => {
              const now = Date.now()
              const elapsed = now - startTime
              const progress = Math.min(elapsed / duration, 1)

              const current = direction === "down" 
                ? start - (start - end) * progress
                : start + (end - start) * progress

              setCount(Number(current.toFixed(decimalPlaces)))

              if (progress < 1) {
                requestAnimationFrame(animate)
              }
            }

            requestAnimationFrame(animate)
          }, delay)

          return () => clearTimeout(timer)
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [value, direction, delay, decimalPlaces])

  return <span ref={containerRef}>{count.toFixed(decimalPlaces)}</span>
}
