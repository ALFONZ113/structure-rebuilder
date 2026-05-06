import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import InternetComparisonTable from '@/components/InternetComparisonTable';

const PodaVsO2 = () => {
  // Comparison data for the table
  const comparisonData = [
    {
      provider: "PODA",
      maxSpeed: "2 Gb/s",
      priceFrom: "340 Kč",
      technology: "Optika, bezdrát",
      benefits: "Nízká cena, bez závazku"
    },
    {
      provider: "O2",
      maxSpeed: "2 Gb/s",
      priceFrom: "599 Kč",
      technology: "Optika, VDSL, LTE",
      benefits: "Celostátní pokrytí"
    }
  ];

  return <PageLayout pageTitle="PODA vs. O2 internet - Nezávislé srovnání poskytovatelů 2025" pageDescription="Nezávislé porovnání internetu PODA a O2. Ceny, rychlosti, pokrytí a zkušenosti uživatelů. Objektivní hodnocení a výběr nejlepšího poskytovatele.">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <article>
          <header className="mb-8 text-center md:text-left">
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                ℹ️ <strong>Nezávislé srovnání:</strong> Toto je objektivní srovnání služeb poskytovatelů PODA a O2. Nejsme oficiálním zástupcem ani partnerem žádné z uvedených společností.
              </p>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">PODA vs. O2 - nezávislé srovnání internetu 2025</h1>
          </header>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Hledáte nejlepšího poskytovatele internetu a rozhodujete se mezi PODA a O2? V tomto článku detailně porovnáme oba poskytovatele 
              z hlediska nabídky služeb, cen, pokrytí a zákaznických zkušeností.
            </p>

            <div className="my-6 p-4 bg-muted border border-border rounded-lg">
              <p className="mb-2">
                Nemáte čas číst celé srovnání? Podívejte se na rychlé shrnutí v tabulce níže.
              </p>
              <div className="my-4">
                <InternetComparisonTable data={comparisonData} caption="Srovnání PODA a O2 - základní přehled" />
              </div>
              <p>
                <Link to="/kontakt" className="text-primary hover:text-primary/80 font-medium">
                  Potřebujete poradit s výběrem? Kontaktujte nás →
                </Link>
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Základní srovnání PODA a O2</h2>
            <div className="overflow-x-auto my-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Kritérium</TableHead>
                    <TableHead>PODA</TableHead>
                    <TableHead>O2</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Maximální rychlost</TableCell>
                    <TableCell className="bg-green-50 dark:bg-green-900/20">2 Gb/s</TableCell>
                    <TableCell>2 Gb/s</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Cena za 300 Mb/s</TableCell>
                    <TableCell className="bg-green-50 dark:bg-green-900/20">340 Kč</TableCell>
                    <TableCell>599 Kč</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Cena za 1 Gb/s</TableCell>
                    <TableCell className="bg-green-50 dark:bg-green-900/20">440 Kč</TableCell>
                    <TableCell>699 Kč</TableCell>
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
                    <TableCell>Optika, VDSL, LTE</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Srovnání tarifů a cen PODA vs. O2</h2>
            
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
              <h4 className="text-lg font-semibold mb-2">O2 optický internet:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>O2 Internet Optimal HD (300/300 Mb/s) - 599 Kč/měsíc</li>
                <li>O2 Internet Premium HD (1 Gb/s / 1 Gb/s) - 699 Kč/měsíc</li>
                <li>O2 Internet Premium Plus HD (2 Gb/s / 2 Gb/s) - 899 Kč/měsíc</li>
              </ul>
            </div>
            
            <div className="my-6 p-4 bg-muted border border-border rounded-lg">
              <p className="mb-2">
                Chcete zjistit, který z těchto tarifů je dostupný na vaší adrese? Nebo hledáte ještě výhodnější nabídku?
              </p>
              <Link to="/kontakt" className="text-primary hover:text-primary/80 font-medium">
                Kontaktujte nás a nabídneme vám nejvýhodnější variantu →
              </Link>
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
              <h4 className="text-lg font-semibold mb-2">O2 VDSL internet:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>O2 Internet Optimal (50/5 Mb/s) - 549 Kč/měsíc</li>
                <li>O2 Internet Aktiv (100/10 Mb/s) - 649 Kč/měsíc</li>
                <li>O2 Internet Premium (250/25 Mb/s) - 749 Kč/měsíc</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Pokrytí a dostupnost</h2>
            
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">PODA:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Primárně působí v Moravskoslezském kraji (Ostrava, Havířov, Frýdek-Místek)</li>
                  <li>Vybrané lokality v Praze, Brně a dalších větších městech</li>
                  <li>Vlastní optickou síť buduje především v hustěji obydlených oblastech</li>
                  <li>Bezdrátové pokrytí v oblastech bez optické infrastruktury</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">O2:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Celostátní pokrytí ve všech krajích ČR</li>
                  <li>Optická síť dostupná ve větších městech a jejich okolí</li>
                  <li>VDSL pokrytí ve většině obcí (přes 85% domácností)</li>
                  <li>Mobilní internet LTE/5G jako alternativa pro odlehlé lokality</li>
                </ul>
              </div>
            </div>
            
            <div className="my-6 p-4 bg-muted border border-border rounded-lg">
              <p className="mb-2">
                Nejste si jistí, který poskytovatel má ve vaší lokalitě lepší pokrytí? Nechte nás to zjistit za vás.
              </p>
              <Link to="/kontakt" className="text-primary hover:text-primary/80 font-medium">
                Zjistíme dostupnost a kvalitu připojení na vaší adrese →
              </Link>
            </div>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Kvalita připojení a technologie</h2>
            
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">PODA:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Optická síť postavená na technologii GPON</li>
                  <li>Nízká latence vhodná pro hráče a streamování</li>
                  <li>Symetrické nebo asymetrické rychlosti dle tarifu</li>
                  <li>Bezdrátové připojení v pásmu 5 GHz a 60 GHz</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">O2:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Kombinace vlastní optické sítě a sítě CETIN</li>
                  <li>VDSL s technologií Vectoring pro vyšší rychlosti</li>
                  <li>Bonding (spojení dvou linek) pro zvýšení rychlosti v některých lokalitách</li>
                  <li>LTE/5G připojení jako záloha nebo hlavní připojení</li>
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
                  <li>Sledování až na 5 zařízeních současně</li>
                  <li>7denní zpětné přehrávání</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">O2 TV:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>O2 TV Modrá (30+ kanálů) - 299 Kč/měsíc</li>
                  <li>O2 TV Bronzová (60+ kanálů) - 499 Kč/měsíc</li>
                  <li>O2 TV Stříbrná (100+ kanálů) - 749 Kč/měsíc</li>
                  <li>Multi-room funkce a mobilní aplikace</li>
                  <li>7denní zpětné přehrávání a nahrávání</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Zákaznická podpora a servis</h2>
            
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">PODA:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Zákaznická linka dostupná v pracovní dny 8-20h, víkendy 9-17h</li>
                  <li>Pobočky v regionech působnosti</li>
                  <li>Technická podpora s průměrnou dobou reakce 24-48 hodin</li>
                  <li>Online chat na webu</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">O2:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Zákaznická linka 24/7</li>
                  <li>Celostátní síť kamenných prodejen</li>
                  <li>Expresní servis pro firemní zákazníky</li>
                  <li>Mobilní aplikace pro správu služeb</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Zkušenosti zákazníků</h2>
            
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">PODA:</h3>
                <div className="mb-3">
                  <span className="text-green-600 dark:text-green-400 font-semibold">+ </span>Zákazníci chválí příznivé ceny a poměr cena/výkon
                </div>
                <div className="mb-3">
                  <span className="text-green-600 dark:text-green-400 font-semibold">+ </span>Vysoká rychlost a stabilita optického připojení
                </div>
                <div className="mb-3">
                  <span className="text-green-600 dark:text-green-400 font-semibold">+ </span>Absence dlouhodobého závazku
                </div>
                <div className="mb-3">
                  <span className="text-red-600 dark:text-red-400 font-semibold">- </span>Omezené pokrytí mimo hlavní regiony působnosti
                </div>
                <div className="mb-3">
                  <span className="text-red-600 dark:text-red-400 font-semibold">- </span>Některé stížnosti na delší čekací doby při instalaci
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">O2:</h3>
                <div className="mb-3">
                  <span className="text-green-600 dark:text-green-400 font-semibold">+ </span>Široké pokrytí po celé ČR
                </div>
                <div className="mb-3">
                  <span className="text-green-600 dark:text-green-400 font-semibold">+ </span>Komplexní služby a možnost balíčků s mobilními službami
                </div>
                <div className="mb-3">
                  <span className="text-green-600 dark:text-green-400 font-semibold">+ </span>Kvalitní zákaznickou podpora
                </div>
                <div className="mb-3">
                  <span className="text-red-600 dark:text-red-400 font-semibold">- </span>Vyšší ceny ve srovnání s menšími poskytovateli
                </div>
                <div className="mb-3">
                  <span className="text-red-600 dark:text-red-400 font-semibold">- </span>Dlouhodobé závazky a smluvní podmínky
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Který poskytovatel je lepší?</h2>
            <p className="mb-4">Výběr mezi PODA a O2 závisí na vašich prioritách:</p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">PODA je lepší volbou pokud:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Bydlíte v oblasti s pokrytím PODA optickou sítí</li>
                  <li>Hledáte cenově výhodnější internet</li>
                  <li>Nechcete se vázat dlouhodobou smlouvou</li>
                  <li>Požadujete vysokou rychlost za příznivou cenu</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">O2 je lepší volbou pokud:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Bydlíte v oblasti bez pokrytí PODA</li>
                  <li>Preferujete celostátního poskytovatele s rozsáhlou sítí poboček</li>
                  <li>Chcete kombinovat pevný internet s mobilními službami</li>
                  <li>Požadujete prémiovou televizní službu s velkým výběrem kanálů</li>
                </ul>
              </div>
            </div>
            
            <div className="my-6 p-4 bg-muted border border-border rounded-lg">
              <p className="mb-2">
                Stále si nejste jistí, který poskytovatel je pro vás lepší volbou? Nechte si poradit od našich odborníků.
              </p>
              <Link to="/kontakt" className="text-primary hover:text-primary/80 font-medium">
                Získejte personalizované doporučení pro vaši adresu a potřeby →
              </Link>
            </div>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Závěr</h2>
            <p className="mb-6">
              PODA nabízí výrazně lepší ceny za srovnatelné rychlosti internetu. Například tarif 1 Gb/s stojí u PODA 440 Kč měsíčně, 
              zatímco u O2 zaplatíte 699 Kč. PODA také nabízí služby bez závazku, což je významná výhoda oproti O2.
            </p>
            <p className="mb-6">
              O2 má na druhou stranu výhodu v celostátním pokrytí, širší nabídce služeb a možnosti kombinace s mobilními tarify. 
              Poskytuje také komplexnější zákaznickou podporu.
            </p>
            <p className="mb-6">
              Pro maximální úsporu při zachování vysoké kvality služeb doporučujeme PODA (pokud je ve vaší lokalitě dostupná). 
              Pro komplexní řešení telekomunikačních služeb nebo v oblastech bez pokrytí PODA je vhodnější volbou O2.
            </p>
            
            <div className="mt-12 p-6 bg-muted border border-border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Získejte nezávaznou nabídku na míru</h3>
              <p className="mb-4">
                Kontaktujte nás a my vám připravíme porovnání cen a služeb dostupných na vaší adrese.
              </p>
              <Link to="/kontakt" className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2 px-4 rounded-lg transition-colors">
                Kontaktovat nás
              </Link>
            </div>
            
            <p className="text-sm text-gray-500 italic">Aktualizováno: kveten 2025</p>
          </div>
        </article>
      </div>
    </PageLayout>;
};

export default PodaVsO2;
