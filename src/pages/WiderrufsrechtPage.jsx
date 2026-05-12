import { useNavigate } from 'react-router-dom';

const WiderrufsrechtPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <button onClick={() => navigate(-1)} className="inline-flex items-center text-brand-gold hover:text-yellow-600 font-medium mb-8 transition-colors bg-transparent border-none py-2 pr-4 -ml-2 cursor-pointer">
        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Zurück
      </button>
      <h1 className="text-4xl font-display font-bold text-gray-900 mb-8 uppercase">Widerrufsrecht</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <h2 className="text-2xl font-bold mt-8 mb-4 text-brand-brown">Widerrufsbelehrung</h2>
        <p>Verbraucher haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.</p>
        <p>Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-brand-brown">Folgen des Widerrufs</h2>
        <p>Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.</p>
        <p>Haben Sie verlangt, dass die Dienstleistungen (Malerarbeiten) während der Widerrufsfrist beginnen sollen, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt erbrachten Dienstleistungen entspricht.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-brand-brown">Kontakt für Widerruf</h2>
        <p>Maksutaj Malermeisterbetrieb<br/>
        Heinrich Pichler Gasse 8, 2700 Wiener Neustadt<br/>
        E-Mail: maler.maksutaj@gmail.com</p>
      </div>
    </div>
  );
};
export default WiderrufsrechtPage;
