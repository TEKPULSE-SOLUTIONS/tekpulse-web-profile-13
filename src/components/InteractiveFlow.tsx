
import React, { useEffect, useRef, useState } from 'react';
import { Upload, Settings, BarChart, ArrowRight, CheckCircle } from 'lucide-react';

const InteractiveFlow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps(prev => [...prev, index]);
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      icon: Upload,
      title: 'Import Your Data',
      description: 'Seamlessly migrate from existing systems or start fresh with our guided setup wizard.',
      details: 'Support for CSV, Excel, API imports with automatic data validation and cleansing.'
    },
    {
      icon: Settings,
      title: 'Configure Workflows',
      description: 'Design custom processes using our intuitive drag-and-drop workflow builder.',
      details: 'Visual workflow designer with conditional logic, automated triggers, and approval chains.'
    },
    {
      icon: BarChart,
      title: 'Monitor & Optimize',
      description: 'Track performance with real-time analytics and AI-powered optimization suggestions.',
      details: 'Live dashboards, predictive analytics, and automated insights to improve efficiency.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-indigo-200 to-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            How TekFlow
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Get up and running in minutes with our streamlined three-step process
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 transform -translate-y-1/2 z-0">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-in-out"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative transition-all duration-700 ${
                  visibleSteps.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Step Card */}
                <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group ${
                  activeStep === index ? 'scale-105 shadow-blue-500/20' : 'hover:scale-105'
                }`}>
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-500 ${
                      activeStep === index 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse-glow' 
                        : 'bg-gray-400'
                    }`}>
                      {index + 1}
                    </div>
                    
                    {visibleSteps.includes(index) && (
                      <CheckCircle className="w-6 h-6 text-green-500 animate-bounce-gentle" />
                    )}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 ${
                    activeStep === index 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 rotate-12 scale-110' 
                      : 'bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:rotate-6'
                  }`}>
                    <step.icon 
                      size={32} 
                      className={`transition-colors duration-500 ${
                        activeStep === index ? 'text-white' : 'text-gray-600 group-hover:text-white'
                      }`} 
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 text-center mb-4">
                    {step.description}
                  </p>

                  {/* Expandable Details */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    activeStep === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-sm text-gray-500 text-center">
                        {step.details}
                      </p>
                    </div>
                  </div>

                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight 
                        size={24} 
                        className={`transition-all duration-500 ${
                          activeStep >= index ? 'text-blue-500 animate-pulse' : 'text-gray-300'
                        }`} 
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveFlow;
