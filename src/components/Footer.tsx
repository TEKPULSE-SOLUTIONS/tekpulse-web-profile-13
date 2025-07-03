
import React from 'react';
import { Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const companyLinks = [
    { label: 'About Us', action: () => scrollToSection('about') },
    { label: 'Careers', action: () => scrollToSection('careers') },
    { label: 'Blog', action: () => window.location.href = '/blog' },
    { label: 'News', action: () => window.location.href = '/news' }
  ];

  const solutionLinks = [
    { label: 'ERP Systems', action: () => scrollToSection('solutions') },
    { label: 'Revenue Management', action: () => scrollToSection('solutions') },
    { label: 'Workflow Automation', action: () => scrollToSection('solutions') },
    { label: 'Custom Development', action: () => scrollToSection('solutions') }
  ];

  const supportLinks = [
    { label: 'Help Center', action: () => console.log('Navigate to help') },
    { label: 'Documentation', action: () => console.log('Navigate to docs') },
    { label: 'API Reference', action: () => console.log('Navigate to API') },
    { label: 'Contact Support', action: () => scrollToSection('contact') }
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/tekpulse-solutions-60aa8a372' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              TEKPULSE SOFTWARES
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming businesses through innovative software solutions and 
              digital transformation expertise.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                <div className="text-sm text-gray-300">
                  <div className="font-semibold mb-1">Nairobi HQ:</div>
                  <div>5th Floor, Norwich Union House</div>
                  <div>Moi Avenue, Nairobi, Kenya</div>
                  <div>P.O. Box 67204-00200</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                <div className="text-sm text-gray-300">
                  <div className="font-semibold mb-1">Kilifi Branch:</div>
                  <div>Green Estate, Mombasa-Malindi Road</div>
                  <div>Mnarani, Kilifi</div>
                  <div>P.O. Box 984, 80108</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <div className="text-sm text-gray-300">
                  <div>+254798653043</div>
                  <div>+254768300226</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <div className="text-sm text-gray-300">
                  <div>info@tekpulsesolutions.com</div>
                  <div>sales@tekpulsesolutions.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              {solutionLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 mb-6">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h5 className="text-sm font-semibold mb-3">Follow Us</h5>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 TEKPULSE SOFTWARES. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/privacy-policy" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                Terms of Service
              </a>
              <a href="/cookie-policy" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
