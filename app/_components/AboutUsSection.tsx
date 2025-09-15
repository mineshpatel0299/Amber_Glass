"use client";

import React from "react";
import Image from "next/image";
import localFont from "next/font/local";

const helvetica = localFont({
  src: "../../public/helvetica-255/helvetica-light-587ebe5a59211.ttf",
});

const AboutUsSection = () => {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Image Section */}
          <div className="relative w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
              <Image
                src="/aboutus_landing.png"
                alt="About Us Landing"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-center p-6 lg:p-12 bg-white rounded-lg shadow-lg -ml-16 z-10">
            <p className="text-sm font-semibold text-gray-600 mb-2">WELCOME TO AMBER</p>
            <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${helvetica.className}`}>
              INNOVATIVE IDEAS <br /> STYLISH DESIGNS
            </h2>
            <p className="text-base text-gray-700 mb-8 leading-relaxed">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
            <a href="/about" className="px-8 py-3 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors duration-300 mb-8">
              READ MORE
            </a>

            <div className="flex flex-col sm:flex-row gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900">25 +</p>
                <p className="text-sm text-gray-600">Years of Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900">1,250 +</p>
                <p className="text-sm text-gray-600">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
