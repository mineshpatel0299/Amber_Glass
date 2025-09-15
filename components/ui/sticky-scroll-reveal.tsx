"use client"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { useMotionValueEvent, useScroll, motion } from "motion/react"
import { cn } from "@/lib/utils"

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string
    description: string
    content?: React.ReactNode | any
  }[]
  contentClassName?: string
}) => {
  const [activeCard, setActiveCard] = useState(0)
  const ref = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  })

  const cardLength = content.length

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => {
      // Create more evenly distributed breakpoints
      if (index === 0) return 0.1 // First section starts early
      if (index === cardLength - 1) return 0.9 // Last section ends later
      return (index + 0.3) / cardLength // Middle sections
    })

    // Find the closest breakpoint
    let closestBreakpointIndex = 0
    let minDistance = Math.abs(latest - cardsBreakpoints[0])

    cardsBreakpoints.forEach((breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint)
      if (distance < minDistance) {
        minDistance = distance
        closestBreakpointIndex = index
      }
    })

    // Ensure we show the last section when scroll is near the end
    if (latest > 0.85) {
      closestBreakpointIndex = cardLength - 1
    }

    setActiveCard(closestBreakpointIndex)
  })


  return (
    <motion.div
      transition={{ duration: 0.9, ease: "easeInOut" }}
      className="relative flex h-screen justify-center space-x-10 overflow-y-auto rounded-md px-5 py-0 lg:px-20"
      ref={ref}
      style={{
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
      }}
    >
      <div className="h-[20vh]" />
      {/* Left Side Content */}
      <div className="relative flex w-full items-start px-4">
        <div className="w-full">
          
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="flex h-screen items-center justify-start"
              style={{
                scrollSnapAlign: "center",
                scrollSnapStop: "always",
              }}
            >
              <motion.div
                initial={{ opacity: activeCard === index ? 1 : 0.3 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-2xl"
              >
                <motion.h2 className="text-6xl font-bold text-foreground">{item.title}</motion.h2>
                <motion.p className="text-lg mt-10 max-w-sm text-muted-foreground">{item.description}</motion.p>
              </motion.div>
            </div>
          ))}
     
        </div>
      </div>

      {/* Right Side Sticky Content */}
      <div
        className={cn(
          "sticky top-1/2 -translate-y-1/2 hidden h-[60vh] w-full rounded-3xl aspect-auto overflow-hidden lg:block",
          contentClassName,
        )}
      >
        <div className="relative h-full w-full">
          {content.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: "100%" }}
              animate={{
                y: activeCard >= index ? "0%" : "100%",
                zIndex: index,
              }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="absolute inset-0 h-full w-full"
            >
              {item.content ?? null}
            </motion.div>
          ))}
        </div>
      </div>
           <div className="h-[80vh]" />
    </motion.div>
  )
}
