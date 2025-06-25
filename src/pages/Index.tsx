
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AnimatedFeatures from '@/components/AnimatedFeatures';
import InteractiveFlow from '@/components/InteractiveFlow';
import SolutionsSection from '@/components/SolutionsSection';
import IndustriesSection from '@/components/IndustriesSection';
import AboutSection from '@/components/AboutSection';
import CareersSection from '@/components/CareersSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AnimatedFeatures />
      <InteractiveFlow />
      <SolutionsSection />
      <IndustriesSection />
      <AboutSection />
      <CareersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
