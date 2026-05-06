
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import InternetComparisonTable from '@/components/InternetComparisonTable';
import LeadForm from '@/components/LeadForm';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ScrollReveal from '@/components/ui/ScrollReveal';

const allProviders = [
  {
    provider: "PODA",
    maxSpeed: "2 Gb/s", 
    priceFrom: "340 Kč",
    technology: "Optika",
    benefits: "Nejlepší poměr cena/výkon"
  },
  {
    provider: "O2",
    maxSpeed: "2 Gb/s",
    priceFrom: "399 Kč",
    technology: "Optika, VDSL",
    benefits: "Nejširší pokrytí v ČR"
  },
  {
    provider: "T-Mobile",
    maxSpeed: "1 Gb/s",
    priceFrom: "299 Kč",
    technology: "Optika, VDSL",
    benefits: "Nejnižší základní cena"
  },
  {
    provider: "Vodafone",
    maxSpeed: "1 Gb/s",
    priceFrom: "459 Kč",
    technology: "Optika, kabel",
    benefits: "Kvalitní kabelová síť"
  },
  {
    provider: "Nej.cz",
    maxSpeed: "1 Gb/s",
    priceFrom: "299 Kč",
    technology: "Optika, kabel",
    benefits: "Regionální lídr"
  },
  {
    provider: "CETIN",
    maxSpeed: "100 Mb/s",
    priceFrom: "390 Kč",
    technology: "VDSL",
    benefits: "Stabilita a pokrytí"
  }
];

const SrovnaniInternetu2025 = () => {
  const canonicalUrl = "https://www.nejvyhodnejsipripojeni.cz/srovnani-internetu-2025";
  
  return (
    <PageLayout
      pageTitle="Srovnání internetu 2025 - Najdeme nejvýhodnější tarif"
      pageDescription="Kompletní srovnání všech poskytovatelů internetu v ČR 2025. Porovnáme ceny, rychlosti a služby. Najdeme nejvýhodnější tarif pro vás."
      pageType="article"
      publishDate="2025-07-06"
    >
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content="srovnání internetu 2025, porovnání poskytovatelů, nejlepší internet, internet ceny, optický internet" />
      </Helmet>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <article>
          <header className="mb-8 text-center">
            <ScrollReveal>
              <h1 className="heading-lg mb-4">Srovnání internetu 2025</h1>
              <p className="text-premium max-w-3xl mx-auto">
                Porovnáme všechny poskytovatele internetu v Česku a najdeme nejvýhodnější tarif přesně pro vaše potřeby.
              </p>
            </ScrollReveal>
          </header>

          <ScrollReveal delay={200}>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 text-center">
                <Badge className="mb-3 bg-green-100 text-green-800">Nejvýhodnější</Badge>
                <h3 className="font-semibold text-lg mb-2">PODA a.s.</h3>
                <p className="text-gray-600">Až 2000 Mb/s za 520 Kč</p>
                <p className="text-sm text-gray-500 mt-2">Nejlepší poměr cena/rychlost</p>
              </Card>
              
              <Card className="p-6 text-center">
                <Badge className="mb-3 bg-blue-100 text-blue-800">Nejširší pokrytí</Badge>
                <h3 className="font-semibold text-lg mb-2">O2</h3>
                <p className="text-gray-600">Až 2000 Mb/s za 899 Kč</p>
                <p className="text-sm text-gray-500 mt-2">Dostupné téměř všude</p>
              </Card>
              
              <Card className="p-6 text-center">
                <Badge className="mb-3 bg-orange-100 text-orange-800">Nejlevnější</Badge>
                <h3 className="font-semibold text-lg mb-2">T-Mobile</h3>
                <p className="text-gray-600">50 Mb/s za 299 Kč</p>
                <p className="text-sm text-gray-500 mt-2">Základní připojení</p>
              </Card>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <h2 className="text-2xl font-semibold mb-6">Kompletní porovnání všech poskytovatelů</h2>
            <InternetComparisonTable data={allProviders} />
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Podle rychlosti připojení</h3>
                <div className="space-y-3">
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span><strong>2000 Mb/s:</strong> PODA (520 Kč), O2 (899 Kč)</span>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span><strong>1000 Mb/s:</strong> T-Mobile (699 Kč), Vodafone (699 Kč)</span>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span><strong>500 Mb/s:</strong> O2 (499 Kč), PODA (440 Kč)</span>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span><strong>300 Mb/s:</strong> PODA (340 Kč), T-Mobile (399 Kč)</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Podle typu technologie</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 rounded">
                    <strong>Optika:</strong> PODA, O2, T-Mobile, Vodafone
                    <p className="text-sm text-gray-600">Nejstabilnější a nejrychlejší</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded">
                    <strong>VDSL:</strong> O2, T-Mobile, CETIN
                    <p className="text-sm text-gray-600">Dobré pokrytí, střední rychlosti</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded">
                    <strong>Kabel:</strong> Vodafone (UPC), Nej.cz
                    <p className="text-sm text-gray-600">Stabilní v městech</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <Card className="p-6 mt-12 bg-gradient-to-r from-blue-50 to-green-50">
              <h3 className="text-xl font-semibold mb-4">Naše doporučení pro rok 2025</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-green-700">Pro vysoké rychlosti:</h4>
                  <p>PODA a.s. - nejlepší poměr cena/výkon</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700">Pro široké pokrytí:</h4>
                  <p>O2 - dostupné téměř všude v ČR</p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-700">Pro základní potřeby:</h4>
                  <p>T-Mobile - nejlevnější základní tarify</p>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={1000}>
            <div className="mt-16" id="lead-form-srovnani">
              <h2 className="text-2xl font-semibold text-center mb-8">
                Najdeme nejvýhodnější tarif přesně pro vás
              </h2>
              <LeadForm />
            </div>
          </ScrollReveal>
        </article>
      </div>
    </PageLayout>
  );
};

export default SrovnaniInternetu2025;
