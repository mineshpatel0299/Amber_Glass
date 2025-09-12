"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface StoryItem {
  id: number
  image: string
  title: string
  description: string
}

const storyContent: StoryItem[] = [
  {
    id: 1,
    image: "/Ascroll4.jpeg",
    title: "WHO ARE WE, REALLY?",
    description:
      "We’re not just about glass films.We’re about transforming blank spaces into bold statements.Welcome to Amber Glass India — where your glass tells a story.",
  },
  {
    id: 2,
    image: "/AScroll5.jpeg",
    title: "WHAT DO WE DO?",
    description: `
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Aesthetic films</li>
        <li>Privacy and safety</li>
        <li>Heat and glare control</li>
        <li>Visual branding</li>
      </ul>
    `,
  },
  {
    id: 3,
    image: "/Ascroll6.jpeg",
    title: "WHY WE EXIST?",
    description:
      "Because space isn’t just space.It’s where stories are told, dreams are lived, and memories are made. And your environment should reflect that beauty — without compromise.",
  },
  {
    id: 4,
    image: "/AScroll7.jpg",
    title: "WHAT DO WE SERVE?",
    description:
      "Homeowners, Gym & Studio Owners, Interior Designers, Wedding Planners, Architects, Photographers …and you.",
  },
]

export default function ScrollAnimatedStory() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { top, height } = containerRef.current.getBoundingClientRect()
        const progress = Math.max(0, Math.min(1, -top / (height - window.innerHeight)))
        setScrollProgress(progress)

        const numItems = storyContent.length

        const easedProgress = progress * progress * (3 - 2 * progress) // Smoothstep function

        if (easedProgress >= 0.5) {
          setCurrentStoryIndex(numItems - 1)
        } else {
          const adjustedProgress = easedProgress / 0.5
          const newIndex = Math.floor(adjustedProgress * (numItems - 1))
          setCurrentStoryIndex(Math.min(newIndex, numItems - 2))
        }
      }
    }

    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    return () => window.removeEventListener("scroll", throttledScroll)
  }, [])

  const currentStory = storyContent[currentStoryIndex] || storyContent[0]
  const nextStory = storyContent[currentStoryIndex + 1] || storyContent[currentStoryIndex]

  const sliceProgress = Math.min(100, Math.max(0, scrollProgress * 100))
  const currentImageHeight = Math.max(0, 100 - sliceProgress)

  return (
    <div className="relative h-[500vh] bg-white" ref={containerRef}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          <div className="relative z-10 p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStory.id}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                  staggerChildren: 0.15,
                }}
              >
                <motion.h2
                  className="text-6xl lg:text-7xl font-bold text-gray-800 mb-12 leading-tight"
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1.0, 
                    delay: 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {currentStory.title}
                </motion.h2>
                <motion.div
                  className="text-2xl text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: currentStory.description }}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1.0,
                    delay: 0.25,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image Section */}
          <div className="relative w-full h-[600px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0">
              <Image
                src={nextStory.image || "/placeholder.svg"}
                alt={nextStory.title}
                fill
                style={{ objectFit: "cover" }}
                quality={100}
              
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStory.id}
                initial={{ y: 120, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -120, opacity: 0, scale: 1.05 }}
                transition={{
                  duration: 1.4,
                  ease: [0.16, 1, 0.3, 1],
                  scale: {
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                  },
                }}
                className="absolute inset-0 z-10"
                style={{
                  clipPath: `polygon(0 0%, 100% 0%, 100% ${currentImageHeight}%, 0% ${currentImageHeight}%)`,
                  transition: "clip-path 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <Image
                  src={currentStory.image || "/placeholder.svg"}
                  alt={currentStory.title}
                  fill
                  style={{ objectFit: "cover" }}
                  quality={100}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/20"
                  style={{
                    opacity: Math.max(0.3, Math.min(1, currentImageHeight / 100)),
                    transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
