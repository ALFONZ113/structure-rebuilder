
import React from 'react';
import { Helmet } from 'react-helmet-async';

const FaqSchema = () => {
  // Organization schema for better brand recognition
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nejvýhodnější Připojení",
    "url": "https://www.nejvyhodnejsipripojeni.cz",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.nejvyhodnejsipripojeni.cz/logo.svg"
    },
    "description": "Bezplatné porovnanie poskytovateľov internetu v České republice",
    "foundingDate": "2024",
    "areaServed": "CZ",
    "serviceType": "Internet Service Provider Comparison"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default FaqSchema;
