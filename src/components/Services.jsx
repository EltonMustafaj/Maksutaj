import React from 'react';
import imgAlbum1 from '../assets/album1.jpeg';
import imgAlbum2 from '../assets/album2.jpeg';
import imgAlbum3 from '../assets/album3.jpeg';

const Services = () => {
  const services = [
    { title: "MALEREI", desc: "Als Malermeister gestalten wir Farbwelten, die gezielt die Atmosphäre des jeweiligen Raumes unterstützen. Wir streichen nach Ihren Wünschen.", img: imgAlbum1 },
    { title: "FASSADEN", desc: "Farbe für Ihre Fassade oder ein komplettes Fassadendesign? Kein Problem für uns. Wir gestalten Neubauten und restaurieren Fassaden.", img: imgAlbum2 },
    { title: "SPACHTELARBEITEN", desc: "Glatte und perfekte Wände als Basis für jede weitere Gestaltung. Höchste Präzision für ein vollendetes Ergebnis.", img: imgAlbum3 },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-[#faf9f6] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-3">DEIN MALERMEISTER IN 2700 WIENER NEUSTADT</h2>
          <h3 className="text-[24px] sm:text-3xl md:text-5xl font-display font-black text-brand-brown mb-6 uppercase tracking-tight sm:tracking-normal">LEISTUNGSÜBERSICHT</h3>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed px-2 sm:px-0">
            Egal, ob dekorative Malerei für den Innenraum, neue Tapeten, frische Farbe für Ihre Fassade oder eine Bodenbeschichtung – sprechen Sie uns gerne an!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white border-0 rounded-sm shadow-md overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[4/3] sm:h-64 md:h-72 overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-brown/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h4 className="text-xl font-display font-bold text-gray-900 mb-4 group-hover:text-brand-gold transition-colors">{service.title}</h4>
                <div className="w-12 h-[2px] bg-brand-gold mb-4"></div>
                <p className="text-gray-600 font-light leading-relaxed mb-6 h-24 overflow-hidden">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;





