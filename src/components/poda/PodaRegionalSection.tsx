
import React from 'react';
import { Link } from 'react-router-dom';

const PodaRegionalSection = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mt-10 mb-4">PODA internet v regionech - dostupnost a pokrytí</h2>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">PODA internet Ostrava - dostupnost a ceny</h3>
      <p className="mb-4">
        Ostrava je hlavním městem pokrytí PODA internetu. Optická síť pokrývá většinu městských částí včetně:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Ostrava-Město, Mariánské Hory</li>
        <li>Ostrava-Jih, Zábřeh</li>
        <li>Ostrava-Poruba, Pustkovec</li>
        <li>Hrabůvka, Kunčice</li>
      </ul>
      <p className="mb-4">
        <strong>Dostupnost:</strong> 85% domácností v Ostravě má přístup k PODA internetu. 
        Nejrychlejší tarify až 2 Gb/s jsou dostupné ve všech pokrytých oblastech.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">PODA internet Praha - pokrytí optickou sítí</h3>
      <p className="mb-4">
        V Praze PODA postupně rozšiřuje svou optickou síť, aktuálně pokrývá:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Praha 10 - Hostivář, Malešice</li>
        <li>Praha 9 - Černý Most, Hloubětín</li>
        <li>Praha 14 - Černý Most, Kyje</li>
        <li>Vybrané části Praha 4 a Praha 8</li>
      </ul>
      <p className="mb-4">
        <strong>Plány expanze:</strong> Do konce roku 2026 plánuje PODA rozšířit pokrytí na dalších 15 tisíc domácností v Praze.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">PODA internet Brno - možnosti připojení</h3>
      <p className="mb-4">
        Brno představuje strategickou lokalitu pro PODA. Aktuální pokrytí zahrnuje:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Brno-sever - Lesná, Černá Pole</li>
        <li>Brno-jih - Komín, Mokrá Hora</li>
        <li>Brno-Královo Pole</li>
        <li>Vybrané části Brno-střed</li>
      </ul>
      <p className="mb-4">
        <strong>Specializace:</strong> V Brně PODA nabízí speciální tarify pro studenty a výzkumné instituce.
      </p>

      <div className="my-6 p-4 bg-muted border border-border">
        <h4 className="font-semibold mb-2">Ověření dostupnosti PODA internetu</h4>
        <p className="mb-2">
          Chcete zjistit, zda je PODA internet dostupný na vaší adrese? Kontaktujte nás a získejte informace o dostupnosti.
        </p>
        <Link to="/kontakt" className="text-primary hover:text-primary/80 font-medium">
          Zkontrolovat dostupnost PODA internetu →
        </Link>
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-3">Další regiony s pokrytím PODA</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="border border-border p-4">
          <h4 className="font-semibold mb-2">Moravskoslezský kraj</h4>
          <ul className="text-sm space-y-1">
            <li>• Karviná a okolí</li>
            <li>• Havířov</li>
            <li>• Bohumín</li>
            <li>• Opava (částečně)</li>
          </ul>
        </div>
        <div className="border border-border p-4">
          <h4 className="font-semibold mb-2">Jihomoravský kraj</h4>
          <ul className="text-sm space-y-1">
            <li>• Blansko</li>
            <li>• Vyškov</li>
            <li>• Břeclav (v přípravě)</li>
          </ul>
        </div>
      </div>

      <div className="bg-muted border border-border p-4 mb-6">
        <p className="text-sm">
          <strong>Tip:</strong> PODA neustále rozšiřuje své pokrytí. I pokud není internet dostupný na vaší adrese dnes, 
          může být k dispozici už za několik měsíců. Doporučujeme pravidelně kontrolovat dostupnost.
        </p>
      </div>
    </>
  );
};

export default PodaRegionalSection;
