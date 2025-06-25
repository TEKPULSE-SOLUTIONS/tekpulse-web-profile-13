
import React from 'react';
import Navigation from '@/components/Navigation';
import ProductHero from '@/components/products/ProductHero';
import FeatureHighlights from '@/components/products/FeatureHighlights';
import ProductOverview from '@/components/products/ProductOverview';
import HowItWorks from '@/components/products/HowItWorks';
import Integrations from '@/components/products/Integrations';
import SecurityCompliance from '@/components/products/SecurityCompliance';
import UseCases from '@/components/products/UseCases';
import Testimonials from '@/components/products/Testimonials';
import ProductGallery from '@/components/products/ProductGallery';
import DownloadAccess from '@/components/products/DownloadAccess';
import DeveloperDocs from '@/components/products/DeveloperDocs';
import Changelog from '@/components/products/Changelog';
import FAQs from '@/components/products/FAQs';
import ContactForm from '@/components/products/ContactForm';
import Newsletter from '@/components/products/Newsletter';
import RepeatedCTA from '@/components/products/RepeatedCTA';
import Footer from '@/components/Footer';
import BackToTop from '@/components/products/BackToTop';

const Products = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ProductHero />
      <FeatureHighlights />
      <ProductOverview />
      <HowItWorks />
      <Integrations />
      <SecurityCompliance />
      <UseCases />
      <Testimonials />
      <ProductGallery />
      <DownloadAccess />
      <DeveloperDocs />
      <Changelog />
      <FAQs />
      <ContactForm />
      <Newsletter />
      <RepeatedCTA />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Products;
