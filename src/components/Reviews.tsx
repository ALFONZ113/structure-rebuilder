
import { useState } from 'react';
import ScrollReveal from './ui/ScrollReveal';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

type Review = {
  name: string;
  location: string;
  rating: number;
  comment: string;
  service: string;
};

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews: Review[] = [
    {
      name: "Jana Nováková",
      location: "Praha",
      rating: 5,
      comment: "Díky Nejvýhodnějšímu Připojení jsem snížila svůj měsíční tarif o 400 Kč a mám teď rychlejší internet. Přechod od původního poskytovatele proběhl bez problémů.",
      service: "Internet + TV"
    },
    {
      name: "Petr Svoboda",
      location: "Brno",
      rating: 5,
      comment: "Skvělý servis a profesionální přístup. Poradili mi s výběrem nejlepšího připojení pro práci z domova a teď mám stabilní internet bez výpadků.",
      service: "Internet"
    },
    {
      name: "Martina Dvořáková",
      location: "Ostrava",
      rating: 4,
      comment: "Oceňuji rychlou komunikaci a výběr z více poskytovatelů. Nabídka byla personalizovaná přímo pro naši lokalitu.",
      service: "Internet + TV"
    },
    {
      name: "Tomáš Novotný",
      location: "Plzeň",
      rating: 5,
      comment: "Konečně mám připojení, které zvládá streamování ve 4K bez zasekávání. A cena je skvělá! Děkuji za doporučení a bezproblémový přechod.",
      service: "Internet + Mobilní služby"
    }
  ];

  const next = () => {
    setActiveIndex((activeIndex + 1) % reviews.length);
  };

  const prev = () => {
    setActiveIndex((activeIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="section-editorial bg-surface">
      <div className="container-editorial">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div className="max-w-xl">
              <span className="text-label">Reference</span>
              <h2 className="heading-xl mt-4">
                Co říkají naši zákazníci
              </h2>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4">
              <button 
                onClick={prev}
                className="w-12 h-12 border border-border flex items-center justify-center transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={next}
                className="w-12 h-12 border border-border flex items-center justify-center transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Featured Review - Large Quote Style */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Quote Icon */}
            <div className="lg:col-span-2">
              <Quote className="w-10 h-10 md:w-16 md:h-16 text-primary/20" strokeWidth={1} />
            </div>
            
            {/* Main Quote */}
            <div className="lg:col-span-7">
              <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-snug text-foreground transition-opacity duration-500">
                "{reviews[activeIndex].comment}"
              </blockquote>
              
              {/* Author */}
              <div className="mt-6 md:mt-10 flex items-center gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-muted flex items-center justify-center text-xl md:text-2xl font-semibold text-muted-foreground flex-shrink-0">
                  {reviews[activeIndex].name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm md:text-base">
                    {reviews[activeIndex].name}
                  </p>
                  <p className="text-muted-foreground text-xs md:text-sm mt-1">
                    {reviews[activeIndex].location} · {reviews[activeIndex].service}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="lg:col-span-3 pt-8 lg:pt-0 border-t lg:border-t-0 lg:border-l border-border lg:pl-8">
              <div className="grid grid-cols-3 lg:grid-cols-1 gap-6 lg:gap-8">
                <div>
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tabular-nums">15k+</p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">Spokojených zákazníků</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tabular-nums">4.9</p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">Průměrné hodnocení</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tabular-nums">98%</p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">Doporučuje nás dál</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Dots / Progress */}
        <ScrollReveal>
          <div className="mt-16 flex items-center gap-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-1 transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-12 bg-primary' 
                    : 'w-6 bg-border hover:bg-muted-foreground'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </ScrollReveal>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center gap-4 mt-8">
          <button 
            onClick={prev}
            className="w-12 h-12 border border-border flex items-center justify-center transition-colors hover:border-foreground"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={next}
            className="w-12 h-12 border border-border flex items-center justify-center transition-colors hover:border-foreground"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
