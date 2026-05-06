
import React from 'react';
import { Link } from 'react-router-dom';
import { getCurrentMonthCzech } from '@/lib/dateUtils';

const PodaIntroUpdateSection = () => {
  const currentMonth = getCurrentMonthCzech(false);

  return (
    <>
      <h2 className="text-2xl font-semibold mt-8 mb-4">O poskytovateli PODA - základní informace</h2>
      <p className="mb-4">
        <strong>PODA a.s.</strong> je český poskytovatel telekomunikačních služeb působící na trhu od roku 1996. 
        Společnost se zaměřuje především na optické připojení k internetu s rychlostmi až 2 Gb/s a má silnou pozici 
        zejména v Moravskoslezském kraji. Podle dostupných informací pokračuje společnost v roce 2025 v rozšiřování své sítě a služeb.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Klíčové charakteristiky PODA</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Dlouhá tradice:</strong> Působí na trhu od roku 1996 (přes 29 let)</li>
        <li><strong>Optická technologie:</strong> Nabízí rychlosti až 2 Gb/s na optické síti</li>
        <li><strong>Cenová politika:</strong> Poskytuje služby bez dlouhodobého závazku</li>
        <li><strong>Regionální pokrytí:</strong> Hlavní působnost v Moravskoslezském kraji</li>
        <li><strong>Další služby:</strong> IPTV televize a mobilní služby</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">Srovnání s konkurencí - přehledná tabulka</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Kritérium</th>
              <th className="border border-border px-4 py-2 text-left">PODA</th>
              <th className="border border-border px-4 py-2 text-left">O2</th>
              <th className="border border-border px-4 py-2 text-left">T-Mobile</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2">Závazek</td>
              <td className="border border-border px-4 py-2 text-primary font-bold">Bez závazku</td>
              <td className="border border-border px-4 py-2">24 měsíců</td>
              <td className="border border-border px-4 py-2">24 měsíců</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">Max. rychlost</td>
              <td className="border border-border px-4 py-2 text-primary font-bold">2000 Mb/s</td>
              <td className="border border-border px-4 py-2">1000 Mb/s</td>
              <td className="border border-border px-4 py-2">1000 Mb/s</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">Cena 300 Mb/s</td>
              <td className="border border-border px-4 py-2 text-primary font-bold">340 Kč</td>
              <td className="border border-border px-4 py-2">699 Kč</td>
              <td className="border border-border px-4 py-2">749 Kč</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-6 p-4 bg-muted border border-border">
        <p className="mb-2">
          Chcete porovnat více poskytovatelů pro vaši adresu?
        </p>
        <Link to="/kontakt" className="text-primary hover:text-primary/80 font-medium">
          Využijte náš bezplatný porovnávací formulář →
        </Link>
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-3">Přehled cen dle ceníku PODA ({currentMonth})</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Tarif</th>
              <th className="border border-border px-4 py-2 text-left">Rychlost</th>
              <th className="border border-border px-4 py-2 text-left">Cena/měsíc</th>
              <th className="border border-border px-4 py-2 text-left">Vhodné pro</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">PODA Internet 300</td>
              <td className="border border-border px-4 py-2">300 Mb/s</td>
              <td className="border border-border px-4 py-2">340 Kč</td>
              <td className="border border-border px-4 py-2">Domácnosti, streaming</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">PODA Internet 1000</td>
              <td className="border border-border px-4 py-2">1000 Mb/s</td>
              <td className="border border-border px-4 py-2">440 Kč</td>
              <td className="border border-border px-4 py-2">Náročné použití, firmy</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">PODA Internet 2000</td>
              <td className="border border-border px-4 py-2">2000 Mb/s</td>
              <td className="border border-border px-4 py-2">520 Kč</td>
              <td className="border border-border px-4 py-2">Extrémní rychlosti</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-accent/10 border border-accent/30 p-4 mb-6">
        <p className="text-sm text-foreground">
          <strong>Poznámka:</strong> Uvedené ceny odpovídají veřejně dostupnému ceníku PODA a.s. platného od června 2025. 
          Aktuální nabídky a podmínky mohou být odlišné. Doporučujeme ověřit aktuální dostupnost a ceny přímo u poskytovatele.
        </p>
      </div>
    </>
  );
};

export default PodaIntroUpdateSection;
