"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import localFont from "next/font/local";
import { WordRotate } from "@/components/magicui/word-rotate";
import SectionSec from "./_components/sectionsec";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { HeroParallaxDemo } from "./_components/section-third";
const helvetica = localFont({ src: "../public/helvetica-255/helvetica-light-587ebe5a59211.ttf" });
export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
const [explore, setExplored] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    setExplored(false);
  }, []);

  return (
   <>
    <div className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dsalsyu0z/image/upload/v1755850493/ChatGPT_Image_Aug_22_2025_at_12_55_34_PM_1_swh3xj.png')",
        }}
      />

      <div className="relative z-10 flex min-h-screen flex-col justify-between py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16">
        <div className="flex flex-1 justify-between">
          <div className="flex-1 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-2xl mt-16 sm:mt-20 md:mt-24 lg:mt-32 xl:mt-[150px] ml-1 px-4 sm:px-6 md:px-8 lg:px-0">
            <div
              className={`space-y-2 sm:space-y-3 md:space-y-4 ${isLoaded ? "opacity-100" : "opacity-0"}`}
            >
              <div className="space-y-1 sm:space-y-2">
                <h1 className={"text-white uppercase text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl flex flex-col justify-end items-end font-light tracking-tight leading-tigh" + " " + helvetica.className}>
                  <span className="bloc animate-fade-in-up animate-delay-1 flex flex-row items-center gap-1 sm:gap-2">
                    <WordRotate words={["Innovation", "Elevate"]} /> <span>spaces</span>
                  </span>
                  <span className="block animate-fade-in-up animate-delay-2">
                    one glasses
                  </span>
                  <span className="block animate-fade-in-up animate-delay-3">
                    at a time 
                  </span>
                </h1>
              </div>
            </div>
          </div>

          {/* Responsive positioned image */}
          <div className="absolute 
            left-[45%] top-[45%] sm:left-[50%] sm:top-[50%] 
            md:left-[55%] md:top-[52%] 
            lg:left-[350px] lg:top-[450px] 
            xl:left-[350px] xl:top-[570px] 
            2xl:left-[350px] 2xl:top-[690px]
            -translate-x-1/2 -translate-y-1/2 z-20">
            <div
              className={`animate-float ${
                isLoaded ? "opacity-100" : "opacity-0"
              } transition-opacity duration-1000 delay-1000`}
            >
              <img
                src="https://res.cloudinary.com/dsalsyu0z/image/upload/v1755852351/1_f4qpap.png"
                alt="Woman walking"
                className="h-32 sm:h-40 md:h-48 lg:h-64 xl:h-[500px] 2xl:h-[700px] 3xl:h-[600px] w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 sm:gap-6 md:gap-8">
          {/* Bottom Left - Explore More */}
          <div
            className={`max-w-xs ${
              isLoaded ? "animate-slide-in-right" : "opacity-0"
            }`}
          ></div>

          {/* Bottom Right - CTA Section */}
          <div
            className={`text-right max-w-xs sm:max-w-sm md:max-w-md px-4 sm:px-8 md:px-12 lg:px-16 ${
              isLoaded ? "animate-slide-in-right animate-delay-2" : "opacity-0"
            }`}
          >
            <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-5 md:mb-6">
              Should guide your new experience, one step at a time, toward your
              dreamspace living.
            </p>

            <Button className="bg-white text-black hover:bg-white/90 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 hover:scale-105" onClick={()=>setExplored(true)}>
              Explore More
            </Button>
          </div>
        </div>
      </div>
    </div>
    
    {
      explore && (
        <div>
      <SectionSec/>
      <HeroParallaxDemo/>
    </div>
      )
    }
    </>
  );
}