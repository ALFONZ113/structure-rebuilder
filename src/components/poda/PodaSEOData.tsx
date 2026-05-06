
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface PodaSEODataProps {
  canonicalUrl: string;
}

const PodaSEOData = ({ canonicalUrl }: PodaSEODataProps) => {
  // Review structured data - Fixed itemReviewed type
  const reviewStructuredData = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Product",
      "name": "PODA Internet",
      "description": "Optické internetové pripojenie až 2 Gb/s od 250 Kč mesačne",
    "brand": {
      "@type": "Brand",
      "name": "PODA a.s."
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://www.nejvyhodnejsipripojeni.cz/logo.svg"
    },
    "offers": {
      "@type": "Offer",
      "price": "250",
      "priceCurrency": "CZK",
      "availability": "https://schema.org/InStock",
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "CZ",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 14
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
            "minValue": 5,
            "maxValue": 10,
            "unitCode": "DAY"
          }
        }
      }
    }
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.5",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Person",
      "name": "Jan Novák"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nejvýhodnější Připojení",
      "url": "https://www.nejvyhodnejsipripojeni.cz",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.nejvyhodnejsipripojeni.cz/logo.svg"
      }
    },
    "datePublished": "2025-07-10",
    "reviewBody": "PODA nabízí rychlé optické připojení až 2 Gb/s za příznivé ceny od 250 Kč a bez závazku. Ideální volba pro domácnosti hledající kvalitní internet."
  };

  // Enhanced Product Schema for better SERP display
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "PODA Internet",
    "description": "Optické internetové pripojenie až 2 Gb/s od 250 Kč mesačne",
    "brand": {
      "@type": "Brand",
      "name": "PODA a.s."
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://www.nejvyhodnejsipripojeni.cz/logo.svg"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "27",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Jan Novák"
        },
        "datePublished": "2025-07-10",
        "description": "Vynikajúca rýchlosť internetu, stabilné pripojenie",
        "name": "Spokojný zákazník PODA",
        "reviewRating": {
          "@type": "Rating",
          "bestRating": "5",
          "ratingValue": "5",
          "worstRating": "1"
        }
      }
    ],
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "250",
      "highPrice": "999",
      "priceCurrency": "CZK",
      "offerCount": "5",
      "availability": "https://schema.org/InStock",
      "url": "https://www.poda.cz",
      "priceValidUntil": "2026-12-31",
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "CZ",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 14
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
            "minValue": 5,
            "maxValue": 10,
            "unitCode": "DAY"
          }
        }
      }
    },
    "category": "Internet Service Provider",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Maximálna rýchlosť",
        "value": "2000 Mb/s"
      },
      {
        "@type": "PropertyValue", 
        "name": "Typ pripojenia",
        "value": "Optické vlákno"
      },
      {
        "@type": "PropertyValue",
        "name": "Smluvná viazanosť",
        "value": "Nie"
      }
    ]
  };

  // BreadcrumbList structured data
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Hlavní stránka",
        "item": "https://www.nejvyhodnejsipripojeni.cz/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Poskytovatelé internetu",
        "item": "https://www.nejvyhodnejsipripojeni.cz/poskytovatele-internetu"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "PODA internet recenze",
        "item": canonicalUrl
      }
    ]
  };

  // HowTo Schema for better featured snippets
  const howToStructuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Ako si objednať PODA internet",
    "description": "Krok za krokom návod na objednanie PODA internetového pripojenia",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Overenie dostupnosti",
        "text": "Zadajte adresu na poda.cz a overte si dostupnosť pripojenia vo vašej lokalite"
      },
      {
        "@type": "HowToStep", 
        "name": "Výber tarifu",
        "text": "Vyberte si rýchlosť pripojenia: 300 Mb/s (250 Kč), 1000 Mb/s (440 Kč) alebo 2000 Mb/s (520 Kč)"
      },
      {
        "@type": "HowToStep",
        "name": "Objednanie",
        "text": "Vyplňte objednávkový formulár a zvoľte termín inštalácie"
      },
      {
        "@type": "HowToStep",
        "name": "Inštalácia",
        "text": "Technik príde k vám domov a nainštaluje optické pripojenie zadarmo"
      }
    ]
  };

  return (
    <Helmet>
      <title>🔥 PODA Internet Ostrava 2026: Leden - Od 250 Kč | Optika až 2 Gb/s | Kompletní průvodce ✅</title>
      <meta name="description" content="✅ PODA internet Ostrava Leden 2026. Ceny od 250 Kč, optické připojení až 2 Gb/s. PODA Ostrava, Havířov, Karviná. Bez závazku! Kompletní recenze a srovnání PODA." />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="keywords" content="PODA, PODA internet, PODA Ostrava, internet PODA, PODA připojení, PODA internet Ostrava, PODA tarify, PODA Havířov, PODA Karviná, PODA Poruba, PODA Bohumín, internet Ostrava, poda internet ostrava, rychlý internet, levný internet PODA, stabilní internet, gigabitový internet PODA, změna poskytovatele internetu, PODA ceny 2026, PODA recenze, optické připojení PODA, nejlepší internet, PODA a.s." />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content="🔥 PODA Internet Ostrava 2026: Leden - Od 250 Kč | Optika až 2 Gb/s" />
      <meta property="og:description" content="✅ PODA internet Ostrava Leden 2026. Ceny od 250 Kč, optické připojení až 2 Gb/s. PODA Ostrava, Havířov, Karviná. Bez závazku!" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="article" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="🔥 PODA Internet Ostrava 2026: Leden - Od 250 Kč | Optika až 2 Gb/s" />
      <meta name="twitter:description" content="✅ PODA internet Ostrava Leden 2026. Ceny od 250 Kč, optické připojení až 2 Gb/s. PODA Ostrava, Havířov, Karviná. Bez závazku!" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(reviewStructuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(productStructuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbStructuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(howToStructuredData)}
      </script>
    </Helmet>
  );
};

export default PodaSEOData;
