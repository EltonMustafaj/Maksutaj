import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(() => {
    return !localStorage.getItem('cookieConsent');
  });

  useEffect(() => {
    const handleConsentRevoked = () => {
      setIsVisible(true);
    };
    window.addEventListener('openCookieBanner', handleConsentRevoked);
    return () => window.removeEventListener('openCookieBanner', handleConsentRevoked);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    window.dispatchEvent(new Event('cookieConsentChange'));
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
    window.dispatchEvent(new Event('cookieConsentChange'));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] z-50 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-sm sm:text-base">
          <p className="font-bold text-lg mb-1">Cookie-Hinweis</p>
          <p className="text-gray-300">
            Wir nutzen Cookies und Google Maps, um unsere Website optimal zu gestalten. Mit dem Klick auf „Alle akzeptieren“ stimmen Sie dem zu. Details finden Sie in unserer <Link to="/datenschutz" className="text-brand-gold hover:underline">Datenschutzerklärung</Link>.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-2 sm:mt-0">
          <button 
            onClick={handleAccept}
            className="whitespace-nowrap bg-brand-gold hover:bg-yellow-500 text-brand-brown font-bold py-2 px-6 shadow-md transition-colors"
          >
            Alle akzeptieren
          </button>
          <button 
            onClick={handleDecline}
            className="whitespace-nowrap bg-transparent hover:bg-gray-800 text-white border border-white font-bold py-2 px-6 transition-colors"
          >
            Ablehnen
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;