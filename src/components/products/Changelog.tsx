
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const Changelog = () => {
  const versions = [
    {
      version: 'v2.1.0',
      date: '2024-01-15',
      changes: ['Added real-time collaboration features', 'Improved dashboard performance', 'New integration with Slack']
    },
    {
      version: 'v2.0.5',
      date: '2024-01-08',
      changes: ['Fixed authentication issues', 'Updated security protocols', 'Enhanced mobile responsiveness']
    },
    {
      version: 'v2.0.0',
      date: '2023-12-20',
      changes: ['Major UI overhaul', 'Introduced workflow automation', 'Advanced analytics dashboard']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Changelog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest features and improvements
          </p>
        </div>

        <div className="space-y-8">
          {versions.map((version, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">{version.version}</h3>
                <div className="flex items-center text-gray-600">
                  <Calendar size={16} className="mr-2" />
                  {version.date}
                </div>
              </div>
              <ul className="space-y-3">
                {version.changes.map((change, idx) => (
                  <li key={idx} className="flex items-start">
                    <ArrowRight size={16} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{change}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Changelog;
