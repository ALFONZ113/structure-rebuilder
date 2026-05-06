import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import InternetComparisonTable from '@/components/InternetComparisonTable';
import LeadForm from '@/components/LeadForm';
import { Card } from '@/components/ui/card';
import ScrollReveal from '@/components/ui/ScrollReveal';

const liberecProviders = [
  {
    provider: "O2",
    maxSpeed: "1 Gb/s",
    priceFrom: "449 Kč",
    technology: "Optika, VDSL",
    benefits: "Nejlepší pokrytí v horských oblastech"
  },
  {
    provider: "Vodafone",
    maxSpeed: "1 Gb/s",
    priceFrom: "489 Kč",
    technology: "Kabel",
    benefits: "UPC síť, stabilní připojení"
  },
  {
    provider: "T-Mobile",
    maxSpeed: "500 Mb/s",
    priceFrom: "469 Kč",
    technology: "VDSL, LTE",
    benefits: "Kombinace s mobilem"
  }
];

const InternetLiberec = () => {
  const canonicalUrl = "https://www.nejvyhodnejsipripojeni.cz/internet-liberec";
  
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Internet Liberec - Nejvýhodnější Připojení",
    "description": "Nejlepší internetové připojení v Liberci. O2 dominuje s 90% pokrytím. Porovnáme všechny poskytovatele a najdeme nejlepší nabídku.",
    "url": canonicalUrl,
    "telephone": "+420776370406",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Liberec",
      "addressRegion": "Liberecký kraj",
      "addressCountry": "CZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.7671",
      "longitude": "15.0561"
    },
    "areaServed": {
      "@type": "City",
      "name": "Liberec"
    },
    "serviceType": "Internet Provider Comparison"
  };

  return (
    <PageLayout
      pageTitle="Internet Liberec 2025 - Nejlepší připojení od 449 Kč | O2 vs Vodafone"
      pageDescription="Nejlepší internet v Liberci od 449 Kč. O2 má 90% pokrytí včetně horských oblastí. Porovnáme všechny poskytovatele a najdeme nejlepší nabídku."
      pageType="article"
      publishDate="2025-01-20"
      geoRegion="CZ-51"
    >
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content="internet Liberec, nejlepší internet Liberec, O2 Liberec, PODA Liberec, Vodafone Liberec, T-Mobile Liberec, optický internet Liberec, rychlý internet Liberec, internet horské oblasti, internet bez závazku Liberec, připojení Liberec, internet Vratislavice, porovnání poskytovatelů Liberec" />
        <meta name="geo.region" content="CZ-51" />
        <meta name="geo.placename" content="Liberec, Liberecký kraj" />
        <meta name="geo.position" content="50.7671;15.0561" />
        <meta name="ICBM" content="50.7671, 15.0561" />
        
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <article>
          <header className="mb-8 text-center">
            <ScrollReveal>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Nejlepší internet v Liberci 2025
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
                V Liberci a okolních horských oblastech nabízíme kvalitní internetové připojení. 
                O2 zde dominuje s nejlepším pokrytím i v náročném terénu.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">Od 449 Kč/měsíc</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Až 1 Gb/s</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">90% pokrytí</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full">Horské oblasti</span>
              </div>
            </ScrollReveal>
          </header>

          <ScrollReveal delay={200}>
            <Card className="p-6 mb-8 bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500">
              <h2 className="text-xl font-semibold mb-3 text-blue-900">Tip pro Liberec</h2>
              <p className="text-gray-700">
                <strong>O2</strong> má v Liberci nejlepší pokrytí s 90% dostupností i v horských oblastech. 
                Nabízí stabilní optické připojení až 1 Gb/s za 449 Kč s O2 TV zdarma.
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <h2 className="text-2xl font-semibold mt-10 mb-6">Porovnání poskytovatelů v Liberci</h2>
            <InternetComparisonTable data={liberecProviders} />
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="grid md:grid-cols-2 gap-8 mt-12 mb-12">
              <Card className="p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Proč je O2 v Liberci jedničkou?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 90% pokrytí včetně horských oblastí</li>
                  <li>• Stabilní optické připojení až 1000 Mb/s</li>
                  <li>• Pokrývá i obtížně dostupné lokality</li>
                  <li>• O2 TV zdarma k internetovému připojení</li>
                  <li>• Místní technická podpora</li>
                  <li>• Ověřená spolehlivost v náročném terénu</li>
                </ul>
              </Card>

              <Card className="p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-semibold mb-4 text-green-900">Pokrytí v Liberci</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Liberec I-III (centrum):</h4>
                    <p className="text-sm text-gray-600">95% pokrytí všech poskytovatelů</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Vratislavice nad Nisou:</h4>
                    <p className="text-sm text-gray-600">85% pokrytí, nejlepší O2</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Horské oblasti:</h4>
                    <p className="text-sm text-gray-600">O2 pokrývá 80% obtížných lokalit</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Nové lokality:</h4>
                    <p className="text-sm text-gray-600">PODA postupně rozšiřuje síť</p>
                  </div>
                </div>
              </Card>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1000}>
            <div className="mt-16" id="lead-form-liberec">
              <h2 className="text-2xl font-semibold text-center mb-8">
                Najdeme nejlepší internet pro vaši adresu v Liberci
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

export default InternetLiberec;