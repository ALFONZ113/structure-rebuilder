
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ServiceSchema = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Porovnanie poskytovateľov internetu",
    "description": "Bezplatné porovnanie všetkých poskytovateľov internetu v ČR. Pomáhame nájsť najvýhodnejšie internetové pripojenie pre vašu domácnosť.",
    "provider": {
      "@type": "Organization",
      "name": "Nejvýhodnější Připojení",
      "url": "https://www.nejvyhodnejsipripojeni.cz"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Česká republika"
    },
    "serviceType": "Internet Comparison Service",
    "category": "Telecommunications",
    "image": "https://www.nejvyhodnejsipripojeni.cz/logo.svg",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "CZK",
      "description": "Bezplatné porovnanie poskytovateľov internetu",
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "CZ",
        "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": 0,
          "currency": "CZK"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 0,
            "maxValue": 1,
            "unitCode": "DAY"
          }
        }
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Internet Providers Comparison",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Optické pripojenie",
            "description": "Najrýchlejšie internetové pripojenie cez optické káble"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "ADSL pripojenie",
            "description": "Klasické internetové pripojenie cez telefónnu linku"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bezdrôtové pripojenie",
            "description": "Internetové pripojenie bez nutnosti káblov"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </Helmet>
  );
};

export default ServiceSchema;
