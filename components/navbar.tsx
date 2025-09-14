"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation"; // Import useRouter and usePathname
import { Button } from "./ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter(); // Initialize useRouter
  const pathname = usePathname(); // Initialize usePathname

  console.log("Navbar - Pathname:", pathname);
  console.log("Navbar - isProductPage:", pathname === "/product");
  console.log("Navbar - Scrolled:", scrolled);

  const handleSmoothScroll = (path: string) => {
    setIsMenuOpen(false); // Close mobile menu if open
    router.push(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isProductPage = pathname === "/product";
  const isPartnerPage = pathname === "/partner-with-us";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      setScrolled(scrollY >= viewportHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]); // Re-run effect when pathname changes to reset scroll state if needed

  return (
    <nav className="fixed top-2 left-2 right-2 sm:top-4 sm:left-4 sm:right-4 z-50 bg-gradient-to-r from-white/25 via-white/20 to-white/25 backdrop-blur-3xl rounded-xl sm:rounded-2xl shadow-2xl border border-white/30 font-inter before:absolute before:inset-0 before:rounded-xl before:sm:rounded-2xl before:bg-gradient-to-b before:from-white/10 before:to-transparent before:pointer-events-none">
      <div className="max-w-8xl mx-auto px-2 md:px-12 relative z-10">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div
              className="flex-shrink-0t w-32 h-8 sm:w-48 sm:h-12 md:w-72 md:h-12 relative overflow-hidden cursor-pointer"
              onClick={() => handleSmoothScroll("/")}
            >
              <div
                className={`absolute w-48 inset-0 transition-all duration-700 ease-in-out ${
                  scrolled
                    ? "opacity-0 translate-y-4"
                    : "opacity-100 translate-y-0"
                }`}
              >
                <Image
                  src={isPartnerPage ? "https://res.cloudinary.com/dsalsyu0z/image/upload/v1756049579/final_logo_amber_pngs-02_etiakh.png" : "https://res.cloudinary.com/dsalsyu0z/image/upload/v1756049503/final_logo_amber_pngs-03_epbfqm.png"}
                  alt="Amber Glass India"
                  width={220}
                  height={75}
                  className={`h-full w-auto object-contain drop-shadow-lg`}
                />
              </div>
              <div
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  scrolled
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4"
                }`}
              >
                <Image
                  src="https://res.cloudinary.com/dsalsyu0z/image/upload/v1756049579/final_logo_amber_pngs-02_etiakh.png"
                  alt="Amber Glass India - Scrolled"
                  width={220}
                  height={75}
                  className={`h-full w-auto object-contain drop-shadow-lg brightness-90 contrast-110`}
                />
              </div>
            </div>
          </div>
          {/* Navigation Links - Desktop */}
          <div className="hidden lg:block ">
            <div className="ml-10 flex items-baseline space-x-6 xl:space-x-8">
              <a
                onClick={() => handleSmoothScroll("/")}
                className={`${
                  scrolled || isPartnerPage ? "text-black" : "text-white"
                } hover:text-amber-700 px-2 py-2 text-sm font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-white/20 hover:to-white/10 hover:rounded-md hover:shadow-lg hover:backdrop-blur-sm cursor-pointer`}
              >
                Home
              </a>
              <a
                onClick={() => handleSmoothScroll("/about")}
                className={`${
                  scrolled || isPartnerPage ? "text-black" : "text-white"
                } hover:text-amber-700 px-2 py-2 text-sm font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-white/20 hover:to-white/10 hover:rounded-md hover:shadow-lg hover:backdrop-blur-sm cursor-pointer`}
              >
                About Us
              </a>
              <a
                onClick={() => handleSmoothScroll("/product")}
                className={`${
                  scrolled || isPartnerPage ? "text-black" : "text-white"
                } hover:text-amber-700 px-2 py-2 text-sm font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-white/20 hover:to-white/10 hover:rounded-md hover:shadow-lg hover:backdrop-blur-sm cursor-pointer`}
              >
                Products
              </a>
              <a
                onClick={() => handleSmoothScroll("/partner-with-us")}
                className={`${
                  scrolled || isPartnerPage ? "text-black" : "text-white"
                } hover:text-amber-700 px-2 py-2 text-sm font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-white/20 hover:to-white/10 hover:rounded-md hover:shadow-lg hover:backdrop-blur-sm cursor-pointer`}
              >
                Partner with Us
              </a>
            </div>
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden lg:block">
            <Button
              className={`${
                scrolled || isPartnerPage
                  ? "bg-gradient-to-r from-gray-200/30 to-gray-200/20 hover:from-gray-200/40 hover:to-gray-200/30 text-black hover:text-amber-700 border border-gray-200/40"
                  : "bg-white/20 hover:bg-white/30 text-white border border-white/50"
              } px-4 py-2 text-sm font-medium transition-all duration-300 shadow-xl hover:shadow-2xl hover:rounded-lg backdrop-blur-sm hover:scale-105`}
            >
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              className={`${
                scrolled ? "text-black" : "text-white"
              } hover:text-amber-700 hover:bg-gradient-to-r hover:from-white/20 hover:to-white/10 p-2 hover:shadow-lg transition-all duration-300`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/30 mt-2 pt-4 pb-4 bg-gradient-to-b from-white/10 to-transparent rounded-b-xl backdrop-blur-sm">
            <div className="flex flex-col space-y-3">
              <a
                onClick={() => handleSmoothScroll("/")}
                className={`${
                  scrolled ? "text-black" : "text-white"
                } hover:text-amber-700 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-white/20 hover:to-white/10 hover:rounded-md hover:shadow-lg cursor-pointer`}
              >
                Home
              </a>
              <a
                onClick={() => handleSmoothScroll("/about")}
                className={`${
                  scrolled ? "text-black" : "text-white"
                } hover:text-amber-700 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-white/20 hover:to-white/10 hover:rounded-md hover:shadow-lg cursor-pointer`}
              >
                About Us
              </a>
              <a
                onClick={() => handleSmoothScroll("/product")}
                className={`${
                  scrolled ? "text-black" : "text-white"
                } hover:text-amber-700 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-white/20 hover:to-white/10 hover:rounded-md hover:shadow-lg cursor-pointer`}
              >
                Products
              </a>
              <a
                onClick={() => handleSmoothScroll("/partner-with-us")}
                className={`${
                  scrolled ? "text-black" : "text-white"
                } hover:text-amber-700 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-white/20 hover:to-white/10 hover:rounded-md hover:shadow-lg cursor-pointer`}
              >
                Partner with Us
              </a>
              <Button
                className={`${
                  scrolled
                    ? "bg-gradient-to-r from-gray-200/30 to-gray-200/20 hover:from-gray-200/40 hover:to-gray-200/30 text-black"
                    : "bg-white/20 hover:bg-white/30 text-white border border-white/50"
                } px-4 py-2 text-sm font-medium transition-all duration-300 shadow-xl hover:shadow-2xl hover:rounded-lg mt-2 w-full backdrop-blur-sm`}
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
