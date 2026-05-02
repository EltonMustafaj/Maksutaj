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
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-none bg-white/5 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-brown transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-none bg-white/5 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-brown transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
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