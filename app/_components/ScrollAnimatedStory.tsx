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

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { top, height } = containerRef.current.getBoundingClientRect()
        const scrollProgress = Math.max(0, Math.min(1, -top / (height - window.innerHeight)))

        const numItems = storyContent.length

        // Calculate which story should be shown based on scroll progress
        // Each story gets equal scroll space except the last one gets more time to stay visible
        if (scrollProgress >= 0.7) {
          setCurrentStoryIndex(numItems - 1)
        } else {
          // First 3 stories share the first 70% of scroll space
          const adjustedProgress = scrollProgress / 0.7
          const newIndex = Math.floor(adjustedProgress * (numItems - 1))
          setCurrentStoryIndex(Math.min(newIndex, numItems - 2))
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const currentStory = storyContent[currentStoryIndex] || storyContent[0]

  return (
    <div className="relative h-[500vh] bg-white" ref={containerRef}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Content Section */}
          <div className="relative z-10 p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStory.id}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  staggerChildren: 0.2,
                }}
              >
                <motion.h2
                  className="text-6xl lg:text-7xl font-bold text-gray-800 mb-12 leading-tight"
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  {currentStory.title}
                </motion.h2>
                <motion.div
                  className="text-2xl text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: currentStory.description }}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image Section */}
          <div className="relative w-full h-[600px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStory.id}
                initial={{ y: 120, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -120, opacity: 0, scale: 1.05 }}
                transition={{
                  duration: 0.9,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="absolute inset-0"
              >
                <Image
                  src={currentStory.image || "/placeholder.svg"}
                  alt={currentStory.title}
                  fill
                  style={{ objectFit: "cover" }}
                  quality={100}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
