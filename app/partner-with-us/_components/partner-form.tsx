'use client';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner'; // Assuming sonner is available for toasts

const PartnerForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    gstNumber: '',
    companyDescription: '',
  });
  const [visitingCard, setVisitingCard] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVisitingCard(e.target.files[0]);
    } else {
      setVisitingCard(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key as keyof typeof formData]);
    }
    if (visitingCard) {
      data.append('visitingCard', visitingCard);
    }

    try {
      const response = await fetch('/api/partner-form-submission', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        toast.success('Partnership application submitted successfully!');
        // Clear form
        setFormData({
          companyName: '',
          contactPerson: '',
          email: '',
          phone: '',
          gstNumber: '',
          companyDescription: '',
        });
        setVisitingCard(null);
        // Optionally reset file input visually
        const fileInput = document.getElementById('visitingCard') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || 'Failed to submit partnership application.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-6xl mx-auto mt-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#003366]">Become a Partner</h2>
        <p className="text-lg text-gray-600 mt-4">
          Ready to join our partner network? Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Label htmlFor="companyName">Company Name</Label>
            <Input id="companyName" type="text" value={formData.companyName} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="contactPerson">Contact Person</Label>
            <Input id="contactPerson" type="text" value={formData.contactPerson} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="gstNumber">GST Number</Label>
            <Input id="gstNumber" type="text" value={formData.gstNumber} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="visitingCard">Upload Visiting Card</Label>
            <Input id="visitingCard" type="file" accept=".jpg,.jpeg,.png,.pdf" onChange={handleFileChange} />
            <p className="text-sm text-gray-500 mt-1">Choose file (JPG, PNG, or PDF)</p>
          </div>
        </div>
        <div className="mt-8">
          <Label htmlFor="companyDescription">Company Description</Label>
          <Textarea
            id="companyDescription"
            placeholder="Tell us about your company and why you'd like to partner with us..."
            value={formData.companyDescription}
            onChange={handleChange}
            required
          />
        </div>
        <div className="text-center mt-8">
          <Button type="submit" className="bg-[#003366] text-white hover:bg-[#002244]" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Partnership Application'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PartnerForm;
