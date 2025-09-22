import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#ceremonie', label: 'Cérémonie' },
    { href: '#reception', label: 'Réception' },
    { href: '#pratique', label: 'Pratique' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/15 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="font-montaga text-xl text-white font-light tracking-wide">L&Q</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-light uppercase tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/20 bg-white/15 backdrop-blur-md">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-3 text-white/90 hover:text-white transition-colors duration-300 uppercase tracking-wide font-light"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;