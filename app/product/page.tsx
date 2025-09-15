import React from 'react';
import Flipbook from '../_components/Flipbook';
import { Footerdemo } from "@/components/ui/footer-section"; // Assuming Footerdemo is a common footer component

const images = [
  '/flipbook/127.png',
  '/flipbook/128.png',
  '/flipbook/129.png',
  '/flipbook/130.png',
  '/flipbook/131.png',
  '/flipbook/132.png',
  '/flipbook/133.png',
  '/flipbook/134.png',
  '/flipbook/135.png',
  '/flipbook/136.png',
  '/flipbook/137.png',
  '/flipbook/138.png',
  '/flipbook/139.png',
  '/flipbook/140.png',
  '/flipbook/141.png',
  '/flipbook/142.png',
  '/flipbook/143.png',
  '/flipbook/144.png',
  '/flipbook/145.png',
];

const images2 = [
  '/flipbook2/107.png',
  '/flipbook2/108.png',
  '/flipbook2/109.png',
  '/flipbook2/110.png',
  '/flipbook2/111.png',
  '/flipbook2/113.png',
  '/flipbook2/114.png',
  '/flipbook2/115.png',
  '/flipbook2/116.png',
  '/flipbook2/117.png',
  '/flipbook2/119.png',
  '/flipbook2/120.png',
  '/flipbook2/121.png',
  '/flipbook2/122.png',
  '/flipbook2/123.png',
  '/flipbook2/125.png',
];

const images3 = [
  '/flipbook3/79.png',
  '/flipbook3/80.png',
  '/flipbook3/81.png',
  '/flipbook3/82.png',
  '/flipbook3/83.png',
  '/flipbook3/84.png',
  '/flipbook3/85.png',
  '/flipbook3/86.png',
  '/flipbook3/87.png',
  '/flipbook3/88.png',
  '/flipbook3/89.png',
  '/flipbook3/90.png',
  '/flipbook3/91.png',
  '/flipbook3/92.png',
  '/flipbook3/93.png',
  '/flipbook3/94.png',
  '/flipbook3/95.png',
  '/flipbook3/96.png',
  '/flipbook3/97.png',
];

const images4 = [
  '/flipbook4/39.png',
  '/flipbook4/40.png',
  '/flipbook4/41.png',
  '/flipbook4/42.png',
  '/flipbook4/43.png',
  '/flipbook4/44.png',
  '/flipbook4/45.png',
  '/flipbook4/46.png',
  '/flipbook4/47.png',
  '/flipbook4/48.png',
  '/flipbook4/49.png',
  '/flipbook4/50.png',
  '/flipbook4/51.png',
  '/flipbook4/52.png',
  '/flipbook4/53.png',
  '/flipbook4/54.png',
  '/flipbook4/55.png',
  '/flipbook4/56.png',
  '/flipbook4/57.png',
];

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center text-center bg-cover bg-center"
           style={{ backgroundImage: "url('/hero-background.png')" }}> {/* Using a placeholder background image */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 p-4 pt-20">
          <h1 className="text-5xl font-extrabold text-white mb-4 animate-fade-in-up">
            Discover Our Collection
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-up animate-delay-1">
            Explore our interactive catalog and find the perfect glass solutions for your needs.
          </p>
        </div>
      </div>

      {/* Flipbook Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10"> Opaque Films</h2>
          <Flipbook images={images} />
        </div>
      </section>

      {/* Second Flipbook Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10"> Printed Films</h2>
          <Flipbook images={images2} />
        </div>
      </section>

      {/* Third Flipbook Section - Frosted Films */}
      <section className="py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10"> Frosted Films</h2>
          <Flipbook images={images3} />
        </div>
      </section>

      {/* Fourth Flipbook Section - Transparent Films */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10"> Transparent Films</h2>
          <Flipbook images={images4} />
        </div>
      </section>

      {/* Placeholder for other sections if needed */}
      {/* <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">More About Our Products</h2>
          <p className="text-lg">Details about product categories, features, etc.</p>
        </div>
      </section> */}

      <Footerdemo />
    </div>
  );
};

export default ProductPage;
