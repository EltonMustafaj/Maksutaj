import { useNavigate } from 'react-router-dom';

const CookiePolicyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-8 sm:pt-16 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <button onClick={() => navigate(-1)} className="inline-flex items-center text-brand-gold hover:text-yellow-600 font-medium mb-8 transition-colors bg-transparent border-none py-2 pr-4 -ml-2 cursor-pointer">
        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Zurück
      </button>
      <h1 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-8 uppercase break-words hyphens-auto">Cookie-Richtlinie</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>Unsere Website verwendet Cookies. Das sind kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden an.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4 text-brand-brown">Zweck der Cookies</h2>
        <p>Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten. Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-brand-brown">Ihre Einstellungen</h2>
        <p>Wenn Sie dies nicht wünschen, können Sie Ihren Browser so einrichten, dass er Sie über das Setzen von Cookies informiert und Sie dies nur im Einzelfall erlauben. Bei der Deaktivierung von Cookies kann die Funktionalität unserer Website eingeschränkt sein.</p>
      </div>
    </div>
  );
};
export default CookiePolicyPage;
