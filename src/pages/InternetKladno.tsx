import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import InternetComparisonTable from '@/components/InternetComparisonTable';
import LeadForm from '@/components/LeadForm';
import { Card } from '@/components/ui/card';
import ScrollReveal from '@/components/ui/ScrollReveal';

const kladnoProviders = [
  {
    provider: "O2",
    maxSpeed: "1 Gb/s",
    priceFrom: "469 Kč",
    technology: "Optika, VDSL",
    benefits: "Kvalitní pokrytí ve středních Čechách"
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
    priceFrom: "479 Kč",
    technology: "VDSL, LTE",
    benefits: "Kombinace s mobilem"
  },
];

const InternetKladno = () => {
  const canonicalUrl = "https://www.nejvyhodnejsipripojeni.cz/internet-kladno";
  
  return (
    <PageLayout
      pageTitle="Internet Kladno 2025 - Nejlepší od 469 Kč | O2 ve středních Čechách"
      pageDescription="Nejlepší internet v Kladně od 469 Kč. O2 má kvalitní pokrytí ve středních Čechách s 89% dostupností. Porovnáme všechny poskytovatele."
      pageType="article"
      publishDate="2025-01-20"
      geoRegion="CZ-20"
    >
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content="internet Kladno, nejlepší internet Kladno, O2 Kladno, PODA Kladno, Vodafone Kladno, optický internet Kladno, rychlý internet Kladno, střední Čechy internet" />
        <meta name="geo.region" content="CZ-20" />
        <meta name="geo.placename" content="Kladno, Středočeský kraj" />
        <meta name="geo.position" content="50.1476;14.1028" />
      </Helmet>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <article>
          <header className="mb-8 text-center">
            <ScrollReveal>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Nejlepší internet v Kladně 2025
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
                V Kladně ve středních Čechách najdete kvalitní internetové připojení. 
                O2 zde nabízí nejlepší pokrytí s 89% dostupností a stabilními službami.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">Od 469 Kč/měsíc</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Až 1 Gb/s</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">89% pokrytí</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full">Střední Čechy</span>
              </div>
            </ScrollReveal>
          </header>

          <ScrollReveal delay={200}>
            <Card className="p-6 mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500">
              <h2 className="text-xl font-semibold mb-3 text-blue-900">Tip pro Kladno</h2>
              <p className="text-gray-700">
                <strong>O2</strong> má v Kladně kvalitní pokrytí ve středních Čechách s 89% dostupností. 
                Nabízí stabilní optické připojení až 1 Gb/s za 469 Kč s možností O2 TV zdarma.
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <h2 className="text-2xl font-semibold mt-10 mb-6">Porovnání poskytovatelů v Kladně</h2>
            <InternetComparisonTable data={kladnoProviders} />
          </ScrollReveal>

          <ScrollReveal delay={1000}>
            <div className="mt-16" id="lead-form-kladno">
              <h2 className="text-2xl font-semibold text-center mb-8">
                Najdeme nejlepší internet pro vaši adresu v Kladně
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

export default InternetKladno;