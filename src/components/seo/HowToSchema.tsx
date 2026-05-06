
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: Array<{
    name: string;
    text: string;
    url?: string;
  }>;
  totalTime?: string;
  estimatedCost?: string;
  difficulty?: string;
  supply?: string[];
}

const HowToSchema: React.FC<HowToSchemaProps> = ({
  name,
  description,
  steps,
  totalTime,
  estimatedCost,
  difficulty,
  supply
}) => {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "totalTime": totalTime,
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "CZK",
      "value": estimatedCost
    },
    "difficulty": difficulty || "Beginner",
    "supply": supply?.map(item => ({
      "@type": "HowToSupply",
      "name": item
    })) || [],
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "url": step.url,
      "image": step.url ? {
        "@type": "ImageObject",
        "url": step.url
      } : undefined
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(howToSchema)}
      </script>
    </Helmet>
  );
};

export default HowToSchema;
