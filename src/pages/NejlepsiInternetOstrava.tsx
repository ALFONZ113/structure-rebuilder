
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import InternetComparisonTable from '@/components/InternetComparisonTable';
import LeadForm from '@/components/LeadForm';
import { Card } from '@/components/ui/card';
import ScrollReveal from '@/components/ui/ScrollReveal';
import OstravaLocalSchema from '@/components/seo/OstravaLocalSchema';

const ostravaProviders = [
  {
    provider: "PODA",
    maxSpeed: "2 Gb/s", 
    priceFrom: "340 Kč",
    technology: "Optika",
    benefits: "Lokální lídr v Ostravě, vysoká rychlost"
  },
  {
    provider: "O2",
    maxSpeed: "1 Gb/s",
    priceFrom: "399 Kč",
    technology: "Optika, VDSL",
    benefits: "Široké pokrytí, O2 TV v ceně"
  },
  {
    provider: "T-Mobile",
    maxSpeed: "500 Mb/s",
    priceFrom: "399 Kč",
    technology: "VDSL, LTE",
    benefits: "Kombinace s mobilními službami"
  },
  {
    provider: "Vodafone",
    maxSpeed: "1 Gb/s",
    priceFrom: "459 Kč",
    technology: "Kabel",
    benefits: "UPC kabelová síť"
  }
];

const NejlepsiInternetOstrava = () => {
  const canonicalUrl = "https://www.nejvyhodnejsipripojeni.cz/nejlepsi-internet-ostrava";
  
  return (
    <PageLayout
      pageTitle="Nejlepší internet Ostrava ŘÍJEN 2025 | PODA od 340 Kč - Recenze"
      pageDescription="✓ Nejlepší internet Ostrava ŘÍJEN 2025 ✓ PODA optika 2 Gb/s od 340 Kč ✓ Porovnání O2, T-Mobile, Vodafone ✓ Zkušenosti zákazníků ✓ Nezávislé hodnocení"
      pageType="article"
      publishDate="2025-10-29"
      modifiedDate="2025-10-29"
    >
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content="PODA internet Ostrava, nejlepší internet Ostrava, internet Ostrava recenze, PODA Ostrava cena, optický internet Ostrava, PODA zkušenosti Ostrava, internet Ostrava Poruba, PODA tarify Ostrava" />
        <meta name="geo.region" content="CZ-80" />
        <meta name="geo.placename" content="Ostrava" />
        <meta name="geo.position" content="49.8209;18.2625" />
        <meta property="og:locale" content="cs_CZ" />
        <meta property="og:updated_time" content="2025-10-29" />
      </Helmet>
      <OstravaLocalSchema />

      <div className="container mx-auto px-4 py-8 md:py-12">
        <article>
          <header className="mb-8 text-center">
            <ScrollReveal>
              <h1 className="heading-lg mb-4">Nejlepší internet Ostrava: Recenze ŘÍJEN 2025</h1>
              <p className="text-premium max-w-3xl mx-auto">
                Aktualizováno ŘÍJEN 2025: Porovnání PODA, O2, T-Mobile a Vodafone v Ostravě. PODA optika až 2 Gb/s od 340 Kč. Nezávislé hodnocení a zkušenosti zákazníků.
              </p>
            </ScrollReveal>
          </header>

          <ScrollReveal delay={200}>
            <Card className="p-6 mb-8 bg-primary/10 dark:bg-primary/20 border-primary/20">
              <h2 className="text-xl font-semibold mb-3 text-foreground">💡 Tip pro Ostravu</h2>
              <p className="text-body">
                PODA a.s. má v Ostravě nejsilnější pozici s vlastní optickou sítí. Nabízí nejvyšší rychlosti 
                za nejnižší ceny - až 2000 Mb/s za 520 Kč měsíčně bez závazku.
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <h2 className="text-2xl font-semibold mt-10 mb-6">Porovnání poskytovatelů v Ostravě</h2>
            <InternetComparisonTable data={ostravaProviders} />
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Proč je PODA v Ostravě jedničkou?</h3>
                <ul className="space-y-2 text-body">
                  <li>• Vlastní optická síť s nejvyšší kvalitou</li>
                  <li>• Nejrychlejší připojení až 2000 Mb/s</li>
                  <li>• Nejnižší ceny na trhu</li>
                  <li>• Bez závazku, možnost kdykoli změnit</li>
                  <li>• Lokální podpora v českém jazyce</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Alternativy v Ostravě</h3>
                <ul className="space-y-2 text-body">
                  <li><strong>O2:</strong> Dobré pokrytí, TV služby</li>
                  <li><strong>T-Mobile:</strong> Mobilní balíčky</li>
                  <li><strong>Vodafone:</strong> UPC kabelová síť</li> 
                  <li><strong>Lokální ISP:</strong> Menší poskytovatelé</li>
                </ul>
              </Card>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <div className="mt-16" id="lead-form-ostrava">
              <h2 className="text-2xl font-semibold text-center mb-8 text-foreground">
                Najdeme nejlepší internet pro vaši adresu v Ostravě
              </h2>
              <LeadForm />
            </div>
          </ScrollReveal>
        </article>
      </div>
    </PageLayout>
  );
};

export default NejlepsiInternetOstrava;
