"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    stars: 5,
    text: "The home collection service was a lifesaver for me. The staff was professional and made the process very comfortable.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Anjali Verma",
  },
  {
    id: 2,
    stars: 5,
    text: "I appreciate the transparency in pricing. The health packages offered were affordable and provided great value.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Suresh Kumar",
  },
  {
    id: 3,
    stars: 5,
    text: "Excellent service and very friendly staff. Highly recommended for their professionalism and efficiency.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Priya Sharma",
  },
  {
    id: 4,
    stars: 5,
    text: "The home collection service was a lifesaver for me. The staff was professional and made the process very comfortable.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Anjali Verma",
  },
  {
    id: 5,
    stars: 5,
    text: "I appreciate the transparency in pricing. The health packages offered were affordable and provided great value.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Suresh Kumar",
  },
  {
    id: 6,
    stars: 5,
    text: "Excellent service and very friendly staff. Highly recommended for their professionalism and efficiency.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Priya Sharma",
  },
]

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(3)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1)
      } else {
        setSlidesToShow(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + slidesToShow >= testimonials.length ? 0 : prevIndex + 1))
        setIsTransitioning(false)
      }, 50)
    }, 4000)

    return () => clearInterval(interval)
  }, [slidesToShow])

  const nextSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + slidesToShow >= testimonials.length ? 0 : prevIndex + 1))
      setIsTransitioning(false)
    }, 50)
  }

  const prevSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? Math.max(0, testimonials.length - slidesToShow) : prevIndex - 1,
      )
      setIsTransitioning(false)
    }, 50)
  }

  const goToSlide = (index: number) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsTransitioning(false)
    }, 50)
  }

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + slidesToShow)
  if (visibleTestimonials.length < slidesToShow) {
    visibleTestimonials.push(...testimonials.slice(0, slidesToShow - visibleTestimonials.length))
  }

  return (
    <section className="py-6 md:py-16 bg-white">
      <div className="container mx-auto px-3 md:px-4">
        <h2 className="text-xl md:text-4xl font-bold mb-6 md:mb-12 text-[#567387] text-center">What People Say</h2>

        <div className="relative max-w-xs mx-auto md:max-w-6xl">
          <button
            onClick={prevSlide}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            className={`grid gap-4 md:gap-6 ${slidesToShow === 1 ? "grid-cols-1" : "grid-cols-3"} transition-all duration-700 ease-in-out ${isTransitioning ? "opacity-90" : "opacity-100"}`}
          >
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${currentIndex}-${index}`}
                className="w-full transform transition-all duration-700 ease-in-out"
                style={{
                  transform: isTransitioning ? "scale(0.98)" : "scale(1)",
                }}
              >
                <div className="bg-gray-50 p-4 md:p-8 rounded-lg shadow-md flex flex-col items-center border border-gray-200 h-full min-h-[280px] md:min-h-[350px] transition-all duration-700 ease-in-out">
                  <div className="flex text-yellow-500 mb-3 md:mb-4">
                    {Array.from({ length: testimonial.stars }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-3 h-3 md:w-5 md:h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-gray-700 text-sm md:text-lg mb-3 md:mb-6 text-center leading-relaxed px-1 md:px-0">
                    {testimonial.text}
                  </p>

                  <div className="w-12 h-12 md:w-20 md:h-20 rounded-full overflow-hidden mb-2 md:mb-4 border-2 border-blue-300 flex-shrink-0">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="font-semibold text-gray-800 text-xs md:text-base text-center">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / slidesToShow) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index * slidesToShow)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                  Math.floor(currentIndex / slidesToShow) === index ? "bg-[#567387]" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
