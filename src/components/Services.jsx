import { useState } from 'react';
import imgAlbum1 from '../assets/album1.jpeg';
import imgAlbum2 from '../assets/album2.jpeg';
import imgAlbum3 from '../assets/album3.jpeg';

const Services = () => {
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
  const services = [
    { title: "MALEREI", desc: "Als Malermeister gestalten wir Farbwelten, die gezielt die Atmosphäre des jeweiligen Raumes unterstützen. Wir streichen nach Ihren Wünschen.", img: imgAlbum1 },
    { title: "FASSADEN", desc: "Farbe für Ihre Fassade oder ein komplettes Fassadendesign? Kein Problem für uns. Wir gestalten Neubauten und restaurieren Fassaden.", img: imgAlbum2 },
    { title: "SPACHTELARBEITEN", desc: "Glatte und perfekte Wände als Basis für jede weitere Gestaltung. Höchste Präzision für ein vollendetes Ergebnis.", img: imgAlbum3 },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-[#faf9f6] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-3">DEIN MALERMEISTER IN 2700 WIENER NEUSTADT</h2>
          <h3 className="text-[24px] sm:text-3xl md:text-5xl font-display font-black text-brand-brown mb-6 uppercase tracking-tight sm:tracking-normal">LEISTUNGSÜBERSICHT</h3>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed px-2 sm:px-0">
            Egal, ob dekorative Malerei für den Innenraum, frische Farbe für Ihre Fassade oder eine Bodenbeschichtung – sprechen Sie uns gerne an!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white border-0 rounded-sm shadow-md overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div
                className="aspect-[4/3] sm:h-64 md:h-72 overflow-hidden relative cursor-pointer"
                onClick={() => openLightbox(service.img)}
              >
                <div className="absolute inset-0 bg-brand-brown/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h4 className="text-xl font-display font-bold text-gray-900 mb-4 group-hover:text-brand-gold transition-colors">{service.title}</h4>
                <div className="w-12 h-[2px] bg-brand-gold mb-4"></div>
                <p className="text-gray-600 font-light leading-relaxed mb-6 h-24 overflow-hidden">{service.desc}</p>
              </div>
            </div>
          ))}
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
    </section>
  );
};

export default Services;





