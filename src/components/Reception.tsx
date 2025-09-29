import React from 'react';
import { Navigation, Clock } from 'lucide-react';
import DOMAIN_IMG from '../assets/domain.webp';
import DOMAIN_ORANGERIE_IMG from '../assets/domain_orangerie.webp';
import DOMAIN_PARC_IMG from '../assets/domain_parc.webp';

const Reception = () => {
  const handleDirections = () => {
    window.open('https://maps.google.com/?q=Domaine+du+Château+de+Montreuil+Nort-sur-Erdre', '_blank');
  };

  return (
    <section id="reception" className="py-24 px-4 bg-gradient-to-b from-white via-blush/8 to-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-32 right-16 w-28 h-28 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full text-sage">
          <path d="M50,10 L60,30 L80,25 L70,45 L90,55 L70,65 L80,85 L60,80 L50,100 L40,80 L20,85 L30,65 L10,55 L30,45 L20,25 L40,30 Z" fill="currentColor" />
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-bordeaux/70 mb-4 font-light">La réception</p>
          <h2 className="font-montaga text-4xl md:text-6xl text-charcoal mb-6 leading-tight font-light">
            Domaine du Château de Montreuil
          </h2>
          <p className="text-xl text-charcoal/70 font-light">Nort-sur-Erdre</p>
        </div>

        {/* Main content with enhanced images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Enhanced images gallery */}
          <div className="relative space-y-6">
            {/* Main venue image */}
            <div className="relative">
              <div className="bg-white p-5 rounded-xl shadow-lg transform -rotate-1 hover:rotate-0 transition-all duration-500 hover:scale-105">
                <img 
                  src={DOMAIN_IMG}
                  alt="Domaine du Château de Montreuil"
                  className="w-full h-72 object-cover rounded-lg"
                />
                <p className="text-center text-charcoal/60 mt-3 font-light italic">Le Château</p>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blush/20 p-3 rounded-full shadow-md transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <svg className="w-5 h-5 text-blush" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            
            {/* Secondary images - enhanced layout */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-xl shadow-lg transform rotate-2 hover:rotate-0 transition-all duration-300 hover:scale-105">
                <img 
                  src={DOMAIN_ORANGERIE_IMG}
                  alt="L'Orangerie"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <p className="text-center text-charcoal/60 mt-2 text-sm font-light italic">L'Orangerie</p>
              </div>
              <div className="bg-white p-3 rounded-xl shadow-lg transform -rotate-1 hover:rotate-0 transition-all duration-300 hover:scale-105">
                <img 
                  src={DOMAIN_PARC_IMG}
                  alt="Les jardins"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <p className="text-center text-charcoal/60 mt-2 text-sm font-light italic">Les jardins</p>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-8">
            {/* Reception details */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-sage/20">
              <div className="prose text-charcoal/80 leading-relaxed space-y-6 font-light">
                <p className="text-lg">
                  Un convoi partira de l'église après la cérémonie (environ 30 minutes de route).
                </p>
                <p className="text-lg">
                  Comme le veut la tradition nantaise, la réception se déroulera toute la journée.
                </p>
                
                <div className="bg-blush/15 rounded-xl p-6 text-center my-6">
                  <p className="text-xl font-light text-bordeaux italic leading-relaxed">
                    Une réception dans l'Orangerie.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Enhanced schedule */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-sage/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-bordeaux/20 rounded-full flex items-center justify-center">
                  <Clock className="text-bordeaux" size={24} />
                </div>
                <h3 className="font-montaga text-2xl text-charcoal font-light">Programme</h3>
              </div>
              <div className="space-y-4 text-charcoal">
                <div className="flex justify-between items-center py-3 border-b border-sage/20">
                  <span className="font-light text-lg text-bordeaux">10h30</span>
                  <span className="font-light">Cérémonie</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-sage/20">
                  <span className="font-light text-lg text-bordeaux">14h30</span>
                  <span className="font-light">Repas</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-light text-lg text-bordeaux">19h00</span>
                  <span className="font-light">Bal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <button
            onClick={handleDirections}
            className="bg-bordeaux text-cream px-12 py-4 rounded-full font-light text-lg hover:bg-bordeaux/90 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 shadow-lg mx-auto"
          >
            <Navigation size={20} />
            Itinéraire vers le domaine
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reception;