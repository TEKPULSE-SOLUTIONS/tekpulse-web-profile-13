
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Github, FileText, Package } from 'lucide-react';

const DownloadAccess = () => {
  const downloads = [
    { icon: Github, title: 'GitHub Repository', subtitle: 'Access source code', action: 'View on GitHub' },
    { icon: Package, title: 'Docker Image', subtitle: 'Quick deployment', action: 'Pull Image' },
    { icon: Download, title: 'Desktop App', subtitle: 'Windows, Mac, Linux', action: 'Download' },
    { icon: FileText, title: 'Documentation', subtitle: 'Complete user guide', action: 'View Docs' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get Started Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multiple ways to access and deploy TekFlow for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {downloads.map((item, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <item.icon size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-6">{item.subtitle}</p>
              <Button variant="outline" className="w-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
                {item.action}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadAccess;
