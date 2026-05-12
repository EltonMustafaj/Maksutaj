import { useNavigate } from 'react-router-dom';

const DatenschutzPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-8 sm:pt-16 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <button onClick={() => navigate(-1)} className="inline-flex items-center text-brand-gold hover:text-yellow-600 font-medium mb-8 transition-colors bg-transparent border-none py-2 pr-4 -ml-2 cursor-pointer">
        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Zurück
      </button>
      <h1 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-8 uppercase break-words hyphens-auto">Datenschutzerklärung</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>In dieser Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4 text-brand-brown">Kontakt mit uns</h2>
        <p>Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4 text-brand-brown">Ihre Rechte</h2>
        <p>Ihnen stehen bezüglich Ihrer bei uns gespeicherten Daten grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich bei uns (maler.maksutaj@gmail.com) beschweren.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-brand-brown">Verantwortliche Stelle</h2>
        <p>Maksutaj Malermeisterbetrieb<br/>
        Heinrich Pichler Gasse 8, 2700 Wiener Neustadt<br/>
        Tel.: +43 664 75109747<br/>
        E-Mail: maler.maksutaj@gmail.com</p>
      </div>
    </div>
  );
};
export default DatenschutzPage;
