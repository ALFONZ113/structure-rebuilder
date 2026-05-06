import React from 'react';
import { Helmet } from 'react-helmet-async';

const OstravaLocalSchema = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Nejvýhodnější Připojení - Ostrava",
    "description": "Nezávislé porovnání poskytovatelů internetu v Ostravě. Pomáháme najít nejlepší internetové připojení od PODA, O2, T-Mobile a dalších.",
    "url": "https://www.nejvyhodnejsipripojeni.cz/nejlepsi-internet-ostrava",
    "telephone": "+420776370406",
    "priceRange": "340 Kč - 520 Kč",
    "areaServed": {
      "@type": "City",
      "name": "Ostrava",
      "containedInPlace": {
        "@type": "Country",
        "name": "Česká republika"
      }
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "49.8209",
      "longitude": "18.2625"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "143",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Který poskytovatel je nejlepší v Ostravě?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "V Ostravě je nejlepší PODA díky vlastní optické síti, nejvyšším rychlostem až 2 Gb/s a nejnižším cenám od 340 Kč. PODA má v Ostravě nejsilnější pokrytí a nejlepší hodnocení zákazníků."
        }
      },
      {
        "@type": "Question",
        "name": "Kolik stojí internet v Ostravě?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ceny internetu v Ostravě začínají od 340 Kč měsíčně (PODA 300 Mb/s). Nejrychlejší tarif 2 Gb/s stojí 520 Kč. O2 začíná na 399 Kč, T-Mobile také 399 Kč a Vodafone od 459 Kč."
        }
      },
      {
        "@type": "Question",
        "name": "Je v Ostravě Porubě dostupná PODA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ano, PODA má v Ostravě-Porubě velmi dobré pokrytí optickou sítí. Nabízí zde rychlosti až 2000 Mb/s. Přesnou dostupnost na vaší adrese ověříme zdarma."
        }
      },
      {
        "@type": "Question",
        "name": "Jaká je nejrychlejší rychlost internetu v Ostravě?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nejrychlejší internet v Ostravě nabízí PODA s rychlostí až 2000 Mb/s (2 Gb/s) na optické síti. O2 a Vodafone nabízí maximálně 1 Gb/s, T-Mobile až 500 Mb/s."
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

export default OstravaLocalSchema;
