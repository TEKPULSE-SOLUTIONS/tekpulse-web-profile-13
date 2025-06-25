
import React, { useEffect, useRef, useState } from 'react';
import { Activity, Zap, Shield, Globe, BarChart3, Settings, ArrowRight, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AnimatedFeatures = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the animation of cards
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 200);
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

  const features = [
    {
      icon: Activity,
      title: 'Real-time Analytics',
      description: 'Monitor your business metrics with live dashboards and instant notifications.',
      color: 'from-blue-500 to-cyan-500',
      delay: 0
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with sub-second response times and minimal resource usage.',
      color: 'from-yellow-500 to-orange-500',
      delay: 100
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption, GDPR compliance, and advanced access controls.',
      color: 'from-green-500 to-emerald-500',
      delay: 200
    },
    {
      icon: Globe,
      title: 'Global Integration',
      description: 'Connect with 500+ APIs including M-Pesa, PayPal, and major business tools.',
      color: 'from-purple-500 to-violet-500',
      delay: 300
    },
    {
      icon: BarChart3,
      title: 'Smart Reporting',
      description: 'AI-powered insights and automated report generation with customizable templates.',
      color: 'from-indigo-500 to-blue-500',
      delay: 400
    },
    {
      icon: Settings,
      title: 'Workflow Automation',
      description: 'Design complex workflows with drag-and-drop interface and conditional logic.',
      color: 'from-pink-500 to-rose-500',
      delay: 500
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 mb-6 animate-pulse-subtle">
            <Sparkles className="w-4 h-4 mr-2" />
            Powerful Features
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Built for Modern
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block">
              Businesses
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Everything you need to streamline operations, boost productivity, and scale your business with cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`group border-none bg-white/70 backdrop-blur-sm hover:bg-white transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${feature.delay}ms`,
                transform: visibleCards.includes(index) ? 'translateY(0)' : 'translateY(40px)'
              }}
            >
              <CardContent className="p-8 text-center relative overflow-hidden">
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon with enhanced animation */}
                <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                  <feature.icon size={32} className="text-white group-hover:animate-pulse" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>
                
                {/* Animated arrow that appears on hover */}
                <div className="flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-blue-600 font-medium mr-2">Learn More</span>
                  <ArrowRight size={16} className="text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedFeatures;
