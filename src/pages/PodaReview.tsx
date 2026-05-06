
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import PodaSEOData from '@/components/poda/PodaSEOData';
import PodaProductSchema from '@/components/seo/PodaProductSchema';
import PodaIntroSection from '@/components/poda/PodaIntroSection';
import PodaIntroUpdateSection from '@/components/poda/PodaIntroUpdateSection';
import PodaRegionalSection from '@/components/poda/PodaRegionalSection';
import PodaTarifySection from '@/components/poda/PodaTarifySection';
import PodaTvSection from '@/components/poda/PodaTvSection';
import PodaCoverageSection from '@/components/poda/PodaCoverageSection';
import PodaExperiencesSection from '@/components/poda/PodaExperiencesSection';
import PodaTechnologySection from '@/components/poda/PodaTechnologySection';
import PodaComparisonSection from '@/components/poda/PodaComparisonSection';
import PodaRecommendationSection from '@/components/poda/PodaRecommendationSection';
import PodaFaqSection from '@/components/poda/PodaFaqSection';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { getCurrentMonthCzech, getCurrentDateISO } from '@/lib/dateUtils';

const PodaReview = () => {
  const canonicalUrl = "https://www.nejvyhodnejsipripojeni.cz/poskytovatele-internetu/poda-internet-recenze";
  const currentMonth = getCurrentMonthCzech();
  const currentMonthLower = getCurrentMonthCzech(false);

  return (
    <PageLayout
      pageTitle={`PODA Internet: Recenze, ${currentMonth} | Zkušenosti zákazníků Ostrava`}
      pageDescription={`✓ PODA internet recenze ${currentMonth} ✓ Ceny od 250 Kč ✓ Rychlost až 2 Gb/s ✓ Ostrava, Havířov, Brno ✓ Zkušenosti zákazníků ✓ Nezávislé hodnocení 4.5/5`}
      pageType="article"
      publishDate="2025-10-29"
      modifiedDate={getCurrentDateISO()}
    >
      <PodaSEOData canonicalUrl={canonicalUrl} />
      <PodaProductSchema />

      <div className="container mx-auto px-4 py-8 md:py-12">
        <article>
          <header className="mb-8 text-center md:text-left">
            <div className="bg-primary/10 dark:bg-primary/20 border border-primary/30 rounded-lg p-4 mb-6">
              <p className="text-sm text-body">
                ℹ️ <strong>Nezávislá recenze:</strong> Tato stránka obsahuje nezávislé hodnocení služeb poskytovatele PODA. Nejsme oficiálním zástupcem ani partnerem společnosti PODA a.s.
              </p>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">PODA internet: Recenze, {currentMonth} - Zkušenosti zákazníků a ceny</h1>
            <div className="flex items-center justify-center md:justify-start text-primary mb-4">
              {[1, 2, 3, 4].map((star) => (
                <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fillOpacity="0.5" />
              </svg>
              <span className="ml-2 text-sm text-muted">(4.5/5) průměrné hodnocení podle uživatelských recenzí</span>
            </div>
            <div className="bg-muted rounded-lg p-4 mb-6">
              <p className="text-sm text-body">📊 Přehled služeb: Ceny od 250 Kč/měs | Rychlosti až 2 Gb/s | Možnost služeb bez závazku</p>
            </div>
          </header>
          
          <div className="prose max-w-none">
            <PodaIntroUpdateSection />
            <PodaRegionalSection />
            <PodaIntroSection />
            <PodaTarifySection />
            <PodaTvSection />
            <PodaCoverageSection />
            <PodaExperiencesSection />
            <PodaTechnologySection />
            <PodaComparisonSection />
            <PodaRecommendationSection />
            <PodaFaqSection />
          </div>
        </article>
      </div>
    </PageLayout>
  );
};

export default PodaReview;
