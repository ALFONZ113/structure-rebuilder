import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import InternetComparisonTable from '@/components/InternetComparisonTable';
import LeadForm from '@/components/LeadForm';
import { Card } from '@/components/ui/card';
import ScrollReveal from '@/components/ui/ScrollReveal';

const brnoProviders = [
  {
    provider: "PODA",
    maxSpeed: "2 Gb/s", 
    priceFrom: "250 Kč",
    technology: "Optika",
    benefits: "Nejrychlejší připojení v ČR, bez závazku"
  },
  {
    provider: "O2",
    maxSpeed: "1 Gb/s",
    priceFrom: "449 Kč",
    technology: "Optika, VDSL",
    benefits: "Široké pokrytí, O2 TV zdarma"
  },
  {
    provider: "Vodafone",
    maxSpeed: "1 Gb/s",
    priceFrom: "479 Kč",
    technology: "Kabel",
    benefits: "UPC síť, stabilní připojení"
  },
  {
    provider: "T-Mobile",
    maxSpeed: "500 Mb/s",
    priceFrom: "459 Kč",
    technology: "VDSL, LTE",
    benefits: "Kombinace s mobilem"
  }
];

const InternetBrno = () => {
  const canonicalUrl = "https://www.nejvyhodnejsipripojeni.cz/internet-brno";
  
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Internet Brno - Nejvýhodnější Připojení",
    "description": "Nejlepší internetové připojení v Brně. Porovnáme PODA, O2, Vodafone a T-Mobile. Nejrychlejší optický internet v ČR až 2 Gb/s od 250 Kč.",
    "url": canonicalUrl,
    "telephone": "+420776370406",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Brno",
      "addressRegion": "Jihomoravský kraj",
      "addressCountry": "CZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "49.1951",
      "longitude": "16.6068"
    },
    "areaServed": {
      "@type": "City",
      "name": "Brno"
    },
    "serviceType": "Internet Provider Comparison"
  };

  return (
    <PageLayout
      pageTitle="Internet Brno 2025 - Nejrychlejší v ČR 2 Gb/s od 250 Kč | PODA"
      pageDescription="Nejrychlejší internet v ČR v Brně až 2 Gb/s od 250 Kč. PODA dominuje s optickou sítí. Porovnáme všechny poskytovatele a najdeme nejlepší nabídku."
      pageType="article"
      publishDate="2025-01-20"
      geoRegion="CZ-64"
    >
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content="internet Brno, nejrychlejší internet Brno, PODA Brno, O2 internet Brno, Vodafone Brno, T-Mobile Brno, 2 Gb/s Brno, optický internet Brno, internet bez závazku Brno, gigabitový internet Brno, připojení Brno, internet Brno střed, internet Brno sever, internet Brno jih, porovnání poskytovatelů Brno, levný internet Brno" />
        <meta name="geo.region" content="CZ-64" />
        <meta name="geo.placename" content="Brno, Jihomoravský kraj" />
        <meta name="geo.position" content="49.1951;16.6068" />
        <meta name="ICBM" content="49.1951, 16.6068" />
        
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <article>
          <header className="mb-8 text-center">
            <ScrollReveal>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Nejrychlejší internet v ČR - Brno 2025
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
                V Brně najdete nejrychlejší internetové připojení v České republice až 2 Gb/s. 
                PODA zde nabízí prémiové optické služby za nejlepší ceny.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">Od 250 Kč/měsíc</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Až 2 Gb/s - nejrychlejší v ČR</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">Bez závazku</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full">Zdarma instalace</span>
              </div>
            </ScrollReveal>
          </header>

          <ScrollReveal delay={200}>
            <Card className="p-6 mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500">
              <h2 className="text-xl font-semibold mb-3 text-green-900">Tip pro Brno</h2>
              <p className="text-gray-700">
                <strong>PODA</strong> má v Brně nejmodernější optickou síť v České republice s rychlostmi až 2 Gb/s. 
                Pokrývá 85% města s nejnižšími cenami od 250 Kč bez závazku. 
                Ideální pro náročné uživatele, gamery a firmy.
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <h2 className="text-2xl font-semibold mt-10 mb-6">Porovnání poskytovatelů v Brně</h2>
            <InternetComparisonTable data={brnoProviders} />
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="grid md:grid-cols-2 gap-8 mt-12 mb-12">
              <Card className="p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-semibold mb-4 text-green-900">Proč je PODA v Brně králem rychlosti?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Nejrychlejší internet v ČR až 2000 Mb/s</li>
                  <li>• Nejmodernější optická síť v zemi</li>
                  <li>• Nejlevnější tarif 500 Mb/s za 250 Kč</li>
                  <li>• Bez smluvní vazby - flexibilní podmínky</li>
                  <li>• Lokální podpora s rychlou odezvou</li>
                  <li>• Symetrické rychlosti upload = download</li>
                </ul>
              </Card>

              <Card className="p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Pokrytí v Brně</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Brno-střed:</h4>
                    <p className="text-sm text-gray-600">90% pokrytí PODA 2 Gb/s, O2 optika</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Brno-sever:</h4>
                    <p className="text-sm text-gray-600">85% pokrytí, rozšiřuje se PODA síť</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Brno-jih:</h4>
                    <p className="text-sm text-gray-600">80% pokrytí, kombinace všech operátorů</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Nové oblasti:</h4>
                    <p className="text-sm text-gray-600">PODA prioritizuje rychlou expanzi</p>
                  </div>
                </div>
              </Card>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <div className="bg-white p-8 rounded-lg shadow-sm border mb-12">
              <h2 className="text-2xl font-semibold mb-6">Internet v jednotlivých částech Brna</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold">Brno-střed</h3>
                  <p className="text-sm text-gray-600">PODA 2 Gb/s dominance</p>
                  <p className="text-sm font-medium text-green-600">Od 250 Kč/měsíc</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold">Brno-sever</h3>
                  <p className="text-sm text-gray-600">O2 a PODA optika</p>
                  <p className="text-sm font-medium text-blue-600">Od 449 Kč/měsíc</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold">Brno-jih</h3>
                  <p className="text-sm text-gray-600">Vodafone kabel, O2 optika</p>
                  <p className="text-sm font-medium text-purple-600">Od 479 Kč/měsíc</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1000}>
            <div className="mt-16" id="lead-form-brno">
              <h2 className="text-2xl font-semibold text-center mb-8">
                Najdeme nejrychlejší internet pro vaši adresu v Brně
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Zadejte své údaje a během 5 minut vám pošleme konkrétní nabídky včetně nejrychlejšího 2 Gb/s připojení
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

export default InternetBrno;