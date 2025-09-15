import React from 'react';
import { TrendingUp, Wrench, Clipboard, Users } from 'lucide-react';
import PartnerForm from './_components/partner-form';
import { Footerdemo } from '@/components/ui/footer-section';

const PartnerWithUs = () => {
  return (
    <div className="bg-[#F7F5F2] min-h-screen pt-32">
      <div className="container mx-auto px-4 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#003366]">Partner With Us</h1>
          <p className="text-lg text-[#003366] mt-4">
            Join our network of successful partners and grow your business with Amber's innovative solutions and comprehensive support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <TrendingUp className="mx-auto h-12 w-12 text-[#003366] mb-4" />
            <h2 className="text-2xl font-bold text-[#003366] mb-2">Revenue Growth</h2>
            <p className="text-gray-600">Increase your revenue with our proven partnership model</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Wrench className="mx-auto h-12 w-12 text-[#003366] mb-4" />
            <h2 className="text-2xl font-bold text-[#003366] mb-2">Technical Support</h2>
            <p className="text-gray-600">Get comprehensive technical support and training</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Clipboard className="mx-auto h-12 w-12 text-[#003366] mb-4" />
            <h2 className="text-2xl font-bold text-[#003366] mb-2">Marketing Materials</h2>
            <p className="text-gray-600">Access to professional marketing materials and resources</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Users className="mx-auto h-12 w-12 text-[#003366] mb-4" />
            <h2 className="text-2xl font-bold text-[#003366] mb-2">Dedicated Team</h2>
            <p className="text-gray-600">Work with our dedicated partnership team</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0">
            <div className="text-center">
              <div className="bg-[#D6EAF8] rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-[#003366]">1</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Apply</h3>
              <p className="text-gray-600">Submit your partnership application and tell us about your business</p>
            </div>
            <div className="text-center">
              <div className="bg-[#D6EAF8] rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-[#003366]">2</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Onboard</h3>
              <p className="text-gray-600">Complete training and get access to our partner resources</p>
            </div>
            <div className="text-center">
              <div className="bg-[#D6EAF8] rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-[#003366]">3</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Grow</h3>
              <p className="text-gray-600">Start selling and earning commissions with our support</p>
            </div>
          </div>
        </div>
        <PartnerForm />
      </div>
      <Footerdemo />
    </div>
  );
};

export default PartnerWithUs;
