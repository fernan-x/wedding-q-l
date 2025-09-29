import Countdown from './Countdown';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';
import HERO_IMG from '../assets/hero.webp';

const Hero = () => {
  return (
    <section id="accueil" className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMG}
          alt="Wedding venue"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/20 to-charcoal/40"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-white mt-16">
        <h1 className="font-montaga text-3xl md:text-4xl lg:text-4xl mb-8 leading-none font-light">
          Nous avons l'honneur de vous annoncer notre mariage
        </h1>
        <h2 className="font-montaga text-6xl md:text-7xl lg:text-8xl mb-12 tracking-wide font-light">
          Léa & Quentin
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 text-white/95">
          <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md px-8 py-4 rounded-full border border-white/30">
            <Calendar className="text-white" size={18} />
            <span className="font-light text-lg">29 août 2026</span>
          </div>
          <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md px-8 py-4 rounded-full border border-white/30">
            <MapPin className="text-white" size={18} />
            <span className="font-light text-lg">Nort-sur-Erdre</span>
          </div>
        </div>

        <div className="mb-16">
          <Countdown targetDate="2026-08-29T10:30:00" />
        </div>

        
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/70" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;