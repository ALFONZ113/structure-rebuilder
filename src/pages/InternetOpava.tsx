import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import InternetComparisonTable from '@/components/InternetComparisonTable';
import LeadForm from '@/components/LeadForm';
import { Card } from '@/components/ui/card';
import ScrollReveal from '@/components/ui/ScrollReveal';

const opavaProviders = [
  {
    provider: "PODA",
    maxSpeed: "1 Gb/s", 
    priceFrom: "369 Kč",
    technology: "Optika",
    benefits: "Rychlé připojení na Moravskoslezsku"
  },
  {
    provider: "O2",
    maxSpeed: "1 Gb/s",
    priceFrom: "419 Kč",
    technology: "Optika, VDSL",
    benefits: "Široké pokrytí, O2 TV zdarma"
  },
  {
    provider: "T-Mobile",
    maxSpeed: "500 Mb/s",
    priceFrom: "439 Kč",
    technology: "VDSL, LTE",
    benefits: "Kombinace s mobilem"
  },
  {
    provider: "Vodafone",
    maxSpeed: "1 Gb/s",
    priceFrom: "459 Kč",
    technology: "Kabel",
    benefits: "UPC síť, stabilní připojení"
  }
];

const InternetOpava = () => {
  const canonicalUrl = "https://www.nejvyhodnejsipripojeni.cz/internet-opava";
  
  return (
    <PageLayout
      pageTitle="Internet Opava 2025 - Nejlepší od 369 Kč | PODA vs O2 na Moravskoslezsku"
      pageDescription="Nejlepší internet v Opavě od 369 Kč. PODA nabízí rychlé připojení na Moravskoslezsku s 78% pokrytím. Porovnáme všechny poskytovatele."
      pageType="article"
      publishDate="2025-01-20"
      geoRegion="CZ-80"
    >
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content="internet Opava, nejlepší internet Opava, PODA Opava, O2 Opava, T-Mobile Opava, optický internet Opava, rychlý internet Opava, Moravskoslezsko internet" />
        <meta name="geo.region" content="CZ-80" />
        <meta name="geo.placename" content="Opava, Moravskoslezský kraj" />
        <meta name="geo.position" content="49.9386;17.9027" />
      </Helmet>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <article>
          <header className="mb-8 text-center">
            <ScrollReveal>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Nejlepší internet v Opavě 2025
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
                V Opavě na Moravskoslezsku najdete rychlé internetové připojení. 
                PODA zde nabízí nejlepší služby s 78% pokrytím a konkurenčními cenami.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">Od 369 Kč/měsíc</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Až 1 Gb/s</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">78% pokrytí</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full">Moravskoslezsko</span>
              </div>
            </ScrollReveal>
          </header>

          <ScrollReveal delay={200}>
            <Card className="p-6 mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500">
              <h2 className="text-xl font-semibold mb-3 text-green-900">Tip pro Opavu</h2>
              <p className="text-gray-700">
                <strong>PODA</strong> má v Opavě rychlé připojení na Moravskoslezsku s 78% pokrytím. 
                Nabízí konkurenční ceny od 369 Kč za gigabitové připojení bez závazku s lokální podporou.
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <h2 className="text-2xl font-semibold mt-10 mb-6">Porovnání poskytovatelů v Opavě</h2>
            <InternetComparisonTable data={opavaProviders} />
          </ScrollReveal>

          <ScrollReveal delay={1000}>
            <div className="mt-16" id="lead-form-opava">
              <h2 className="text-2xl font-semibold text-center mb-8">
                Najdeme nejlepší internet pro vaši adresu v Opavě
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

export default InternetOpava;