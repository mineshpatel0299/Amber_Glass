"use client"
import { useEffect, useState } from "react"
import localFont from "next/font/local"
import { WordRotate } from "@/components/magicui/word-rotate"
import AboutUsSection from "./_components/AboutUsSection"
import { HeroParallaxDemo } from "./_components/section-third"
import { Footerdemo } from "@/components/ui/footer-section"
import CompareGlasses from "./_components/CompareGlasses"
import TestimonialSection from "./_components/TestimonialSection"
const helvetica = localFont({
  src: "../public/helvetica-255/helvetica-light-587ebe5a59211.ttf",
})
export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 object-cover w-full h-full z-0">
          <source src="/amberbg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex min-h-screen flex-col justify-between py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16">
          <div className="flex flex-1 justify-between">
            <div className="flex flex-1 flex-col items-center justify-center text-center mt-32 sm:mt-20 md:mt-24 lg:mt-32 xl:mt-[150px] px-4 sm:px-6 md:px-8 lg:px-0">
              <div className={`space-y-2 sm:space-y-3 md:space-y-4 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
                <div className="space-y-1 sm:space-y-2">
                  <h1
                    className={
                      "text-white uppercase text-4xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl 2xl:text-7xl font-light tracking-tight leading-tigh" +
                      " " +
                      helvetica.className
                    }
                  >
                    <span className="block animate-fade-in-up capitalize animate-delay-1">Amber Glass India</span>
                    <span className="inline-flex capitalize items-center animate-fade-in-up animate-delay-1">
                      Where glass meets{" "}
                      <br className="sm:hidden" />
                      <WordRotate
                        words={["Privacy", "Safety", "Design", "Innovation"]}
                        className="ml-0 sm:ml-4"
                      />
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-4 sm:gap-6 md:gap-8">
            {/* Bottom Left - Explore More */}
            <div className={`max-w-xs ${isLoaded ? "animate-slide-in-right" : "opacity-0"}`}></div>

            {/* Bottom Right - CTA Section */}
            <div
              className={`flex flex-col  gap-4 text-right pb-5 mr-5 max-w-xs sm:max-w-sm md:max-w-md px-4 sm:px-8 md:px-12 lg:px-16 ${
                isLoaded ? "animate-slide-in-right animate-delay-2" : "opacity-0"
              }`}
            ></div>
          </div>
        </div>
      </div>

      <div>
        <AboutUsSection />
        <CompareGlasses />
        <HeroParallaxDemo />
       <TestimonialSection />
        <Footerdemo />
      </div>
    </>
  )
}
