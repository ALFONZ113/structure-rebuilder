
import React from 'react';
import { Table } from "@/components/ui/table";
import { Check, X } from 'lucide-react';

const BlogConnectionTypesSection = () => (
  <>
    <h2>Typy internetového připojení dostupné v ČR</h2>
    <p>Na českém trhu se setkáváme s několika hlavními typy internetového připojení. Každý z nich má své výhody i nevýhody a hodí se pro jiný typ uživatelů. Pojďme si je postupně představit a vysvětlit jejich specifika.</p>
    
    <h3>Optické připojení</h3>
    <p>Optický internet představuje v současnosti nejrychlejší a nejspolehlivější typ připojení. Data jsou přenášena pomocí optických vláken, což umožňuje dosahovat rychlostí až několika gigabitů za sekundu. Optika nabízí symetrické rychlosti, což znamená, že rychlost stahování i nahrávání je stejná.</p>
    
    <p>Hlavní výhodou optického internetu je kromě vysoké rychlosti také stabilita připojení a nízká latence, což oceníte zejména při hraní online her nebo videohovorech. Nevýhodou je omezená dostupnost – optické sítě jsou budovány především ve větších městech a hustě obydlených oblastech.</p>

    <h3>Kabelové připojení</h3>
    <p>Kabelový internet využívá stejnou infrastrukturu jako kabelová televize. Nabízí vysoké rychlosti (běžně 100-500 Mbit/s), i když obvykle ne tak vysoké jako optika. Rychlost nahrávání bývá nižší než rychlost stahování.</p>
    
    <p>Kabelové připojení je dostupnější než optika, ale stále není k dispozici všude. Jeho výhodou je stabilita a relativně příznivý poměr ceny a výkonu.</p>

    <h3>xDSL připojení</h3>
    <p>Technologie DSL využívá běžnou telefonní linku, a proto je dostupná téměř všude. Rychlost závisí na vzdálenosti od ústředny – čím dále jste, tím nižší rychlost můžete očekávat. Běžné rychlosti se pohybují od 8 do 100 Mbit/s.</p>
    
    <p>Výhodou xDSL je široká dostupnost a stabilita připojení. Nevýhodou jsou nižší rychlosti ve srovnání s optikou nebo kabelovým připojením.</p>

    <h3>Bezdrátové připojení</h3>
    <p>Bezdrátový internet je v Česku velmi populární, zejména v oblastech, kde není dostupné kabelové nebo optické připojení. Využívá rádiové vlny k přenosu dat mezi vysílačem a přijímačem na vaší střeše nebo fasádě.</p>
    
    <p>Rychlosti se pohybují od několika desítek Mbit/s až po stovky Mbit/s u novějších technologií. Kvalita připojení může být ovlivněna počasím nebo překážkami v cestě signálu.</p>

    <h3>Mobilní internet</h3>
    <p>S rozvojem 5G sítí se mobilní internet stává stále zajímavější alternativou pro domácí použití. Nabízí rychlosti srovnatelné s pevným připojením, ale může být limitován datovými limity.</p>
    
    <p>Výhodou je snadná instalace – stačí vám router s SIM kartou. Nevýhodou může být vyšší cena při větším objemu přenesených dat a potenciální nestabilita v závislosti na síle signálu.</p>
    
    <div className="my-8">
      <h3>Srovnání typů připojení</h3>
      <Table>
        <thead>
          <tr>
            <th>Typ připojení</th>
            <th>Rychlost</th>
            <th>Stabilita</th>
            <th>Dostupnost</th>
            <th>Cena</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Optické</td>
            <td>100 Mbit/s - 2 Gbit/s</td>
            <td className="text-center"><Check className="text-green-500 inline" /></td>
            <td>Omezená (větší města)</td>
            <td>Od 400 Kč/měsíc</td>
          </tr>
          <tr>
            <td>Kabelové</td>
            <td>50 Mbit/s - 500 Mbit/s</td>
            <td className="text-center"><Check className="text-green-500 inline" /></td>
            <td>Střední (města a předměstí)</td>
            <td>Od 350 Kč/měsíc</td>
          </tr>
          <tr>
            <td>xDSL</td>
            <td>8 Mbit/s - 100 Mbit/s</td>
            <td className="text-center"><Check className="text-green-500 inline" /></td>
            <td>Vysoká (téměř všude)</td>
            <td>Od 300 Kč/měsíc</td>
          </tr>
          <tr>
            <td>Bezdrátové</td>
            <td>20 Mbit/s - 200 Mbit/s</td>
            <td className="text-center"><X className="text-amber-500 inline" /></td>
            <td>Vysoká (venkov i města)</td>
            <td>Od 300 Kč/měsíc</td>
          </tr>
          <tr>
            <td>Mobilní</td>
            <td>20 Mbit/s - 1 Gbit/s (5G)</td>
            <td className="text-center"><X className="text-amber-500 inline" /></td>
            <td>Vysoká (pokrytí signálem)</td>
            <td>Od 500 Kč/měsíc</td>
          </tr>
        </tbody>
      </Table>
    </div>
  </>
);

export default BlogConnectionTypesSection;
