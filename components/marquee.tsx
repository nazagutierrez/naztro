"use client"

import { useEffect, useRef, useState } from "react"

interface MarqueeProps {
  children: React.ReactNode
  speed?: number
  direction?: "left" | "right"
  className?: string
  pauseOnHover?: boolean
}

export function Marquee({
  children,
  speed = 50,
  direction = "left",
  className = "",
  pauseOnHover = false,
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      // Duplicate items for seamless loop
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      setStart(true)
    }
  }, [])

  // Calculate animation duration based on speed
  const duration = 100 / (speed / 50)

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden ${className}`}
      style={{
        maskImage: "none",
        WebkitMaskImage: "none",
      }}
    >
      <div
        ref={scrollerRef}
        className={`flex w-max gap-8 ${start ? "animate-marquee" : ""} ${
          pauseOnHover ? "hover:[animation-play-state:paused]" : ""
        }`}
        style={{
          animationDirection: direction === "left" ? "normal" : "reverse",
          animationDuration: `${duration}s`,
        }}
      >
        {children}
      </div>
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}
