import React from 'react';
import { Helmet } from 'react-helmet-async';

const AdvancedSEOSchemas = () => {
  // FAQ Schema - in Czech, not Slovak
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Jak najít nejlepší internet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nejlepší internet najdete porovnáním všech poskytovatelů ve vaší lokalitě. Vyplňte náš formulář a dostanete personalizovaná doporučení od O2, T-Mobile, PODA, Vodafone a dalších."
        }
      },
      {
        "@type": "Question",
        "name": "Jak najít nejlevnější internet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nejlevnější internet od 250 Kč/měsíc nabízí lokální poskytovatelé jako PODA. Velcí operátoři (O2, T-Mobile, Vodafone) začínají od 499 Kč. Porovnáme vám všechny nabídky zdarma."
        }
      },
      {
        "@type": "Question",
        "name": "Jak změnit poskytovatele internetu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Změna poskytovatele je jednoduchá - stačí si vybrat nového operátora, ten za vás vyřídí výpověď původní smlouvy. Celý proces trvá 5-10 pracovních dní a my vám s tím pomůžeme zdarma."
        }
      },
      {
        "@type": "Question",
        "name": "Který operátor má nejlepší internet v ČR?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Záleží na lokalitě. PODA vyniká cenou a rychlostí v Moravskoslezském kraji. O2 má nejširší VDSL pokrytí. T-Mobile vede v 5G. Vodafone nabízí výhodné kombi balíčky. Porovnáme vám je zdarma."
        }
      },
      {
        "@type": "Question",
        "name": "Jak vybrat ten nejlepší internet na doma?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nejlepší internet na doma závisí na vaší lokalitě, počtu členů domácnosti a způsobu využití. Pro běžné surfování stačí 50 Mb/s, pro streaming a práci z domova doporučujeme 100–300 Mb/s. Vyplňte náš formulář a porovnáme všechny dostupné nabídky zdarma."
        }
      },
      {
        "@type": "Question",
        "name": "Kde najdu nejlevnější pevný internet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nejlevnější pevný internet nabízejí lokální poskytovatelé jako PODA od 250 Kč/měsíc. Velcí operátoři O2, T-Mobile a Vodafone začínají od 399–499 Kč. Porovnáme vám všechny nabídky a najdeme tu nejvýhodnější."
        }
      },
      {
        "@type": "Question",
        "name": "Jak rychle probíhá nové internetové připojení?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Celý proces trvá obvykle 5–10 pracovních dní. Po vyplnění formuláře vás kontaktujeme do 24 hodin s nejlepší nabídkou. Nový poskytovatel zajistí instalaci a případně za vás vyřídí výpověď původní smlouvy."
        }
      }
    ]
  };

  // How-to Schema - in Czech
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Jak změnit poskytovatele internetu v ČR",
    "description": "Krok za krokem návod na změnu poskytovatele internetového připojení",
    "totalTime": "PT15M",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Porovnejte nabídky",
        "text": "Porovnejte všechny poskytovatele ve vaší lokalitě a vyberte nejvýhodnější nabídku"
      },
      {
        "@type": "HowToStep",
        "name": "Objednejte nové připojení",
        "text": "Objednejte si nové připojení u vybraného poskytovatele"
      },
      {
        "@type": "HowToStep",
        "name": "Výpověď původní smlouvy",
        "text": "Nový poskytovatel za vás vyřídí výpověď původní smlouvy"
      },
      {
        "@type": "HowToStep",
        "name": "Aktivace nového připojení",
        "text": "Technik nainstaluje nové připojení a aktivuje služby"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(howToSchema)}
      </script>
    </Helmet>
  );
};

export default AdvancedSEOSchemas;
