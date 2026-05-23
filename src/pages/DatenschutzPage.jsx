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
        <h2 className="text-2xl font-bold mt-8 mb-4 text-brand-brown">1. Datenschutz auf einen Blick</h2>
        <h3 className="text-xl font-semibold mb-2 text-brand-brown">Allgemeine Hinweise</h3>
        <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>

        <h3 className="text-xl font-semibold mb-2 mt-4 text-brand-brown">Datenerfassung auf dieser Website</h3>
        <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:</p>
        <p className="font-medium">
          Maksutaj Malermeisterbetrieb<br />
          Inhaber: Nevzat Maksutaj<br />
          Heinrich Pichler-Gasse 8/2/29<br />
          2700 Wiener Neustadt, Österreich<br />
          E-Mail: <a href="mailto:maler.maksutaj@gmail.com" className="text-brand-gold hover:underline">maler.maksutaj@gmail.com</a>
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-brand-brown">2. Hosting und Content Delivery Network (CDN)</h2>
        <p>Unsere Website wird auf den Servern eines spezialisierten Hosting-Dienstleisters betrieben, um eine sichere, schnelle und zuverlässige Bereitstellung unserer Inhalte unter der Domain www.maler-maksutaj.at zu gewährleisten.</p>
        <p>Zu diesem Zweck nutzen wir die Plattform Vercel (Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA). Beim Besuch unserer Website werden automatisch Logfiles (einschließlich Ihrer IP-Adresse) erfasst, die für den technischen Betrieb, die Sicherheit der Server und den Schutz vor Cyberangriffen erforderlich sind. Dies erfolgt auf Grundlage unseres berechtigten Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO. Wir haben mit dem Anbieter die erforderlichen datenschutzrechtlichen Vereinbarungen (Standardvertragsklauseln) abgeschlossen, um den Schutz Ihrer Daten zu gewährleisten.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-brand-brown">3. SSL- bzw. TLS-Verschlüsselung</h2>
        <p>Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung, um die Übertragung vertraulicher Inhalte zu schützen, wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-brand-brown">4. Datenerfassung auf dieser Website</h2>
        <h3 className="text-xl font-semibold mb-2 text-brand-brown">Kontaktformular / E-Mail-Kontakt</h3>
        <p>Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten (Name, E-Mail, Telefonnummer) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-brand-brown">5. Plugins und Tools</h2>
        <h3 className="text-xl font-semibold mb-2 text-brand-brown">Google Maps</h3>
        <p>Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.</p>
        <p className="mt-4">Die Nutzung von Google Maps erfolgt ausschließlich auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO (entweder durch Klick auf „Alle akzeptieren“ im Cookie-Banner oder direkt beim Aktivieren der Karte über den Button „Karte laden“). Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden an einen Server von Google in den USA übertragen und dort gespeichert. Die Datenübertragung in die USA wird durch die Standardvertragsklauseln der EU-Kommission sowie die Zertifizierung von Google unter dem EU-US Data Privacy Framework abgesichert. Weitere Informationen finden Sie in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy" className="text-brand-gold hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-brand-brown">6. Ihre Rechte</h2>
        <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde (Österreichische Datenschutzbehörde) zu.</p>
      </div>
    </div>
  );
};
export default DatenschutzPage;
