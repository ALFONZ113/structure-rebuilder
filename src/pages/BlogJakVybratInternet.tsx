import React from 'react';
import BlogArticlePage from '@/components/blog/BlogArticlePage';
import BlogConnectionTypesSection from '@/components/blog/BlogConnectionTypesSection';
import BlogSelectionCriteriaSection from '@/components/blog/BlogSelectionCriteriaSection';
import BlogAvailabilitySection from '@/components/blog/BlogAvailabilitySection';
import BlogProvidersSection from '@/components/blog/BlogProvidersSection';
import BlogSummarySection from '@/components/blog/BlogSummarySection';
import heroImage from '@/assets/jak-vybrat-internet-hero.jpg';

const BlogJakVybratInternet = () => {
  const title = "Jak vybrat nejlepší internetové připojení pro domácnost";
  const metaDescription = "Kompletní průvodce výběrem internetového připojení pro domácnost. Porovnáváme technologie, rychlosti a ceny různých poskytovatelů internetu v ČR.";
  const keywords = [
    "internetové připojení", 
    "jak vybrat internet", 
    "optický internet", 
    "ADSL připojení", 
    "mobilní internet", 
    "nejlepší internet do domácnosti", 
    "srovnání internetu"
  ];
  const publishDate = "20. dubna 2025";
  const author = "Jan Novák";
  const category = "Internet";
  const readTime = "8 min";

  const perex1 = "Výběr správného internetového připojení může být náročný úkol, zvláště když se na trhu nachází tolik různých možností. V tomto obsáhlém průvodci vám pomůžeme zorientovat se v nabídce a vybrat internet, který bude přesně vyhovovat vašim potřebám.";
  const perex2 = "Než se pustíme do porovnávání jednotlivých typů připojení, je důležité si uvědomit, co od internetu vlastně očekáváte. Potřebujete vysokou rychlost pro hraní online her a streamování videa ve 4K? Nebo vám stačí spolehlivé připojení pro běžné surfování, e-maily a občasné sledování filmů? Rozhodnutí o typu připojení závisí na vašich prioritách, lokalitě a samozřejmě rozpočtu. V následujících kapitolách vám přiblížíme různé typy internetového připojení, které jsou v České republice dostupné, a pomůžeme vám s výběrem toho pravého.";

  const content = (
    <>
      <BlogConnectionTypesSection />
      <BlogSelectionCriteriaSection />
      <BlogAvailabilitySection />
      <BlogProvidersSection />
      <BlogSummarySection />
    </>
  );

  return (
    <BlogArticlePage
      title={title}
      metaDescription={metaDescription}
      publishDate={publishDate}
      author={author}
      category={category}
      readTime={readTime}
      heroImage={heroImage}
      perex1={perex1}
      perex2={perex2}
      content={content}
      keywords={keywords}
    />
  );
};

export default BlogJakVybratInternet;
