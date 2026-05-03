import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/paintbrushes-in-buckets-stockcake.webp';

const Hero = () => {
  return (
    <section id="home" className="relative flex items-center min-h-[85vh] bg-gray-900 border-b-8 border-brand-gold">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/80 z-10" />
        <img 
          src={heroImage}
          alt="Malerarbeiten Hintergrund" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          <div className="lg:w-2/3 text-center lg:text-left">
            <span className="inline-block py-1.5 px-4 rounded bg-brand-gold/20 text-brand-gold border border-brand-gold/30 font-bold tracking-widest uppercase text-[10px] sm:text-sm mb-6">
              MALERBETRIEB IN WIENER NEUSTADT
            </span>
            <h1 className="text-[32px] sm:text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tight sm:tracking-tighter text-white leading-[1.1] sm:leading-[1.05] mb-6 uppercase">
              UMFASSENDER <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">
                KUNDENSERVICE
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 font-sans font-light leading-relaxed">
              Ihr zuverlässiger und ehrlicher Partner. Wir bieten Ihnen professionelle Malerarbeiten, Spachtelarbeiten und Renovierungen auf höchstem Niveau.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact" className="bg-brand-gold hover:bg-yellow-500 text-brand-brown w-full sm:w-auto px-4 sm:px-8 py-4 font-display font-bold uppercase tracking-wider sm:tracking-widest text-[13px] sm:text-base transition-all duration-300 shadow-[0_0_25px_rgba(209,161,65,0.4)] inline-flex items-center justify-center group">
                Kostenlose Besichtigung
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link to="/about" className="bg-transparent border-2 border-white/50 hover:border-white text-white w-full sm:w-auto px-4 sm:px-8 py-4 font-display font-medium uppercase tracking-wider sm:tracking-widest text-[13px] sm:text-base transition-all duration-300 inline-flex items-center justify-center">
                Über Uns
              </Link>
            </div>
          </div>
          
          {/* Aktion Badge - Completely Redesigned for maximum elegance */}
          <div className="lg:w-1/3 flex justify-center lg:justify-end mt-4">
            <div className="bg-[#2d251d]/95 backdrop-blur-sm text-white p-8 sm:p-10 border-2 sm:border-4 border-brand-gold max-w-sm w-full text-center shadow-2xl relative rounded-sm">
              <div className="absolute -top-4 sm:-top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-brand-gold to-yellow-500 text-brand-brown font-black px-6 sm:px-8 py-2 sm:py-2.5 uppercase tracking-[0.2em] text-xs sm:text-sm whitespace-nowrap shadow-lg rounded-sm">
                JETZT TERMIN SICHERN
              </div>
              <h3 className="text-6xl sm:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-brand-gold to-yellow-200 mb-1 mt-2">-10%</h3>
              <div className="text-xl sm:text-2xl font-display font-bold mb-4 tracking-[0.25em] text-brand-gold uppercase">Rabatt</div>
              <div className="text-gray-300 font-light mb-8 text-sm sm:text-base">auf Ihren ersten Auftrag</div>
              
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-brand-gold/50"></div>
                <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                <div className="h-[1px] w-12 bg-brand-gold/50"></div>
              </div>
              
              <div className="text-xl sm:text-2xl font-bold text-white mb-2 uppercase tracking-[0.15em]">Kostenlose</div>
              <div className="text-brand-gold uppercase tracking-[0.25em] text-xs sm:text-sm font-medium">Besichtigung & Angebot</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

