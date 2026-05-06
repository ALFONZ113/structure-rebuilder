
import React from 'react';
import { Helmet } from 'react-helmet-async';

const LocalBusinessSchema = () => {
  // LocalBusiness Schema for structured data
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Nejvýhodnější Připojení",
    "image": "https://www.nejvyhodnejsipripojeni.cz/logo.svg",
    "url": "https://www.nejvyhodnejsipripojeni.cz",
    "telephone": "+420776370406",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nová 123",
      "addressLocality": "Praha",
      "postalCode": "110 00",
      "addressCountry": "CZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.0755",
      "longitude": "14.4378"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};

export default LocalBusinessSchema;
