
import React from 'react';
import { Settings, BarChart3, Workflow, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Settings,
      title: 'Enterprise Resource Planning (ERP)',
      description: 'Comprehensive ERP solutions that streamline business processes and improve operational efficiency.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      blogSlug: 'ai-software-development'
    },
    {
      icon: BarChart3,
      title: 'Revenue Management Systems',
      description: 'Advanced revenue tracking and management systems to optimize your financial performance.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80',
      blogSlug: 'machine-learning-predictive-analytics'
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Intelligent automation solutions that reduce manual work and increase productivity.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80',
      blogSlug: 'ai-software-development'
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed specifically for your unique business requirements.',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80',
      blogSlug: 'blockchain-cybersecurity'
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Built for Modern Businesses
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive software solutions designed to transform your business operations and drive digital innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-blue-600/30 transition-colors duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <solution.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {solution.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {solution.description}
                </p>
                
                <Link 
                  to={`/blog/${solution.blogSlug}`}
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 group-hover:translate-x-2 transform transition-transform inline-flex items-center gap-1"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
