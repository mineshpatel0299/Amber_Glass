"use client";
import React from "react";
import localFont from "next/font/local";
import { motion } from "framer-motion"; // Using framer-motion for animations

const helvetica = localFont({
  src: "../../public/helvetica-255/helvetica-light-587ebe5a59211.ttf",
});

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${helvetica.className}`}>
          About Amber Glass India
        </h1>
        <p className={`text-lg sm:text-xl mb-8 leading-relaxed ${helvetica.className}`}>
          At Amber Glass India, we believe in transforming spaces and elevating experiences through the timeless beauty and versatility of glass. With a legacy of craftsmanship and a commitment to innovation, we are dedicated to providing high-quality glass solutions that inspire and endure.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-left mt-12"
        >
          <h2 className={`text-3xl sm:text-4xl font-semibold mb-4 ${helvetica.className}`}>Our Vision</h2>
          <p className={`text-md sm:text-lg mb-6 leading-relaxed ${helvetica.className}`}>
            To be the leading provider of innovative glass products and services, recognized for our exceptional quality, sustainable practices, and unwavering dedication to customer satisfaction. We envision a world where glass is not just a material, but a medium for artistic expression and functional excellence.
          </p>

          <h2 className={`text-3xl sm:text-4xl font-semibold mb-4 mt-8 ${helvetica.className}`}>Our Mission</h2>
          <p className={`text-md sm:text-lg mb-6 leading-relaxed ${helvetica.className}`}>
            To craft and deliver superior glass products that meet the diverse needs of our clients, from architectural marvels to intricate interior designs. We are committed to fostering a culture of creativity, precision, and environmental responsibility in every facet of our operations.
          </p>

          <h2 className={`text-3xl sm:text-4xl font-semibold mb-4 mt-8 ${helvetica.className}`}>Why Choose Us?</h2>
          <ul className={`list-disc list-inside text-md sm:text-lg space-y-2 ${helvetica.className}`}>
            <li>
              <strong>Unmatched Quality:</strong> We use only the finest materials and state-of-the-art manufacturing processes to ensure every product meets the highest standards.
            </li>
            <li>
              <strong>Innovative Designs:</strong> Our team of experts constantly explores new possibilities, offering cutting-edge designs and custom solutions.
            </li>
            <li>
              <strong>Customer-Centric Approach:</strong> Your vision is our priority. We work closely with you to bring your ideas to life with precision and care.
            </li>
            <li>
              <strong>Sustainability:</strong> We are committed to eco-friendly practices, minimizing our environmental footprint through responsible sourcing and production.
            </li>
            <li>
              <strong>Experienced Craftsmanship:</strong> With years of experience, our skilled artisans and technicians deliver flawless execution and lasting beauty.
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUsPage;
