import { ReactNode } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import PerformanceOptimizer from '@/components/optimization/PerformanceOptimizer';
import CriticalCSS from '@/components/ui/CriticalCSS';

interface PageLayoutProps {
  children: ReactNode;
  pageTitle?: string;
  pageDescription?: string;
  pageType?: "website" | "article";
  publishDate?: string;
  modifiedDate?: string;
  imageUrl?: string;
  geoRegion?: string;
}

const PageLayout = ({ 
  children, 
  pageTitle, 
  pageDescription,
  pageType = "website",
  publishDate,
  modifiedDate,
  imageUrl,
  geoRegion = "CZ" 
}: PageLayoutProps) => {
  const currentPath = window.location.pathname;
  const normalizedPath = currentPath === '/' ? currentPath : currentPath.replace(/\/$/, '');
  const canonicalUrl = `https://www.nejvyhodnejsipripojeni.cz${normalizedPath}`;
  const defaultImageUrl = "https://www.nejvyhodnejsipripojeni.cz/logo.svg";
  
  // Single consolidated WebSite schema (only on homepage)
  const websiteSchema = currentPath === '/' ? {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Nejvýhodnější Připojení",
    "alternateName": "Nejlepší Poskytovatel Internetu",
    "url": "https://www.nejvyhodnejsipripojeni.cz/",
    "description": "Porovnáváme celý český trh poskytovatelů internetu za vás. Do 24h máte nejlepší nabídky zdarma.",
    "inLanguage": "cs-CZ",
    "publisher": {
      "@type": "Organization",
      "name": "Nejvýhodnější Připojení",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.nejvyhodnejsipripojeni.cz/logo.svg"
      }
    }
  } : null;

  const organizationSchema = currentPath === '/' ? {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nejvýhodnější Připojení",
    "url": "https://www.nejvyhodnejsipripojeni.cz/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.nejvyhodnejsipripojeni.cz/logo.svg",
      "width": "200",
      "height": "60"
    },
    "description": "Porovnáváme celý český trh poskytovatelů internetu za vás.",
    "foundingDate": "2023",
    "areaServed": { "@type": "Country", "name": "Česká republika" },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+420776370406",
      "contactType": "customer service",
      "availableLanguage": ["Czech", "Slovak"]
    },
    "address": { "@type": "PostalAddress", "addressCountry": "CZ" }
  } : null;

  let articleSchema = null;
  if (pageType === "article" && publishDate) {
    articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": pageTitle || "Nejvýhodnější Připojení",
      "image": imageUrl || defaultImageUrl,
      "datePublished": publishDate,
      "dateModified": modifiedDate || publishDate,
      "author": { "@type": "Organization", "name": "Nejvýhodnější Připojení" },
      "publisher": {
        "@type": "Organization",
        "name": "Nejvýhodnější Připojení",
        "logo": { "@type": "ImageObject", "url": "https://www.nejvyhodnejsipripojeni.cz/logo.svg" }
      },
      "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl }
    };
  }

  const defaultTitle = currentPath === '/' ? 
    "Porovnání internetu ČR 2026 | Najdeme vám nejvýhodnější zdarma" : pageTitle;
  const defaultDescription = currentPath === '/' ? 
    "Porovnáváme celý český trh poskytovatelů internetu za vás. Vyplňte formulář a do 24h máte nejlepší nabídky. ✓ 100% zdarma ✓ Bez závazků" : pageDescription;
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <CriticalCSS />
      <PerformanceOptimizer />
      
      <Helmet>
        <title>{defaultTitle || "Nejvýhodnější Připojení"}</title>
        <meta name="description" content={defaultDescription || "Porovnáváme nabídky všech poskytovatelů internetu v České republice."} />
        <link rel="canonical" href={canonicalUrl} />
        
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="seznam-wmt" content="HpOdsBx9Q1kW5SEsmnlgnk0uBY1ZEKZC" />
        
        <meta property="og:title" content={defaultTitle || "Nejvýhodnější Připojení"} />
        <meta property="og:description" content={defaultDescription || "Porovnáváme nabídky všech poskytovatelů internetu v České republice."} />
        <meta property="og:type" content={pageType} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={imageUrl || defaultImageUrl} />
        <meta property="og:locale" content="cs_CZ" />
        <meta property="og:site_name" content="Nejvýhodnější Připojení" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={defaultTitle || "Nejvýhodnější Připojení"} />
        <meta name="twitter:description" content={defaultDescription || "Porovnáváme nabídky všech poskytovatelů internetu v České republice."} />
        <meta name="twitter:image" content={imageUrl || defaultImageUrl} />
        
        <meta name="geo.region" content={geoRegion === "CZ" ? "CZ" : geoRegion} />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        
        {websiteSchema && (
          <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
        )}
        {organizationSchema && (
          <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        )}
        {articleSchema && (
          <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        )}
      </Helmet>
      
      <Navigation />
      
      <main className="flex-1 pt-20">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default PageLayout;
