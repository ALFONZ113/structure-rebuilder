import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import InternetComparisonTable from '@/components/InternetComparisonTable';
import LeadForm from '@/components/LeadForm';
import { Card } from '@/components/ui/card';
import ScrollReveal from '@/components/ui/ScrollReveal';

const frydekMistekProviders = [
  {
    provider: "CC Internet",
    maxSpeed: "1 Gb/s", 
    priceFrom: "369 Kč",
    technology: "Optika, bezdrát",
    benefits: "Lokální poskytovatel s nejnižšími cenami"
  },
  {
    provider: "O2",
    maxSpeed: "1 Gb/s",
    priceFrom: "429 Kč",
    technology: "Optika, VDSL",
    benefits: "Široké pokrytí, O2 TV zdarma"
  },
  {
    provider: "T-Mobile",
    maxSpeed: "500 Mb/s",
    priceFrom: "449 Kč",
    technology: "VDSL, LTE",
    benefits: "Kombinace s mobilem"
  },
  {
    provider: "Vodafone",
    maxSpeed: "1 Gb/s",
    priceFrom: "469 Kč",
    technology: "Kabel",
    benefits: "UPC síť, stabilní připojení"
  }
];

const InternetFrydekMistek = () => {
  const canonicalUrl = "https://www.nejvyhodnejsipripojeni.cz/internet-frydek-mistek";
  
  return (
    <PageLayout
      pageTitle="Internet Frýdek-Místek 2025 - Nejlepší od 369 Kč | CC Internet vs O2"
      pageDescription="Nejlepší internet ve Frýdku-Místku od 369 Kč. CC Internet nabízí lokální služby s nejnižšími cenami. Porovnáme všechny poskytovatele."
      pageType="article"
      publishDate="2025-01-20"
      geoRegion="CZ-80"
    >
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content="internet Frýdek-Místek, nejlepší internet Frýdek-Místek, PODA Frýdek-Místek, O2 Frýdek-Místek, optický internet Beskydy, rychlý internet Frýdek-Místek" />
        <meta name="geo.region" content="CZ-80" />
        <meta name="geo.placename" content="Frýdek-Místek, Moravskoslezský kraj" />
        <meta name="geo.position" content="49.6834;18.3486" />
      </Helmet>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <article>
          <header className="mb-8 text-center">
            <ScrollReveal>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Nejlepší internet ve Frýdku-Místku 2025
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
                Toto jsou příklady možností ve Frýdku-Místku. Chcete znát přesné nabídky pro vaši adresu? 
                <Link to="#lead-form-frydek-mistek" className="text-brand-accent-blue hover:underline ml-1">
                  Vyplňte formulář
                </Link> a během 5 minut máte nejlepší možnosti.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">Od 369 Kč/měsíc</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Až 1 Gb/s</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">80% pokrytí</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full">Podhůří Beskyd</span>
              </div>
            </ScrollReveal>
          </header>

          <ScrollReveal delay={200}>
            <Card className="p-6 mb-8 bg-gradient-to-r from-green-50 to-teal-50 border-l-4 border-green-500">
              <h2 className="text-xl font-semibold mb-3 text-green-900">Tip pro Frýdek-Místek</h2>
              <p className="text-gray-700">
                <strong>CC Internet</strong> je lokální poskytovatel ve Frýdku-Místku s nejlepšími cenami v regionu. 
                Nabízí optické připojení až 1 Gb/s za pouhých 369 Kč s lokální technickou podporou a rychlým řešením problémů.
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <h2 className="text-2xl font-semibold mt-10 mb-6">Porovnání poskytovatelů ve Frýdku-Místku</h2>
            <InternetComparisonTable data={frydekMistekProviders} />
          </ScrollReveal>

          <ScrollReveal delay={1000}>
            <div className="mt-16" id="lead-form-frydek-mistek">
              <h2 className="text-2xl font-semibold text-center mb-8">
                Najdeme nejlepší internet pro vaši adresu ve Frýdku-Místku
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

export default InternetFrydekMistek;