import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import LeadForm from '@/components/LeadForm';
import InternetComparisonTable from '@/components/InternetComparisonTable';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Cable, Wifi, Radio, Smartphone, CheckCircle2, Clock } from 'lucide-react';

const PripojeniInternetu = () => {
  const canonicalUrl = "https://www.nejvyhodnejsipripojeni.cz/pripojeni-internetu";
  
  const pripojeniProviders = [
    {
      provider: "PODA",
      maxSpeed: "2000 Mb/s",
      priceFrom: "799 Kč/měs",
      technology: "Optika FTTH",
      benefits: "Nejrychlejší připojení, 99.9% dostupnost"
    },
    {
      provider: "O2",
      maxSpeed: "1000 Mb/s",
      priceFrom: "699 Kč/měs",
      technology: "Optika",
      benefits: "Celorepublikové pokrytí, rychlá instalace"
    },
    {
      provider: "T-Mobile",
      maxSpeed: "500 Mb/s",
      priceFrom: "599 Kč/měs",
      technology: "5G Internet",
      benefits: "Bez nutnosti kabeláže, mobilita"
    },
    {
      provider: "Vodafone",
      maxSpeed: "1000 Mb/s",
      priceFrom: "649 Kč/měs",
      technology: "Optika/5G",
      benefits: "Flexibilní balíčky s mobilem"
    }
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Připojení internetu 2025 - Kompletní průvodce všemi typy připojení",
    "description": "Vše o připojení internetu do domácnosti. Optika, ADSL, 5G, satelit - porovnání technologií, ceny, rychlosti instalace a dostupnost v ČR.",
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

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Jak si objednat připojení internetu",
    "description": "Jednoduchý průvodce objednáním internetového připojení krok za krokem",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Zkontrolujte dostupnost",
        "text": "Zadejte vaši adresu a zjistěte, jaké typy připojení jsou ve vaší lokalitě dostupné"
      },
      {
        "@type": "HowToStep",
        "name": "Porovnejte nabídky",
        "text": "Porovnáme všechny dostupné poskytovatele a najdeme nejlepší nabídku pro vaše potřeby"
      },
      {
        "@type": "HowToStep",
        "name": "Objednejte online",
        "text": "Vyplníte jednoduchý formulář a my vyřídíme objednávku u vybraného poskytovatele"
      },
      {
        "@type": "HowToStep",
        "name": "Domluva termínu instalace",
        "text": "Poskytovatel vás kontaktuje a domluví vhodný termín instalace, obvykle do 7-14 dnů"
      },
      {
        "@type": "HowToStep",
        "name": "Instalace a aktivace",
        "text": "Technik nainstaluje potřebné zařízení a aktivuje vaše nové připojení"
      }
    ],
    "totalTime": "PT7D"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Jak dlouho trvá připojení internetu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Připojení internetu obvykle trvá 7-14 dnů od objednávky. U optických připojení může být nutná instalace kabeláže, která může trvat až 4 týdny. 5G internet lze aktivovat během 1-3 dnů."
        }
      },
      {
        "@type": "Question",
        "name": "Jaké typy připojení internetu existují?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hlavní typy jsou: 1) Optické připojení (FTTH) - nejrychlejší až 2000 Mb/s, 2) ADSL/VDSL - přes telefonní linku do 100 Mb/s, 3) 5G internet - bezdrátové do 500 Mb/s, 4) Kabelové - přes TV kabel do 500 Mb/s, 5) Satelitní - všude dostupné do 150 Mb/s."
        }
      },
      {
        "@type": "Question",
        "name": "Kolik stojí instalace internetového připojení?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Instalace je často zdarma nebo za symbolickou částku 1-500 Kč při uzavření smlouvy na 12-24 měsíců. Standardní cena instalace bez závazku je 1000-3000 Kč podle typu technologie."
        }
      },
      {
        "@type": "Question",
        "name": "Které připojení internetu je nejlepší?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nejlepší je optické připojení (FTTH) - nabízí nejvyšší rychlosti, nejnižší odezvu a nejvyšší spolehlivost. Pokud optika není dostupná, doporučujeme 5G internet nebo VDSL. Každý typ má své výhody podle vaší lokality a potřeb."
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
        "name": "Připojení internetu",
        "item": canonicalUrl
      }
    ]
  };

  return (
    <PageLayout
      pageTitle="Připojení internetu 2025 - Kompletní průvodce | Optika, 5G, ADSL"
      pageDescription="✅ Vše o připojení internetu do domácnosti! Porovnání všech technologií (optika, 5G, ADSL), ceny, rychlost instalace. Najdeme nejlepší připojení ve vaší lokalitě zdarma."
      pageType="article"
    >
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content="připojení internetu, internet do domácnosti, jak připojit internet, optické připojení, 5G internet, ADSL připojení, instalace internetu, objednání internetu, připojení k internetu, internet domů, internetové připojení, rychlé připojení, dostupnost internetu, typy připojení, připojení internetu cena" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Připojení internetu 2025 - Kompletní průvodce všemi typy" />
        <meta property="og:description" content="Vše o připojení internetu: optika, 5G, ADSL. Porovnání technologií, ceny a rychlost instalace. Najdeme nejlepší řešení zdarma!" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(howToSchema)}
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
            🌐 Připojení internetu do domácnosti 2025
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Komplexní průvodce všemi typy internetového připojení. Najdeme nejlepší řešení pro vaši lokalitu a potřeby!
          </p>
        </div>

        {/* Typy připojení */}
        <ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Cable className="w-12 h-12 mx-auto mb-2 text-primary" />
                <CardTitle className="text-lg">Optické připojení</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">Nejrychlejší a nejspolehlivější</p>
                <p className="font-bold text-foreground">Až 2000 Mb/s</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Smartphone className="w-12 h-12 mx-auto mb-2 text-primary" />
                <CardTitle className="text-lg">5G Internet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">Bez nutnosti kabeláže</p>
                <p className="font-bold text-foreground">Až 500 Mb/s</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Radio className="w-12 h-12 mx-auto mb-2 text-primary" />
                <CardTitle className="text-lg">ADSL/VDSL</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">Dostupné téměř všude</p>
                <p className="font-bold text-foreground">Až 100 Mb/s</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Wifi className="w-12 h-12 mx-auto mb-2 text-primary" />
                <CardTitle className="text-lg">Bezdrátový</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">Rychlá instalace</p>
                <p className="font-bold text-foreground">Až 300 Mb/s</p>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>

        {/* Porovnání poskytovatelů */}
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
              Nejlepší poskytovatelé internetového připojení
            </h2>
            <InternetComparisonTable data={pripojeniProviders} />
          </div>
        </ScrollReveal>

        {/* Jak si objednat - krok za krokem */}
        <ScrollReveal>
          <div className="mb-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
              Jak si objednat připojení internetu - krok za krokem
            </h2>
            <div className="space-y-4">
              {howToSchema.step.map((step, index) => (
                <Card key={index} className="flex items-start gap-4 p-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2 text-foreground">{step.name}</h3>
                    <p className="text-muted-foreground">{step.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Detailní obsah */}
        <ScrollReveal>
          <div className="prose prose-lg max-w-4xl mx-auto mb-12 text-foreground">
            <h2 className="text-foreground">Typy internetového připojení - kompletní přehled</h2>
            
            <h3 className="text-foreground">1. Optické připojení (FTTH) - nejvyšší rychlost</h3>
            <p>
              <strong>Optické připojení</strong> je nejmodernější a nejrychlejší typ internetového připojení. Využívá optická vlákna, která dokážou přenášet data rychlostí až <strong>2000 Mb/s</strong> (2 Gb/s).
            </p>
            <p><strong>Výhody optického připojení:</strong></p>
            <ul>
              <li>Nejvyšší rychlosti - až 2 Gb/s symetrické</li>
              <li>Nejnižší odezva (ping) - ideální pro online hry</li>
              <li>Vysoká spolehlivost a stabilita</li>
              <li>Neomezená kapacita pro budoucnost</li>
              <li>Imunní vůči elektromagnetickému rušení</li>
            </ul>
            <p><strong>Nevýhody:</strong></p>
            <ul>
              <li>Nutná fyzická kabeláž (pokud ještě není dostupná)</li>
              <li>Instalace může trvat déle (2-4 týdny)</li>
              <li>Není dostupné všude (zejména venkov)</li>
            </ul>
            <p><strong>Cena:</strong> 399-799 Kč/měsíc | <strong>Instalace:</strong> Často zdarma</p>

            <h3 className="text-foreground">2. 5G Internet - moderní bezdrátové připojení</h3>
            <p>
              <strong>5G internet</strong> je nová generace bezdrátového připojení, která nabízí vysoké rychlosti bez nutnosti kabeláže. Stačí router s 5G modemem a dostupný signál.
            </p>
            <p><strong>Výhody 5G internetu:</strong></p>
            <ul>
              <li>Rychlá instalace - během 1-3 dnů</li>
              <li>Bez nutnosti kabeláže</li>
              <li>Mobilita - lze přenášet</li>
              <li>Rychlosti až 500 Mb/s</li>
              <li>Rozvíjející se pokrytí</li>
            </ul>
            <p><strong>Nevýhody:</strong></p>
            <ul>
              <li>Závisí na kvalitě signálu</li>
              <li>Může mít nestabilní rychlost</li>
              <li>Datové limity u některých tarifů</li>
            </ul>
            <p><strong>Cena:</strong> 499-699 Kč/měsíc | <strong>Instalace:</strong> Zdarma</p>

            <h3 className="text-foreground">3. ADSL/VDSL - tradiční připojení přes telefonní linku</h3>
            <p>
              <strong>ADSL a VDSL</strong> využívají existující telefonní linky. VDSL je modernější varianta s vyššími rychlostmi.
            </p>
            <p><strong>Výhody ADSL/VDSL:</strong></p>
            <ul>
              <li>Dostupné téměř všude</li>
              <li>Rychlá instalace</li>
              <li>Spolehlivá technologie</li>
              <li>Nízká cena</li>
            </ul>
            <p><strong>Nevýhody:</strong></p>
            <ul>
              <li>Nižší rychlosti (max 100 Mb/s u VDSL)</li>
              <li>Rychlost klesá se vzdáleností od ústředny</li>
              <li>Asymetrické připojení (pomalý upload)</li>
            </ul>
            <p><strong>Cena:</strong> 349-549 Kč/měsíc | <strong>Instalace:</strong> 500-1000 Kč</p>

            <h3 className="text-foreground">4. Kabelový internet - přes TV kabel</h3>
            <p>
              Využívá infrastrukturu kabelové televize pro poskytování internetu.
            </p>
            <p><strong>Rychlost:</strong> Až 500 Mb/s | <strong>Cena:</strong> 449-649 Kč/měsíc</p>

            <h3 className="text-foreground">5. Satelitní internet - všude dostupný</h3>
            <p>
              Ideální pro odlehlé lokality, kde není dostupné jiné připojení.
            </p>
            <p><strong>Rychlost:</strong> Až 150 Mb/s | <strong>Cena:</strong> 699-999 Kč/měsíc</p>

            <h2 className="text-foreground">Jak vybrat správné připojení?</h2>
            <ol>
              <li><strong>Zjistěte dostupnost</strong> - ne všechny technologie jsou dostupné všude</li>
              <li><strong>Určete potřebnou rychlost</strong> - kolik zařízení bude připojeno</li>
              <li><strong>Porovnejte ceny</strong> - nejen měsíční poplatek, ale i instalaci</li>
              <li><strong>Zkontrolujte recenze</strong> - spolehlivost poskytovatele je klíčová</li>
              <li><strong>Nechte si poradit</strong> - vyplňte náš formulář a my najdeme nejlepší řešení</li>
            </ol>

            <h2 className="text-foreground">Doporučené rychlosti podle použití</h2>
            <ul>
              <li><strong>25-50 Mb/s</strong> - prohlížení webu, email, streaming HD</li>
              <li><strong>50-100 Mb/s</strong> - práce z domova, streaming 4K, online hry</li>
              <li><strong>100-300 Mb/s</strong> - více zařízení, 4K streaming, velké soubory</li>
              <li><strong>300+ Mb/s</strong> - domácí server, profesionální práce, streamování</li>
            </ul>
          </div>
        </ScrollReveal>

        {/* FAQ sekce */}
        <ScrollReveal>
          <div className="mb-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
              Často kladené otázky o připojení internetu
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
                  Najdeme nejlepší připojení pro vaši domácnost!
                </h2>
                <p className="text-xl mb-2 text-muted-foreground">
                  Vyplňte formulář a my zjistíme dostupnost všech technologií ve vaší lokalitě
                </p>
                <p className="text-lg text-muted-foreground">
                  ⏱️ Odpovíme do 5 minut | 💰 Služba zdarma | ✅ Vyřídíme vše za vás
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

export default PripojeniInternetu;