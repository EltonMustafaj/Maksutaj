const ReferencesPage = () => {
  const leistungen = [
    "Anstricharbeiten innen & außen",
    "Spachtelarbeiten",
    "Fassadenarbeiten",
    "Lackierarbeiten",
    "Wandgestaltungen",
    "Renovierungen",
    "Stucco Veneziano",
    "Microcement oberflächen",
    "Travertin-Optik"
  ];

  return (
    <div className="bg-[#faf9f6] flex-grow font-sans min-h-screen pt-16 md:pt-24 pb-20 md:pb-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold opacity-5 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-brown opacity-5 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-brand-gold font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4">Malerbetrieb Maksutaj</h2>
            <h1 className="text-4xl md:text-6xl font-display font-black text-brand-brown uppercase tracking-wide mb-8">
              Unsere Leistungen
            </h1>
            <div className="w-16 h-1 bg-brand-gold mx-auto mb-10"></div>
          </div>
          
          <div className="space-y-6">
            {leistungen.map((item, index) => (
              <div 
                key={index} 
                className="group flex items-center p-4 bg-white rounded-sm shadow-[0_2px_15px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border-l-[6px] border-transparent hover:border-brand-gold transform hover:-translate-y-1"
              >
                <div className="bg-brand-gold text-white rounded-full p-1.5 mr-6 flex-shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-800 text-xl md:text-2xl font-light tracking-wide group-hover:text-brand-brown transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ReferencesPage;
