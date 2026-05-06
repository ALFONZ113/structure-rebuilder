import React from 'react';
import { Helmet } from 'react-helmet-async';

interface AggregateRatingSchemaProps {
  itemName: string;
  ratingValue: string;
  ratingCount: string;
  bestRating?: string;
  worstRating?: string;
}

const AggregateRatingSchema: React.FC<AggregateRatingSchemaProps> = ({
  itemName,
  ratingValue,
  ratingCount,
  bestRating = "5",
  worstRating = "1"
}) => {
  const ratingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": itemName,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "ratingCount": ratingCount,
      "bestRating": bestRating,
      "worstRating": worstRating
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(ratingSchema)}
      </script>
    </Helmet>
  );
};

export default AggregateRatingSchema;
