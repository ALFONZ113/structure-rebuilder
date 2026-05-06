import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import LeadForm from '@/components/LeadForm';
import InternetComparisonTable from '@/components/InternetComparisonTable';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, TrendingDown, Wifi, Clock } from 'lucide-react';

const LevnyInternet = () => {
  const canonicalUrl = "https://www.nejvyhodnejsipripojeni.cz/levny-internet";
  
  const levnyProviders = [
    {
      provider: "PODA",
      maxSpeed: "200 Mb/s",
      priceFrom: "399 Kč/měs",
      technology: "Optika",
      benefits: "Nejlevnější optika, bez závazku, instalace zdarma"
    },
    {
      provider: "O2",
      maxSpeed: "100 Mb/s",
      priceFrom: "449 Kč/měs",
      technology: "Optika/ADSL",
      benefits: "Celoplošné pokrytí, akční ceny"
    },
    {
      provider: "T-Mobile",
      maxSpeed: "150 Mb/s",
      priceFrom: "499 Kč/měs",
      technology: "5G/Optika",
      benefits: "Výhodné balíčky s mobilem"
    }
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Levný internet 2025 - Nejlepší nabídky od 399 Kč měsíčně",
    "description": "Kompletní průvodce levným internetem v České republice. Porovnání nejlevnějších tarifů, tipy jak ušetřit a kalkulačka úspor.",
    "image": "https://www.nejvyhodnejsipripojeni.cz/logo.svg",
    "author": {
      "@type": "Organization",
      "name": "Nejvýhodnější Připojení"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nejvýhodnější Připojení",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.nejvyhodnejsipripojeni.cz/logo.svg"
      }
    },
    "datePublished": "2025-10-15",
    "dateModified": "2025-10-15"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Jaký je nejlevnější internet v České republice?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nejlevnější internet v ČR nabízí PODA od 399 Kč měsíčně za 200 Mb/s optické připojení bez závazků. Další výhodné nabídky mají O2 a T-Mobile od 449 Kč."
        }
      },
      {
        "@type": "Question",
        "name": "Jak najít levný internet do domácnosti?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Využijte naši službu zdarma - vyplňte formulář a my porovnáme všechny dostupné nabídky ve vaší lokalitě. Najdeme vám nejlevnější variantu s nejlepším poměrem cena/výkon."
        }
      },
      {
        "@type": "Question",
        "name": "Dá se ušetřit změnou poskytovatele internetu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ano! Při změně poskytovatele můžete ušetřit průměrně 200-400 Kč měsíčně. Noví zákazníci často dostávají akční ceny, slevy na instalaci a další benefity."
        }
      },
      {
        "@type": "Question",
        "name": "Je levný internet dostatečně rychlý?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ano! Moderní levné tarify od 399 Kč nabízejí rychlosti 100-200 Mb/s, což je dostatečné pro streaming 4K, videohovory, online hry a práci z domova pro celou rodinu."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Domů",
        "item": "https://www.nejvyhodnejsipripojeni.cz"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Levný internet",
        "item": canonicalUrl
      }
    ]
  };

  return (
    <PageLayout
      pageTitle="Levný internet 2025 - Nejlepší nabídky od 399 Kč/měsíc | Porovnání"
      pageDescription="✅ Nejlevnější internet v ČR od 399 Kč/měsíc! Porovnáme všechny levné tarify a najdeme vám nejlepší nabídku zdarma. PODA, O2, T-Mobile - ušetřete až 400 Kč měsíčně!"
      pageType="article"
    >
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content="levný internet, nejlevnější internet, levné připojení, internet od 399 Kč, levný internet doma, levná optika, internet bez závazku, levný rychlý internet, ušetřit na internetu, levný internet 2025, výhodný internet, akční internet, levné tarify, internet za nejlepší cenu, nejlevnější poskytovatel" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Levný internet od 399 Kč/měsíc - Nejlepší nabídky 2025" />
        <meta property="og:description" content="Porovnáme všechny levné tarify a najdeme vám nejlepší nabídku zdarma. Ušetřete až 400 Kč měsíčně!" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        {/* Hero sekce */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            💰 Levný internet od 399 Kč/měsíc
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Najděme společně nejlevnější internet pro vaši domácnost. Porovnáme všechny nabídky a ušetříme vám až 400 Kč měsíčně!
          </p>
        </div>

        {/* Klíčové benefity */}
        <ScrollReveal>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <TrendingDown className="w-12 h-12 mx-auto mb-2 text-primary" />
                <CardTitle className="text-lg">Od 399 Kč</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Nejlevnější tarify na trhu</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Wifi className="w-12 h-12 mx-auto mb-2 text-primary" />
                <CardTitle className="text-lg">Rychlé připojení</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">100-200 Mb/s za skvělou cenu</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CheckCircle2 className="w-12 h-12 mx-auto mb-2 text-primary" />
                <CardTitle className="text-lg">Bez závazků</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Možnost zrušení kdykoliv</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Clock className="w-12 h-12 mx-auto mb-2 text-primary" />
                <CardTitle className="text-lg">Rychlé vyřízení</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Nabídky do 5 minut</p>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>

        {/* Porovnání nejlevnějších tarifů */}
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
              Nejlevnější tarify internetu 2025
            </h2>
            <InternetComparisonTable data={levnyProviders} />
          </div>
        </ScrollReveal>

        {/* Detailní obsah */}
        <ScrollReveal>
          <div className="prose prose-lg max-w-4xl mx-auto mb-12 text-foreground">
            <h2 className="text-foreground">Co je levný internet a jak ho najít?</h2>
            <p>
              Levný internet neznamená automaticky pomalé nebo nespolehlivé připojení. V roce 2025 díky masivnímu rozšíření optických sítí a konkurenci na trhu můžete získat <strong>vysokorychlostní internet za méně než 500 Kč měsíčně</strong>.
            </p>
            
            <h3 className="text-foreground">Jak najít nejlevnější internet ve vaší lokalitě?</h3>
            <ol>
              <li><strong>Vyplňte náš formulář</strong> - zadejte vaši adresu a požadavky</li>
              <li><strong>Porovnáme všechny dostupné nabídky</strong> - PODA, O2, T-Mobile, Vodafone a další</li>
              <li><strong>Najdeme nejlevnější variantu</strong> - s nejlepším poměrem cena/výkon</li>
              <li><strong>Vyřídíme vše za vás</strong> - od objednávky až po instalaci</li>
            </ol>

            <h3 className="text-foreground">TOP 3 nejlevnější poskytovatelé internetu</h3>
            
            <h4 className="text-foreground">1. PODA - od 399 Kč/měsíc</h4>
            <p>
              PODA nabízí <strong>nejlevnější optický internet v ČR</strong>. Za 399 Kč měsíčně získáte rychlost 200 Mb/s, což je dostatečné pro běžné domácnosti i práci z domova. Výhodou je také <strong>instalace zdarma a žádné závazky</strong>.
            </p>

            <h4 className="text-foreground">2. O2 - od 449 Kč/měsíc</h4>
            <p>
              O2 kombinuje optické připojení s tradiční ADSL technologií, což zajišťuje dostupnost prakticky všude. Často nabízí <strong>akční ceny pro nové zákazníky</strong> a výhodné balíčky s mobilními tarify.
            </p>

            <h4 className="text-foreground">3. T-Mobile - od 499 Kč/měsíc</h4>
            <p>
              T-Mobile vsadil na <strong>5G a optické připojení</strong>. Za 499 Kč získáte rychlost až 150 Mb/s. Výhodou jsou balíčky s mobilem, které mohou celkově výrazně snížit vaše měsíční náklady.
            </p>

            <h3 className="text-foreground">Jak ušetřit při výběru internetu?</h3>
            <ul>
              <li><strong>Změňte poskytovatele</strong> - noví zákazníci dostávají nejlepší ceny</li>
              <li><strong>Vyjednejte si slevu</strong> - při prodloužení smlouvy nebo více službách</li>
              <li><strong>Vyberte optimální rychlost</strong> - nepřeplácejte za gigabitové připojení, pokud nepotřebujete</li>
              <li><strong>Bez závazků</strong> - vyhnete se penalizacím a můžete kdykoli změnit</li>
              <li><strong>Sledujte akce</strong> - zejména v září a prosinci bývají nejlepší nabídky</li>
            </ul>

            <h3 className="text-foreground">Je levný internet dostatečně rychlý?</h3>
            <p>
              Ano! <strong>100-200 Mb/s je naprosto dostačující</strong> pro běžné domácnosti. Můžete:
            </p>
            <ul>
              <li>Streamovat 4K video na více zařízeních současně</li>
              <li>Hrát online hry bez lagů</li>
              <li>Pracovat z domova včetně videokonferencí</li>
              <li>Stahovat velké soubory v rozumném čase</li>
            </ul>

            <h3 className="text-foreground">Nejlevnější internet podle regionů</h3>
            <p>
              Ceny internetu se liší podle regionu. Nejvýhodnější nabídky najdete v:
            </p>
            <ul>
              <li><strong>Praha</strong> - nejširší výběr, ceny od 399 Kč</li>
              <li><strong>Brno</strong> - silná konkurence, od 420 Kč</li>
              <li><strong>Ostrava</strong> - PODA dominuje s nejlepšími cenami</li>
              <li><strong>Plzeň, Liberec, Olomouc</strong> - od 450 Kč</li>
            </ul>
          </div>
        </ScrollReveal>

        {/* FAQ sekce */}
        <ScrollReveal>
          <div className="mb-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
              Často kladené otázky o levném internetu
            </h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">{faq.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.acceptedAnswer.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Call to action */}
        <ScrollReveal>
          <div className="mb-12">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="py-8 text-center">
                <h2 className="text-3xl font-bold mb-4 text-foreground">
                  Získejte nejlevnější internet zdarma do 5 minut!
                </h2>
                <p className="text-xl mb-6 text-muted-foreground">
                  Vyplňte formulář a my najdeme nejlepší nabídku ve vaší lokalitě
                </p>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>

        {/* Formulář */}
        <ScrollReveal>
          <LeadForm />
        </ScrollReveal>
      </div>
    </PageLayout>
  );
};

export default LevnyInternet;