import React from 'react';
import { Helmet } from 'react-helmet-async';

const ChatBotSchema = () => {
  const chatbotSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Internetový poradce AI",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "CZK"
    },
    "description": "AI chatbot pro poradenství o internetovém připojení. Pomáhá najít nejlepšího poskytovatele internetu podle vašich potřeb.",
    "operatingSystem": "Web Browser",
    "softwareVersion": "1.0",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "152",
      "bestRating": "5",
      "worstRating": "1"
    },
    "creator": {
      "@type": "Organization",
      "name": "Nejvýhodnější Připojení"
    },
    "featureList": [
      "Poradenství o internetovém připojení",
      "Srovnání poskytovatelů",
      "Doporučení podle lokality",
      "Výpočet potřebné rychlosti",
      "24/7 dostupnost"
    ],
    "screenshot": "https://www.nejvyhodnejsipripojeni.cz/og-image.jpg"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(chatbotSchema)}
      </script>
    </Helmet>
  );
};

export default ChatBotSchema;
