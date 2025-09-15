import React from 'react';
import { FaClock, FaLightbulb, FaClipboardList, FaPencilRuler } from 'react-icons/fa'; // Using react-icons for the icons
import TestimonialSection from './TestimonialSection';

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
          {/* Left Section: Why Choose Us */}
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <h2 className="text-4xl text-[#567387] font-bold mb-4">WHY CHOOSE US</h2>
            <p className="text-gray-600 mb-8">
              We believe in creating lasting relationships with our clients through transparent communication, reliable
            service, and cutting-edge solutions that drive real results.
            </p>
            <button className="bg-[#567387] text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">
              VIEW ALL
            </button>
          </div>

          {/* Right Section: Feature Cards */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              icon={<FaClock className="text-4xl text-[#567387]" />}
              title = "Unmatched Design Aesthetics"
              description = "From contemporary elegance to traditional charm, our curated range of decorative glass films transforms every space into a canvas of creativity. Perfect for homes, studios, gyms, offices, and event spaces."
            />
            <FeatureCard
              icon={<FaLightbulb className="text-4xl text-[#567387]" />}
              title="Premium Quality, Lasting Durability"
              description="We use only high-grade materials that offer long-term clarity, adhesion, and UV protection – ensuring your glass remains protected and visually striking for years."
            />
            <FeatureCard
              icon={<FaClipboardList className="text-4xl text-[#567387]" />}
              title="Customization That Speaks Your Brand"
              description="Whether you're an architect, event planner, or homeowner, we tailor our films to reflect your personality, theme, or brand story – down to the smallest detail."
            />
            <FeatureCard
              icon={<FaPencilRuler className="text-4xl text-[#567387]" />}
              title="Innovation at the Core"
              description="We constantly explore new textures, techniques, and applications – from privacy films to branding elements – keeping you ahead of the curve"
            />
          </div>
        </div>

        {/* Testimonial Section */}
        <TestimonialSection />

        {/* Company Logos Section */}
        {/* <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-16"> */}
          {/* Placeholder for logos - replace with actual image components or SVGs
          <div className="text-gray-400 text-xl font-semibold">THE DOORS</div>
          <div className="text-gray-400 text-xl font-semibold">My House</div>
          <div className="text-gray-400 text-xl font-semibold">Property</div>
          <div className="text-gray-400 text-xl font-semibold">Human Shelter</div>
        </div> */}
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center text-center lg:items-start lg:text-left">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default WhyChooseUsSection;
