
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import InternetComparisonTable from '@/components/InternetComparisonTable';

const TMobileVsO2 = () => {
  const comparisonData = [
    {
      provider: "T-Mobile",
      maxSpeed: "1 Gb/s",
      priceFrom: "499 Kč",
      technology: "Optika, VDSL, 5G",
      benefits: "Akční ceny první rok, kombinace s mobilními službami"
    },
    {
      provider: "O2",
      maxSpeed: "2 Gb/s",
      priceFrom: "599 Kč",
      technology: "Optika, VDSL, LTE",
      benefits: "Nejširší pokrytí, O2 TV"
    }
  ];

  return <PageLayout pageTitle="T-Mobile vs O2 Internet 2025 | Srovnání a recenze" pageDescription="Detailní srovnání internetového připojení T-Mobile a O2. Porovnání cen, rychlostí, pokrytí a zákaznických služeb.">
      <Helmet>
        <link rel="canonical" href="https://www.nejvyhodnejsipripojeni.cz/poskytovatele-internetu/t-mobile-vs-o2" />
        <meta name="keywords" content="T-Mobile vs O2, srovnání internetu, nejlevnější internet, optický internet, internet bez závazku, porovnání poskytovatelů" />
      </Helmet>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <article>
          <header className="mb-8 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">T-Mobile vs O2: Srovnání internetového připojení 2025</h1>
            <p className="text-lg text-gray-600">
              Detailní porovnání dvou významných poskytovatelů internetu na českém trhu
            </p>
          </header>

          <div className="prose max-w-none mb-8">
            <p>
              Hledáte spolehlivé internetové připojení a nemůžete se rozhodnout mezi T-Mobile a O2? 
              V tomto srovnání se podíváme na všechny důležité aspekty, které vám pomohou vybrat nejlepší službu pro vaše potřeby.
              <Link to="/#lead-form" className="text-green-500 hover:text-green-700 ml-2 inline-block">
                Kontaktujte nás přímo pro nezávazné doporučení.
              </Link>
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Rychlé srovnání</h2>
              <InternetComparisonTable data={comparisonData} caption="Základní porovnání T-Mobile a O2" />
            </CardContent>
          </Card>

          <div className="my-8 p-4 bg-green-50 border border-green-100 rounded-lg">
            <p className="text-gray-800">
              Potřebujete poradit s výběrem mezi T-Mobile a O2? <Link to="/#lead-form" className="text-green-600 hover:text-green-800 font-medium">Kontaktujte naše specialisty</Link> a získejte nezávislé doporučení šité na míru vašim potřebám.
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
              <Link to="/poskytovatele-internetu/poda-vs-t-mobile" className="text-green-500 hover:text-green-700">
                PODA a.s. vs T-Mobile - srovnání rychlostí až 2000 Mb/s
              </Link>
            </li>
            <li>
              <Link to="/poskytovatele-internetu/vodafone-vs-o2" className="text-green-500 hover:text-green-700">
                Vodafone vs O2 - který je výhodnější?
              </Link>
            </li>
          </ul>

          <Separator className="my-8" />

          <div className="text-center py-6">
            <p className="mb-4">Chcete znát nejlepší nabídku pro vaši adresu?</p>
            <Link to="/#lead-form" className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
              Získat osobní doporučení
            </Link>
            <p className="text-gray-600 italic mt-6">Obsah je aktualizován: Květen 2025</p>
          </div>
        </article>
      </div>
    </PageLayout>;
};

export default TMobileVsO2;
