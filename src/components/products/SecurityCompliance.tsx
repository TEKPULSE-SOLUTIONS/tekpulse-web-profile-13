
import React from 'react';
import { Shield, Lock, CheckCircle, Globe } from 'lucide-react';

const SecurityCompliance = () => {
  const features = [
    { icon: Shield, title: 'SSL Encryption', description: 'End-to-end encryption for all data transmission' },
    { icon: Lock, title: 'GDPR Ready', description: 'Fully compliant with European data protection regulations' },
    { icon: CheckCircle, title: 'SOC 2 Certified', description: 'Industry-standard security and availability controls' },
    { icon: Globe, title: 'Global Compliance', description: 'Meets international security standards and regulations' }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Enterprise-Grade Security
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your data security is our top priority. Built with industry-leading security standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon size={32} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityCompliance;
