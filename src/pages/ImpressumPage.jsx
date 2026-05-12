import { useNavigate } from 'react-router-dom';

const ImpressumPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <button onClick={() => navigate(-1)} className="inline-flex items-center text-brand-gold hover:text-yellow-600 font-medium mb-8 transition-colors bg-transparent border-none py-2 pr-4 -ml-2 cursor-pointer">
        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Zurück
      </button>
      <h1 className="text-4xl font-display font-bold text-gray-900 mb-8 uppercase">Impressum</h1>
      <div className="prose prose-lg text-gray-700 space-y-4">
        <p><strong>Informationspflicht laut §5 E-Commerce Gesetz, §14 Unternehmensgesetzbuch, §63 Gewerbeordnung und Offenlegungspflicht laut §25 Mediengesetz.</strong></p>
        <p className="mt-6"><strong>Maksutaj Malermeisterbetrieb</strong><br/>
        Heinrich Pichler Gasse 8<br/>
        2700 Wiener Neustadt<br/>
        Österreich</p>
        <p className="mt-6"><strong>Tel.:</strong> +43 664 75109747<br/>
        <strong>E-Mail:</strong> maler.maksutaj@gmail.com</p>
        <p className="mt-6"><strong>Unternehmensgegenstand:</strong> Maler- und Anstreichergewerbe</p>
        <p className="mt-6"><strong>Aufsichtsbehörde/Gewerbebehörde:</strong> Bezirkshauptmannschaft Wiener Neustadt</p>
      </div>
    </div>
  );
};
export default ImpressumPage;
