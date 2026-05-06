
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import InternetComparisonTable from '@/components/InternetComparisonTable';

const VodafoneVsO2 = () => {
  const comparisonData = [
    {
      provider: "Vodafone",
      maxSpeed: "1 Gb/s",
      priceFrom: "459 Kč",
      technology: "Optika, kabel",
      benefits: "Kombinace s TV a mobilními službami"
    },
    {
      provider: "O2",
      maxSpeed: "2 Gb/s",
      priceFrom: "599 Kč",
      technology: "Optika, VDSL, LTE",
      benefits: "Nejširší pokrytí, O2 TV"
    }
  ];

  return <PageLayout pageTitle="Vodafone vs O2 Internet 2025 | Srovnání a recenze" pageDescription="Detailní srovnání internetového připojení Vodafone a O2. Porovnání cen, rychlostí, pokrytí a zákaznických služeb.">
      <Helmet>
        <link rel="canonical" href="https://www.nejvyhodnejsipripojeni.cz/poskytovatele-internetu/vodafone-vs-o2" />
        <meta name="keywords" content="Vodafone vs O2, srovnání internetu, nejlevnější internet, optický internet, internet bez závazku, porovnání poskytovatelů" />
      </Helmet>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <article>
          <header className="mb-8 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Vodafone vs O2: Srovnání internetového připojení 2025</h1>
            <p className="text-lg text-gray-600">
              Detailní porovnání dvou významných poskytovatelů internetu na českém trhu
            </p>
          </header>

          <div className="prose max-w-none mb-8">
            <p>
              Hledáte spolehlivé internetové připojení a nemůžete se rozhodnout mezi Vodafone a O2? 
              V tomto srovnání se podíváme na všechny důležité aspekty, které vám pomohou vybrat nejlepší službu pro vaše potřeby.
              <Link to="/#lead-form" className="text-green-500 hover:text-green-700 ml-2 inline-block">
                Nechte si od našich expertů poradit s výběrem.
              </Link>
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Rychlé srovnání</h2>
              <InternetComparisonTable data={comparisonData} caption="Základní porovnání Vodafone a O2" />
            </CardContent>
          </Card>

          <div className="my-8 p-4 bg-green-50 border border-green-100 rounded-lg">
            <p className="text-gray-800">
              Zajímá vás, který z poskytovatelů nabízí lepší pokrytí na vaší adrese? <Link to="/#lead-form" className="text-green-600 hover:text-green-800 font-medium">Vyplňte jednoduchý formulář</Link> a my vám doporučíme nejvhodnějšího poskytovatele.
            </p>
          </div>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Další porovnání poskytovatelů</h2>
          <p className="mb-4">Zajímají vás další srovnání? Podívejte se na naše detailní analýzy:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <Link to="/poskytovatele-internetu/poda-vs-o2" className="text-green-500 hover:text-green-700">
                PODA a.s. vs O2 - který nabízí lepší ceny a rychlosti?
              </Link>
            </li>
            <li>
              <Link to="/poskytovatele-internetu/t-mobile-vs-o2" className="text-green-500 hover:text-green-700">
                T-Mobile vs O2 - porovnání rychlostí a služeb
              </Link>
            </li>
            <li>
              <Link to="/poskytovatele-internetu/poda-vs-t-mobile" className="text-green-500 hover:text-green-700">
                PODA a.s. vs T-Mobile - srovnání tarifů a rychlostí
              </Link>
            </li>
          </ul>

          <Separator className="my-8" />

          <div className="text-center py-6">
            <p className="mb-4">Chcete znát nejlepší nabídku pro vaši adresu?</p>
            <Link to="/#lead-form" className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
              Získat osobní doporučení
            </Link>
            <p className="text-gray-600 italic mt-6">Obsah je aktualizován: květen 2025</p>
          </div>
        </article>
      </div>
    </PageLayout>;
};

export default VodafoneVsO2;
