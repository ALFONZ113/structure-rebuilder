
import React from 'react';
import { Link } from 'react-router-dom';

const ProviderFAQ = () => {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">Často kladené dotazy</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Jak zjistím, jaké připojení je dostupné na mé adrese?</h3>
          <p>Dostupnost internetového připojení můžete ověřit na stránkách jednotlivých poskytovatelů zadáním vaší adresy, nebo můžete využít <Link to="/#lead-form" className="text-green-500 hover:text-green-700">náš formulář</Link> a my to zjistíme za vás.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Je lepší optické nebo bezdrátové připojení?</h3>
          <p>Optické připojení nabízí vyšší rychlost, nižší odezvu a větší stabilitu než bezdrátové. Pokud máte možnost volby, doporučujeme optiku.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Jakou rychlost internetu potřebuji?</h3>
          <p>Pro běžné používání (prohlížení webu, sledování videí) stačí 50-100 Mb/s. Pro rodinu s více zařízeními a streamování ve 4K doporučujeme 300+ Mb/s.</p>
        </div>
      </div>
    </section>
  );
};

export default ProviderFAQ;
