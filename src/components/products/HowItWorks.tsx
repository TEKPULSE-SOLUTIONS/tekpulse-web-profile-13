
import React from 'react';
import { ArrowRight, Upload, Settings, BarChart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: 'Import Your Data',
      description: 'Seamlessly migrate from existing systems or start fresh with our guided setup wizard.'
    },
    {
      icon: Settings,
      title: 'Configure Workflows',
      description: 'Design custom processes using our intuitive drag-and-drop workflow builder.'
    },
    {
      icon: BarChart,
      title: 'Monitor & Optimize',
      description: 'Track performance with real-time analytics and AI-powered optimization suggestions.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How TekFlow Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get up and running in minutes with our streamlined setup process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
              
              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight size={24} className="text-blue-500" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
