import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Topbar from "./Topbar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // If path matches, make it gold
  const isActive = (path) => location.pathname === path ? "text-brand-gold" : "text-gray-800";

  return (
    <header className="sticky top-0 z-50">
      <Topbar />
      <nav className="w-full bg-white shadow-md font-sans relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center min-h-[96px] py-4">
            
            {/* Logo Area */}
            <Link to="/" onClick={closeMenu} className="flex-shrink-0 flex items-center cursor-pointer">
              <div className="flex flex-col">
                <div className="text-[22px] sm:text-3xl md:text-4xl font-display font-extrabold text-brand-brown tracking-[0.10em] sm:tracking-[0.15em] relative mt-7 sm:mt-5 mb-1">
                  MAKSUTAJ
                  <div className="absolute -top-5 sm:-top-5 left-1/2 transform -translate-x-1/2 text-lg sm:text-xl md:text-2xl text-brand-gold font-serif italic">
                    MM
                  </div>
                </div>
                <div className="text-[9px] sm:text-[10px] md:text-xs font-semibold text-brand-gold tracking-[0.2em] sm:tracking-[0.3em] mt-1 uppercase border-t border-brand-gold/50 pt-1 text-center">
                  Malermeisterbetrieb
                </div>
              </div>
            </Link>

            {/* Navigation Links (Desktop) */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link to="/" className={`${isActive('/')} hover:text-brand-gold transition-colors duration-300 text-[15px] font-display font-bold uppercase tracking-wider`}>Startseite</Link>
              <Link to="/about" className={`${isActive('/about')} hover:text-brand-gold transition-colors duration-300 text-[15px] font-display font-bold uppercase tracking-wider`}>Über Uns</Link>
              <Link to="/references" className={`${isActive('/references')} hover:text-brand-gold transition-colors duration-300 text-[15px] font-display font-bold uppercase tracking-wider`}>Referenzen</Link>
              <Link to="/contact" className={`${isActive('/contact')} hover:text-brand-gold transition-colors duration-300 text-[15px] font-display font-bold uppercase tracking-wider`}>Kontakt</Link>
            </div>
            
            {/* Mobile menu button (Hamburger) */}
            <div className="md:hidden flex items-center ml-auto">
              <button 
                aria-label="Toggle menu" 
                onClick={toggleMenu} 
                className="text-brand-brown hover:text-brand-gold focus:outline-none p-2 bg-gray-50 rounded-md border border-gray-200"
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
            
          </div>
        </div>

        {/* Mobile Navigation Menu Dropdown */}
        <div className={`md:hidden absolute w-full left-0 bg-white shadow-xl border-t-2 border-brand-gold/30 transition-all duration-300 origin-top z-40 ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
          <div className="px-6 py-6 space-y-4 shadow-inner flex flex-col">
            <Link 
              to="/" 
              onClick={closeMenu}
              className={`block px-4 py-4 text-center text-lg font-display font-bold uppercase tracking-widest ${isActive('/')} bg-gray-50 hover:bg-brand-gold/10 hover:text-brand-gold rounded-lg border border-gray-100`}
            >
              Startseite
            </Link>
            <Link 
              to="/about" 
              onClick={closeMenu}
              className={`block px-4 py-4 text-center text-lg font-display font-bold uppercase tracking-widest ${isActive('/about')} bg-gray-50 hover:bg-brand-gold/10 hover:text-brand-gold rounded-lg border border-gray-100`}
            >
              Über Uns
            </Link>
            <Link 
              to="/references" 
              onClick={closeMenu}
              className={`block px-4 py-4 text-center text-lg font-display font-bold uppercase tracking-widest ${isActive('/references')} bg-gray-50 hover:bg-brand-gold/10 hover:text-brand-gold rounded-lg border border-gray-100`}
            >
              Referenzen
            </Link>
            <Link 
              to="/contact" 
              onClick={closeMenu}
              className={`block px-4 py-4 text-center text-lg font-display font-bold uppercase tracking-widest ${isActive('/contact')} bg-gray-50 hover:bg-brand-gold/10 hover:text-brand-gold rounded-lg border border-gray-100`}
            >
              Kontakt
            </Link>
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;


