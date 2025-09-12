"use client";

import React, { useRef, useCallback, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Image from 'next/image';

interface FlipbookProps {
  images: string[];
}

const Flipbook: React.FC<FlipbookProps> = ({ images }) => {
  const book = useRef<any>(null);
  const [isOpen, setIsOpen] = useState(true); // State to control if the flipbook is open
  const [currentPage, setCurrentPage] = useState(0); // State to track the current page

  const onFlip = useCallback((e: any) => {
    console.log('Current page: ' + e.data);
    setCurrentPage(e.data); // Update current page
    // If the flipbook reaches the last page, consider it "closed"
    if (e.data === images.length - 1) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [images.length]);

  const goToPrevPage = useCallback(() => {
    if (book.current) {
      book.current.pageFlip().flipPrev();
    }
  }, []);

  const goToNextPage = useCallback(() => {
    if (book.current) {
      book.current.pageFlip().flipNext();
    }
  }, []);

  const openFlipbook = useCallback(() => {
    setIsOpen(true);
    if (book.current) {
      book.current.pageFlip().turnToPage(0); // Go to the first page when opening
    }
  }, []);

  return (
    <div className="flex flex-col items-center p-4">
      {isOpen ? (
        <div className="w-full max-w-3xl mx-auto relative shadow-2xl rounded-lg">
          <HTMLFlipBook
            width={500}
            height={700}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
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
                  src={image}
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
            className="absolute -left-12 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none transition-all duration-300 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous page"
          >
            &#8592;
          </button>
          <button
            onClick={goToNextPage}
            disabled={currentPage === images.length - 1}
            className="absolute -right-12 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none transition-all duration-300 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next page"
          >
            &#8594;
          </button>
          <p className="mt-4 text-sm text-gray-600 text-center">Click or swipe on the pages to flip!</p>
        </div>
      ) : (
        <div className="w-full max-w-3xl mx-auto relative shadow-2xl rounded-lg overflow-hidden cursor-pointer group" onClick={openFlipbook}>
          {images.length > 0 && (
            <Image
              src={images[images.length - 1]} // Display the last image when closed
              alt="Flipbook closed cover"
              layout="responsive"
              width={500}
              height={700}
              objectFit="contain"
              className="w-full h-full"
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl font-bold opacity-100 group-hover:opacity-100 transition-opacity duration-300">
            Click to Open Flipbook
          </div>
        </div>
      )}
    </div>
  );
};

export default Flipbook;
