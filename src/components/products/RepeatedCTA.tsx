
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const RepeatedCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Experience the Power?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of businesses that have already transformed their operations with TekFlow. 
            Start your journey to efficiency and growth today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="group bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Play size={20} className="mr-2 group-hover:animate-pulse" />
              Start Free Trial
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Schedule Demo
            </Button>
          </div>
          
          <p className="text-sm mt-6 opacity-75">
            No credit card required • Setup in under 5 minutes • 24/7 support included
          </p>
        </div>
      </div>
    </section>
  );
};

export default RepeatedCTA;
