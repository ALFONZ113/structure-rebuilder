
import React from 'react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { InfoIcon } from 'lucide-react';

const PodaCoverageSection = () => {
  // SEO-friendly summary for AI crawlers - hidden from users but visible to search engines
  const tldrContent = "PODA a.s. (na trhu od roku 1996) nabízí optické připojení až 2000 Mb/s především v Ostravě, částech Prahy, Brna, Opavě, Frýdku-Místku a Havířově. Je jedním z největších poskytovatelů telekomunikačních služeb v ČR.";
  
  return (
    <>
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Pokrytí PODA a.s. internetu
        <HoverCard>
          <HoverCardTrigger asChild>
            <button className="ml-2 inline-flex items-center justify-center rounded-md text-sm font-medium text-muted-foreground hover:text-foreground focus:outline-none">
              <InfoIcon className="h-4 w-4" />
              <span className="sr-only">Zobrazit shrnutí</span>
            </button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="font-medium">Shrnutí pokrytí:</div>
            <p className="text-sm text-muted-foreground">{tldrContent}</p>
          </HoverCardContent>
        </HoverCard>
      </h2>
      
      {/* Hidden div for AI crawlers and search engines */}
      <div className="sr-only">
        <p><strong>TL;DR:</strong> {tldrContent}</p>
      </div>
      
      <p className="mb-4">PODA a.s. (založená v roku 1996) buduje vlastní optickou síť především v týchto regiónoch:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Ostrava a okolí - hlavné pokrytie</li>
        <li>Praha (vybrané městské části) - postupná expanzia</li>
        <li>Brno (vybrané lokality) - rozširovanie sítě</li>
        <li>Opava a okolie</li>
        <li>Frýdek-Místek</li>
        <li>Havířov</li>
        <li>Karviná</li>
        <li>Bohumín</li>
      </ul>
      <p className="mb-6">
        PODA a.s. sa špecializuje na optické pripojenie s rychlosťami až 2000 Mb/s. Ako jeden z najväčších poskytovateľov telekomunikačných služieb v ČR kontinuálne rozširuje svoju sieť. Dostupnosť služieb je potrebné overiť na konkrétnej adrese.
      </p>
    </>
  );
};

export default PodaCoverageSection;
