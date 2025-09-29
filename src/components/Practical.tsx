import React from 'react';
import { Palette, Bed, Coffee, Gift } from 'lucide-react';
import THEME_IMG from '../assets/pantone.webp';

const Practical = () => {
  return (
    <section id="pratique" className="py-24 px-4 bg-gradient-to-b from-cream to-white relative overflow-hidden">
      <div className="absolute w-full top-0">
        <hr className="border-bordeaux border-t w-1/2 mx-auto" />
      </div>


      {/* Decorative elements */}
      <div className="absolute top-24 left-12 w-24 h-24 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full text-sage">
          <circle cx="50" cy="50" r="30" fill="currentColor" opacity="0.3" />
          <circle cx="30" cy="30" r="15" fill="currentColor" opacity="0.5" />
          <circle cx="70" cy="70" r="20" fill="currentColor" opacity="0.4" />
        </svg>
      </div>
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-bordeaux/70 mb-4 font-light">Informations</p>
          <h2 className="font-montaga text-4xl md:text-6xl text-charcoal mb-6 font-light">
            Pratique
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Thème */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-sage/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blush/20 rounded-full flex items-center justify-center">
                <Palette className="text-blush" size={24} />
              </div>
              <h3 className="font-montaga text-2xl text-charcoal font-light">Thème</h3>
            </div>
            <p className="text-charcoal leading-relaxed font-light">
              Notre mariage sera <strong className="text-bordeaux font-medium">festif et coloré !</strong> Choisissez votre couleur préférée pour votre tenue.
            </p>
            <img src={THEME_IMG} alt="Thème" className="w-full h-auto mt-6" />
          </div>

          {/* Couchage */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-sage/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center">
                <Bed className="text-sage" size={24} />
              </div>
              <h3 className="font-montaga text-2xl text-charcoal font-light">Couchage</h3>
            </div>
            <p className="text-sm text-bordeaux/70 mb-4 uppercase tracking-wider font-light">Sur place</p>
            <ul className="space-y-3 text-charcoal mb-6 font-light">
              <li>• Chambres lits doubles</li>
              <li>• Chambres familiales</li>
              <li>• Dortoir lit simple</li>
            </ul>
            <div className="bg-bordeaux/15 rounded-xl p-5 mb-5 border border-bordeaux/20">
              <p className="font-medium text-bordeaux text-lg mb-2">Prix d'une chambre ou d'un couchage : 40€ a 220€</p>
              <div className="space-y-1 text-charcoal/70 font-light text-sm">
                <p>• Vendredi soir aussi possible</p>
                <p>• Serviettes de douche incluses</p>
              </div>
            </div>
            <p className="text-charcoal font-light">
              Si vous êtes intéressés, mentionnez-le nous.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Retour */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-sage/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-bordeaux/20 rounded-full flex items-center justify-center">
                <Coffee className="text-bordeaux" size={24} />
              </div>
              <h3 className="font-montaga text-2xl text-charcoal font-light">...brunchons tous ensemble.</h3>
            </div>
            <p className="text-sm text-bordeaux/70 mb-4 uppercase tracking-wider font-light">Dimanche retour</p>
            <p className="text-charcoal leading-relaxed font-light">
              <strong className="text-bordeaux font-medium">Dimanche dès 10h30</strong>, brunch tous ensemble. Piscine à disposition — pensez à vos maillots et serviettes !
            </p>
          </div>

          {/* Cagnottes */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-sage/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center">
                <Gift className="text-sage" size={24} />
              </div>
              <h3 className="font-montaga text-2xl text-charcoal font-light">Cagnottes</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-5 bg-blush/15 rounded-xl border border-blush/20">
                <div className="w-3 h-3 bg-blush rounded-full"></div>
                <span className="font-light text-charcoal">"À l'aventure"</span>
              </div>
              <div className="flex items-center gap-3 p-5 bg-sage/15 rounded-xl border border-sage/20">
                <div className="w-3 h-3 bg-sage rounded-full"></div>
                <span className="font-light text-charcoal">"À la maison"</span>
              </div>
            </div>
            <p className="text-charcoal/70 mt-5 font-light">
              Deux cagnottes sur place le jour J. À vous de choisir!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Practical;