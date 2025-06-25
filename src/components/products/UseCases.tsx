import React from 'react';
import { Coffee, Wifi, GraduationCap, Building2, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const UseCases = () => {
  const cases = [
    {
      icon: Coffee,
      title: 'Cafés & Restaurants',
      description: 'Manage inventory, track sales, and streamline operations with integrated POS systems.',
      features: ['Inventory Management', 'Sales Analytics', 'Staff Scheduling']
    },
    {
      icon: Wifi,
      title: 'Internet Service Providers',
      description: 'Customer management, billing automation, and network monitoring in one platform.',
      features: ['Customer Portal', 'Automated Billing', 'Network Monitoring']
    },
    {
      icon: GraduationCap,
      title: 'Educational Institutions',
      description: 'Student information systems, course management, and administrative workflows.',
      features: ['Student Records', 'Course Planning', 'Grade Management']
    },
    {
      icon: Building2,
      title: 'Financial Services',
      description: 'Compliance tracking, client management, and automated reporting for financial firms.',
      features: ['Compliance Tools', 'Client Management', 'Risk Assessment']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perfect for Every Industry
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how TekFlow transforms operations across different sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((useCase, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-none bg-white overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                    <useCase.icon size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {useCase.description}
                    </p>
                    <ul className="space-y-2">
                      {useCase.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-500">
                          <CheckCircle size={16} className="text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
