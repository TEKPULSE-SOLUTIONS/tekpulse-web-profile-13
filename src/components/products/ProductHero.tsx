
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Download, Github } from 'lucide-react';

const ProductHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TekFlow
            </span>
            <br />
            <span className="text-gray-800">Enterprise Suite</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionary workflow automation and ERP solution that transforms how businesses operate. 
            Real-time analytics, seamless integrations, and intelligent automation - all in one platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 text-lg hover:scale-105 transition-all duration-300 shadow-lg">
              <Play size={20} className="mr-2 group-hover:animate-pulse" />
              Try Live Demo
            </Button>
            
            <Button variant="outline" size="lg" className="border-2 border-gray-300 text-gray-700 px-8 py-4 text-lg hover:border-blue-600 hover:text-blue-600 hover:scale-105 transition-all duration-300">
              <Download size={20} className="mr-2" />
              Download Free
            </Button>
            
            <Button variant="ghost" size="lg" className="text-gray-600 hover:text-gray-900 px-8 py-4 text-lg hover:scale-105 transition-all duration-300">
              <Github size={20} className="mr-2" />
              View on GitHub
            </Button>
          </div>
        </div>
        
        {/* Product Preview */}
        <div className="relative animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl p-4 transform hover:scale-105 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
              alt="TekFlow Dashboard Preview"
              className="rounded-xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-6 -right-6 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-bounce">
            ✨ Live Demo Available
          </div>
          
          <div className="absolute -bottom-6 -left-6 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
            🚀 Free Download
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
