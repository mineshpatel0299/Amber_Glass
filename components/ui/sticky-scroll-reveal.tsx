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
    const cardsBreakpoints = content.map((_, index) => index / cardLength)
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint)
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index
      }
      return acc
    }, 0)
    setActiveCard(closestBreakpointIndex)
  })

  const backgroundColors = ["#0f172a", "#000000", "#171717"]

  useEffect(() => {
    // Background color changes handled by motion.div animate prop
  }, [activeCard])

  return (
    <motion.div
      // animate={{
      //   backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      // }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      className="relative flex h-[100svh] justify-center space-x-10 overflow-y-auto rounded-md p-10"
      ref={ref}
    >
      {/* Left Side Content */}
      <div className="relative flex w-full items-start px-4">
        <div className="w-full ">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20 min-h-screen">
              <motion.div
                initial={{ opacity: activeCard === index ? 1 : 0.3 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h2 className="text-6xl font-bold text-black">{item.title}</motion.h2>
                <motion.p className="text-lg mt-10 max-w-sm text-black">{item.description}</motion.p>
              </motion.div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      {/* Right Side Sticky Content */}
      <div className={cn("sticky top-10 hidden h-[600px] w-[900px] rounded-3xl aspect-auto overflow-hidden lg:block", contentClassName)}>
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
    </motion.div>
  )
}
