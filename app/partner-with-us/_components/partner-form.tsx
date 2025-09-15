'use client';
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const PartnerForm = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-6xl mx-auto mt-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#003366]">Become a Partner</h2>
        <p className="text-lg text-gray-600 mt-4">
          Ready to join our partner network? Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </div>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Label htmlFor="companyName">Company Name</Label>
            <Input id="companyName" type="text" />
          </div>
          <div>
            <Label htmlFor="contactPerson">Contact Person</Label>
            <Input id="contactPerson" type="text" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" />
          </div>
          <div>
            <Label htmlFor="gstNumber">GST Number</Label>
            <Input id="gstNumber" type="text" />
          </div>
          <div>
            <Label htmlFor="visitingCard">Upload Visiting Card</Label>
            <Input id="visitingCard" type="file" />
            <p className="text-sm text-gray-500 mt-1">Choose file (JPG, PNG, or PDF)</p>
          </div>
        </div>
        <div className="mt-8">
          <Label htmlFor="companyDescription">Company Description</Label>
          <Textarea id="companyDescription" placeholder="Tell us about your company and why you'd like to partner with us..." />
        </div>
        <div className="text-center mt-8">
          <Button type="submit" className="bg-[#003366] text-white hover:bg-[#002244]">
            Submit Partnership Application
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PartnerForm;
