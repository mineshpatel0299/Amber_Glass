"use client"

import type React from "react"
import { useRef, useCallback, useState, useEffect } from "react"
import HTMLFlipBook from "react-pageflip"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface FlipbookProps {
  images: string[]
}

const Flipbook: React.FC<FlipbookProps> = ({ images }) => {
  const book = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [flipbookWidth, setFlipbookWidth] = useState(900)
  const [flipbookHeight, setFlipbookHeight] = useState(600)
  const [isMobile, setIsMobile] = useState(false)

  const onFlip = useCallback((e: any) => {
    setCurrentPage(e.data)
  }, [])

  const goToPrevPage = useCallback(() => {
    if (book.current) {
      book.current.pageFlip().flipPrev()
    }
  }, [])

  const goToNextPage = useCallback(() => {
    if (book.current) {
      book.current.pageFlip().flipNext()
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        // Maintain aspect ratio (e.g., 3:2 for a book)
        // Default aspect ratio for two pages (landscape)
        let aspectRatio = 3 / 2
        let newWidth = containerWidth
        let newHeight = containerWidth / aspectRatio

        // Adjust for mobile view: single page (portrait)
        if (window.innerWidth < 768) {
          aspectRatio = 2 / 3 // Aspect ratio for a single page (e.g., portrait)
          newWidth = containerWidth * 0.85 // Use 85% of container width for single page
          newHeight = newWidth / aspectRatio
          setFlipbookWidth(Math.min(Math.max(newWidth, 200), 400)) // Smaller max width for single page
          setFlipbookHeight(Math.min(Math.max(newHeight, 300), 600)) // Smaller max height for single page
          setIsMobile(true)
        } else {
          // Web view: two pages (landscape)
          setFlipbookWidth(Math.min(Math.max(newWidth, 400), 900)) // Min 400, Max 900 for two pages
          setFlipbookHeight(Math.min(Math.max(newHeight, 300), 600)) // Min 300, Max 600 for two pages
          setIsMobile(false)
        }
      }
    }

    handleResize() // Set initial size
    window.addEventListener("resize", handleResize)

    const timer = setTimeout(() => setIsLoading(false), 1000)

    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="flex flex-col items-center p-2 sm:p-6">
      <div
        ref={containerRef}
        className="relative transition-all duration-500 ease-in-out w-full max-w-7xl mx-auto"
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-card/80 backdrop-blur-sm rounded-xl z-10">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
              <p className="text-muted-foreground font-medium">Loading flipbook...</p>
            </div>
          </div>
        )}

        <div
          className="flipbook-container rounded-xl overflow-hidden transition-all duration-500 ease-in-out bg-card shadow-2xl scale-100"
        >
          <HTMLFlipBook
            width={flipbookWidth}
            height={flipbookHeight}
            size="stretch"
            minWidth={isMobile ? 200 : 400}
            maxWidth={isMobile ? 400 : 900}
            minHeight={isMobile ? 300 : 300}
            maxHeight={isMobile ? 600 : 600}
            maxShadowOpacity={0.3}
            showCover={true}
            mobileScrollSupport={true}
            onFlip={onFlip}
            className="flipbook-pages"
            ref={book}
            startPage={0}
            flippingTime={800}
            usePortrait={isMobile}
            startZIndex={0}
            autoSize={true}
            showPageCorners={true}
            disableFlipByClick={false}
            swipeDistance={1}
            clickEventForward={true}
            useMouseEvents={true}
            drawShadow={true}
            style={{}}
          >
            {images.map((image, index) => (
              <div key={index} className="page bg-white relative">
                <div className="w-full h-full relative">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Flipbook page ${index + 1}`}
                    fill
                    style={{ objectFit: "contain" }}
                    className="transition-opacity duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </HTMLFlipBook>
        </div>

        <button
          onClick={goToPrevPage}
          disabled={currentPage === 0}
          className="absolute top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 text-primary-foreground p-2 sm:p-4 rounded-full shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all duration-300 z-20 disabled:opacity-50 disabled:cursor-not-allowed group -left-3 sm:-left-6"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={goToNextPage}
          disabled={currentPage === images.length - 1}
          className="absolute top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 text-primary-foreground p-2 sm:p-4 rounded-full shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all duration-300 z-20 disabled:opacity-50 disabled:cursor-not-allowed group -right-3 sm:-right-6"
          aria-label="Next page"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
        </button>

          <div className="mt-6 sm:mt-8 text-center space-y-3 sm:space-y-4">
            <div className="flex items-center justify-center gap-2">
              <div className="flex gap-1">
                {Array.from({ length: Math.ceil(images.length / 2) }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      Math.floor(currentPage / 2) === i ? "bg-primary w-6" : "bg-border"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground ml-2 sm:ml-3">
                Page {currentPage + 1} of {images.length}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Click pages to flip • Drag corners • Use arrow keys • Swipe on mobile
            </p>
          </div>
      </div>
    </div>
  )
}

export default Flipbook
