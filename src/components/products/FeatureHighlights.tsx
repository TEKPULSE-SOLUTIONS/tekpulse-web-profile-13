
import React from 'react';
import { Activity, Zap, Shield, Globe, BarChart3, Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FeatureHighlights = () => {
  const features = [
    {
      icon: Activity,
      title: 'Real-time Analytics',
      description: 'Monitor your business metrics with live dashboards and instant notifications.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with sub-second response times and minimal resource usage.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption, GDPR compliance, and advanced access controls.'
    },
    {
      icon: Globe,
      title: 'Global Integration',
      description: 'Connect with 500+ APIs including M-Pesa, PayPal, and major business tools.'
    },
    {
      icon: BarChart3,
      title: 'Smart Reporting',
      description: 'AI-powered insights and automated report generation with customizable templates.'
    },
    {
      icon: Settings,
      title: 'Workflow Automation',
      description: 'Design complex workflows with drag-and-drop interface and conditional logic.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to streamline operations, boost productivity, and scale your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 hover:scale-105 border-none bg-white"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
