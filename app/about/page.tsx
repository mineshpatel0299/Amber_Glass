"use client"
import Image from "next/image"
import { Footerdemo } from "@/components/ui/footer-section"
import AnimatedCounter from "@/app/_components/animated-counter"
import { BentoGrid, BentoGridItem } from "@/app/_components/bento-grid"
import { StickyScrollRevealMain } from "./_components/ScrollAnimation"
import WhyChooseUsSection from "@/app/_components/WhyChooseUsSection"

export default function AboutUsPage() {
  return (
    <>
      <div className="relative w-full h-screen flex items-center">
        <Image
          src="/aboutbg.png" // Using an existing background image
          alt="About Us Background"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-5"></div>
        <div className="relative z-10 text-white text-center p-6 rounded-lg max-w-full mx-auto sm:text-left sm:max-w-2xl sm:ml-6">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2 drop-shadow-lg">About Amber Glass</h1>
          <p className="text-base sm:text-lg mb-2 drop-shadow-md">
            Founded with a vision to transform the industry, Amber has been at the forefront of innovation for over a
            decade. Our commitment to excellence and customer satisfaction has made us a trusted partner for businesses
            worldwide.
          </p>
          <p className="text-lg drop-shadow-md">
            We believe in creating lasting relationships with our clients through transparent communication, reliable
            service, and cutting-edge solutions that drive real results.
          </p>
        </div>
      </div>

      {/* This div creates the scrollable space for the sticky section */}
      {/* The height is calculated based on the number of items in StickyScrollRevealMain's content array (4 items * 100vh each) */}
      <div style={{ height: `400vh` }}>
        {/* This div makes the StickyScrollRevealMain component stick to the top of the viewport */}
        {/* `overflow-hidden` ensures that the main page scroll is paused while this section is active, */}
        {/* allowing the internal scroll of StickyScrollRevealMain to take over. */}
        <div className="sticky top-0 h-screen overflow-hidden">
          <StickyScrollRevealMain />
        </div>
      </div>

      <div className="bg-white py-10">
        <WhyChooseUsSection />
      </div>

      <div className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Work</h2>
          <BentoGrid className="max-w-5xl mx-auto gap-4">
            <BentoGridItem
              key="project-alpha"
              className="lg:col-span-2"
              title="Project Alpha"
              description="A groundbreaking project in eyewear design."
              header={
                <Image
                  src="/glass-pattern-1.png"
                  alt="Project Alpha"
                  width={600}
                  height={360}
                  className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
                />
              }
            />
            <BentoGridItem
              key="project-beta"
              title="Project Beta"
              description="Innovative solutions for enhanced vision."
              header={
                <Image
                  src="/glass-pattern-2.png"
                  alt="Project Beta"
                  width={600}
                  height={360}
                  className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
                />
              }
            />
            <BentoGridItem
              key="project-gamma"
              title="Project Gamma"
              description="Redefining comfort and style in eyewear."
              header={
                <Image
                  src="/glass-pattern-3.png"
                  alt="Project Gamma"
                  width={600}
                  height={360}
                  className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
                />
              }
            />
            <BentoGridItem
              key="project-delta"
              className="lg:col-span-2"
              title="Project Delta"
              description="Advanced materials for durable and lightweight frames."
              header={
                <Image
                  src="/glass-pattern-4.png"
                  alt="Project Delta"
                  width={600}
                  height={360}
                  className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
                />
              }
            />
            <BentoGridItem
              key="project-epsilon"
              title="Project Epsilon"
              description="Customizable designs for every individual."
              header={
                <Image
                  src="/hero-background.png"
                  alt="Project Epsilon"
                  width={600}
                  height={360}
                  className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
                />
              }
            />
            <BentoGridItem
              key="project-zeta"
              title="Project Zeta"
              description="Sustainable practices in eyewear manufacturing."
              header={
                <Image
                  src="/aboutbg.png"
                  alt="Project Zeta"
                  width={600}
                  height={360}
                  className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
                />
              }
            />
            <BentoGridItem
              key="project-eta"
              title="Project Eta"
              description="Future-forward eyewear technology."
              header={
                <Image
                  src="/amber-logo.png"
                  alt="Project Eta"
                  width={600}
                  height={360}
                  className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
                />
              }
            />
          </BentoGrid>
        </div>
       
      </div>
      <Footerdemo />
    </>
  )
}
