import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 10);
      
      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { label: 'Home', href: 'home' },
    { label: 'About Us', href: 'about' },
    { label: 'Products', href: '/products', isRoute: true },
    { label: 'Projects on Sale', href: '/projects-on-sale', isRoute: true },
    { label: 'Project Request', href: '/project-request', isRoute: true },
    { label: 'Solutions', href: 'solutions' },
    { label: 'Industries', href: 'industries' },
    { label: 'Our Clients', href: 'clients' },
    { label: 'Careers', href: 'careers' },
    { label: 'Contact Us', href: 'contact' },
  ];

  const handleMenuClick = (item: any) => {
    if (item.isRoute) {
      window.location.href = item.href;
    } else {
      scrollToSection(item.href);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-lg shadow-lg py-2 border-b border-white/20' 
        : 'bg-white/95 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo with enhanced animation */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => scrollToSection('home')}>
              Tekpulse Softwares
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => handleMenuClick(item)}
                  className={`relative text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 group ${
                    isScrolled ? 'hover:bg-blue-50 rounded-lg' : ''
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-all duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu with enhanced animation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4'
        } overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-lg rounded-lg shadow-lg mt-4 border border-white/20">
            {menuItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => handleMenuClick(item)}
                className={`text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 text-base font-medium w-full text-left transition-all duration-300 rounded-lg transform ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
