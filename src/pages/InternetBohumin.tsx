
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import InternetComparisonTable from '@/components/InternetComparisonTable';
import LeadForm from '@/components/LeadForm';
import { Card } from '@/components/ui/card';
import ScrollReveal from '@/components/ui/ScrollReveal';

const bohuminProviders = [
  {
    provider: "O2",
    maxSpeed: "500 Mb/s",
    priceFrom: "399 Kč",
    technology: "VDSL, Optika",
    benefits: "Nejlepší pokrytí v Bohumíně"
  },
  {
    provider: "PODA",
    maxSpeed: "500 Mb/s", 
    priceFrom: "440 Kč",
    technology: "Optika",
    benefits: "Rychlé optické připojení"
  },
  {
    provider: "T-Mobile",
    maxSpeed: "300 Mb/s",
    priceFrom: "449 Kč",
    technology: "VDSL",
    benefits: "Stabilní VDSL připojení"
  },
  {
    provider: "Vodafone",
    maxSpeed: "200 Mb/s",
    priceFrom: "499 Kč",
    technology: "VDSL",
    benefits: "Základní pokrytí"
  }
];

const InternetBohumin = () => {
  const canonicalUrl = "https://www.nejvyhodnejsipripojeni.cz/internet-bohumin";
  
  return (
    <PageLayout
      pageTitle="🌟 Internet Bohumín 2025 - Nejlepší připojení od 399 Kč | O2 vs PODA"
      pageDescription="✨ Nejlepší internet v Bohumíně od 399 Kč. Porovnáme O2, PODA, T-Mobile a Vodafone. VDSL a optické připojení až 500 Mb/s. Najdeme nejvýhodnější nabídku!"
      pageType="article"
      publishDate="2025-01-20"
      geoRegion="CZ-80"
    >
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content="internet Bohumín, nejlevnější internet Bohumín, O2 internet Bohumín, PODA Bohumín, T-Mobile Bohumín, Vodafone Bohumín, VDSL internet Bohumín, optický internet Bohumín, rychlý internet Bohumín, připojení Bohumín, internet Starý Bohumín, internet Nový Bohumín, porovnání poskytovatelů Bohumín, levný internet Bohumín" />
        <meta name="geo.region" content="CZ-80" />
        <meta name="geo.placename" content="Bohumín, Moravskoslezský kraj" />
      </Helmet>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <article>
          <header className="mb-8 text-center">
            <ScrollReveal>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                🌟 Nejlepší internet v Bohumíně 2025
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
                Kompletní průvodce internetem v Bohumíně. Porovnáme všechny poskytovatele 
                a najdeme pro vás nejlevnější připojení od 399 Kč.
              </p>
            </ScrollReveal>
          </header>

          <ScrollReveal delay={200}>
            <Card className="p-6 mb-8 bg-gradient-to-r from-blue-50 to-purple-50">
              <h2 className="text-xl font-semibold mb-3">🎯 Doporučení pro Bohumín</h2>
              <p className="text-gray-700">
                V Bohumíně má nejlepší pokrytí <strong>O2</strong> s VDSL a optickým připojením za 399 Kč. 
                <strong>PODA</strong> nabízí rychlou optiku v centru města za 440 Kč.
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <h2 className="text-2xl font-semibold mt-10 mb-6">Porovnání poskytovatelů v Bohumíně</h2>
            <InternetComparisonTable data={bohuminProviders} />
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="grid md:grid-cols-2 gap-8 mt-12 mb-12">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">🏆 Nejlepší volby v Bohumíně</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Nejlevnější:</strong> O2 VDSL za 399 Kč</li>
                  <li>• <strong>Nejrychlejší:</strong> PODA optika 500 Mb/s</li>
                  <li>• <strong>Nejstabilnější:</strong> T-Mobile VDSL</li>
                  <li>• <strong>Nejširší pokrytí:</strong> O2 ve všech částech</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">📍 Pokrytí v Bohumíně</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Centrum Bohumín:</strong> Všichni poskytovatelé</li>
                  <li><strong>Starý Bohumín:</strong> O2, T-Mobile</li>
                  <li><strong>Nový Bohumín:</strong> O2, PODA, T-Mobile</li>
                  <li><strong>Skřečoň:</strong> Hlavně O2</li>
                </ul>
              </Card>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <div className="mt-16" id="lead-form-bohumin">
              <h2 className="text-2xl font-semibold text-center mb-8">
                📞 Najdeme nejlepší internet pro vaši adresu v Bohumíně
              </h2>
              <LeadForm />
            </div>
          </ScrollReveal>
        </article>
      </div>
    </PageLayout>
  );
};

export default InternetBohumin;
