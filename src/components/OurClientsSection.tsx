
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Users, Globe, Shield, TrendingUp, Star, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const OurClientsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    users: 0,
    institutions: 0,
    uptime: 0,
    continents: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  // Client logos data
  const clients = [
    { name: 'Safaricom', logo: '/placeholder.svg', description: 'Leading telecommunications provider' },
    { name: 'Liquid Telecom', logo: '/placeholder.svg', description: 'Pan-African telecoms group' },
    { name: 'Ministry of ICT', logo: '/placeholder.svg', description: 'Government technology initiative' },
    { name: 'NSSF', logo: '/placeholder.svg', description: 'National Social Security Fund' },
    { name: 'Kenya Power (KPLC)', logo: '/placeholder.svg', description: 'National electricity provider' },
    { name: 'JKUAT', logo: '/placeholder.svg', description: 'Technical university' },
    { name: 'Moringa School', logo: '/placeholder.svg', description: 'Coding bootcamp' },
    { name: 'Equity Bank', logo: '/placeholder.svg', description: 'Leading financial institution' },
    { name: 'Zuku', logo: '/placeholder.svg', description: 'Cable TV and internet provider' },
    { name: 'Nairobi Innovation Week', logo: '/placeholder.svg', description: 'Innovation conference' }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "Tekpulse has revolutionized our digital infrastructure, enabling us to serve millions of customers more efficiently.",
      name: "Sarah Kimani",
      title: "ICT Manager, NSSF",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "The reliability and scalability of their solutions have been instrumental in our digital transformation journey.",
      name: "David Mwangi",
      title: "Technology Director, Equity Bank",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Outstanding technical support and innovative solutions that have exceeded our expectations.",
      name: "Grace Wanjiku",
      title: "Head of Innovation, Safaricom",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
    }
  ];

  // Metrics data
  const metrics = [
    { icon: Users, label: 'Daily Users', value: 12000, suffix: '+' },
    { icon: Globe, label: 'Institutions Onboarded', value: 50, suffix: '+' },
    { icon: Shield, label: 'System Uptime', value: 99.9, suffix: '%' },
    { icon: TrendingUp, label: 'Continents Covered', value: 5, suffix: '' }
  ];

  // Map locations for visualization
  const mapLocations = [
    { name: 'Nairobi', x: 52, y: 65, clients: 8 },
    { name: 'Mombasa', x: 54, y: 70, clients: 3 },
    { name: 'Kisumu', x: 49, y: 62, clients: 2 },
    { name: 'Nakuru', x: 50, y: 60, clients: 1 }
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start counters animation
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible, testimonials.length]);

  // Animate counters
  const animateCounters = () => {
    metrics.forEach((metric, index) => {
      const duration = 2000;
      const steps = 60;
      const increment = metric.value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= metric.value) {
          current = metric.value;
          clearInterval(timer);
        }

        setCounters(prev => ({
          ...prev,
          [Object.keys(prev)[index]]: current
        }));
      }, duration / steps);
    });
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="clients" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our solutions are relied upon by top-tier organizations across government, education, 
            telecommunications, and enterprise sectors.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {clients.map((client, index) => (
              <div
                key={client.name}
                className={`group relative transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                    {client.description}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className={`mb-20 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Card className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm shadow-lg">
            <CardContent className="p-8">
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <Star className="text-yellow-400 fill-current w-6 h-6" />
                  <div className="flex space-x-2">
                    <button
                      onClick={prevTestimonial}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="transition-all duration-500">
                  <blockquote className="text-lg md:text-xl text-gray-700 mb-6 italic">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <img
                      src={testimonials[currentTestimonial].photo}
                      alt={testimonials[currentTestimonial].name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-gray-600">
                        {testimonials[currentTestimonial].title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Metrics Summary */}
        <div className={`mb-20 transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => {
              const IconComponent = metric.icon;
              const counterKey = Object.keys(counters)[index];
              const currentValue = counters[counterKey as keyof typeof counters];
              
              return (
                <Card key={metric.label} className="text-center p-6 bg-white/80 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-0">
                    <IconComponent className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {metric.label === 'System Uptime' 
                        ? currentValue.toFixed(1) 
                        : Math.floor(currentValue).toLocaleString()
                      }{metric.suffix}
                    </div>
                    <p className="text-gray-600 text-sm">{metric.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Map Visualization */}
        <div className={`mb-16 transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Card className="bg-white/80 backdrop-blur-sm shadow-lg overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
                Our Impact Across Kenya
              </h3>
              <div className="relative max-w-2xl mx-auto">
                {/* Simplified Kenya map outline */}
                <div className="relative w-full h-64 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                  {mapLocations.map((location, index) => (
                    <div
                      key={location.name}
                      className={`absolute group cursor-pointer transition-all duration-500 ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                      }`}
                      style={{ 
                        left: `${location.x}%`, 
                        top: `${location.y}%`,
                        transitionDelay: `${1400 + index * 200}ms`
                      }}
                    >
                      <div className="relative">
                        <div className="w-4 h-4 bg-blue-600 rounded-full animate-pulse-slow">
                          <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-75"></div>
                        </div>
                        <MapPin className="w-3 h-3 text-white absolute top-0.5 left-0.5" />
                        
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                          {location.name}: {location.clients} clients
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-1500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Join the growing list of trusted partners
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the same level of excellence and innovation that has made us the preferred choice 
            for industry leaders across East Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClientsSection;
