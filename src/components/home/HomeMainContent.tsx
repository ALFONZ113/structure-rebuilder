import React, { lazy, Suspense } from 'react';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import WhyChooseUs from '@/components/WhyChooseUs';
import QuickAnswers from '@/components/ai-optimized/QuickAnswers';
import StickyCtaButton from '@/components/StickyCtaButton';
import LazySection from '@/components/ui/LazySection';

// Lazy load components that are below the fold
const TechnologySection = lazy(() => import('@/components/TechnologySection'));
const SpeedTest = lazy(() => import('@/components/SpeedTest'));
const LeadForm = lazy(() => import('@/components/LeadForm'));
const FAQ = lazy(() => import('@/components/FAQ'));

const CommunityReviewsSection = lazy(() => import('@/components/home/CommunityReviewsSection'));
const ReviewsSection = lazy(() => import('@/components/home/ReviewsSection'));
const FeaturedSnippetsComparison = lazy(() => import('@/components/ai-optimized/FeaturedSnippetsComparison'));
const PeopleAlsoAsk = lazy(() => import('@/components/ai-optimized/PeopleAlsoAsk'));
const RegionalContent = lazy(() => import('@/components/ai-optimized/RegionalContent'));
const BlogSEOArticles = lazy(() => import('@/components/blog/BlogSEOArticles'));
const DisatisfiedCustomersSection = lazy(() => import('@/components/seo/DisatisfiedCustomersSection'));

const HomeMainContent = () => {
  return (
    <>
      <StickyCtaButton />
      <section id="home">
        <Hero />
      </section>
      
      <section id="jak-to-funguje">
        <HowItWorks />
      </section>
      
      <section id="proc-nas">
        <WhyChooseUs />
      </section>
      
      <section id="quick-answers">
        <QuickAnswers />
      </section>
      
      
      <LazySection id="porovnanie">
        <Suspense fallback={<div className="min-h-[400px] animate-pulse bg-muted/50 rounded-lg" />}>
          <FeaturedSnippetsComparison />
        </Suspense>
      </LazySection>
      
      <LazySection id="disatisfied-customers">
        <Suspense fallback={<div className="min-h-[300px] animate-pulse bg-muted/50 rounded-lg" />}>
          <DisatisfiedCustomersSection />
        </Suspense>
      </LazySection>
      
      <LazySection id="regional-content">
        <Suspense fallback={<div className="min-h-[300px] animate-pulse bg-muted/50 rounded-lg" />}>
          <RegionalContent />
        </Suspense>
      </LazySection>
      
      <LazySection id="technologie">
        <Suspense fallback={<div className="min-h-[400px] animate-pulse bg-muted/50 rounded-lg" />}>
          <TechnologySection />
        </Suspense>
      </LazySection>
      
      <LazySection id="test-rychlosti">
        <Suspense fallback={<div className="min-h-[300px] animate-pulse bg-muted/50 rounded-lg" />}>
          <SpeedTest />
        </Suspense>
      </LazySection>
      
      <LazySection>
        <Suspense fallback={<div className="min-h-[400px] animate-pulse bg-muted/50 rounded-lg" />}>
          <CommunityReviewsSection />
        </Suspense>
      </LazySection>
      
      <LazySection>
        <Suspense fallback={<div className="min-h-[300px] animate-pulse bg-muted/50 rounded-lg" />}>
          <ReviewsSection />
        </Suspense>
      </LazySection>
      
      <LazySection id="people-also-ask">
        <Suspense fallback={<div className="min-h-[300px] animate-pulse bg-muted/50 rounded-lg" />}>
          <PeopleAlsoAsk />
        </Suspense>
      </LazySection>
      
      <LazySection id="lead-form">
        <Suspense fallback={<div className="min-h-[400px] animate-pulse bg-muted/50 rounded-lg" />}>
          <LeadForm />
        </Suspense>
      </LazySection>
      
      <LazySection id="faq">
        <Suspense fallback={<div className="min-h-[500px] animate-pulse bg-muted/50 rounded-lg" />}>
          <FAQ />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<div className="min-h-[200px] animate-pulse bg-muted/50 rounded-lg" />}>
          <BlogSEOArticles />
        </Suspense>
      </LazySection>
    </>
  );
};

export default HomeMainContent;
