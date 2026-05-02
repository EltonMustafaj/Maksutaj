import React from "react";

const Topbar = () => {
  return (
    <div className="bg-brand-brown text-white/90 text-sm hidden md:block border-b border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-10">
          <div className="flex items-center space-x-4">
            <span className="font-display font-medium tracking-wide">IHR MALERMEISTERBETRIEB IN WIENER NEUSTADT</span>
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href="https://wa.me/4366475109747" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:text-brand-gold transition duration-200"
              title="Auf WhatsApp anschreiben"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 0C5.385 0 0 5.384 0 12.031c0 2.124.551 4.197 1.597 6.02L.152 23.4l5.485-1.442c1.748.956 3.735 1.462 5.794 1.462 6.645 0 12.03-5.385 12.03-12.03S18.676 0 12.031 0zm6.541 17.202c-.276.772-1.579 1.48-2.193 1.545-.561.059-1.294.02-3.414-.85-2.617-1.077-4.304-3.766-4.437-3.943-.133-.178-1.058-1.408-1.058-2.686 0-1.278.665-1.905.894-2.164.229-.258.498-.323.665-.323.167 0 .334.004.482.012.155.008.361-.06.56.294.208.368.706 1.725.768 1.849.062.124.104.269.021.449-.083.178-.124.29-.249.435-.125.146-.264.316-.381.449-.125.133-.256.279-.111.53m2.593 4.417c2.593 4.417 3.018 4.792 3.325 5.25.308.459.288 1.075.062 1.466-.226.39-.817.62-1.161.764z M17.062 16.59c-.276.772-1.579 1.48-2.193 1.545-.561.059-1.294.02-3.414-.85-2.617-1.077-4.304-3.766-4.437-3.943-.133-.178-1.058-1.408-1.058-2.686 0-1.278.665-1.905.894-2.164.229-.258.498-.323.665-.323.167 0 .334.004.482.012.155.008.361-.06.56.294.208.368.706 1.725.768 1.849.062.124.104.269.021.449-.083.178-.124.29-.249.435-.125.146-.264.316-.381.449-.125.133-.256.279-.111.53-.053-.021.111.53.111.53s1.258.533 1.827.81c.213.104.5.342.342.756-.157.414-.73.716-.948.835z" />
              </svg>
              +43 664 75109747
            </a>
            <a href="mailto:maler.maksutaj@gmail.com" className="flex items-center hover:text-brand-gold transition duration-200">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              maler.maksutaj@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;