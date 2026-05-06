
import React from 'react';
import { Link } from 'react-router-dom';

const PodaIntroSection = () => {
  return (
    <>
      <p className="text-lg mb-6">
        V této nezávislé recenzi analyzujeme služby poskytovatele PODA, který působí na českém trhu od roku 1996. 
        Zaměříme se na nabídku služeb, ceny, zákaznické zkušenosti a objektivní srovnání s konkurencí.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Přehled poskytovatele PODA</h2>
      <p className="mb-6">
        PODA je český poskytovatel telekomunikačních služeb s hlavní působností v Moravskoslezském kraji, Praze a vybraných městech. 
        Společnost založená v roce 1996 postupně rozšiřuje svou infrastrukturu, přičemž se zaměřuje především na optické připojení.
      </p>

      <h3 className="text-xl font-semibold mb-3">Portfolio služeb:</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Optický internet</strong> s rychlostí až 2 Gb/s</li>
        <li><strong>PODA net.TV</strong> - internetová televize s více než 100 kanály</li>
        <li><strong>Mobilní služby</strong> s datovými balíčky a výhodnými tarify</li>
        <li><strong>Firemní řešení</strong> včetně dedikovaných linek a profesionální podpory</li>
      </ul>
      
      <div className="my-6 p-4 bg-muted border border-border">
        <p className="mb-2">
          Chcete porovnat více poskytovatelů pro vaši adresu?
        </p>
        <Link to="/kontakt" className="text-primary hover:text-primary/80 font-medium">
          Použijte náš bezplatný porovnávací nástroj →
        </Link>
      </div>
    </>
  );
};

export default PodaIntroSection;
