import React from "react";
import { Link } from "react-router-dom";
import Topbar from "./Topbar";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50">
      <Topbar />
      <nav className="w-full bg-white shadow-md font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            
            {/* Logo Area */}
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              {/* Fallback to text logo if logo image is missing or not sized perfectly */}
              <div className="flex flex-col">
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-brand-brown tracking-[0.15em] relative">
                  MAKSUTAJ
                  <div className="absolute -top-4 sm:-top-5 left-1/2 transform -translate-x-1/2 text-xl sm:text-2xl text-brand-gold font-serif italic">
                    MM
                  </div>
                </div>
                <div className="text-[10px] sm:text-xs font-semibold text-brand-gold tracking-[0.3em] mt-1 uppercase border-t border-brand-gold/50 pt-1 text-center">
                  Malermeisterbetrieb
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link to="/" className="text-gray-800 hover:text-brand-gold transition-colors duration-300 text-[15px] font-display font-bold uppercase tracking-wider">Startseite</Link>
              <Link to="/about" className="text-gray-800 hover:text-brand-gold transition-colors duration-300 text-[15px] font-display font-bold uppercase tracking-wider">Über Uns</Link>
              <Link to="/contact" className="text-gray-800 hover:text-brand-gold transition-colors duration-300 text-[15px] font-display font-bold uppercase tracking-wider">Kontakt</Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button className="text-gray-800 hover:text-brand-gold focus:outline-none">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
