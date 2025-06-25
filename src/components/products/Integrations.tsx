
import React from 'react';

const Integrations = () => {
  const integrations = [
    { name: 'M-Pesa', logo: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=200&q=80' },
    { name: 'PayPal', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=200&q=80' },
    { name: 'Slack', logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=200&q=80' },
    { name: 'Firebase', logo: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=200&q=80' },
    { name: 'Docker', logo: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=200&q=80' },
    { name: 'AWS', logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=200&q=80' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Seamless Integrations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with your favorite tools and platforms effortlessly
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {integrations.map((integration, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-500 hover:shadow-2xl hover:bg-white animate-fade-in group cursor-pointer"
              style={{ 
                animationDelay: `${index * 150}ms`,
                transformOrigin: 'center'
              }}
            >
              <img
                src={integration.logo}
                alt={integration.name}
                className="w-20 h-20 object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
