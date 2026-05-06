import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import InternetComparisonTable from '@/components/InternetComparisonTable';
import LeadForm from '@/components/LeadForm';
import { Card } from '@/components/ui/card';
import ScrollReveal from '@/components/ui/ScrollReveal';

const plzenProviders = [
  {
    provider: "T-Mobile",
    maxSpeed: "1 Gb/s",
    priceFrom: "479 Kč",
    technology: "VDSL, LTE",
    benefits: "Výborné pokrytí průmyslových zón"
  },
  {
    provider: "O2",
    maxSpeed: "1 Gb/s",
    priceFrom: "499 Kč",
    technology: "Optika, VDSL",
    benefits: "Široké pokrytí, O2 TV zdarma"
  },
  {
    provider: "Vodafone",
    maxSpeed: "1 Gb/s",
    priceFrom: "519 Kč",
    technology: "Kabel",
    benefits: "UPC síť, stabilní připojení"
  }
];

const InternetPlzen = () => {
  const canonicalUrl = "https://www.nejvyhodnejsipripojeni.cz/internet-plzen";
  
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Internet Plzeň - Nejvýhodnější Připojení",
    "description": "Nejlepší internetové připojení v Plzni. T-Mobile má 92% pokrytí včetně průmyslových zón. Porovnáme všechny poskytovatele.",
    "url": canonicalUrl,
    "telephone": "+420776370406",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Plzeň",
      "addressRegion": "Plzeňský kraj",
      "addressCountry": "CZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "49.7384",
      "longitude": "13.3736"
    },
    "areaServed": {
      "@type": "City",
      "name": "Plzeň"
    },
    "serviceType": "Internet Provider Comparison"
  };

  return (
    <PageLayout
      pageTitle="Internet Plzeň 2025 - Nejlepší připojení od 479 Kč | T-Mobile vs O2"
      pageDescription="Nejlepší internet v Plzni od 479 Kč. T-Mobile má 92% pokrytí včetně průmyslových zón. Porovnáme všechny poskytovatele a najdeme nejlepší nabídku."
      pageType="article"
      publishDate="2025-01-20"
      geoRegion="CZ-32"
    >
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content="internet Plzeň, nejlepší internet Plzeň, T-Mobile Plzeň, O2 Plzeň, Vodafone Plzeň, PODA Plzeň, optický internet Plzeň, rychlý internet Plzeň, internet průmyslové zóny, internet bez závazku Plzeň, připojení Plzeň, internet Doubravka, porovnání poskytovatelů Plzeň" />
        <meta name="geo.region" content="CZ-32" />
        <meta name="geo.placename" content="Plzeň, Plzeňský kraj" />
        <meta name="geo.position" content="49.7384;13.3736" />
        <meta name="ICBM" content="49.7384, 13.3736" />
        
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <article>
          <header className="mb-8 text-center">
            <ScrollReveal>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Nejlepší internet v Plzni 2025
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
                V Plzni najdete kvalitní internetové připojení s výborným pokrytím průmyslových zón. 
                T-Mobile zde dominuje s 92% pokrytím a stabilními službami.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">Od 479 Kč/měsíc</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Až 1 Gb/s</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">92% pokrytí</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full">Průmyslové zóny</span>
              </div>
            </ScrollReveal>
          </header>

          <ScrollReveal delay={200}>
            <Card className="p-6 mb-8 bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500">
              <h2 className="text-xl font-semibold mb-3 text-purple-900">Tip pro Plzeň</h2>
              <p className="text-gray-700">
                <strong>T-Mobile</strong> má v Plzni nejlepší pokrytí s 92% dostupností včetně všech průmyslových zón. 
                Nabízí stabilní připojení až 1 Gb/s za 479 Kč s možností kombinace s mobilními službami.
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <h2 className="text-2xl font-semibold mt-10 mb-6">Porovnání poskytovatelů v Plzni</h2>
            <InternetComparisonTable data={plzenProviders} />
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="grid md:grid-cols-2 gap-8 mt-12 mb-12">
              <Card className="p-6 border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold mb-4 text-purple-900">Proč je T-Mobile v Plzni lídrem?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 92% pokrytí včetně průmyslových oblastí</li>
                  <li>• Stabilní připojení až 1000 Mb/s za 479 Kč</li>
                  <li>• Výborné pokrytí firemních zón</li>
                  <li>• Kombinace s mobilními tarify</li>
                  <li>• Rychlá technická podpora</li>
                  <li>• Specializace na business segment</li>
                </ul>
              </Card>

              <Card className="p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Pokrytí v Plzni</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Plzeň 1-3 (centrum):</h4>
                    <p className="text-sm text-gray-600">95% pokrytí všech poskytovatelů</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Doubravka:</h4>
                    <p className="text-sm text-gray-600">90% pokrytí, nejlepší T-Mobile</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Průmyslové zóny:</h4>
                    <p className="text-sm text-gray-600">T-Mobile pokrývá 95% firemních areálů</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Nové oblasti:</h4>
                    <p className="text-sm text-gray-600">PODA rychle rozšiřuje optickou síť</p>
                  </div>
                </div>
              </Card>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1000}>
            <div className="mt-16" id="lead-form-plzen">
              <h2 className="text-2xl font-semibold text-center mb-8">
                Najdeme nejlepší internet pro vaši adresu v Plzni
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

export default InternetPlzen;