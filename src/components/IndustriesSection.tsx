
import React from 'react';
import { Building, Heart, GraduationCap, CreditCard, Phone } from 'lucide-react';

const IndustriesSection = () => {
  const industries = [
    {
      icon: Building,
      title: 'Government',
      description: 'Digital transformation solutions for public sector efficiency and citizen services.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Advanced healthcare management systems and patient care solutions.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Educational technology platforms and learning management systems.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: CreditCard,
      title: 'Financial Services',
      description: 'Secure financial software solutions and banking automation systems.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Phone,
      title: 'Telecoms',
      description: 'Telecommunications infrastructure and customer management solutions.',
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Delivering specialized software solutions across diverse industries with deep domain expertise and proven results.
          </p>
        </div>

        {/* Featured Industry Image */}
        <div className="mb-12">
          <img
            src="https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=1200&q=80"
            alt="Modern Business Architecture"
            className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${industry.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <industry.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {industry.title}
              </h3>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 hover:scale-105">
            View Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
