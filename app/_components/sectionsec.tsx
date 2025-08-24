"use client";

export default function SectionSec() {
  return (
    <div data-aos="fade-up" className="min-h-screen bg-[#f5f1eb] py-6 md:py-12 lg:py-48 translate-y-0 opacity-100 transform transition-all duration-700 ease-in-out" id="explore-more">
      <div className="mx-2 x-auto ">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Interior Image */}
          <div className="lg:col-span-6">
            <div className="mb-12 lg:mb-16">
          <h1 className="text-[#567387]  text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-wide mb-8">
            <span className="text-2xl md:text-3xl lg:text-5xl">AT</span>{" "}
            <span className="font-normal">AMBER</span>{" "}
            {/* <span className="font-normal">GLASSES</span>{" "} */}
            {/* <span className="font-normal"></span> */}
          </h1>

          <div className="max-w-md">
            <p className="text-[#1a3446]  text-base md:text-lg leading-relaxed">
              We believe interior design is more than just aesthetics — it's
              about creating spaces that inspire, function beautifully, and
              reflect the people who live or work in them.
            </p>
          </div>
        </div>
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dsalsyu0z/image/upload/v1756043732/3-2_xfco8l.jpg"
                alt="Interior design objects and pottery"
                className="w-full h-full object-cover"
              />
            </div>
            
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 ">
            {/* Years Experience */}
            <div className=" p-6 md:p-8 border-r-0 md:border-r border-b-0 md:border-b border border-l-0 border-gray-700 flex justify-end flex-col">
              <div className="text-right flex flex-row gap-3 justify-center items-center">
                <p className="text-[#1a3446]  text-sm md:text-base leading-tight">
                  years into reimagining spaces—and rewriting the rules of
                  interior design.
                </p>
                <div className="font-bold text-6xl md:text-7xl lg:text-5xl text-[#1a3446]  leading-none mb-2">
                  4
                </div>
              </div>
            </div>

            {/* Designers Count */}
            <div className=" p-6 md:p-8  border-y border-gray-700 flex justify-end flex-col">
              <div className="text-right flex flex-row gap-3 justify-center items-center">
                <p className="text-[#1a3446]  text-sm md:text-base leading-tight">
                  years into reimagining spaces—and rewriting the rules of
                  interior design.
                </p>
                <div className="font-bold text-6xl md:text-7xl lg:text-5xl text-[#1a3446]  leading-none mb-2">
                  4
                </div>
              </div>
            </div>

            {/* Projects Count */}
            <div className=" p-6 md:p-8  flex justify-end flex-col">
              <div className="text-right flex flex-row gap-3 justify-center items-center">
                <p className="text-[#1a3446]  text-sm md:text-base leading-tight">
                  years into reimagining spaces—and rewriting the rules of
                  interior design.
                </p>
                <div className="font-bold text-6xl md:text-7xl lg:text-5xl text-[#1a3446]  leading-none mb-2">
                  62
                </div>
              </div>
            </div>

            {/* Philosophy Block */}
            <div className="bg-[#567387] p-6 md:p-8  text-white flex flex-col justify-between">
              <p className="text-base md:text-lg leading-relaxed mb-6">
                Design isn't just what you see — it's how a space lives with
                you.
              </p>

              <div className="flex ">
                <button className="text-white text-sm hover:underline transition-all duration-200 underline">
                  Learn more →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
