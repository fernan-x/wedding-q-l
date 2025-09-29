import { Church, Camera, MapPin, ExternalLink, ParkingSquare, Timer } from 'lucide-react';
import CHURCH_IMG from '../assets/church.webp';
import CHURCH_INSIDE_IMG from '../assets/church_inside.webp';
import CHURCH_OLD_IMG from '../assets/church_old.webp';
import CHURCH_OLD_TWO_IMG from '../assets/church_old_3.webp';
import PHOTO_WARNING_IMG from '../assets/no-photo.webp';

const Ceremony = () => {
  const parkingOptions = [
    { name: 'Parking couvert', url: 'https://maps.app.goo.gl/PBuFMr41bkj5QPf27', isBlueZone: true, time: 1 },
    { name: 'Parking église', url: 'https://maps.app.goo.gl/2zMVr9zLWGr7whXw9', isBlueZone: true, time: 1 },
    { name: 'Halles', url: 'https://maps.app.goo.gl/p1STf57ct1WRRtJt8', isBlueZone: true, time: 2 },
    { name: 'Bibliothèque', url: 'https://maps.app.goo.gl/J6DeNc8zqtjuGjvW9', isBlueZone: false, time: 2 },
    { name: 'Mairie', url: 'https://maps.app.goo.gl/jtarcrtV5VHdJwoP7', isBlueZone: false, time: 2 },
    { name: 'Stade Jean Gauvrit', url: 'https://maps.app.goo.gl/JQzJVhqc4rviq79z5', isBlueZone: false, time: 7 }
  ];

  return (
    <section id="ceremonie" className="py-24 px-4 bg-cream relative overflow-hidden">
      {/* Decorative botanical elements */}
      <div className="absolute top-16 left-8 w-24 h-24 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full text-sage">
          <path d="M20,80 Q30,60 40,80 Q50,50 60,80 Q70,60 80,80 Q70,40 60,60 Q50,30 40,60 Q30,40 20,80" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-12 w-20 h-20 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full text-blush">
          <path d="M50,10 C60,20 70,30 60,40 C70,50 60,60 50,50 C40,60 30,50 40,40 C30,30 40,20 50,10" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-bordeaux/70 mb-4 font-light">La cérémonie</p>
          <h2 className="font-montaga text-4xl md:text-6xl text-charcoal mb-6 leading-tight font-light">
            Église Saint-Pierre
          </h2>
          <p className="text-xl text-charcoal/70 font-light">Carquefou</p>
        </div>

        {/* Main ceremony content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Image gallery - polaroid style */}
          <div className="relative space-y-6">
            {/* Main church image */}
            <div className="relative">
              <div className="bg-white p-5 rounded-xl shadow-lg transform rotate-1 hover:rotate-0 transition-all duration-500 hover:scale-105">
                <img 
                  src={CHURCH_IMG}
                  alt="Église Saint-Pierre de Carquefou"
                  className="w-full h-72 object-cover rounded-lg"
                />
                <p className="text-center text-charcoal/60 mt-3 font-light italic">Église Saint-Pierre</p>
              </div>
              <div className="absolute -top-3 -right-3 bg-sage/20 p-3 rounded-full shadow-md transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <Church className="text-sage" size={20} />
              </div>
            </div>

            {/* Secondary images */}
            <div className="flex gap-4">
              <div className="bg-white p-3 rounded-xl shadow-lg transform -rotate-2 hover:rotate-0 transition-all duration-300 flex-1">
                <img 
                  src={CHURCH_OLD_TWO_IMG}
                  alt="Intérieur de l'église"
                  className="w-full h-28 object-cover rounded-lg"
                />
              </div>
              <div className="bg-white p-3 rounded-xl shadow-lg transform rotate-2 hover:rotate-0 transition-all duration-300 flex-1">
                <img 
                  src={CHURCH_OLD_IMG}
                  alt="Clocher de l'église"
                  className="w-full h-28 object-cover rounded-lg"
                />
              </div>
            </div>

             <div className="relative">
              <div className="bg-white p-5 rounded-xl shadow-lg transform rotate-1 hover:rotate-0 transition-all duration-500 hover:scale-105">
                <img 
                  src={CHURCH_INSIDE_IMG}
                  alt="Église Saint-Pierre de Carquefou"
                  className="w-full h-72 object-cover rounded-lg"
                />
                <p className="text-center text-charcoal/60 mt-3 font-light italic">L'intérieur</p>
              </div>
            </div>
          </div>

          {/* Ceremony details */}
          <div className="space-y-8">
            {/* Meeting time */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-sage/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-bordeaux/20 rounded-full flex items-center justify-center">
                  <Church className="text-bordeaux" size={24} />
                </div>
                <div>
                  <h3 className="font-montaga text-2xl text-charcoal font-light">La cérémonie</h3>
                  <p className="text-bordeaux/70 font-light">Samedi 29 août à 10h30</p>
                </div>
              </div>
              
              <div className="prose text-charcoal/80 leading-relaxed space-y-4 font-light">
                <p>
                  Nous nous retrouverons devant l'église Saint-Pierre de Carquefou.
                </p>
                
                <div className="bg-blush/15 rounded-xl p-6 border-l-4 border-blush my-6">
                  <p className="mb-3">
                    <strong className="text-charcoal font-medium">Le rang de gauche</strong> sera réservé à la famille du marié.
                  </p>
                  <p>
                    <strong className="text-charcoal font-medium">Le rang de droite</strong> sera réservé à la famille de la mariée.
                  </p>
                </div>
              </div>
            </div>

            {/* Photography rules */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-sage/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-bordeaux/20 rounded-full flex items-center justify-center">
                  <Camera className="text-bordeaux" size={24} />
                </div>
                <h3 className="font-montaga text-2xl text-charcoal font-light">Photos et vidéos</h3>
              </div>
              
              <div className="prose text-charcoal/80 leading-relaxed space-y-4 font-light">
                <div className="bg-bordeaux/15 rounded-xl p-6 border border-bordeaux/30 mb-6">
                  <img src={PHOTO_WARNING_IMG} alt="Photos et vidéos interdites à l'église" className="w-full h-auto mb-4" />
                  <div className="font-medium text-bordeaux text-center">Photos et vidéos interdites à l'église.</div>
                </div>
                
                <p>
                  Un vidéaste sera présent toute la journée. Pour la cérémonie, nous vous demandons de ne pas prendre de photos ou vidéos par vous-mêmes afin que le rendu soit le plus sympa possible.
                </p>
                
                <p>
                  Nous vous demandons également de <strong className="text-bordeaux font-medium">limiter les photos</strong> sur le reste de la journée.
                </p>
                
                <div className="text-center bg-blush/15 rounded-xl p-6 my-6">
                  <p className="italic text-bordeaux font-light leading-relaxed">
                    Promis, on vous partagera tout ça après le mariage.<br />
                    On compte sur vous pour être sages !
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Parking Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-10 shadow-lg border border-sage/20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MapPin className="text-bordeaux" size={28} />
              <h3 className="font-montaga text-3xl text-charcoal font-light">Stationnements</h3>
            </div>
            <p className="text-charcoal/70 font-light">Voici la liste des stationnements disponibles autour de l'église.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {parkingOptions.map((parking, index) => (
              <div key={index} className="group">
                {parking.url ? (
                  <a
                    href={parking.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white/90 rounded-xl p-6 shadow-md border border-sage/20 hover:shadow-lg hover:border-bordeaux/30 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-charcoal group-hover:text-bordeaux transition-colors">
                        {parking.name}
                      </span>
                      <ExternalLink className="text-bordeaux/60 group-hover:text-bordeaux transition-colors" size={16} />
                    </div>
                    <p className='flex items-center gap-1 text-charcoal/60 font-light'><Timer size={16} className='text-bordeaux/60' />{parking.time} min</p>
                    <p className="text-sm text-charcoal/60 font-light">Ouvrir dans Maps</p>
                    {parking.isBlueZone && <BlueZoneBadge />}
                  </a>
                ) : (
                  <div className="bg-white/70 rounded-xl p-6 shadow-md border border-sage/20">
                    <span className="font-medium text-charcoal">{parking.name}</span>
                    <p className="text-sm text-charcoal/60 mt-2 font-light">Stationnement disponible</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export function BlueZoneBadge({
  className = "",
}: { className?: string }) {
  return (
    <div
      className={[
        "absolute bottom-2 right-2 text-sm",
        "bg-blue-500/15 border border-blue-600/30",
        "p-2 rounded-full shadow-md",
        // "transform rotate-12 hover:rotate-0 transition-transform duration-300",
        "flex items-center justify-center gap-2",
        className,
      ].join(" ")}
      aria-label="Stationnement en zone bleue (disque obligatoire, durée limitée)"
      title="Zone bleue : disque obligatoire, durée limitée"
    >
      <ParkingSquare className="text-blue-600" size={16} />
      <span>Zone bleue</span>
    </div>
  );
}

export default Ceremony;