
import aboutImage from '../assets/Paint-Brushes-and-Buckets.jpg';

const AboutPage = () => {
  const features = [
    {
      title: "Erfahrung & Fachwissen",
      description: "Über 10 Jahre Erfahrung als Malermeister",
      icon: (
        <svg className="w-12 h-12 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      )
    },
    {
      title: "Meister Qualität",
      description: "Hochwertige Materialien & präzises Handwerk",
      icon: (
        <svg className="w-12 h-12 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: "Zuverlässig & Pünktlich",
      description: "Termintreue & saubere Arbeit garantiert",
      icon: (
        <svg className="w-12 h-12 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Persönlicher Service",
      description: "Individuelle Beratung & unverbindliches Angebot",
      icon: (
        <svg className="w-12 h-12 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-white flex-grow font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
          <div className="md:w-1/2">
            <h2 className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 border-l-4 border-brand-gold pl-4">
              Über Uns
            </h2>
            <h1 className="text-4xl md:text-6xl font-display font-black text-brand-brown leading-tight mb-6">
              Malerbetrieb <br/> Maksutaj
            </h1>
            <div className="w-20 h-1 bg-brand-gold mb-8"></div>
            <p className="text-lg text-gray-700 font-light leading-relaxed mb-4">
              Wir sind Ihr vertrauensvoller Partner für professionelle Maler- und Renovierungsarbeiten. 
              Mit einer <strong className="font-bold text-brand-brown">Leidenschaft für Details</strong> und 
              höchsten Qualitätsansprüchen verwandeln wir Ihre Räume.
            </p>
          </div>
          
          <div className="md:w-1/2 w-full relative">
            <div className="absolute inset-0 bg-brand-gold/10 transform translate-x-4 translate-y-4"></div>
            <img 
              src={aboutImage}
              alt="Malerarbeiten Maksutaj" 
              className="relative z-10 w-full h-[400px] object-cover border-4 border-white shadow-xl"
            />
            <div className="absolute -bottom-10 -left-10 bg-brand-brown text-white p-6 z-20 shadow-lg border-2 border-brand-gold hidden sm:block flex-col justify-center items-center text-center">
              <p className="font-display text-4xl font-bold text-brand-gold">10+</p>
              <p className="uppercase tracking-wider text-sm mt-1">Jahre Erfahrung</p>
            </div>
          </div>
        </div>

        {/* Unique Features Layout */}
        <div className="relative mt-32 px-4 md:px-0">
          {/* Central Line for larger screens */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gray-200 hidden md:block z-0"></div>
          
          <div className="space-y-16 md:space-y-24 relative z-10 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center justify-between ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className={`w-full md:w-[45%] flex flex-col ${index % 2 !== 0 ? 'md:items-start md:text-left' : 'md:items-end md:text-right'} items-center text-center mb-6 md:mb-0`}>
                  <h3 className="text-2xl font-display font-bold text-brand-brown mb-2 uppercase tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-lg font-light leading-relaxed max-w-sm">
                    {feature.description}
                  </p>
                </div>

                {/* Center Node on Line */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-brand-gold shadow-lg shrink-0 relative z-20">
                  <div className="w-3 h-3 bg-brand-brown rounded-full"></div>
                </div>

                {/* Visual/Icon Side */}
                <div className={`w-full md:w-[45%] flex ${index % 2 !== 0 ? 'md:justify-end' : 'md:justify-start'} justify-center`}>
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-none bg-gray-50 border-2 border-gray-100 flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-md relative group overflow-hidden">
                    <div className="absolute inset-0 bg-brand-gold/10 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out"></div>
                    <div className="transform -rotate-3 text-brand-gold group-hover:scale-110 transition-transform duration-500 relative z-10">
                      {/* React.cloneElement nuk eshte perfekt, ndaje vetem vizatimin me te njejten hapesire*/}
                      <div className="w-10 h-10 flex items-center justify-center">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;


