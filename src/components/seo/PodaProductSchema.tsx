import React from 'react';
import { Helmet } from 'react-helmet-async';

const PodaProductSchema = () => {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "PODA Internet",
    "description": "Vysokorychlostní optický internet až 2 Gb/s od PODA. Dostupný v Ostravě, Brně, Praze a dalších městech. Bez závazku, ceny od 250 Kč měsíčně.",
    "brand": {
      "@type": "Brand",
      "name": "PODA"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "250",
      "highPrice": "520",
      "priceCurrency": "CZK",
      "availability": "https://schema.org/InStock",
      "url": "https://www.nejvyhodnejsipripojeni.cz/poskytovatele-internetu/poda-internet-recenze",
      "priceValidUntil": "2025-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "287",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Jan Novák"
        },
        "datePublished": "2025-10-15",
        "reviewBody": "Výborná rychlost a stabilita. PODA v Ostravě funguje perfektně, doporučuji."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Marie Svobodová"
        },
        "datePublished": "2025-10-20",
        "reviewBody": "Dobrá cena a rychlost. Instalace proběhla hladce, jen podpora mohla být rychlejší."
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Kolik stojí PODA internet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PODA internet stojí od 250 Kč měsíčně za rychlost 80 Mb/s až po 520 Kč za maximální rychlost 2000 Mb/s. Všechny tarify jsou bez závazku a aktivačního poplatku."
        }
      },
      {
        "@type": "Question",
        "name": "Kde je dostupný PODA internet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PODA internet je dostupný primárně v Ostravě, Havířově, Karviné, Brně a vybraných částech Prahy. Pokrytí neustále rozšiřují. Dostupnost ověříte na jejich webu nebo kontaktujte naši bezplatnou poradenskou službu."
        }
      },
      {
        "@type": "Question",
        "name": "Jaká je maximální rychlost PODA internetu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Maximální rychlost PODA optického internetu je 2000 Mb/s (2 Gb/s) pro stahování i odesílání dat. Pro bezdrátové připojení nabízí rychlost až 80 Mb/s."
        }
      },
      {
        "@type": "Question",
        "name": "Je PODA internet lepší než O2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PODA nabízí v Ostravě vyšší maximální rychlost (2 Gb/s vs 1 Gb/s) a nižší ceny než O2. PODA také nemá závazek, zatímco O2 často vyžaduje 12-24měsíční smlouvu. O2 má však širší celostátní pokrytí."
        }
      },
      {
        "@type": "Question",
        "name": "Má PODA internet televizní služby?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ano, PODA nabízí PODA net.TV s více než 160 kanály včetně HD a dalších funkcí jako nahrávání pořadů, archiv, time-shift a multiscreen pro sledování na více zařízeních."
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

export default PodaProductSchema;
