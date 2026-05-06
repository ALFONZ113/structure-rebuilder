import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import InternetComparisonTable from '@/components/InternetComparisonTable';
import LeadForm from '@/components/LeadForm';
import { Card } from '@/components/ui/card';
import ScrollReveal from '@/components/ui/ScrollReveal';

const pardubiceProviders = [
  {
    provider: "O2",
    maxSpeed: "1 Gb/s",
    priceFrom: "439 Kč",
    technology: "Optika, VDSL",
    benefits: "Stabilní pokrytí v dopravním uzlu"
  },
  {
    provider: "T-Mobile",
    maxSpeed: "1 Gb/s",
    priceFrom: "469 Kč",
    technology: "VDSL, LTE",
    benefits: "Kombinace s mobilem"
  },
  {
    provider: "Vodafone",
    maxSpeed: "1 Gb/s",
    priceFrom: "489 Kč",
    technology: "Kabel",
    benefits: "UPC síť, stabilní připojení"
  },
  {
    provider: "PODA",
    maxSpeed: "1 Gb/s", 
    priceFrom: "379 Kč",
    technology: "Optika",
    benefits: "Rozšiřuje se do Pardubic, bez závazku"
  }
];

const InternetPardubice = () => {
  const canonicalUrl = "https://www.nejvyhodnejsipripojeni.cz/internet-pardubice";
  
  return (
    <PageLayout
      pageTitle="Internet Pardubice 2025 - Nejlepší od 379 Kč | O2 vs PODA"
      pageDescription="Nejlepší internet v Pardubicích od 379 Kč. O2 má stabilní pokrytí v dopravním uzlu. Porovnáme všechny poskytovatele a najdeme nejlepší nabídku."
      pageType="article"
      publishDate="2025-01-20"
      geoRegion="CZ-53"
    >
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content="internet Pardubice, nejlepší internet Pardubice, O2 Pardubice, PODA Pardubice, T-Mobile Pardubice, optický internet Pardubice, rychlý internet Pardubice" />
        <meta name="geo.region" content="CZ-53" />
        <meta name="geo.placename" content="Pardubice, Pardubický kraj" />
        <meta name="geo.position" content="50.0343;15.7812" />
      </Helmet>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <article>
          <header className="mb-8 text-center">
            <ScrollReveal>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Nejlepší internet v Pardubicích 2025
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
                V Pardubicích najdete stabilní internetové připojení v důležitém dopravním uzlu. 
                O2 zde nabízí nejlepší pokrytí s 87% dostupností.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">Od 379 Kč/měsíc</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Až 1 Gb/s</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">87% pokrytí</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full">Dopravní uzel</span>
              </div>
            </ScrollReveal>
          </header>

          <ScrollReveal delay={200}>
            <Card className="p-6 mb-8 bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500">
              <h2 className="text-xl font-semibold mb-3 text-blue-900">Tip pro Pardubice</h2>
              <p className="text-gray-700">
                <strong>O2</strong> má v Pardubicích stabilní pokrytí v strategicky důležitém dopravním uzlu s 87% dostupností. 
                Nabízí spolehlivé optické připojení až 1 Gb/s za 439 Kč.
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <h2 className="text-2xl font-semibold mt-10 mb-6">Porovnání poskytovatelů v Pardubicích</h2>
            <InternetComparisonTable data={pardubiceProviders} />
          </ScrollReveal>

          <ScrollReveal delay={1000}>
            <div className="mt-16" id="lead-form-pardubice">
              <h2 className="text-2xl font-semibold text-center mb-8">
                Najdeme nejlepší internet pro vaši adresu v Pardubicích
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

export default InternetPardubice;