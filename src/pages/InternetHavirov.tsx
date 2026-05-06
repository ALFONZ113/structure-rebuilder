
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import InternetComparisonTable from '@/components/InternetComparisonTable';
import LeadForm from '@/components/LeadForm';
import { Card } from '@/components/ui/card';
import ScrollReveal from '@/components/ui/ScrollReveal';

const havirovProviders = [
  {
    provider: "PODA",
    maxSpeed: "1 Gb/s", 
    priceFrom: "390 Kč",
    technology: "Optika",
    benefits: "Nejrychlejší v Havířově"
  },
  {
    provider: "O2",
    maxSpeed: "500 Mb/s",
    priceFrom: "399 Kč",
    technology: "VDSL, Optika",
    benefits: "Nejširší pokrytí města"
  },
  {
    provider: "Vodafone",
    maxSpeed: "300 Mb/s",
    priceFrom: "459 Kč",
    technology: "Kabel",
    benefits: "UPC infrastruktura"
  },
  {
    provider: "T-Mobile",
    maxSpeed: "200 Mb/s",
    priceFrom: "449 Kč",
    technology: "VDSL",
    benefits: "Stabilní připojení"
  }
];

const InternetHavirov = () => {
  const canonicalUrl = "https://www.nejvyhodnejsipripojeni.cz/internet-havirov";
  
  return (
    <PageLayout
      pageTitle="⚡ Internet Havířov 2025 - Nejvýhodnější od 390 Kč | PODA vs O2 vs Vodafone"
      pageDescription="💡 Nejlepší internet v Havířově od 390 Kč. Porovnáme PODA, O2, Vodafone a T-Mobile. Optické připojení až 1 Gb/s. Najdeme nejlevnější nabídku pro vaši adresu!"
      pageType="article"
      publishDate="2025-01-20"
      geoRegion="CZ-80"
    >
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content="internet Havířov, nejlevnější internet Havířov, PODA Havířov, O2 internet Havířov, Vodafone Havířov, T-Mobile Havířov, optický internet Havířov, rychlý internet Havířov, internet bez závazku Havířov, připojení Havířov, internet Město, internet Šumbark, internet Prostřední Suchá, porovnání poskytovatelů Havířov, levný internet Havířov" />
        <meta name="geo.region" content="CZ-80" />
        <meta name="geo.placename" content="Havířov, Moravskoslezský kraj" />
      </Helmet>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <article>
          <header className="mb-8 text-center">
            <ScrollReveal>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                ⚡ Nejlepší internet v Havířově 2025
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
                Kompletní přehled poskytovatelů internetu v Havířově. Najdeme pro vás nejlevnější 
                a nejrychlejší připojení od 390 Kč měsíčně.
              </p>
            </ScrollReveal>
          </header>

          <ScrollReveal delay={200}>
            <Card className="p-6 mb-8 bg-gradient-to-r from-purple-50 to-blue-50">
              <h2 className="text-xl font-semibold mb-3">🎯 Tip pro Havířov</h2>
              <p className="text-gray-700">
                <strong>PODA</strong> nabízí v Havířově nejrychlejší optické připojení až 1 Gb/s za 390 Kč. 
                <strong>O2</strong> má nejširší pokrytí včetně všech městských částí.
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <h2 className="text-2xl font-semibold mt-10 mb-6">Porovnání poskytovatelů v Havířově</h2>
            <InternetComparisonTable data={havirovProviders} />
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="grid md:grid-cols-2 gap-8 mt-12 mb-12">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">🏆 Nejlepší volby v Havířově</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Nejrychlejší:</strong> PODA 1 Gb/s za 390 Kč</li>
                  <li>• <strong>Nejširší pokrytí:</strong> O2 ve všech částech</li>
                  <li>• <strong>Stabilní kabel:</strong> Vodafone UPC síť</li>
                  <li>• <strong>Bez závazku:</strong> Všichni hlavní poskytovatelé</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">📍 Pokrytí v Havířově</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Havířov-Město:</strong> Všichni poskytovatelé</li>
                  <li><strong>Šumbark:</strong> PODA, O2, Vodafone</li>
                  <li><strong>Prostřední Suchá:</strong> O2, T-Mobile</li>
                  <li><strong>Bludovice:</strong> O2, částečně PODA</li>
                </ul>
              </Card>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <div className="mt-16" id="lead-form-havirov">
              <h2 className="text-2xl font-semibold text-center mb-8">
                📞 Najdeme nejlepší internet pro vaši adresu v Havířově
              </h2>
              <LeadForm />
            </div>
          </ScrollReveal>
        </article>
      </div>
    </PageLayout>
  );
};

export default InternetHavirov;
