import React from 'react';

const Services = () => {
  const services = [
    { title: "MALEREI", desc: "Als Malermeister gestalten wir Farbwelten, die gezielt die Atmosphäre des jeweiligen Raumes unterstützen. Wir streichen nach Ihren Wünschen.", img: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?q=80&w=800&auto=format&fit=crop" },
    { title: "FASSADEN", desc: "Farbe für Ihre Fassade oder ein komplettes Fassadendesign? Kein Problem für uns. Wir gestalten Neubauten und restaurieren Fassaden.", img: "https://images.unsplash.com/photo-1605814511063-95669ee3cdfe?q=80&w=800&auto=format&fit=crop" },
    { title: "SPACHTELARBEITEN", desc: "Glatte und perfekte Wände als Basis für jede weitere Gestaltung. Höchste Präzision für ein vollendetes Ergebnis.", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop" },
    { title: "RENOVIERUNGEN", desc: "Komplettrenovierungen aus einer Hand. Schnell, sauber und zuverlässig. Wir bringen frischen Wind in Ihr Zuhause.", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop" },
    { title: "LACKIERARBEITEN", desc: "Professionelle Lackierungen für Türen, Fenster, Holz- und Metallelemente im Innen- und Außenbereich.", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop" },
    { title: "MIKROCEMENT", desc: "Fugenlose Oberflächen für Böden und Wände in moderner Optik. Sehr beliebt für exklusive Bäder und Wohnbereiche.", img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <section id="services" className="py-24 bg-[#f8f9fa] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-3">WIR SIND IHR MALERMEISTER IN 2700 WIENER NEUSTADT</h2>
          <h3 className="text-4xl md:text-5xl font-display font-extrabold text-brand-brown mb-6 uppercase">LEISTUNGSÜBERSICHT</h3>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg font-light leading-relaxed">
            Egal, ob Sie eine dekorative Malerei für den Innenraum, neue Tapeten, frische Farbe für Ihre Fassade oder eine Bodenbeschichtung benötigen – sprechen Sie uns gerne an!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white border rounded-none border-gray-200 overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="h-60 overflow-hidden relative">
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
                <a href="#kontakt" className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-brand-brown hover:text-brand-gold transition-colors">
                  Erfahren Sie mehr 
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;