
import React from 'react';
import { Users, Target, Award, Clock } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Users, label: 'Expert Team', value: '50+' },
    { icon: Clock, label: 'Years Experience', value: '10+' },
    { icon: Target, label: 'Projects Delivered', value: '200+' },
    { icon: Award, label: 'Happy Clients', value: '150+' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              About Tekpulse Softwares
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a leading software development company dedicated to transforming businesses 
              through innovative technology solutions. With over a decade of experience, we specialize 
              in creating enterprise-grade software that drives efficiency and growth.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Mission-Driven Approach</h4>
                  <p className="text-gray-600">Empowering businesses with cutting-edge technology solutions that deliver measurable results.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Client-Focused Excellence</h4>
                  <p className="text-gray-600">Building long-term partnerships through exceptional service and innovative solutions.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Team</h4>
                  <p className="text-gray-600">Skilled professionals with deep expertise across multiple technologies and industries.</p>
                </div>
              </div>
            </div>
            
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 hover:scale-105">
              Meet Our Team
            </button>
          </div>

          {/* Image and Stats */}
          <div>
            <div className="relative mb-8">
              <img
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80"
                alt="Our Team at Work"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-blue-600/10 rounded-xl"></div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 transition-colors duration-300"
                >
                  <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
