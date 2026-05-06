
import React from 'react';
import { Link } from 'react-router-dom';

const PodaRecommendationSection = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mt-10 mb-4">Proč zvolit PODA internet?</h2>
      <p className="mb-4">PODA internet je vhodnou volbou pokud:</p>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li>Bydlíte v oblasti s pokrytím optickou sítí PODA</li>
        <li>Hledáte vysokorychlostní připojení za příznivou cenu</li>
        <li>Nechcete se vázat dlouhodobou smlouvou</li>
        <li>Požadujete stabilní připojení s minimální odezvou</li>
        <li>Chcete kombinovat internet s IPTV službami</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Závěr a doporučení</h2>
      <p className="mb-6">
        PODA patří mezi nejlepší poskytovatele internetu v regionech, kde má vybudovanou vlastní infrastrukturu. 
        Vyniká příznivými cenami, absencí závazků a kvalitním optickým připojením s rychlostí až 2 Gb/s.
      </p>
      <p className="mb-6">
        Pokud hledáte spolehlivé a rychlé připojení za rozumnou cenu, PODA je určitě poskytovatelem, kterého byste měli zvážit. 
        Před rozhodnutím doporučujeme ověřit dostupnost služeb na vaší adrese.
      </p>
      
      <p className="text-sm text-muted-foreground italic">
        Aktualizováno: leden 2026
      </p>

      <div className="mt-12 p-6 bg-muted border border-border">
        <h3 className="text-xl font-semibold mb-3">Ověřte dostupnost PODA ve vaší lokalitě</h3>
        <p className="mb-4">
          Zjistěte, zda je PODA dostupná na vaší adrese nebo vám pomůžeme najít jiného vhodného poskytovatele.
        </p>
        <Link to="/kontakt" className="btn-primary">
          Kontaktovat nás
        </Link>
      </div>
    </>
  );
};

export default PodaRecommendationSection;
