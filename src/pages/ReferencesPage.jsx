import backImg from '../assets/back.jpg';
import logoImg from '../assets/logo36.png';

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
    <div
      className="flex-grow font-sans min-h-screen relative bg-cover bg-center bg-no-repeat md:bg-fixed"
      style={{ backgroundImage: `url(${backImg})` }}
    >
      {/* Overlay to ensure text readability against background image */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 md:pt-24 pb-20 md:pb-32">

        <div className="text-center mb-16">
          <h2 className="text-brand-gold font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4">Malerbetrieb Maksutaj</h2>
          <h1 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-wide mb-8">
            Unsere Leistungen
          </h1>
          <div className="w-16 h-1 bg-brand-gold mx-auto mb-10"></div>
        </div>

        <div className="flex flex-row items-center justify-between gap-4 sm:gap-8 lg:gap-16">

          {/* Left Column: Services */}
          <div className="w-3/5 lg:w-1/2 space-y-2 sm:space-y-3 md:space-y-4 relative">

            {/* Vertical Spine for Connecting Lines */}
            <div className="absolute right-[-8px] sm:right-[-16px] lg:right-[-32px] top-6 bottom-6 w-[2px] bg-brand-gold/50 z-0"></div>

            {leistungen.map((item, index) => (
              <div key={index} className="relative w-full group">
                <div
                  className="relative z-10 w-full flex items-center p-2 sm:p-3 md:p-4 bg-white/90 backdrop-blur-md rounded-md shadow-md hover:shadow-lg transition-all duration-300 border-l-[3px] md:border-l-[4px] border-transparent hover:border-brand-gold transform hover:translate-x-1 md:hover:translate-x-2"
                >
                  <div className="bg-brand-gold text-white rounded-full p-1 md:p-1.5 mr-2 sm:mr-4 md:mr-6 flex-shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-800 text-[11px] sm:text-sm md:text-lg font-medium tracking-wide group-hover:text-brand-brown transition-colors leading-tight">
                    {item}
                  </span>
                </div>
                {/* Horizontal Line to Spine */}
                <div className="absolute right-[-8px] sm:right-[-16px] lg:right-[-32px] w-[8px] sm:w-[16px] lg:w-[32px] h-[2px] bg-brand-gold/50 top-1/2 transform -translate-y-1/2 z-0"></div>
              </div>
            ))}
          </div>

          {/* Right Column: Logo */}
          <div className="w-2/5 lg:w-1/2 flex justify-center items-center relative">
            {/* Horizontal line from spine to logo */}
            <div className="absolute left-[-8px] sm:left-[-16px] lg:left-[-32px] right-1/2 h-[2px] bg-brand-gold/50 top-1/2 transform -translate-y-1/2 z-0"></div>

            <img
              src={logoImg}
              alt="Malerbetrieb Maksutaj Logo"
              className="relative z-10 w-full max-w-[180px] sm:max-w-[240px] md:max-w-[300px] lg:max-w-[340px] rounded-lg sm:rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-500 bg-white py-8 px-2 md:py-8 md:px-3 lg:py-12 lg:px-4"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ReferencesPage;
