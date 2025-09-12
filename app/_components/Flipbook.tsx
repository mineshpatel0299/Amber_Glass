"use client"

import type React from "react"
import { useRef, useCallback, useState, useEffect } from "react"
import HTMLFlipBook from "react-pageflip"
import Image from "next/image"

interface FlipbookProps {
  images: string[]
}

const Flipbook: React.FC<FlipbookProps> = ({ images }) => {
  const book = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const onFlip = useCallback((e: any) => {
    console.log("Current page: " + e.data)
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

  const enterFullscreen = useCallback(() => {
    if (containerRef.current) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen()
      } else if ((containerRef.current as any).webkitRequestFullscreen) {
        ;(containerRef.current as any).webkitRequestFullscreen()
      } else if ((containerRef.current as any).msRequestFullscreen) {
        ;(containerRef.current as any).msRequestFullscreen()
      }
    }
  }, [])

  const exitFullscreen = useCallback(() => {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if ((document as any).webkitExitFullscreen) {
      ;(document as any).webkitExitFullscreen()
    } else if ((document as any).msExitFullscreen) {
      ;(document as any).msExitFullscreen()
    }
  }, [])

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange)
    document.addEventListener("msfullscreenchange", handleFullscreenChange)

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange)
      document.removeEventListener("msfullscreenchange", handleFullscreenChange)
    }
  }, [])

  return (
    <div className="flex flex-col items-center p-4">
      <div
        ref={containerRef}
        className={`relative shadow-2xl rounded-lg ${
          isFullscreen
            ? "fixed inset-0 bg-black flex items-center justify-center z-50 w-full h-full"
            : "w-full max-w-3xl mx-auto"
        }`}
      >
        <HTMLFlipBook
          width={isFullscreen ? 800 : 500}
          height={isFullscreen ? 1000 : 700}
          size="stretch"
          minWidth={315}
          maxWidth={isFullscreen ? 1200 : 1000}
          minHeight={400}
          maxHeight={isFullscreen ? 1600 : 1533}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={onFlip}
          className="flipbook-container"
          ref={book}
          style={{}}
          startPage={0}
          flippingTime={1000}
          usePortrait={true}
          startZIndex={0}
          autoSize={true}
          showPageCorners={true}
          disableFlipByClick={false}
          swipeDistance={1}
          clickEventForward={true}
          useMouseEvents={true}
          drawShadow={true}
        >
          {images.map((image, index) => (
            <div key={index} className="page">
              <Image
                src={image || "/placeholder.svg"}
                alt={`Flipbook page ${index + 1}`}
                layout="fill"
                objectFit="contain"
              />
            </div>
          ))}
        </HTMLFlipBook>

        <button
          onClick={goToPrevPage}
          disabled={currentPage === 0}
          className={`absolute top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none transition-all duration-300 z-10 disabled:opacity-50 disabled:cursor-not-allowed ${
            isFullscreen ? "left-8" : "-left-12"
          }`}
          aria-label="Previous page"
        >
          &#8592;
        </button>
        <button
          onClick={goToNextPage}
          disabled={currentPage === images.length - 1}
          className={`absolute top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none transition-all duration-300 z-10 disabled:opacity-50 disabled:cursor-not-allowed ${
            isFullscreen ? "right-8" : "-right-12"
          }`}
          aria-label="Next page"
        >
          &#8594;
        </button>

        <button
          onClick={isFullscreen ? exitFullscreen : enterFullscreen}
          className={`absolute bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none transition-all duration-300 z-20 ${
            isFullscreen ? "top-8 right-8" : "top-4 right-4"
          }`}
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          {isFullscreen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
            </svg>
          )}
        </button>

        {!isFullscreen && (
          <p className="mt-4 text-sm text-gray-600 text-center">Click or swipe on the pages to flip!</p>
        )}
      </div>
    </div>
  )
}

export default Flipbook
