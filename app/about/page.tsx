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

      {/* This div creates the scrollable space for the sticky section on larger screens */}
      {/* The height is calculated based on the number of items in StickyScrollRevealMain's content array (4 items * 100vh each) */}
      <div className="lg:h-[400vh]"> {/* Apply height conditionally */}
        {/* This div makes the StickyScrollRevealMain component stick to the top of the viewport on larger screens */}
        {/* `overflow-hidden` ensures that the main page scroll is paused while this section is active, */}
        {/* allowing the internal scroll of StickyScrollRevealMain to take over. */}
        <div className="lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden"> {/* Apply sticky behavior conditionally */}
          <StickyScrollRevealMain />
        </div>
      </div>

      <div className="bg-white py-10">
        <WhyChooseUsSection />
      </div>

      <div className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Work</h2>
          <BentoGrid className="max-w-6xl mx-auto gap-4">
            <BentoGridItem
              key="project-alpha"
              className="lg:col-span-2"
              title="Residential Projects"
              description="Transforming homes with elegant and functional glass solutions."
              header={
                <Image
                  src="/bento1.jpeg"
                  alt="Project Alpha"
                  width={600}
                  height={360}
                  className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
                />
              }
            />
            <BentoGridItem
              key="project-beta"
              title="Commercial Spaces"
              description="Modern glass installations for offices, retail, and hospitality."
              header={
                <Image
                  src="/bento2.jpeg"
                  alt="Project Beta"
                  width={600}
                  height={360}
                  className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
                />
              }
            />
            <BentoGridItem
              key="project-gamma"
              title="Custom Glass Designs"
              description="Bespoke glass creations tailored to unique architectural visions."
              header={
                <Image
                  src="/office.png"
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
              title="Safety & Security Glass"
              description="Robust glass solutions for enhanced protection and peace of mind."
              header={
                <Image
                  src="/bento3.jpeg"
                  alt="Project Delta"
                  width={600}
                  height={360}
                  className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
                />
              }
            />
            <BentoGridItem
              key="project-epsilon"
              title="Energy-Efficient Glass"
              description="Sustainable options that reduce energy consumption and enhance comfort."
              header={
                <Image
                  src="/bathroom.png"
                  alt="Project Epsilon"
                  width={600}
                  height={360}
                  className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
                />
              }
            />
            <BentoGridItem
              key="project-zeta"
              title="Glass Partitions & Doors"
              description="Stylish and space-saving glass solutions for modern interiors."
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
              title="Architectural Glass"
              description="Large-scale glass facades and structural glass for iconic buildings."
              header={
                <Image
                  src="/bento5.jpeg"
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
