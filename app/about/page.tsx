import Image from 'next/image';
import { Footerdemo } from '@/components/ui/footer-section';
import AnimatedCounter from '@/app/_components/animated-counter';

export default function AboutUsPage() {
  return (
    <>
      <div className="relative w-full h-screen flex items-center">
        <Image
          src="/aboutbg.png" // Using an existing background image
          alt="About Us Background"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 text-white text-left p-8 rounded-lg max-w-2xl ml-8">
          <h1 className="text-5xl font-bold mb-4">About Amber Glass</h1>
          <p className="text-lg mb-4">
            Founded with a vision to transform the industry, Amber has been at the forefront of innovation for over a decade. Our commitment to excellence and customer satisfaction has made us a trusted partner for businesses worldwide.
          </p>
          <p className="text-lg">
            We believe in creating lasting relationships with our clients through transparent communication, reliable service, and cutting-edge solutions that drive real results.
          </p>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">WHO WE WORK WITH</h2>
          <p className="text-lg text-gray-600 mb-12">
            Interior Designers | Architects | Photo Studios | Event Planners | Gym & Fitness Studios
            <br />
            Educational Institutions | Luxury Homeowners | Corporate Offices | Retail Spaces
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <AnimatedCounter target={500} suffix="+" className="text-5xl font-bold text-[#567387] mb-2" />
              <p className="text-lg text-gray-700">Happy Clients</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <AnimatedCounter target={1000} suffix="+" className="text-5xl font-bold text-[#567387] mb-2" />
              <p className="text-lg text-gray-700">Projects Completed</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <AnimatedCounter target={10} suffix="+" className="text-5xl font-bold text-[#567387] mb-2" />
              <p className="text-lg text-gray-700">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Work</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, facilis!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Built-In Team Chat */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/hero-background.png" // Using an existing background image
                  alt="Built-In Team Chat"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold"></h3>Lorem, ipsum dolor.
                  <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>

            {/* Card 2: Task Assignment */}
            <div className="bg-neutral-100 p-8 rounded-lg shadow-md flex flex-col justify-center items-start text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Lorem, ipsum.</h3>
              <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </div>

            {/* Card 3: Real-Time Scheduling */}
            <div className="bg-stone-200 p-8 rounded-lg shadow-md flex flex-col justify-center items-start text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Lorem, ipsum dolor.</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing..</p>
            </div> 

            {/* Card 4: Progress Tracking */}
            <div className="bg-green-700 rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/aboutbg.png" // Using an existing background image
                  alt="Progress Tracking"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">Lorem, ipsum.</h3>
                  <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <Footerdemo />
    </>
  );
}
