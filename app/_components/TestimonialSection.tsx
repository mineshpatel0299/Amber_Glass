import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    stars: 5,
    text: "The home collection service was a lifesaver for me. The staff was professional and made the process very comfortable.",
    image: "https://randomuser.me/api/portraits/women/1.jpg", // Dummy image path
    name: "Anjali Verma",
  },
  {
    id: 2,
    stars: 5,
    text: "I appreciate the transparency in pricing. The health packages offered were affordable and provided great value.",
    image: "https://randomuser.me/api/portraits/men/1.jpg", // Dummy image path
    name: "Suresh Kumar",
  },
  {
    id: 3,
    stars: 5,
    text: "Excellent service and very friendly staff. Highly recommended for their professionalism and efficiency.",
    image: "https://randomuser.me/api/portraits/women/2.jpg", // Dummy image path
    name: "Priya Sharma",
  },
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-[#567387] text-center">What People Say</h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
          {/* Left Section: About Amber Glass India */}
          <div className="w-full lg:w-1/3 text-center lg:text-left p-6">
            <h3 className="text-3xl font-bold mb-4 text-[#567387]">About Amber Glass India</h3>
            <p className="text-gray-700 mb-6">
              Amber Glass India is a trusted name in premium glass packaging solutions, delivering quality and
              innovation for industries across the country.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Specializing in high-quality amber glass bottles and jars</li>
              <li>• Trusted by pharmaceutical, food, and cosmetic brands</li>
              <li>• Durable, eco-friendly, and safe packaging materials</li>
              <li>• Custom designs and bulk supply options available</li>
            </ul>
          </div>

          {/* Right Section: Testimonial Carousel */}
          <div className="w-full lg:w-2/3 relative flex items-center justify-center">
            {/* Testimonial Cards */}
            <div className="flex overflow-hidden w-full max-w-2xl"> {/* Reduced max-w-4xl to max-w-2xl */}
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`flex-shrink-0 w-full transition-transform duration-500 ease-in-out`}
                  style={{ transform: `translateX(${-activeIndex * 100}%)` }}
                >
                  <div className="bg-gray-50 p-8 rounded-lg shadow-md mx-4 flex flex-col items-center border border-gray-200">
                    <div className="flex text-yellow-500 mb-4">
                      {Array.from({ length: testimonial.stars }).map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 text-lg mb-6 max-w-md">{testimonial.text}</p>
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-blue-300">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="absolute -bottom-8 flex space-x-2"> {/* Adjusted position */}
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setActiveIndex(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
