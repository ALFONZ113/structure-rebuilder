
import React from 'react';

interface BlogArticleSchemaProps {
  title: string;
  metaDescription: string;
  publishDate: string;
  author: string;
  heroImage: string;
  keywords: string[];
}

const BlogArticleSchema: React.FC<BlogArticleSchemaProps> = ({
  title,
  metaDescription,
  publishDate,
  author,
  heroImage,
  keywords
}) => {
  // Create schema for the blog article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "image": heroImage,
    "datePublished": publishDate,
    "dateModified": publishDate,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nejvýhodnější Připojení",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.nejvyhodnejsipripojeni.cz/logo.svg"
      }
    },
    "description": metaDescription,
    "keywords": keywords.join(", "),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": typeof window !== 'undefined' ? window.location.href : "https://www.nejvyhodnejsipripojeni.cz"
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(articleSchema)}
    </script>
  );
};

export default BlogArticleSchema;
