
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import InternetComparisonTable from '@/components/InternetComparisonTable';
import LeadForm from '@/components/LeadForm';
import { Card } from '@/components/ui/card';
import ScrollReveal from '@/components/ui/ScrollReveal';

const ostravaProviders = [
  {
    provider: "PODA",
    maxSpeed: "2 Gb/s", 
    priceFrom: "340 Kč",
    technology: "Optika",
    benefits: "Lokální lídr v Ostravě, bez závazku"
  },
  {
    provider: "O2",
    maxSpeed: "1 Gb/s",
    priceFrom: "399 Kč",
    technology: "Optika, VDSL",
    benefits: "Široké pokrytí, O2 TV zdarma"
  },
  {
    provider: "Vodafone",
    maxSpeed: "1 Gb/s",
    priceFrom: "459 Kč",
    technology: "Kabel",
    benefits: "UPC síť, stabilní připojení"
  },
  {
    provider: "T-Mobile",
    maxSpeed: "500 Mb/s",
    priceFrom: "399 Kč",
    technology: "VDSL, LTE",
    benefits: "Kombinace s mobilem"
  }
];

const InternetOstrava = () => {
  const canonicalUrl = "https://www.nejvyhodnejsipripojeni.cz/internet-ostrava";
  
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Internet Ostrava - Nejvýhodnější Připojení",
    "description": "Nejlepší internetové připojení v Ostravě. Porovnáme PODA, O2, Vodafone a T-Mobile. Rychlý optický internet od 340 Kč bez závazku.",
    "url": canonicalUrl,
    "telephone": "+420776370406",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ostrava",
      "addressRegion": "Moravskoslezský kraj",
      "addressCountry": "CZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "49.8209",
      "longitude": "18.2625"
    },
    "areaServed": {
      "@type": "City",
      "name": "Ostrava"
    },
    "serviceType": "Internet Provider Comparison"
  };

  return (
    <PageLayout
      pageTitle="🚀 Internet Ostrava 2025 - Nejlevnější od 340 Kč | PODA vs O2 vs Vodafone"
      pageDescription="💰 Nejlevnější internet v Ostravě od 340 Kč. Porovnáme PODA, O2, Vodafone a T-Mobile. Optické připojení až 2 Gb/s bez závazku. Najdeme nejlepší nabídku pro vaši adresu!"
      pageType="article"
      publishDate="2025-01-20"
      geoRegion="CZ-80"
    >
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content="internet Ostrava, nejlevnější internet Ostrava, PODA Ostrava, O2 internet Ostrava, Vodafone Ostrava, T-Mobile Ostrava, optický internet Ostrava, rychlý internet Ostrava, internet bez závazku Ostrava, gigabitový internet Ostrava, připojení Ostrava, internet Poruba, internet Vítkovice, internet Hrabůvka, internet Kunčice, internet Zábřeh, porovnání poskytovatelů Ostrava, levný internet Ostrava, stabilní internet Ostrava, změna poskytovatele Ostrava" />
        <meta name="geo.region" content="CZ-80" />
        <meta name="geo.placename" content="Ostrava, Moravskoslezský kraj" />
        <meta name="geo.position" content="49.8209;18.2625" />
        <meta name="ICBM" content="49.8209, 18.2625" />
        
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <article>
          <header className="mb-8 text-center">
            <ScrollReveal>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                🚀 Nejlepší internet v Ostravě 2025
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
                Najdeme pro vás nejvýhodnější internetové připojení v Ostravě. 
                Porovnáme všechny poskytovatele a vybereme nejlepší nabídku pro vaši adresu.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-green-600">
                <span>✅ Od 340 Kč/měsíc</span>
                <span>✅ Až 2 Gb/s</span>
                <span>✅ Bez závazku</span>
                <span>✅ Zdarma instalace</span>
              </div>
            </ScrollReveal>
          </header>

          <ScrollReveal delay={200}>
            <Card className="p-6 mb-8 bg-gradient-to-r from-green-50 to-blue-50">
              <h2 className="text-xl font-semibold mb-3">💡 Tip pro Ostravu</h2>
              <p className="text-gray-700">
                <strong>PODA</strong> má v Ostravě nejsilnější pozici s vlastní optickou sítí. 
                Nabízí nejrychlejší připojení až 2 Gb/s za nejnižší ceny od 340 Kč bez závazku.
                Pokrývá všechny městské části včetně Poruby, Vítkovic a Hrabůvky.
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <h2 className="text-2xl font-semibold mt-10 mb-6">Porovnání poskytovatelů v Ostravě</h2>
            <InternetComparisonTable data={ostravaProviders} />
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="grid md:grid-cols-2 gap-8 mt-12 mb-12">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">🏆 Proč je PODA v Ostravě jedničkou?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Vlastní optická síť ve všech částech Ostravy</li>
                  <li>• Nejrychlejší internet až 2000 Mb/s za 520 Kč</li>
                  <li>• Nejlevnější tarif 300 Mb/s za 340 Kč</li>
                  <li>• Bez smluvní vazby - můžete kdykoliv změnit</li>
                  <li>• Lokální podpora v češtině</li>
                  <li>• Zdarma instalace a WiFi router</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">📍 Pokrytí v Ostravě</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Ostrava-Město:</h4>
                    <p className="text-sm text-gray-600">95% pokrytí PODA, O2, Vodafone</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Ostrava-Poruba:</h4>
                    <p className="text-sm text-gray-600">90% pokrytí všech poskytovatelů</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Ostrava-Jih (Zábřeh):</h4>
                    <p className="text-sm text-gray-600">85% pokrytí, nejlepší PODA</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Vítkovice, Hrabůvka:</h4>
                    <p className="text-sm text-gray-600">80% pokrytí, rozšiřuje se</p>
                  </div>
                </div>
              </Card>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <div className="bg-white p-8 rounded-lg shadow-sm border mb-12">
              <h2 className="text-2xl font-semibold mb-6">🏘️ Internet v jednotlivých částech Ostravy</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold">Ostrava-Poruba</h3>
                  <p className="text-sm text-gray-600">Nejlepší pokrytí PODA až 2 Gb/s</p>
                  <p className="text-sm font-medium text-green-600">Od 340 Kč/měsíc</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold">Ostrava-Vítkovice</h3>
                  <p className="text-sm text-gray-600">O2 a PODA optika</p>
                  <p className="text-sm font-medium text-blue-600">Od 399 Kč/měsíc</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold">Ostrava-Hrabůvka</h3>
                  <p className="text-sm text-gray-600">Vodafone kabel, PODA optika</p>
                  <p className="text-sm font-medium text-purple-600">Od 459 Kč/měsíc</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1000}>
            <div className="mt-16" id="lead-form-ostrava">
              <h2 className="text-2xl font-semibold text-center mb-8">
                📞 Najdeme nejlepší internet pro vaši adresu v Ostravě
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Zadejte své údaje a během 5 minut vám pošleme konkrétní nabídky od všech dostupných poskytovatelů
              </p>
              <LeadForm />
            </div>
          </ScrollReveal>
        </article>
      </div>
    </PageLayout>
  );
};

export default InternetOstrava;
