"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "./ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-2 left-2 right-2 sm:top-4 sm:left-4 sm:right-4 z-50 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-2xl border border-white/20 font-inter">
      <div className="max-w-8xl mx-auto px-12 ">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0 w-32 h-8 sm:w-48 sm:h-12 md:w-72 md:h-45">
            <Image
              src="/amber-logo.png"
              alt="Amber Glass India"
              width={220}
              height={75}
              className="h-full w-auto object-contain"
            />
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6 xl:space-x-8">
              <a
                href="#home"
                className="text-white hover:text-white/80 px-2 py-2 text-sm font-normal transition-all duration-200 hover:bg-white/10 hover:rounded-md drop-shadow-md"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white hover:text-white/80 px-2 py-2 text-sm font-normal transition-all duration-200 hover:bg-white/10 hover:rounded-md drop-shadow-md"
              >
                About Us
              </a>
              <a
                href="#products"
                className="text-white hover:text-white/80 px-2 py-2 text-sm font-normal transition-all duration-200 hover:bg-white/10 hover:rounded-md drop-shadow-md"
              >
                Products
              </a>
              <a
                href="#partner"
                className="text-white hover:text-white/80 px-2 py-2 text-sm font-normal transition-all duration-200 hover:bg-white/10 hover:rounded-md drop-shadow-md"
              >
                Partner with Us
              </a>
            </div>
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden lg:block">
            <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-4 py-2 text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:rounded-lg font-normal">
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-white/80 hover:bg-white/10 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/20 mt-2 pt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <a
                href="#home"
                className="text-white hover:text-white/80 px-3 py-2 text-sm font-normal transition-all duration-200 hover:bg-white/10 hover:rounded-md drop-shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white hover:text-white/80 px-3 py-2 text-sm font-normal transition-all duration-200 hover:bg-white/10 hover:rounded-md drop-shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="#products"
                className="text-white hover:text-white/80 px-3 py-2 text-sm font-normal transition-all duration-200 hover:bg-white/10 hover:rounded-md drop-shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <a
                href="#partner"
                className="text-white hover:text-white/80 px-3 py-2 text-sm font-normal transition-all duration-200 hover:bg-white/10 hover:rounded-md drop-shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Partner with Us
              </a>
              <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-4 py-2 text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:rounded-lg font-normal mt-2 w-full">
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
