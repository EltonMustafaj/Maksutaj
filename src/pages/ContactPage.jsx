import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import nevzatImg from '../assets/Nevzat.jpeg';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState('idle');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [mapConsent, setMapConsent] = useState(() => {
    return localStorage.getItem('cookieConsent') === 'accepted';
  });

  useEffect(() => {
    const handleConsentChange = () => {
      setMapConsent(localStorage.getItem('cookieConsent') === 'accepted');
    };
    
    window.addEventListener('cookieConsentChange', handleConsentChange);
    return () => window.removeEventListener('cookieConsentChange', handleConsentChange);
  }, []);

  const handleMapAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setMapConsent(true);
    window.dispatchEvent(new Event('cookieConsentChange'));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!privacyAccepted) return;
    setFormStatus('submitting');
    
    const form = e.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/maler.maksutaj@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
      });
      
      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <div className="py-16 md:py-24 bg-gray-50 flex-grow font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-3">Kontakt</h2>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-brand-brown mb-6">Nehmen Sie Kontakt auf</h1>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Haben Sie Fragen zu unseren Leistungen oder möchten Sie ein unverbindliches Angebot? 
            Füllen Sie das Formular aus oder besuchen Sie uns direkt vor Ort.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden">
          
          {/* Contact Form */}
          <div className="lg:w-1/2 p-8 md:p-12">
            <h3 className="text-2xl font-display font-bold text-brand-brown mb-8 uppercase tracking-wide">Schreiben Sie uns</h3>
            
            {formStatus === 'success' ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-none p-6 text-center">
                <svg className="w-12 h-12 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="text-xl font-bold mb-2">Vielen Dank!</h4>
                <p>Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns in Kürze bei Ihnen melden.</p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="mt-6 text-brand-brown font-bold underline hover:text-brand-gold transition-colors"
                >
                  Neue Nachricht schreiben
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Optional: Add a subject line for the email */}
                <input type="hidden" name="_subject" value="Neue Nachricht von der Website (Malerbetrieb Maksutaj)" />
                {/* Optional: Disable Catcha to make it easier for users */}
                <input type="hidden" name="_captcha" value="false" />

                {formStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 p-4 mb-4 text-sm">
                    Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später noch einmal.
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    id="name" 
                    placeholder="Ihr Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-colors"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-Mail</label>
                    <input 
                      type="email" 
                      name="email"
                      id="email" 
                      placeholder="ihre@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                    <input 
                      type="tel" 
                      name="phone"
                      id="phone" 
                      placeholder="Ihre Telefonnummer"
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Nachricht</label>
                  <textarea 
                    name="message"
                    id="message" 
                    rows="5" 
                    placeholder="Ihre Nachricht an uns..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-colors resize-none"
                    required
                  ></textarea>
                </div>

                <div className="flex items-start mb-4">
                  <div className="flex items-center h-5">
                    <input
                      id="privacyConsent"
                      name="privacyConsent"
                      type="checkbox"
                      checked={privacyAccepted}
                      onChange={(e) => setPrivacyAccepted(e.target.checked)}
                      className="w-4 h-4 text-brand-gold bg-gray-100 border-gray-300 rounded focus:ring-brand-gold focus:ring-2"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="privacyConsent" className="font-medium text-gray-700">
                      Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage verarbeitet werden. Details finden Sie in der <Link to="/datenschutz" className="text-brand-gold hover:underline">Datenschutzerklärung</Link>.
                    </label>
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={formStatus === 'submitting' || !privacyAccepted}
                  className={`w-full ${formStatus === 'submitting' || !privacyAccepted ? 'bg-gray-400 cursor-not-allowed' : 'bg-brand-gold hover:bg-yellow-500'} text-brand-brown font-display font-bold uppercase tracking-wider py-4 transition-all duration-300 shadow-md hover:shadow-lg`}
                >
                  {formStatus === 'submitting' ? 'Wird gesendet...' : 'Nachricht senden'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info & Map */}
          <div className="lg:w-1/2 bg-gray-900 text-white relative">
            <div className="p-8 md:p-12 relative z-10 h-full flex flex-col">
              <h3 className="text-2xl font-display font-bold text-brand-gold mb-8 uppercase tracking-wide">Kontakt</h3>
              
              <div className="flex flex-col sm:flex-row gap-8 mb-8 flex-grow">
                
                {/* Profilbild */}
                <div className="flex flex-col items-center sm:items-start flex-shrink-0">
                  <img 
                    src={nevzatImg} 
                    alt="Nevzat Maksutaj" 
                    className="w-52 h-52 sm:w-60 sm:h-60 object-cover rounded-md border-2 border-brand-gold/50 shadow-lg mb-3" 
                  />
                  <div className="text-center sm:text-left w-full">
                    <h4 className="text-lg font-bold text-white tracking-wide">Meister: Nevzat Maksutaj</h4>
                    <p className="text-xs text-brand-gold uppercase tracking-widest mt-1">Malermeister</p>
                  </div>
                </div>

                {/* Info Details */}
                <div className="space-y-6">
                  <div className="flex items-start">
                  <div className="text-brand-gold mt-1 mr-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 uppercase tracking-widest mb-1">Maksutaj Malermeisterbetrieb</h4>
                    <p className="text-lg">Heinrich Pichler Gasse 8<br/>2700 Wiener Neustadt</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-brand-gold mt-1 mr-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 uppercase tracking-widest mb-1">E-Mail</h4>
                    <p className="text-lg">maler.maksutaj@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-brand-gold mt-1 mr-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 uppercase tracking-widest mb-1">Telefon & WhatsApp</h4>
                    <a 
                      href="https://wa.me/4366475109747" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg hover:text-brand-gold transition-colors inline-flex items-center gap-2"
                      title="Auf WhatsApp anschreiben"
                    >
                      +43 664 75109747
                      <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.031 0C5.385 0 0 5.384 0 12.031c0 2.124.551 4.197 1.597 6.02L.152 23.4l5.485-1.442c1.748.956 3.735 1.462 5.794 1.462 6.645 0 12.03-5.385 12.03-12.03S18.676 0 12.031 0zm6.541 17.202c-.276.772-1.579 1.48-2.193 1.545-.561.059-1.294.02-3.414-.85-2.617-1.077-4.304-3.766-4.437-3.943-.133-.178-1.058-1.408-1.058-2.686 0-1.278.665-1.905.894-2.164.229-.258.498-.323.665-.323.167 0 .334.004.482.012.155.008.361-.06.56.294.208.368.706 1.725.768 1.849.062.124.104.269.021.449-.083.178-.124.29-.249.435-.125.146-.264.316-.381.449-.125.133-.256.279-.111.53m2.593 4.417c2.593 4.417 3.018 4.792 3.325 5.25.308.459.288 1.075.062 1.466-.226.39-.817.62-1.161.764z M17.062 16.59c-.276.772-1.579 1.48-2.193 1.545-.561.059-1.294.02-3.414-.85-2.617-1.077-4.304-3.766-4.437-3.943-.133-.178-1.058-1.408-1.058-2.686 0-1.278.665-1.905.894-2.164.229-.258.498-.323.665-.323.167 0 .334.004.482.012.155.008.361-.06.56.294.208.368.706 1.725.768 1.849.062.124.104.269.021.449-.083.178-.124.29-.249.435-.125.146-.264.316-.381.449-.125.133-.256.279-.111.53-.053-.021.111.53.111.53s1.258.533 1.827.81c.213.104.5.342.342.756-.157.414-.73.716-.948.835z" />
                      </svg>
                    </a>
                  </div>
                </div>
                </div>
              </div>

              {/* Google Map of Wiener Neustadt */}
              <div className="w-full h-64 border-2 border-brand-gold relative overflow-hidden bg-gray-800 flex items-center justify-center text-center p-4">
                {mapConsent ? (
                  <iframe 
                    src="https://maps.google.com/maps?q=Heinrich%20Pichler%20Gasse%208%2C%202700%20Wiener%20Neustadt&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    loading="lazy" 
                    style={{ border: 0 }}
                    title="Location Map Wiener Neustadt"
                  ></iframe>
                ) : (
                  <div className="text-white z-20">
                    <h4 className="text-xl font-bold mb-2">Google Maps aktivieren</h4>
                    <p className="text-sm text-gray-300 mb-4 max-w-md mx-auto">
                      Um die interaktive Karte anzuzeigen, ist Ihre Zustimmung erforderlich. Mit dem Laden der Karte akzeptieren Sie die Datenschutzbestimmungen von Google.
                    </p>
                    <button 
                      onClick={handleMapAccept}
                      className="bg-brand-gold hover:bg-yellow-500 text-brand-brown font-bold py-2 px-6 transition-colors shadow-md"
                    >
                      Karte laden
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            {/* Background design element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold opacity-5 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;


