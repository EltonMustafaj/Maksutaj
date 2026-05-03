import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-brown pt-16 pb-8 border-t-[6px] border-brand-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand & Address */}
          <div>
            <div className="flex flex-col mb-6">
              <div className="text-3xl font-display font-extrabold text-white tracking-[0.15em] relative">
                MAKSUTAJ
                <div className="absolute -top-4 left-4 text-xl text-brand-gold font-serif italic">
                  MM
                </div>
              </div>
              <div className="text-[10px] font-semibold text-brand-gold tracking-[0.3em] mt-1 uppercase w-max">
                Malermeisterbetrieb
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-sm font-light leading-relaxed">
              Ihr zuverlässiger und professioneller Partner für Malerarbeiten, Renovierungen und Raumgestaltungen in Wiener Neustadt und Umgebung.
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-bold mb-6 uppercase tracking-widest text-sm">Leistungen</h4>
            <ul className="space-y-3 font-light">
              <li><a href="#" className="text-gray-300 hover:text-brand-gold transition-colors">Malerei</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-gold transition-colors">Fassaden</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-gold transition-colors">Spachtelarbeiten</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-gold transition-colors">Renovierungen</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-gold transition-colors">Mikrocement</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div id="kontakt">
            <h4 className="text-white font-display font-bold mb-6 uppercase tracking-widest text-sm">Kontakt Info</h4>
            <ul className="space-y-4 font-light">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-brand-gold mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <span className="block text-white font-medium mb-1">Standort</span>
                  <span className="text-gray-300 transition-colors">Wiener Neustadt<br/>Meister: Nevzat Maksutaj</span>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-brand-gold mr-3 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 0C5.385 0 0 5.384 0 12.031c0 2.124.551 4.197 1.597 6.02L.152 23.4l5.485-1.442c1.748.956 3.735 1.462 5.794 1.462 6.645 0 12.03-5.385 12.03-12.03S18.676 0 12.031 0zm6.541 17.202c-.276.772-1.579 1.48-2.193 1.545-.561.059-1.294.02-3.414-.85-2.617-1.077-4.304-3.766-4.437-3.943-.133-.178-1.058-1.408-1.058-2.686 0-1.278.665-1.905.894-2.164.229-.258.498-.323.665-.323.167 0 .334.004.482.012.155.008.361-.06.56.294.208.368.706 1.725.768 1.849.062.124.104.269.021.449-.083.178-.124.29-.249.435-.125.146-.264.316-.381.449-.125.133-.256.279-.111.53m2.593 4.417c2.593 4.417 3.018 4.792 3.325 5.25.308.459.288 1.075.062 1.466-.226.39-.817.62-1.161.764z M17.062 16.59c-.276.772-1.579 1.48-2.193 1.545-.561.059-1.294.02-3.414-.85-2.617-1.077-4.304-3.766-4.437-3.943-.133-.178-1.058-1.408-1.058-2.686 0-1.278.665-1.905.894-2.164.229-.258.498-.323.665-.323.167 0 .334.004.482.012.155.008.361-.06.56.294.208.368.706 1.725.768 1.849.062.124.104.269.021.449-.083.178-.124.29-.249.435-.125.146-.264.316-.381.449-.125.133-.256.279-.111.53-.053-.021.111.53.111.53s1.258.533 1.827.81c.213.104.5.342.342.756-.157.414-.73.716-.948.835z" />
                </svg>
                <div>
                  <span className="block text-white font-medium mb-1">WhatsApp / Telefon</span>
                  <a href="https://wa.me/4366475109747" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-gold transition-colors" title="Auf WhatsApp anschreiben">
                    +43 664 75109747
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-brand-gold mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <span className="block text-white font-medium mb-1">Email</span>
                  <a href="mailto:maler.maksutaj@gmail.com" className="text-gray-300 hover:text-brand-gold transition-colors">maler.maksutaj@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0 font-light">
            &copy; {new Date().getFullYear()} Maksutaj Malermeisterbetrieb. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6 text-sm font-light">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Datenschutzerklärung</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

