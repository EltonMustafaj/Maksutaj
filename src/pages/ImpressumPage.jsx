import { useNavigate } from 'react-router-dom';

const ImpressumPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-8 sm:pt-16 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <button onClick={() => navigate(-1)} className="inline-flex items-center text-brand-gold hover:text-yellow-600 font-medium mb-8 transition-colors bg-transparent border-none py-2 pr-4 -ml-2 cursor-pointer">
        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Zurück
      </button>
      <h1 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-8 uppercase break-words hyphens-auto">Impressum</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p className="mt-6">
          <strong>Nevzat Maksutaj – Malergewerbe</strong><br/>
          Heinrich Pichler-Gasse 8/2/29<br/>
          2700 Wiener Neustadt<br/>
          Österreich
        </p>
        
        <p>
          <strong>E-Mail:</strong> maler.maksutaj@gmail.com
        </p>
        
        <p>
          <strong>Unternehmensgegenstand:</strong><br/>
          Maler und Anstreicher
        </p>
        
        <p>
          Mitglied der Wirtschaftskammer Niederösterreich
        </p>
        
        <p>
          <strong>Gewerbebehörde:</strong><br/>
          Magistrat der Stadt Wiener Neustadt
        </p>
        
        <div>
          <h2 className="text-xl font-bold mt-8 mb-2">Haftung für Inhalte:</h2>
          <p>
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
          </p>
        </div>
        
        <div>
          <h2 className="text-xl font-bold mt-8 mb-2">Datenschutzerklärung:</h2>
          <p>
            Informationen zum Datenschutz finden Sie in unserer Datenschutzerklärung.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ImpressumPage;
