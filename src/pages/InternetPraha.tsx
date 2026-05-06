import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import InternetComparisonTable from '@/components/InternetComparisonTable';
import LeadForm from '@/components/LeadForm';
import { Card } from '@/components/ui/card';
import ScrollReveal from '@/components/ui/ScrollReveal';

const prahaProviders = [
  {
    provider: "O2",
    maxSpeed: "1 Gb/s",
    priceFrom: "499 Kč",
    technology: "Optika, VDSL",
    benefits: "Nejlepší pokrytí, O2 TV zdarma"
  },
  {
    provider: "PODA",
    maxSpeed: "2 Gb/s", 
    priceFrom: "250 Kč",
    technology: "Optika",
    benefits: "Nejrychlejší připojení, bez závazku"
  },
  {
    provider: "Vodafone",
    maxSpeed: "1 Gb/s",
    priceFrom: "529 Kč",
    technology: "Kabel",
    benefits: "UPC síť, stabilní připojení"
  },
  {
    provider: "T-Mobile",
    maxSpeed: "1 Gb/s",
    priceFrom: "549 Kč",
    technology: "VDSL, LTE",
    benefits: "Kombinace s mobilem"
  }
];

const InternetPraha = () => {
  const canonicalUrl = "https://www.nejvyhodnejsipripojeni.cz/nejlepsi-internet-praha-2025";
  
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Internet Praha - Nejvýhodnější Připojení",
    "description": "Nejlepší internetové připojení v Praze. Porovnáme O2, PODA, Vodafone a T-Mobile. Rychlý optický internet od 250 Kč bez závazku.",
    "url": canonicalUrl,
    "telephone": "+420776370406",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Praha",
      "addressRegion": "Praha",
      "addressCountry": "CZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.0755",
      "longitude": "14.4378"
    },
    "areaServed": {
      "@type": "City",
      "name": "Praha"
    },
    "serviceType": "Internet Provider Comparison"
  };

  return (
    <PageLayout
      pageTitle="Internet Praha 2025 - Nejlepší připojení od 250 Kč | O2 vs PODA vs Vodafone"
      pageDescription="Nejlepší internet v Praze od 250 Kč. Porovnáme O2, PODA, Vodafone a T-Mobile. Optické připojení až 2 Gb/s bez závazku. Najdeme nejlepší nabídku pro vaši adresu!"
      pageType="article"
      publishDate="2025-01-20"
      geoRegion="CZ-10"
    >
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content="internet Praha, nejlevnější internet Praha, O2 Praha, PODA Praha, Vodafone Praha, T-Mobile Praha, optický internet Praha, rychlý internet Praha, internet bez závazku Praha, gigabitový internet Praha, připojení Praha, internet Praha 1, internet Praha 2, internet Praha 3, porovnání poskytovatelů Praha, levný internet Praha, stabilní internet Praha, změna poskytovatele Praha" />
        <meta name="geo.region" content="CZ-10" />
        <meta name="geo.placename" content="Praha, Hlavní město Praha" />
        <meta name="geo.position" content="50.0755;14.4378" />
        <meta name="ICBM" content="50.0755, 14.4378" />
        
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <article>
          <header className="mb-8 text-center">
            <ScrollReveal>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Nejlepší internet v Praze 2025
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
                Najdeme pro vás nejvýhodnější internetové připojení v Praze. 
                Porovnáme všechny poskytovatele a vybereme nejlepší nabídku pro vaši adresu.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">Od 250 Kč/měsíc</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Až 2 Gb/s</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">Bez závazku</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full">Zdarma instalace</span>
              </div>
            </ScrollReveal>
          </header>

          <ScrollReveal delay={200}>
            <Card className="p-6 mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500">
              <h2 className="text-xl font-semibold mb-3 text-blue-900">Tip pro Prahu</h2>
              <p className="text-gray-700">
                <strong>O2</strong> má v Praze nejlepší pokrytí s 99% dostupností optických připojení. 
                <strong>PODA</strong> nabízí nejrychlejší připojení až 2 Gb/s v některých částech města za nejnižší ceny.
                Pokrývá centrum a vybrané oblasti s prémiovou kvalitou služeb.
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <h2 className="text-2xl font-semibold mt-10 mb-6">Porovnání poskytovatelů v Praze</h2>
            <InternetComparisonTable data={prahaProviders} />
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="grid md:grid-cols-2 gap-8 mt-12 mb-12">
              <Card className="p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Proč je O2 v Praze lídrem?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 99% pokrytí optickou sítí ve všech částech Prahy</li>
                  <li>• Stabilní připojení až 1000 Mb/s za 499 Kč</li>
                  <li>• O2 TV zdarma k internetovému připojení</li>
                  <li>• Rozsáhlá síť služeben pro osobní podporu</li>
                  <li>• Možnost kombinace s mobilními službami</li>
                  <li>• Zdarma instalace a WiFi router</li>
                </ul>
              </Card>

              <Card className="p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-semibold mb-4 text-green-900">Pokrytí v Praze</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Praha 1-6 (centrum):</h4>
                    <p className="text-sm text-gray-600">99% pokrytí všech poskytovatelů</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Praha 7-10:</h4>
                    <p className="text-sm text-gray-600">95% pokrytí, nejlepší O2 a PODA</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Praha 11-22:</h4>
                    <p className="text-sm text-gray-600">90% pokrytí, rozšiřuje se</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Nové oblasti:</h4>
                    <p className="text-sm text-gray-600">PODA prioritizuje novou výstavbu</p>
                  </div>
                </div>
              </Card>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <div className="bg-white p-8 rounded-lg shadow-sm border mb-12">
              <h2 className="text-2xl font-semibold mb-6">Internet v jednotlivých částech Prahy</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold">Praha 1-3 (centrum)</h3>
                  <p className="text-sm text-gray-600">O2 a PODA optika až 2 Gb/s</p>
                  <p className="text-sm font-medium text-blue-600">Od 250 Kč/měsíc</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold">Praha 4-6</h3>
                  <p className="text-sm text-gray-600">O2 a Vodafone dominance</p>
                  <p className="text-sm font-medium text-green-600">Od 499 Kč/měsíc</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold">Praha 7-10</h3>
                  <p className="text-sm text-gray-600">Všichni poskytovatelé dostupní</p>
                  <p className="text-sm font-medium text-purple-600">Od 499 Kč/měsíc</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1000}>
            <div className="mt-16" id="lead-form-praha">
              <h2 className="text-2xl font-semibold text-center mb-8">
                Najdeme nejlepší internet pro vaši adresu v Praze
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

export default InternetPraha;