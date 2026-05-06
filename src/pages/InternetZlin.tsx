import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import InternetComparisonTable from '@/components/InternetComparisonTable';
import LeadForm from '@/components/LeadForm';
import { Card } from '@/components/ui/card';
import ScrollReveal from '@/components/ui/ScrollReveal';

const zlinProviders = [
  {
    provider: "Tlapnet",
    maxSpeed: "310 Mb/s",
    priceFrom: "245 Kč",
    technology: "Optika, bezdrát",
    benefits: "Lokální rychlé připojení ve Zlíně"
  },
  {
    provider: "O2",
    maxSpeed: "1 Gb/s",
    priceFrom: "419 Kč",
    technology: "Optika, VDSL",
    benefits: "Moderní připojení v Baťově městě"
  },
  {
    provider: "T-Mobile",
    maxSpeed: "500 Mb/s",
    priceFrom: "449 Kč",
    technology: "VDSL, LTE",
    benefits: "Kombinace s mobilem"
  },
  {
    provider: "Vodafone",
    maxSpeed: "1 Gb/s",
    priceFrom: "469 Kč",
    technology: "Kabel",
    benefits: "UPC síť, stabilní připojení"
  }
];

const InternetZlin = () => {
  const canonicalUrl = "https://www.nejvyhodnejsipripojeni.cz/internet-zlin";
  
  return (
    <PageLayout
      pageTitle="Internet Zlín 2025 - Nejlepší od 245 Kč | Tlapnet vs O2"
      pageDescription="Nejlepší internet ve Zlíně od 245 Kč. Tlapnet nabízí lokální rychlé připojení v Baťově městě. Porovnáme všechny poskytovatele."
      pageType="article"
      publishDate="2025-01-20"
      geoRegion="CZ-72"
    >
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content="internet Zlín, nejlepší internet Zlín, O2 Zlín, PODA Zlín, T-Mobile Zlín, optický internet Zlín, rychlý internet Zlín, Baťovo město internet" />
        <meta name="geo.region" content="CZ-72" />
        <meta name="geo.placename" content="Zlín, Zlínský kraj" />
        <meta name="geo.position" content="49.2266;17.6667" />
      </Helmet>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <article>
          <header className="mb-8 text-center">
            <ScrollReveal>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Nejlepší internet ve Zlíně 2025
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
                Toto je náhled dostupných možností ve Zlíně. Pro skutečné nabídky na vaši konkrétní adresu 
                <Link to="#lead-form-zlin" className="text-brand-accent-blue hover:underline ml-1">
                  kontaktujte nás
                </Link> a získáte nejvýhodnější připojení.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">Od 245 Kč/měsíc</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Až 1 Gb/s</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">86% pokrytí</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full">Baťovo město</span>
              </div>
            </ScrollReveal>
          </header>

          <ScrollReveal delay={200}>
            <Card className="p-6 mb-8 bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500">
              <h2 className="text-xl font-semibold mb-3 text-amber-900">Tip pro Zlín</h2>
              <p className="text-gray-700">
                <strong>Tlapnet</strong> je lokální poskytovatel ve Zlíně s nejlepšími cenami v Baťově městě. 
                Nabízí rychlé připojení až 310 Mb/s za 245 Kč s lokální technickou podporou a kvalitními službami.
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <h2 className="text-2xl font-semibold mt-10 mb-6">Porovnání poskytovatelů ve Zlíně</h2>
            <InternetComparisonTable data={zlinProviders} />
          </ScrollReveal>

          <ScrollReveal delay={1000}>
            <div className="mt-16" id="lead-form-zlin">
              <h2 className="text-2xl font-semibold text-center mb-8">
                Najdeme nejlepší internet pro vaši adresu ve Zlíně
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

export default InternetZlin;