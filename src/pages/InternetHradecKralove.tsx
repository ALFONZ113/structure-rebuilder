import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import InternetComparisonTable from '@/components/InternetComparisonTable';
import LeadForm from '@/components/LeadForm';
import { Card } from '@/components/ui/card';
import ScrollReveal from '@/components/ui/ScrollReveal';

const hradecKraloveProviders = [
  {
    provider: "Best-Net",
    maxSpeed: "1 Gb/s",
    priceFrom: "399 Kč",
    technology: "Optika, bezdrát",
    benefits: "Lokální internet Hradec Králové a okolí"
  },
  {
    provider: "T-Mobile",
    maxSpeed: "1 Gb/s",
    priceFrom: "459 Kč",
    technology: "VDSL, LTE",
    benefits: "Moderní infrastruktura ve východních Čechách"
  },
  {
    provider: "O2",
    maxSpeed: "1 Gb/s",
    priceFrom: "479 Kč",
    technology: "Optika, VDSL",
    benefits: "Široké pokrytí, O2 TV zdarma"
  },
  {
    provider: "Vodafone",
    maxSpeed: "1 Gb/s",
    priceFrom: "499 Kč",
    technology: "Kabel",
    benefits: "UPC síť, stabilní připojení"
  }
];

const InternetHradecKralove = () => {
  const canonicalUrl = "https://www.nejvyhodnejsipripojeni.cz/internet-hradec-kralove";
  
  return (
    <PageLayout
      pageTitle="Internet Hradec Králové 2025 - Nejlepší od 399 Kč | Best-Net vs T-Mobile"
      pageDescription="Nejlepší internet v Hradci Králové od 399 Kč. Best-Net nabízí lokální služby ve východních Čechách. Porovnáme všechny poskytovatele."
      pageType="article"
      publishDate="2025-01-20"
      geoRegion="CZ-52"
    >
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content="internet Hradec Králové, nejlepší internet Hradec Králové, T-Mobile Hradec Králové, O2 Hradec Králové, PODA Hradec Králové, optický internet východní Čechy, rychlý internet Hradec Králové" />
        <meta name="geo.region" content="CZ-52" />
        <meta name="geo.placename" content="Hradec Králové, Královéhradecký kraj" />
        <meta name="geo.position" content="50.2103;15.8327" />
      </Helmet>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <article>
          <header className="mb-8 text-center">
            <ScrollReveal>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Nejlepší internet v Hradci Králové 2025
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
                Toto je jen náhled možností v Hradci Králové. Pro nejlepší nabídky na vaši adresu 
                <Link to="#lead-form-hradec-kralove" className="text-brand-accent-blue hover:underline ml-1">
                  zadejte své údaje
                </Link> a najdeme vám nejvýhodnější připojení.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">Od 399 Kč/měsíc</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Až 1 Gb/s</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">88% pokrytí</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full">Moderní infrastruktura</span>
              </div>
            </ScrollReveal>
          </header>

          <ScrollReveal delay={200}>
            <Card className="p-6 mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500">
              <h2 className="text-xl font-semibold mb-3 text-indigo-900">Tip pro Hradec Králové</h2>
              <p className="text-gray-700">
                <strong>Best-Net</strong> je lokální poskytovatel v Hradci Králové s kvalitními službami ve východních Čechách. 
                Nabízí spolehlivé připojení až 1 Gb/s za 399 Kč s lokální podporou a rychlým řešením problémů.
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <h2 className="text-2xl font-semibold mt-10 mb-6">Porovnání poskytovatelů v Hradci Králové</h2>
            <InternetComparisonTable data={hradecKraloveProviders} />
          </ScrollReveal>

          <ScrollReveal delay={1000}>
            <div className="mt-16" id="lead-form-hradec-kralove">
              <h2 className="text-2xl font-semibold text-center mb-8">
                Najdeme nejlepší internet pro vaši adresu v Hradci Králové
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Zadejte své údaje a během 5 minut vám pošleme konkrétní nabídky od všech dostupných poskytovatelů
              </p>
              <div className="max-w-2xl mx-auto">
                <LeadForm />
              </div>
            </div>
          </ScrollReveal>
        </article>
      </div>
    </PageLayout>
  );
};

export default InternetHradecKralove;