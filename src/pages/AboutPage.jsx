import { useState } from 'react';
import aboutImage from '../assets/0.1.jpeg';
import img02 from '../assets/0.2.jpeg';
import img03 from '../assets/0.3.jpeg';
import img04 from '../assets/0.4.jpeg';
import img06 from '../assets/0.6.jpeg';
import img07 from '../assets/0.7.jpeg';
import img08 from '../assets/0.8.jpeg';
import img09 from '../assets/0.9.jpeg';
import img10 from '../assets/0.10.jpeg';
import img11 from '../assets/0.11.jpeg';

const AboutPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const openLightbox = (src) => {
    setSelectedImage(src);
    setZoomLevel(1);
    setPan({ x: 0, y: 0 });
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const zoomIn = (e) => {
    e.stopPropagation();
    setZoomLevel(prev => Math.min(prev + 0.5, 4));
  };

  const zoomOut = (e) => {
    e.stopPropagation();
    setZoomLevel(prev => {
      const newZoom = Math.max(prev - 0.5, 1);
      if (newZoom === 1) setPan({ x: 0, y: 0 });
      return newZoom;
    });
  };

  const handlePointerDown = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const handlePointerMove = (e) => {
    if (isDragging && zoomLevel > 1) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const images = [
    img02, img03, img04, img06, 
    img07, img08, img09, img10, img11
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
              className="relative z-10 w-full h-[400px] object-cover border-4 border-white shadow-xl cursor-pointer"
              onClick={() => openLightbox(aboutImage)}
            />
            <div className="absolute -bottom-6 left-4 sm:-bottom-10 sm:-left-10 bg-brand-brown text-white p-4 sm:p-6 z-20 shadow-lg border-2 border-brand-gold flex flex-col justify-center items-center text-center">
              <p className="font-display text-3xl sm:text-4xl font-bold text-brand-gold">10+</p>
              <p className="uppercase tracking-wider text-xs sm:text-sm mt-1">Jahre Erfahrung</p>
            </div>
          </div>
        </div>

        {/* Gallery Grid from Referenzen */}
        <div className="mt-24">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {images.map((src, index) => (
              <div key={index} className="group relative overflow-hidden rounded-sm shadow-md aspect-square bg-gray-200 cursor-pointer" onClick={() => openLightbox(src)}>
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          onClick={closeLightbox}
        >
          {/* Controls */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-4 z-50 bg-black/40 p-2 rounded-full backdrop-blur-md">
            <button 
              onClick={zoomOut}
              className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-3xl pb-1 transition-colors"
              title="Zvogëlo"
            >
              -
            </button>
            <button 
              onClick={zoomIn}
              className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-3xl pb-1 transition-colors"
              title="Zmadho"
            >
              +
            </button>
            <button 
              onClick={closeLightbox}
              className="w-12 h-12 bg-brand-gold hover:bg-yellow-600 rounded-full flex items-center justify-center text-white text-xl transition-colors shadow-lg ml-2"
              title="Mbyll"
            >
              ✕
            </button>
          </div>

          {/* Image Container */}
          <div 
            className="relative w-full h-full flex items-center justify-center overflow-hidden touch-none"
            onClick={(e) => e.stopPropagation()}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            <img 
              src={selectedImage} 
              alt="Zmadhuar" 
              className="max-w-full max-h-full object-contain origin-center select-none"
              style={{ 
                transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoomLevel})`,
                transition: isDragging ? 'none' : 'transform 0.2s ease-out',
                cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
              }}
              draggable="false"
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default AboutPage;


