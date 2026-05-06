
import React from 'react';

const SelectionGuide = () => {
  return (
    <div className="prose max-w-none">
      <h2 className="text-2xl font-semibold mt-10 mb-4">Jak vybrat nejlepšího poskytovatele internetu?</h2>
      <p className="mb-4">Při výběru internetového připojení zvažte následující faktory:</p>
      
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Dostupnost ve vaší lokalitě</strong> - Ověřte, kteří poskytovatelé nabízejí služby na vaší adrese</li>
        <li><strong>Požadovaná rychlost</strong> - Pro běžné použití stačí 50-100 Mb/s, pro náročnější uživatele doporučujeme 300+ Mb/s</li>
        <li><strong>Technologie připojení</strong> - Optické připojení je nejspolehlivější a nejrychlejší</li>
        <li><strong>Cena a smluvní podmínky</strong> - Porovnejte měsíční poplatky a délku závazku</li>
        <li><strong>Dodatečné služby</strong> - Možnosti IPTV, mobilních tarifů nebo jiných služeb</li>
      </ol>
    </div>
  );
};

export default SelectionGuide;
