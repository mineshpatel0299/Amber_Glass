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
    image: "/Ascroll1.jpg",
    title: "WHO ARE WE, REALLY?",
    description:
      "We’re not just about glass films.We’re about transforming blank spaces into bold statements.Welcome to Amber Glass India — where your glass tells a story.",
  },
  {
    id: 2,
    image: "/AScroll3.jpg",
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
    image: "/aboutbg.png",
    title: "WHY WE EXIST?",
    description:
      "Because space isn’t just space.It’s where stories are told, dreams are lived, and memories are made. And your environment should reflect that beauty — without compromise.",
  },
  {
    id: 4,
    image: "/AScroll2.jpg",
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
        if (scrollProgress >= 0.85) {
          // Last story (id:4) stays visible for the final 15% of scroll
          setCurrentStoryIndex(numItems - 1)
        } else {
          // First 3 stories share the first 85% of scroll space
          const adjustedProgress = scrollProgress / 0.95
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
    <div className="relative h-[350vh] bg-white" ref={containerRef}>
      <div className="sticky top-0 h-[120vh] flex items-center justify-center overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Content Section */}
          <div className="relative z-10 p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStory.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-5xl font-bold text-gray-800 mb-8">{currentStory.title}</h2>
                <div className="text-xl text-gray-700" dangerouslySetInnerHTML={{ __html: currentStory.description }} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image Section */}
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStory.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
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
