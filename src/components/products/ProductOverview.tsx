
import React from 'react';

const ProductOverview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Transform Your Business Operations
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                TekFlow Enterprise Suite is designed for forward-thinking businesses that need more than 
                traditional software. Our comprehensive platform combines ERP functionality, workflow 
                automation, and real-time analytics in one seamless experience.
              </p>
              
              <p className="animate-fade-in" style={{ animationDelay: '400ms' }}>
                Whether you're managing a small team or scaling a large enterprise, TekFlow adapts to 
                your needs. From cafés tracking inventory to ISPs managing customer relationships, 
                our solution grows with your business.
              </p>
              
              <p className="animate-fade-in" style={{ animationDelay: '600ms' }}>
                Built with modern web technologies and cloud-native architecture, TekFlow ensures 
                your data is secure, accessible, and always up-to-date. Experience the future of 
                business management today.
              </p>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              alt="Business Analytics Dashboard"
              className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
