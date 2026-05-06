import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
const PodaVsTMobile = () => {
  return <PageLayout pageTitle="PODA vs. T-Mobile - Nezávislé srovnání internetu 2025" pageDescription="Nezávislé porovnání PODA a T-Mobile internetového připojení. Objektivní hodnocení cen, rychlostí a dostupnosti služeb v roce 2025.">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <article>
          <header className="mb-8 text-center md:text-left">
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                ℹ️ <strong>Nezávislé srovnání:</strong> Toto je objektivní srovnání služeb poskytovatelů PODA a T-Mobile. Nejsme oficiálním zástupcem ani partnerem žádné z uvedených společností.
              </p>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">PODA vs. T-Mobile - nezávislé srovnání internetového připojení</h1>
          </header>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Hledáte spolehlivého poskytovatele internetu a zvažujete PODA nebo T-Mobile? Připravili jsme pro vás detailní 
              srovnání obou poskytovatelů, které vám pomůže při rozhodování.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Přehledné srovnání PODA a T-Mobile</h2>
            <div className="overflow-x-auto my-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Kritérium</TableHead>
                    <TableHead>PODA</TableHead>
                    <TableHead>T-Mobile</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Maximální rychlost</TableCell>
                    <TableCell className="bg-green-50 dark:bg-green-900/20">2 Gb/s</TableCell>
                    <TableCell>1 Gb/s</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Cena za 300 Mb/s</TableCell>
                    <TableCell className="bg-green-50 dark:bg-green-900/20">340 Kč</TableCell>
                    <TableCell>499 Kč</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Cena za 1 Gb/s</TableCell>
                    <TableCell className="bg-green-50 dark:bg-green-900/20">440 Kč</TableCell>
                    <TableCell>599 Kč</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Dostupnost</TableCell>
                    <TableCell>Regionální</TableCell>
                    <TableCell className="bg-blue-50 dark:bg-blue-900/20">Celostátní</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Délka závazku</TableCell>
                    <TableCell className="bg-green-50 dark:bg-green-900/20">Bez závazku</TableCell>
                    <TableCell>12-24 měsíců</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">IPTV v nabídce</TableCell>
                    <TableCell>Ano</TableCell>
                    <TableCell>Ano</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Technologie</TableCell>
                    <TableCell>Optika, bezdrát</TableCell>
                    <TableCell>Optika, VDSL, 5G</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Srovnání tarifů a cen</h2>
            
            <h3 className="text-xl font-semibold mb-3">Optický internet</h3>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">PODA optický internet:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>PODA Optik 300 (300/150 Mb/s) - 340 Kč/měsíc</li>
                <li>PODA Optik 600 (600/300 Mb/s) - 390 Kč/měsíc</li>
                <li>PODA Optik 1000 (1 Gb/s / 500 Mb/s) - 440 Kč/měsíc</li>
                <li>PODA Optik 2000 (2 Gb/s / 1 Gb/s) - 520 Kč/měsíc</li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">T-Mobile optický internet:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Optický internet S (300/300 Mb/s) - 499 Kč/měsíc (299 Kč první rok)</li>
                <li>Optický internet M (500/500 Mb/s) - 549 Kč/měsíc (349 Kč první rok)</li>
                <li>Optický internet L (1 Gb/s / 1 Gb/s) - 599 Kč/měsíc (399 Kč první rok)</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">Internet pro lokality bez optiky</h3>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">PODA bezdrátový internet:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>PODA Wireless 30 (30/10 Mb/s) - 340 Kč/měsíc</li>
                <li>PODA Wireless 50 (50/20 Mb/s) - 390 Kč/měsíc</li>
                <li>PODA Wireless 100 (100/30 Mb/s) - 440 Kč/měsíc</li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">T-Mobile VDSL internet:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pevný internet S (50/5 Mb/s) - 499 Kč/měsíc (299 Kč první rok)</li>
                <li>Pevný internet M (100/10 Mb/s) - 549 Kč/měsíc (349 Kč první rok)</li>
                <li>Pevný internet L (250/25 Mb/s) - 599 Kč/měsíc (399 Kč první rok)</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Akční nabídky a slevy</h2>
            
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">PODA:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Instalace zdarma při objednání online</li>
                  <li>Možnost získat první měsíc zdarma při přechodu od konkurence</li>
                  <li>Zvýhodněné balíčky internet + TV (sleva až 100 Kč měsíčně)</li>
                  <li>Většina nabídek bez časově omezené akční ceny</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">T-Mobile:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Akční ceny po dobu prvních 12 měsíců (slevy 100-200 Kč měsíčně)</li>
                  <li>Kombinační slevy s mobilními tarify (až 200 Kč měsíčně)</li>
                  <li>Modem zdarma při uzavření smlouvy na 24 měsíců</li>
                  <li>Pravidelné sezónní akce</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Pokrytí a dostupnost</h2>
            
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">PODA:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Hlavní působnost v Moravskoslezském kraji</li>
                  <li>Vybrané lokality v Praze, Brně a dalších městech</li>
                  <li>Vlastní optická síť v hustě obydlených oblastech</li>
                  <li>Bezdrátové pokrytí jako doplněk optické sítě</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">T-Mobile:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Celostátní působnost s pokrytím ve všech krajích</li>
                  <li>Optická síť dostupná ve větších městech</li>
                  <li>VDSL dostupný ve většině obcí</li>
                  <li>5G/LTE internet jako doplněk v oblastech bez pevné infrastruktury</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Televizní služby</h2>
            
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">PODA net.TV:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Základní balíček (100+ kanálů) - 199 Kč/měsíc</li>
                  <li>Rozšířený balíček (130+ kanálů) - 349 Kč/měsíc</li>
                  <li>Komplexní balíček (150+ kanálů) - 499 Kč/měsíc</li>
                  <li>Sledování až na 5 zařízeních současně</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">T-Mobile TV:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>T-Mobile TV S (40+ kanálů) - 399 Kč/měsíc</li>
                  <li>T-Mobile TV M (80+ kanálů) - 599 Kč/měsíc</li>
                  <li>T-Mobile TV L (130+ kanálů) - 799 Kč/měsíc</li>
                  <li>Možnost dokoupení tematických balíčků</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Mobilní služby a kombinace</h2>
            
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">PODA:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Základní mobilní tarify od 99 Kč/měsíc</li>
                  <li>Data v mobilu od 1,5 GB do 20 GB</li>
                  <li>Možné slevy při kombinaci s internetem, ale méně výrazné</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">T-Mobile:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Široká nabídka mobilních tarifů</li>
                  <li>Výrazné slevy při kombinaci služeb (Magenta Advantage)</li>
                  <li>Sdílená data v rodině</li>
                  <li>Neomezené tarify s různými datovými limity</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Smluvní podmínky</h2>
            
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">PODA:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Služby dostupné bez závazku</li>
                  <li>Možnost uzavřít smlouvu na 12 nebo 24 měsíců s cenovým zvýhodněním</li>
                  <li>Výpovědní doba 30 dnů</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">T-Mobile:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Většina služeb se závazkem 12-24 měsíců</li>
                  <li>Akční ceny podmíněné závazkem</li>
                  <li>Možnost služby bez závazku za vyšší cenu</li>
                  <li>Výpovědní doba 30 dnů</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Uživatelské zkušenosti a recenze</h2>
            
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">PODA:</h3>
                <div className="mb-3">
                  <span className="text-green-600 dark:text-green-400 font-semibold">+ </span>Zákazníci oceňují příznivé ceny
                </div>
                <div className="mb-3">
                  <span className="text-green-600 dark:text-green-400 font-semibold">+ </span>Vysoká rychlost optického připojení
                </div>
                <div className="mb-3">
                  <span className="text-green-600 dark:text-green-400 font-semibold">+ </span>Absence povinného závazku
                </div>
                <div className="mb-3">
                  <span className="text-red-600 dark:text-red-400 font-semibold">- </span>Omezené pokrytí mimo hlavní regiony
                </div>
                <div className="mb-3">
                  <span className="text-red-600 dark:text-red-400 font-semibold">- </span>Méně rozvinutá zákaznická podpora oproti T-Mobile
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">T-Mobile:</h3>
                <div className="mb-3">
                  <span className="text-green-600 font-semibold">+ </span>Stabilní připojení a široké pokrytí
                </div>
                <div className="mb-3">
                  <span className="text-green-600 font-semibold">+ </span>Výhodné kombinace s mobilními službami
                </div>
                <div className="mb-3">
                  <span className="text-green-600 font-semibold">+ </span>Profesionální zákaznická podpora
                </div>
                <div className="mb-3">
                  <span className="text-red-600 font-semibold">- </span>Vyšší ceny základních tarifů
                </div>
                <div className="mb-3">
                  <span className="text-red-600 font-semibold">- </span>Akční ceny podmíněné dlouhodobým závazkem
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Který poskytovatel je lepší?</h2>
            <p className="mb-4">Výběr mezi PODA a T-Mobile závisí na vašich prioritách:</p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">PODA je lepší volbou pokud:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Bydlíte v oblasti s pokrytím optickou sítí PODA</li>
                  <li>Preferujete nižší pravidelné platby bez akčních cen</li>
                  <li>Nechcete se vázat dlouhodobou smlouvou</li>
                  <li>Požadujete nadprůměrné rychlosti uploadu</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">T-Mobile je lepší volbou pokud:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Bydlíte v oblasti bez pokrytí PODA</li>
                  <li>Využíváte také mobilní služby a chcete je kombinovat</li>
                  <li>Preferujete celostátního poskytovatele s širší nabídkou služeb</li>
                  <li>Oceníte profesionální zákaznickou podporu 24/7</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Závěr</h2>
            <p className="mb-6">
              PODA nabízí cenově výhodnější internet bez závazku a s vyšší maximální rychlostí (až 2 Gb/s oproti 1 Gb/s u T-Mobile). 
              T-Mobile vyniká celostátním pokrytím, kombinovanými slevami s mobilními službami a profesionální zákaznickou podporou.
            </p>
            <p className="mb-6">
              Pro čistě internetové připojení s dobrým poměrem cena/výkon je PODA lepší volbou (pokud je dostupná ve vaší lokalitě). 
              Pro uživatele, kteří chtějí kombinovat více služeb od jednoho poskytovatele nebo žijí mimo dosah PODA, představuje 
              T-Mobile kvalitní alternativu s širokým spektrem služeb.
            </p>
            
            <p className="text-sm text-gray-500 italic">Aktualizováno: květen 2025</p>
          </div>
        </article>
      </div>
    </PageLayout>;
};
export default PodaVsTMobile;