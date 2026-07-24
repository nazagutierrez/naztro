"use client"

import * as React from "react"
import { motion, AnimatePresence, Transition } from "framer-motion"

export interface MenuBarItem {
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactNode
  label: string
  href: string
}

interface MenuBarProps extends React.HTMLAttributes<HTMLDivElement> {
  items: MenuBarItem[]
}

const springConfig: Transition<any> | undefined = {
  duration: 0.3,
  ease: "easeInOut"
}

export function MenuBar({ items, className, ...props }: MenuBarProps) {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null)
  const menuRef = React.useRef<HTMLDivElement>(null)
  const [tooltipPosition, setTooltipPosition] = React.useState({ left: 0, width: 0 })
  const tooltipRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (activeIndex !== null && menuRef.current && tooltipRef.current) {
      const menuItem = menuRef.current.querySelectorAll('a')[activeIndex] as HTMLElement
      const menuRect = menuRef.current.getBoundingClientRect()
      const itemRect = menuItem.getBoundingClientRect()
      const tooltipRect = tooltipRef.current.getBoundingClientRect()
    
      const left = itemRect.left - menuRect.left + (itemRect.width - tooltipRect.width) / 2
    
      setTooltipPosition({
        left: Math.max(0, Math.min(left, menuRect.width - tooltipRect.width)),
        width: tooltipRect.width
      })
    }
  }, [activeIndex])

  return (
    <div className={`relative ${className}`} {...props}>
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={springConfig}
            className="absolute left-0 right-0 -top-[32px] pointer-events-none z-50"
          >
            <motion.div
              ref={tooltipRef}
              className="h-7 px-3 rounded-lg inline-flex justify-center items-center overflow-hidden bg-background/95 backdrop-blur border border-sky-700 shadow-[0_0_0_1px_rgba(0,0,0,0.08)] dark:border-border/50 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
              initial={{ x: tooltipPosition.left }}
              animate={{ x: tooltipPosition.left }}
              transition={springConfig}
              style={{ width: "auto" }}
            >
              <p className="text-[13px] font-medium leading-tight whitespace-nowrap">
                {items[activeIndex].label}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div 
        ref={menuRef}
        className="h-11 px-3 inline-flex justify-center items-center gap-[8px] overflow-hidden z-10 rounded-full bg-background/95 backdrop-blur border border-sky-700 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_8px_16px_-4px_rgba(0,0,0,0.1)] dark:border-border/50 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_16px_-4px_rgba(0,0,0,0.2)]"
      >
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <a 
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 px-3 py-1 group rounded-full flex justify-center items-center gap-2 hover:bg-muted/80 transition-colors cursor-pointer"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="flex justify-center items-center">
                <div className="w-[18px] h-[18px] flex justify-center items-center overflow-hidden group-hover:scale-110 group-hover:text-sky-500 transition-all duration-300 will-change-transform">
                  <item.icon className="w-full h-full" />
                </div>
              </div>
              <span className="sr-only">{item.label}</span>
            </a>
            <div className="h-4 w-px bg-white/30 rounded-full last:hidden"></div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}