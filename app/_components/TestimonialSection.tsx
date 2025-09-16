"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    stars: 5,
    text: "The home collection service was a lifesaver for me. The staff was professional and made the process very comfortable.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Anjali Verma",
  },
  {
    id: 2,
    stars: 5,
    text: "I appreciate the transparency in pricing. The health packages offered were affordable and provided great value.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Suresh Kumar",
  },
  {
    id: 3,
    stars: 5,
    text: "Excellent service and very friendly staff. Highly recommended for their professionalism and efficiency.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Priya Sharma",
  },
  {
    id: 4,
    stars: 5,
    text: "The home collection service was a lifesaver for me. The staff was professional and made the process very comfortable.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Anjali Verma",
  },
  {
    id: 5,
    stars: 5,
    text: "I appreciate the transparency in pricing. The health packages offered were affordable and provided great value.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Suresh Kumar",
  },
  {
    id: 6,
    stars: 5,
    text: "Excellent service and very friendly staff. Highly recommended for their professionalism and efficiency.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Priya Sharma",
  },
];

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-[#567387] text-center">
          What People Say
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md flex flex-col items-center border border-gray-200 h-full min-h-[350px]">
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
                <p className="text-gray-700 text-lg mb-6 text-center">
                  {testimonial.text}
                </p>
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-blue-300">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <p className="font-semibold text-gray-800">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;
