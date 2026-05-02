import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/paintbrushes-in-buckets-stockcake.webp';

const Hero = () => {
  return (
    <section id="home" className="relative flex items-center min-h-[85vh] bg-gray-900 border-b-8 border-brand-gold">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/80 z-10" />
        <img 
          src={heroImage}
          alt="Malerarbeiten Hintergrund" 
          className="w-full h-full object-cover object-bottom"
        />
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          
          <div className="lg:w-2/3 text-center lg:text-left mb-12 lg:mb-0">
            <span className="inline-block py-1 px-3 rounded bg-brand-gold/20 text-brand-gold border border-brand-gold/30 font-bold tracking-widest uppercase text-sm mb-6">
              MALERBETRIEB IN WIENER NEUSTADT
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl break-words hyphens-auto font-display font-extrabold text-white leading-[1.1] mb-6 uppercase">
              UMFASSENDER <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">
                KUNDENSERVICE
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 font-sans font-light leading-relaxed">
              Ihr zuverlÃ¤ssiger und ehrlicher Partner. Wir bieten Ihnen professionelle Malerarbeiten, Spachtelarbeiten und Renovierungen auf hÃ¶chstem Niveau.
            </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <Link to="/contact" className="bg-brand-gold hover:bg-yellow-500 text-brand-brown px-8 py-4 font-display font-bold uppercase tracking-wide transition-all duration-300 shadow-xl inline-flex items-center justify-center group">
                Nehmen Sie Kontakt auf
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link to="/about" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-brown px-8 py-4 font-display font-bold uppercase tracking-wide transition-all duration-300 inline-flex items-center justify-center">
                ÜÜber Uns
              </Link>
            </div>
          </div>
          
          {/* Aktion Badge - Modified for elegance */}
          <div className="lg:w-1/3 flex justify-center lg:justify-end">
            <div className="bg-brand-brown text-white p-8 sm:p-10 border-4 border-brand-gold max-w-sm text-center shadow-2xl relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-brand-gold text-brand-brown font-black px-6 py-2 uppercase tracking-widest text-sm whitespace-nowrap">
                Jetzt Termin sichern!
              </div>
              <h3 className="text-3xl sm:text-5xl font-display font-black text-brand-gold mb-2">-10%</h3>
              <div className="text-2xl font-display font-bold mb-4 tracking-wider uppercase">Rabatt</div>
              <div className="text-gray-300 font-light mb-6">auf Ihren ersten Auftrag</div>
              <div className="w-12 h-[2px] bg-brand-gold mx-auto mb-6"></div>
              <div className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Kostenlose</div>
              <div className="text-brand-gold/90 uppercase tracking-widest text-sm">Besichtigung & Angebot</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;


