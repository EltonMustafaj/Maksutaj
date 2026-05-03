import img01 from '../assets/0.1.jpeg';
import img02 from '../assets/0.2.jpeg';
import img03 from '../assets/0.3.jpeg';
import img04 from '../assets/0.4.jpeg';
import img05 from '../assets/0.5.jpeg';
import img06 from '../assets/0.6.jpeg';
import img07 from '../assets/0.7.jpeg';
import img08 from '../assets/0.8.jpeg';
import img09 from '../assets/0.9.jpeg';
import img10 from '../assets/0.10.jpeg';
import img11 from '../assets/0.11.jpeg';
import img1 from '../assets/1.jpeg';

const ReferencesPage = () => {
  const images = [
    img01, img02, img03, img04, img05, img06, 
    img07, img08, img09, img10, img11, img1
  ];

  return (
    <div className="pt-16 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-3 text-center">UNSERE ARBEITEN</h2>
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-brand-brown mb-8 text-center uppercase">UNSERE REFERENZEN</h1>
        <div className="w-24 h-1 bg-brand-gold mx-auto mb-12"></div>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 text-lg leading-relaxed">
          Werfen Sie einen Blick auf einige unserer ausgewählten Projekte und überzeugen Sie sich selbst von der Qualität unserer Arbeit.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {images.map((src, index) => (
            <div key={index} className="group relative overflow-hidden rounded-sm shadow-md aspect-square bg-gray-200 cursor-pointer">
              <div className="absolute inset-0 bg-brand-brown/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
              <img 
                src={src} 
                alt={`Referenz Projekt ${index + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReferencesPage;
