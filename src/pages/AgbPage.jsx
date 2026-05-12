import { useNavigate } from 'react-router-dom';

const AgbPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-8 sm:pt-16 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <button onClick={() => navigate(-1)} className="inline-flex items-center text-brand-gold hover:text-yellow-600 font-medium mb-8 transition-colors bg-transparent border-none py-2 pr-4 -ml-2 cursor-pointer">
        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Zurück
      </button>
      <h1 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-8 uppercase break-words hyphens-auto">Allgemeine Geschäftsbedingungen (AGB)</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <h2 className="text-2xl font-bold mt-8 mb-4 text-brand-brown">1. Geltungsbereich</h2>
        <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Aufträge und Verträge zwischen dem Maksutaj Malermeisterbetrieb und seinen Kunden.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4 text-brand-brown">2. Angebote und Vertragsabschluss</h2>
        <p>Unsere Angebote sind freibleibend. Ein Vertrag kommt erst durch unsere schriftliche Auftragsbestätigung oder durch Beginn der Ausführung der Arbeiten zustande. Besichtigungen und Erstangebote sind kostenlos.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-brand-brown">3. Preise und Zahlungsbedingungen</h2>
        <p>Alle Preise verstehen sich, sofern nicht anders angegeben, in Euro. Die Zahlung hat nach Rechnungslegung innerhalb der vereinbarten Frist abzugsfrei zu erfolgen.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4 text-brand-brown">4. Ausführung der Arbeiten</h2>
        <p>Wir verpflichten uns zur fachgerechten Ausführung aller übernommenen Maler-, Spachtel- und Renovierungsarbeiten. Der Kunde hat dafür Sorge zu tragen, dass die Räumlichkeiten zum vereinbarten Termin zugänglich sind.</p>
      </div>
    </div>
  );
};
export default AgbPage;
