
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import InternetComparisonTable from '@/components/InternetComparisonTable';
import LeadForm from '@/components/LeadForm';
import { Card } from '@/components/ui/card';
import ScrollReveal from '@/components/ui/ScrollReveal';

const karvinaProviders = [
  {
    provider: "PODA",
    maxSpeed: "1 Gb/s", 
    priceFrom: "390 Kč",
    technology: "Optika",
    benefits: "Rychlé připojení, bez závazku"
  },
  {
    provider: "O2",
    maxSpeed: "500 Mb/s",
    priceFrom: "399 Kč",
    technology: "VDSL, Optika",
    benefits: "Široké pokrytí, O2 TV"
  },
  {
    provider: "T-Mobile",
    maxSpeed: "300 Mb/s",
    priceFrom: "449 Kč",
    technology: "VDSL",
    benefits: "Stabilní připojení"
  },
  {
    provider: "Vodafone",
    maxSpeed: "200 Mb/s",
    priceFrom: "499 Kč",
    technology: "VDSL",
    benefits: "Základní pokrytí"
  }
];

const InternetKarvina = () => {
  const canonicalUrl = "https://www.nejvyhodnejsipripojeni.cz/internet-karvina";
  
  return (
    <PageLayout
      pageTitle="💯 Internet Karviná 2025 - Nejlepší připojení od 390 Kč | PODA vs O2"
      pageDescription="🔥 Nejlepší internet v Karviné od 390 Kč. Porovnáme PODA, O2, T-Mobile a Vodafone. Optické připojení až 1 Gb/s. Najdeme nejvýhodnější nabídku pro vaši adresu!"
      pageType="article"
      publishDate="2025-01-20"
      geoRegion="CZ-80"
    >
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content="internet Karviná, nejlevnější internet Karviná, PODA Karviná, O2 internet Karviná, T-Mobile Karviná, Vodafone Karviná, optický internet Karviná, rychlý internet Karviná, internet bez závazku Karviná, připojení Karviná, internet Fryštát, internet Ráj, internet Nové Město, porovnání poskytovatelů Karviná, levný internet Karviná, stabilní internet Karviná" />
        <meta name="geo.region" content="CZ-80" />
        <meta name="geo.placename" content="Karviná, Moravskoslezský kraj" />
      </Helmet>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <article>
          <header className="mb-8 text-center">
            <ScrollReveal>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                💯 Nejlepší internet v Karviné 2025
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
                Porovnáme všechny poskytovatele internetu v Karviné a najdeme pro vás tu nejvýhodnější nabídku. 
                Od 390 Kč měsíčně s optickým připojením.
              </p>
            </ScrollReveal>
          </header>

          <ScrollReveal delay={200}>
            <Card className="p-6 mb-8 bg-gradient-to-r from-blue-50 to-green-50">
              <h2 className="text-xl font-semibold mb-3">🎯 Doporučení pro Karviná</h2>
              <p className="text-gray-700">
                V Karviné je nejlepší volbou <strong>PODA</strong> s optickým připojením až 1 Gb/s za 390 Kč. 
                Pokrývá centrum města i okrajové části jako Fryštát a Ráj.
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <h2 className="text-2xl font-semibold mt-10 mb-6">Porovnání poskytovatelů v Karviné</h2>
            <InternetComparisonTable data={karvinaProviders} />
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="grid md:grid-cols-2 gap-8 mt-12 mb-12">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">🏆 Výhody internetu v Karviné</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• PODA optika až 1 Gb/s za 390 Kč</li>
                  <li>• O2 pokrývá 90% města</li>
                  <li>• Dostupné i v okrajových částech</li>
                  <li>• Většina poskytovatelů bez závazku</li>
                  <li>• Rychlá instalace do 14 dnů</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">📍 Pokrytí v Karviné</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Centrum Karviná:</strong> Všichni poskytovatelé</li>
                  <li><strong>Fryštát:</strong> PODA, O2, T-Mobile</li>
                  <li><strong>Ráj:</strong> O2, T-Mobile</li>
                  <li><strong>Nové Město:</strong> PODA, O2</li>
                </ul>
              </Card>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <div className="mt-16" id="lead-form-karvina">
              <h2 className="text-2xl font-semibold text-center mb-8">
                📞 Najdeme nejlepší internet pro vaši adresu v Karviné
              </h2>
              <LeadForm />
            </div>
          </ScrollReveal>
        </article>
      </div>
    </PageLayout>
  );
};

export default InternetKarvina;
