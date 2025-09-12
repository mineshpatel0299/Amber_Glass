"use client"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"

const content = [
  {
    // image:"",
    title: "Who Are We, Really?",
    description:
      "We're not just about glass films. We're about transforming blank spaces into bold statements. Welcome to Amber Glass India — where your glass tells a story.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://res.cloudinary.com/dsalsyu0z/image/upload/v1757661408/DSC00380_3_cyalf6.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "What Do We Do?",
    description: "Aesthetic films Privacy and safety Heat and glare control Visual branding",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://res.cloudinary.com/dsalsyu0z/image/upload/v1757661399/WhatsApp_Image_2025-09-12_at_12.44.49_zb4u9t.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Why We Exist?",
    description:
      "Because space isn't just space. It's where stories are told, dreams are lived, and memories are made. And your environment should reflect that beauty — without compromise. ",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://res.cloudinary.com/dsalsyu0z/image/upload/v1757661399/WhatsApp_Image_2025-09-12_at_12.44.49_2_bomznt.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Who Do We Serve?",
    description:
      "Homeowners, Gym & Studio Owners, Interior Designers, Wedding Planners, Architects, Photographers …and you.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://res.cloudinary.com/dsalsyu0z/image/upload/v1757661399/WhatsApp_Image_2025-09-12_at_12.44.49_1_fxoq4u.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
]
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full">
      <StickyScroll content={content} />
    </div>
  )
}
