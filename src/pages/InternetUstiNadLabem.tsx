import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import InternetComparisonTable from '@/components/InternetComparisonTable';
import LeadForm from '@/components/LeadForm';
import { Card } from '@/components/ui/card';
import ScrollReveal from '@/components/ui/ScrollReveal';

const ustiNadLabemProviders = [
  {
    provider: "TetaNet",
    maxSpeed: "1 Gb/s",
    priceFrom: "379 Kč",
    technology: "Kabel, optika",
    benefits: "Lokální poskytovatel v Ústí nad Labem"
  },
  {
    provider: "T-Mobile",
    maxSpeed: "1 Gb/s",
    priceFrom: "449 Kč",
    technology: "VDSL, LTE",
    benefits: "Kvalitní pokrytí v severních Čechách"
  },
  {
    provider: "O2",
    maxSpeed: "1 Gb/s",
    priceFrom: "469 Kč",
    technology: "Optika, VDSL",
    benefits: "Široké pokrytí, O2 TV zdarma"
  },
  {
    provider: "Vodafone",
    maxSpeed: "1 Gb/s",
    priceFrom: "489 Kč",
    technology: "Kabel",
    benefits: "UPC síť, stabilní připojení"
  }
];

const InternetUstiNadLabem = () => {
  const canonicalUrl = "https://www.nejvyhodnejsipripojeni.cz/internet-usti-nad-labem";
  
  return (
    <PageLayout
      pageTitle="Internet Ústí nad Labem 2025 - Nejlepší od 379 Kč | TetaNet vs T-Mobile"
      pageDescription="Nejlepší internet v Ústí nad Labem od 379 Kč. TetaNet nabízí lokální služby v severních Čechách. Porovnáme všechny poskytovatele."
      pageType="article"
      publishDate="2025-01-20"
      geoRegion="CZ-42"
    >
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content="internet Ústí nad Labem, nejlepší internet Ústí nad Labem, T-Mobile Ústí nad Labem, O2 Ústí nad Labem, PODA Ústí nad Labem, optický internet severní Čechy" />
        <meta name="geo.region" content="CZ-42" />
        <meta name="geo.placename" content="Ústí nad Labem, Ústecký kraj" />
        <meta name="geo.position" content="50.6607;14.0322" />
      </Helmet>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <article>
          <header className="mb-8 text-center">
            <ScrollReveal>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Nejlepší internet v Ústí nad Labem 2025
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
                V Ústí nad Labem a severních Čechách najdete kvalitní internetové připojení. 
                T-Mobile zde nabízí nejlepší pokrytí s 83% dostupností.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">Od 379 Kč/měsíc</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Až 1 Gb/s</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">83% pokrytí</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full">Severní Čechy</span>
              </div>
            </ScrollReveal>
          </header>

          <ScrollReveal delay={200}>
            <Card className="p-6 mb-8 bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500">
              <h2 className="text-xl font-semibold mb-3 text-cyan-900">Tip pro Ústí nad Labem</h2>
              <p className="text-gray-700">
                <strong>TetaNet</strong> je lokální poskytovatel v Ústí nad Labem s kvalitními službami v severních Čechách. 
                Nabízí stabilní připojení až 1 Gb/s za 379 Kč s lokální technickou podporou.
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <h2 className="text-2xl font-semibold mt-10 mb-6">Porovnání poskytovatelů v Ústí nad Labem</h2>
            <InternetComparisonTable data={ustiNadLabemProviders} />
          </ScrollReveal>

          <ScrollReveal delay={1000}>
            <div className="mt-16" id="lead-form-usti-nad-labem">
              <h2 className="text-2xl font-semibold text-center mb-8">
                Najdeme nejlepší internet pro vaši adresu v Ústí nad Labem
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

export default InternetUstiNadLabem;