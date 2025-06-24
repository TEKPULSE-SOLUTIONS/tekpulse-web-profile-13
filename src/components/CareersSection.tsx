
import React from 'react';
import { Briefcase, Users, Lightbulb, ArrowRight } from 'lucide-react';

const CareersSection = () => {
  const benefits = [
    {
      icon: Briefcase,
      title: 'Professional Growth',
      description: 'Continuous learning and career advancement opportunities'
    },
    {
      icon: Users,
      title: 'Collaborative Team',
      description: 'Work with talented professionals in a supportive environment'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Be part of cutting-edge projects and emerging technologies'
    }
  ];

  return (
    <section id="careers" className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Join Our Team of Innovators
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            We're always looking for talented individuals who are passionate about technology 
            and want to make a difference in the digital transformation space.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Benefits */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Why Work With Us?</h3>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-blue-100">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 hover:scale-105 flex items-center justify-center gap-2">
                View Open Positions
                <ArrowRight size={20} />
              </button>
              
              <button className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300">
                Submit Resume
              </button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
              alt="Team Collaboration"
              className="rounded-xl shadow-2xl w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-white/10 rounded-xl"></div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-lg shadow-xl max-w-xs">
              <h4 className="font-bold text-lg mb-2">We're Hiring!</h4>
              <p className="text-sm text-gray-600">
                Multiple positions available across development, design, and project management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
