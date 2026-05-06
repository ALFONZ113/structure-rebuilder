import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import InternetComparisonTable from '@/components/InternetComparisonTable';
import LeadForm from '@/components/LeadForm';
import { Card } from '@/components/ui/card';
import ScrollReveal from '@/components/ui/ScrollReveal';

const olomoucProviders = [
  {
    provider: "O2",
    maxSpeed: "1 Gb/s",
    priceFrom: "439 Kč",
    technology: "Optika, VDSL",
    benefits: "Široké pokrytí, O2 TV zdarma"
  },
  {
    provider: "T-Mobile",
    maxSpeed: "500 Mb/s",
    priceFrom: "459 Kč",
    technology: "VDSL, LTE",
    benefits: "Kombinace s mobilem"
  },
  {
    provider: "Vodafone",
    maxSpeed: "1 Gb/s",
    priceFrom: "479 Kč",
    technology: "Kabel",
    benefits: "UPC síť, stabilní připojení"
  }
];

const InternetOlomouc = () => {
  const canonicalUrl = "https://www.nejvyhodnejsipripojeni.cz/internet-olomouc";
  
  return (
    <PageLayout
      pageTitle="Internet Olomouc 2025 - Nejlepší od 439 Kč | O2 v centru Moravy"
      pageDescription="Nejlepší internet v Olomouci od 439 Kč. O2 nabízí široké pokrytí v centru Moravy s 82% dostupností. Porovnáme všechny poskytovatele."
      pageType="article"
      publishDate="2025-01-20"
      geoRegion="CZ-71"
    >
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content="internet Olomouc, nejlepší internet Olomouc, PODA Olomouc, O2 Olomouc, T-Mobile Olomouc, optický internet Olomouc, rychlý internet Olomouc, centrum Moravy internet" />
        <meta name="geo.region" content="CZ-71" />
        <meta name="geo.placename" content="Olomouc, Olomoucký kraj" />
        <meta name="geo.position" content="49.5938;17.2509" />
      </Helmet>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <article>
          <header className="mb-8 text-center">
            <ScrollReveal>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Nejlepší internet v Olomouci 2025
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
                V Olomouci, v centru Moravy, najdete rychlé optické internetové připojení. 
                O2 zde nabízí nejlepší služby s 82% pokrytím a širokým spektrem služeb.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">Od 439 Kč/měsíc</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Až 1 Gb/s</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">82% pokrytí</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full">Centrum Moravy</span>
              </div>
            </ScrollReveal>
          </header>

          <ScrollReveal delay={200}>
            <Card className="p-6 mb-8 bg-gradient-to-r from-green-50 to-teal-50 border-l-4 border-green-500">
              <h2 className="text-xl font-semibold mb-3 text-green-900">Tip pro Olomouc</h2>
              <p className="text-gray-700">
                <strong>O2</strong> má v Olomouci rychlé optické připojení v centru Moravy s 82% pokrytím. 
                Nabízí konkurenční ceny od 439 Kč za gigabitové připojení s O2 TV zdarma.
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <h2 className="text-2xl font-semibold mt-10 mb-6">Porovnání poskytovatelů v Olomouci</h2>
            <InternetComparisonTable data={olomoucProviders} />
          </ScrollReveal>

          <ScrollReveal delay={1000}>
            <div className="mt-16" id="lead-form-olomouc">
              <h2 className="text-2xl font-semibold text-center mb-8">
                Najdeme nejlepší internet pro vaši adresu v Olomouci
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

export default InternetOlomouc;