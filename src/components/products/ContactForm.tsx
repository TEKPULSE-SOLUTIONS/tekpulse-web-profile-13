
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form will be submitted to info@tekpulsesolutions.com
    console.log('Form submitted to info@tekpulsesolutions.com');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or need support? Contact TEKPULSE SOFTWARES - we're here to help you succeed.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <Input placeholder="Your full name" className="focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <Input type="email" placeholder="your@email.com" className="focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <Select>
                <SelectTrigger className="focus:ring-blue-500 focus:border-blue-500">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="support">Technical Support</SelectItem>
                  <SelectItem value="feature">Feature Request</SelectItem>
                  <SelectItem value="bug">Report a Bug</SelectItem>
                  <SelectItem value="demo">Request Demo</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <Textarea 
                placeholder="Tell us how we can help you..." 
                rows={6}
                className="focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg">
              Send Message to TEKPULSE SOFTWARES
            </Button>
          </form>
          
          <div className="mt-6 pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
            <p>Messages will be sent to: <strong>info@tekpulsesolutions.com</strong></p>
            <p className="mt-2">
              <strong>Office Hours:</strong> Monday – Friday, 8:00 AM – 5:00 PM (Nairobi HQ) | 9:00 AM – 4:30 PM (Kilifi Branch)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
