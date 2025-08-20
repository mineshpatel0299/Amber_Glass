import Image from "next/image"
import { Button } from "./ui/button"

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-none shadow-lg navbar-font"
      style={{ backgroundColor: "#1A344657" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 w-72 h-45">
            <Image
              src="/amber-logo.png"
              alt="Amber Glass India"
              width={280}
              height={95}
              className="h-full w-auto object-contain"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                className="text-white hover:text-white/80 px-3 py-2 text-sm font-extralight transition-colors duration-200 hover:bg-white/10 rounded-md drop-shadow-md"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white hover:text-white/80 px-3 py-2 text-sm font-extralight transition-colors duration-200 hover:bg-white/10 rounded-md drop-shadow-md"
              >
                About Us
              </a>
              <a
                href="#products"
                className="text-white hover:text-white/80 px-3 py-2 text-sm font-extralight transition-colors duration-200 hover:bg-white/10 rounded-md drop-shadow-md"
              >
                Products
              </a>
              <a
                href="#partner"
                className="text-white hover:text-white/80 px-3 py-2 text-sm font-extralight transition-colors duration-200 hover:bg-white/10 rounded-md drop-shadow-md"
              >
                Partner with Us
              </a>
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-6 py-2 rounded-md transition-all duration-200 shadow-md hover:shadow-lg backdrop-blur-sm font-normal">
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" className="text-white hover:text-white/80 hover:bg-white/10">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
