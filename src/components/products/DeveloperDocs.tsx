
import React from 'react';
import { Search, Code, Book, Terminal } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const DeveloperDocs = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Developer Resources
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to integrate, customize, and extend TekFlow
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Search className="mr-3" />
                Quick Search
              </h3>
              <Input 
                placeholder="Search documentation, APIs, guides..." 
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 mb-6"
              />
              <div className="space-y-3">
                <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                  <Code className="mr-3" size={16} />
                  API Reference
                </Button>
                <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                  <Book className="mr-3" size={16} />
                  Quick Start Guide
                </Button>
                <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                  <Terminal className="mr-3" size={16} />
                  CLI Documentation
                </Button>
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">
                Get Started in Minutes
              </h3>
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <div className="text-green-400">$ npm install @tekflow/cli</div>
                <div className="text-blue-400 mt-2">$ tekflow init my-project</div>
                <div className="text-yellow-400 mt-2">$ tekflow start</div>
                <div className="text-gray-400 mt-4"># Your TekFlow instance is now running!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperDocs;
