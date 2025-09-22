import React from 'react';
import { Heart } from 'lucide-react';
import FOOTER_IMG from '../assets/the-place.webp';

const Footer = () => {
  return (
    <footer className="relative py-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={FOOTER_IMG}
          alt="Wedding footer"
          className="w-full h-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-charcoal/70"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Heart className="text-blush fill-blush" size={24} />
            <span className="font-montaga text-4xl text-cream font-light tracking-wide">Léa & Quentin</span>
            <Heart className="text-blush fill-blush" size={24} />
          </div>
        
          <p className="text-cream/90 leading-relaxed text-xl mb-12 font-light tracking-wide">
            29 août 2026 — Nort-sur-Erdre (Loire-Atlantique)
          </p>
        
          <div className="pt-10 border-t border-cream/30">
            <p className="text-cream/70 italic font-light text-lg">
              Site créé avec amour par <a href='https://github.com/fernan-x' className='underline' target='_blank'>Fabien</a> pour notre mariage
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;