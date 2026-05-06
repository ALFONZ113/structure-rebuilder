import { useState, useEffect } from 'react';
import ScrollReveal from './ui/ScrollReveal';
import { ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      number: "01",
      title: "Vyplníte formulář",
      description: "Zadáte základní informace o vaší lokalitě a požadovaných službách. Trvá to jen 2 minuty."
    },
    {
      number: "02",
      title: "Porovnáme nabídky",
      description: "Naše technologie analyzuje všechny dostupné poskytovatele ve vaší lokalitě."
    },
    {
      number: "03",
      title: "Kontaktujeme vás",
      description: "Představíme vám nejvýhodnější nabídku přesně na míru vašim potřebám."
    },
    {
      number: "04",
      title: "Zajistíme připojení",
      description: "Postaráme se o kompletní proces včetně přechodu od současného poskytovatele."
    }
  ];

  return (
    <section id="jak-to-funguje" className="section-editorial bg-surface relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="container-editorial relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-10 sm:mb-14 md:mb-20">
            <span className="text-label">Jednoduchý proces</span>
            <h2 className="heading-xl mt-4">
              Jak to funguje
            </h2>
            <p className="text-body-lg mt-4 sm:mt-6">
              Náš proces je jednoduchý a efektivní, abychom vám co nejrychleji 
              zajistili nejlepší připojení.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, index) => {
            const isActive = activeStep === index;
            
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <div 
                  className={`group cursor-pointer p-6 sm:p-8 border border-border transition-all duration-500 min-h-[44px] ${
                    isActive ? 'bg-card border-primary/30' : 'bg-transparent hover:bg-card/50'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Number */}
                  <span className={`text-4xl sm:text-5xl font-display font-bold transition-colors duration-300 ${
                    isActive ? 'text-primary' : 'text-border'
                  }`}>
                    {step.number}
                  </span>
                  
                  {/* Title */}
                  <h3 className={`heading-sm mt-4 sm:mt-6 transition-colors ${
                    isActive ? 'text-primary' : 'text-foreground'
                  }`}>
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-body mt-3 sm:mt-4 text-muted-foreground">
                    {step.description}
                  </p>

                  {/* Active indicator */}
                  {isActive && (
                    <div className="mt-6 h-px bg-gradient-to-r from-primary to-transparent" />
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA */}
        <ScrollReveal className="mt-10 sm:mt-14 md:mt-20">
          <button 
            onClick={() => {
              const element = document.getElementById('lead-form');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary group"
          >
            <span className="flex items-center gap-3">
              Začít teď — je to zdarma
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HowItWorks;
