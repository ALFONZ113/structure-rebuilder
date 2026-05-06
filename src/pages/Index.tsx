import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import InternetBenefits from '@/components/InternetBenefits';
import WhyChooseUs from '@/components/WhyChooseUs';
import LeadForm from '@/components/LeadForm';
import PageLayout from '@/components/PageLayout';
import HomepageFAQ from '@/components/HomepageFAQ';

import MobileIntroPage from '@/components/MobileIntroPage';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  const [showMobileIntro, setShowMobileIntro] = useState(false);
  const [hasSeenIntro, setHasSeenIntro] = useState(false);

  useEffect(() => {
    const seenIntro = localStorage.getItem('hasSeenMobileIntro');
    if (isMobile && !seenIntro) {
      setShowMobileIntro(true);
    } else {
      setHasSeenIntro(true);
    }
  }, [isMobile]);

  const handleSkipIntro = () => {
    setShowMobileIntro(false);
    setHasSeenIntro(true);
    localStorage.setItem('hasSeenMobileIntro', 'true');
  };

  if (isMobile && showMobileIntro) {
    return <MobileIntroPage onSkip={handleSkipIntro} />;
  }
  
  const canonicalUrl = "https://www.nejvyhodnejsipripojeni.cz";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Domů",
        "item": canonicalUrl
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Internet Provider Comparison",
    "provider": {
      "@type": "Organization",
      "name": "Nejvýhodnější Připojení"
    },
    "areaServed": {
      "@type": "Country",
      "name": "CZ"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "CZK",
      "lowPrice": "399",
      "highPrice": "999",
      "offerCount": "20"
    }
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Poskytovatelé internetu v ČR",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "PODA internet recenze",
        "url": "https://www.nejvyhodnejsipripojeni.cz/poskytovatele-internetu/poda-internet-recenze"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "O2 internet recenze",
        "url": "https://www.nejvyhodnejsipripojeni.cz/poskytovatele-internetu/o2-internet-recenze"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "T-Mobile internet recenze",
        "url": "https://www.nejvyhodnejsipripojeni.cz/poskytovatele-internetu/t-mobile-internet-recenze"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Vodafone internet recenze",
        "url": "https://www.nejvyhodnejsipripojeni.cz/poskytovatele-internetu/vodafone-internet-recenze"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Změna poskytovatele internetu",
        "url": "https://www.nejvyhodnejsipripojeni.cz/zmena-poskytovatele-internetu"
      }
    ]
  };

  return (
    <PageLayout
      pageTitle="Nejlepší a nejlevnější internet na doma 2026 | Porovnání zdarma"
      pageDescription="Hledáte kvalitní internetové připojení? Porovnejte nabídky a najděte nejlevnější pevný a rychlý internet na doma. O2, T-Mobile, PODA, Vodafone od 399 Kč. ✓ Zdarma ✓ Bez závazků"
      pageType="website"
    >
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="author" content="Nejvýhodnější Připojení" />
        
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(itemListSchema)}
        </script>
      </Helmet>

      <ExitIntentPopup />

      <Hero />
      
      <HowItWorks />

      <InternetBenefits />
      
      <WhyChooseUs />

      <HomepageFAQ />
      
      <div id="formular">
        <LeadForm />
      </div>
    </PageLayout>
  );
};

export default Index;
