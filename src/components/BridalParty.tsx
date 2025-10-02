import { Phone, Users } from 'lucide-react';
import FABIEN_IMG from '../assets/fabien.webp';
import AYMERIC_IMG from '../assets/aymeric.webp';
import MARIE_IMG from '../assets/marie.webp';
import MANON_IMG from '../assets/manon.webp';

const BridalParty = () => {
  const bridalParty = [
    {
      name: "Manon Corbel",
      role: "Témoin de la mariée",
      phone: "+33 6 34 96 16 60",
      image: MANON_IMG,
      type: "bridesmaid",
      additionalClass: "object-[center_55%]",
    },
    {
      name: "Fabien Fernandes Alves",
      role: "Témoin du marié",
      phone: "+33 6 52 07 82 01",
      image: FABIEN_IMG,
      type: "groomsman",
      additionalClass: "object-[center_15%]",
    },
    {
      name: "Marie Pineau",
      role: "Témoin de la mariée",
      phone: "+33 6 45 90 24 68",
      image: MARIE_IMG,
      type: "bridesmaid",
      additionalClass: "object-[center_15%]",
    },
    {
      name: "Aymeric Poirier",
      role: "Témoin du marié",
      phone: "+33 6 21 81 65 19",
      image: AYMERIC_IMG,
      type: "groomsman",
      additionalClass: "object-[center_35%]",
    }
  ];

  return (
    <section id="temoins" className="py-24 px-4 bg-gradient-to-b from-cream to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-8 w-24 h-24 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full text-sage">
          <path d="M20,80 Q30,60 40,80 Q50,50 60,80 Q70,60 80,80 Q70,40 60,60 Q50,30 40,60 Q30,40 20,80" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-16 right-12 w-20 h-20 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full text-blush">
          <path d="M50,10 C60,20 70,30 60,40 C70,50 60,60 50,50 C40,60 30,50 40,40 C30,30 40,20 50,10" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-bordeaux/70 mb-4 font-light">Nos témoins</p>
          <h2 className="font-montaga text-4xl md:text-6xl text-charcoal mb-6 font-light">
            Ils nous accompagnent
          </h2>
          <p className="text-xl text-charcoal/70 font-light">Pour toute question, n'hésitez pas à les contacter</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {bridalParty.map((person, index) => (
            <div key={index} className="group">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-sage/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Photo in polaroid style */}
                <div className="relative mb-8">
                  <div className={`bg-white rounded-xl shadow-lg transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} group-hover:rotate-0 transition-all duration-500`}>
                    <img 
                      src={person.image}
                      alt={person.name}
                      className={`w-full h-48 object-cover rounded-lg ${person?.additionalClass}`}
                    />
                  </div>
                  <div className={`absolute -top-3 -right-3 bg-${person.type === 'bridesmaid' ? 'blush' : 'sage'}/20 p-3 rounded-full shadow-md transform ${index % 2 === 0 ? 'rotate-12' : '-rotate-12'} group-hover:rotate-0 transition-transform duration-300`}>
                    <Users className={`text-${person.type === 'bridesmaid' ? 'blush' : 'sage'}`} size={20} />
                  </div>
                </div>

                {/* Contact info */}
                <div className="text-center space-y-4">
                  <div>
                    <h3 className="font-montaga text-2xl text-charcoal font-light mb-2">{person.name}</h3>
                    <p className="text-bordeaux/70 font-light italic">{person.role}</p>
                  </div>
                  
                  <div className="flex items-center justify-center gap-3 bg-sage/15 rounded-xl p-4 border border-sage/20">
                    <Phone className="text-sage" size={18} />
                    <a 
                      href={`tel:${person.phone}`}
                      className="text-charcoal font-light hover:text-bordeaux transition-colors duration-300"
                    >
                      {person.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-16">
          <div className="bg-blush/15 rounded-2xl p-8 max-w-2xl mx-auto border border-blush/20">
            <p className="text-charcoal/80 font-light leading-relaxed text-lg">
              Nos témoins sont là pour vous aider et répondre à toutes vos questions concernant le mariage. 
              N'hésitez pas à les contacter si vous avez besoin d'informations !
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default BridalParty;