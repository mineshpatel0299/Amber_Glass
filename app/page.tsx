"use client"

import Navbar from "../components/navbar"

export default function HomePage() {
  return (
    <div
      className="min-h-screen relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-background.png')" }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content layer */}
      <div className="relative z-10">
        <Navbar />

        {/* Main content with responsive padding */}
        <main className="pt-20 sm:pt-24 flex flex-col justify-end min-h-screen pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 drop-shadow-md text-center leading-relaxed sm:leading-[1.7rem] font-extralight tracking-tight">
              {"TRANSFORMING GLASS. ELEVATING SPACE"}
            </p> */}
          </div>
        </main>
      </div>
    </div>
  )
}
