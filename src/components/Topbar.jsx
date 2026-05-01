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
            <a href="tel:+4366475109747" className="flex items-center hover:text-brand-gold transition duration-200">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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