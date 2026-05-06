
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import InternetComparisonTable from '@/components/InternetComparisonTable';
import ProviderIntro from '@/components/providers/ProviderIntro';
import SelectionGuide from '@/components/providers/SelectionGuide';
import ProviderList from '@/components/providers/ProviderList';
import ProviderComparison from '@/components/providers/ProviderComparison';
import ProviderFAQ from '@/components/providers/ProviderFAQ';
import ConsultationCTA from '@/components/providers/ConsultationCTA';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { InfoIcon, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const providerData = [
  {
    provider: "PODA",
    maxSpeed: "2 Gb/s", 
    priceFrom: "340 Kč",
    technology: "Optika, bezdrát",
    benefits: "Vysoká rychlost za nízkou cenu, bez závazku"
  },
  {
    provider: "O2",
    maxSpeed: "2 Gb/s",
    priceFrom: "399 Kč",
    technology: "Optika, VDSL",
    benefits: "Široké pokrytí, O2 TV v ceně"
  },
  {
    provider: "T-Mobile",
    maxSpeed: "1 Gb/s",
    priceFrom: "299 Kč",
    technology: "Optika, VDSL",
    benefits: "Výhodné balíčky s mobilními službami"
  },
  {
    provider: "Vodafone",
    maxSpeed: "1 Gb/s",
    priceFrom: "459 Kč",
    technology: "Optika, kabel",
    benefits: "Kombinace s TV a mobilními službami"
  },
  {
    provider: "Nej.cz",
    maxSpeed: "1 Gb/s",
    priceFrom: "299 Kč",
    technology: "Optika, kabel",
    benefits: "Výhodné regionální pokrytí"
  },
  {
    provider: "UPC",
    maxSpeed: "1 Gb/s",
    priceFrom: "399 Kč",
    technology: "Kabel, optika",
    benefits: "Stabilní připojení v městech"
  }
];

const ProviderIndex = () => {
  const canonicalUrl = "https://www.nejvyhodnejsipripojeni.cz/poskytovatele-internetu";
  
  // Guide Schema
  const guideSchema = {
    "@context": "https://schema.org",
    "@type": "Guide",
    "name": "Nejlepší poskytovatelé internetu v ČR 2025",
    "description": "Kompletní přehled a srovnání poskytovatelů internetu v České republice včetně PODA, O2, T-Mobile a Vodafone.",
    "author": {
      "@type": "Organization",
      "name": "Nejvýhodnější Připojení"
    },
    "datePublished": "2025-04-28",
    "dateModified": "2025-05-13"
  };

  // Comparison Table Schema
  const tableSchema = {
    "@context": "https://schema.org",
    "@type": "Table",
    "about": "Srovnání poskytovatelů internetu v ČR",
    "author": {
      "@type": "Organization",
      "name": "Nejvýhodnější Připojení"
    },
    "datePublished": "2025-05-13"
  };

  // SEO-friendly summary for AI crawlers
  const tldrContent = "Srovnali jsme všechny hlavní poskytovatele internetu v ČR. PODA nabízí nejlepší poměr cena/výkon s optickým připojením od 340 Kč, O2 má nejširší pokrytí, T-Mobile nejlevnější základní tarify.";

  return (
    <PageLayout
      pageTitle="Najlepší poskytovatelé internetu ČR - O2, T-Mobile, PODA, Vodafone"
      pageDescription="Kompletní přehled a srovnání poskytovatelů internetu v České republice včetně PODA, O2, T-Mobile a Vodafone. Aktuální ceny, pokrytí a recenze."
      pageType="article"
      publishDate="2025-04-28"
      modifiedDate="2025-05-13"
    >
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content="poskytovatelé internetu, PODA internet, O2 internet, T-Mobile internet, srovnání internetu, nejlevnější internet, optický internet, internet bez závazku" />
        <script type="application/ld+json">
          {JSON.stringify(guideSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(tableSchema)}
        </script>
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="seznam-wmt" content="HpOdsBx9Q1kW5SEsmnlgnk0uBY1ZEKZC" />
      </Helmet>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <article>
          <header className="mb-8 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Nejlepší poskytovatelé internetu v ČR 2025</h1>
            
            {/* Hidden div for AI crawlers and search engines */}
            <div className="sr-only">
              <p><strong>TL;DR:</strong> {tldrContent}</p>
            </div>
            
            {/* Collapsible summary for users */}
            <Collapsible className="w-full border rounded-md mb-6">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-2">
                  <InfoIcon className="h-4 w-4 text-gray-500" />
                  <h2 className="text-sm font-medium">Rychlé shrnutí pro vás</h2>
                </div>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <ChevronDown className="h-4 w-4" />
                    <span className="sr-only">Zobrazit shrnutí</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent>
                <div className="p-4 pt-0 text-sm">
                  {tldrContent}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </header>
          
          <ProviderIntro />

          <h2 className="text-2xl font-semibold mt-10 mb-4">Srovnávací tabulka poskytovatelů internetu 2025</h2>
          <div className="my-6">
            <InternetComparisonTable data={providerData} />
          </div>

          <SelectionGuide />
          <ProviderList />
          <ProviderComparison />

          <h2 className="text-2xl font-semibold mt-10 mb-4">Závěr</h2>
          <p className="mb-6">
            Výběr správného poskytovatele internetu závisí na mnoha faktorech. Pokud hledáte rychlý internet za příznivou cenu 
            a bez dlouhodobého závazku, PODA patří mezi nejlepší volby na trhu. Pro oblasti, kde PODA není dostupná, jsou dobrou 
            alternativou celostátní operátoři jako O2, T-Mobile a Vodafone.
          </p>
          
          <p className="text-sm text-gray-500 italic">
            Poznámka: Všechny uvedené ceny a parametry jsou aktuální k dubnu 2025. Pro nejnovější informace doporučujeme navštívit 
            oficiální stránky poskytovatelů.
          </p>

          <ConsultationCTA />
          <ProviderFAQ />
        </article>
      </div>
    </PageLayout>
  );
};

export default ProviderIndex;
