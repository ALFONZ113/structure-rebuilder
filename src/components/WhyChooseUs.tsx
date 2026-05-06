import React from 'react';
import ScrollReveal from './ui/ScrollReveal';
import { ArrowRight } from 'lucide-react';

const WhyChooseUs = React.memo(() => {
  const benefits = [
    {
      number: "01",
      title: "Šetříme váš čas",
      description: "Nemusíte procházet desítky nabídek. Porovnáme všechny poskytovatele a najdeme vám nejvýhodnější internetové připojení."
    },
    {
      number: "02",
      title: "Nezávislé porovnání",
      description: "Srovnáváme všechny poskytovatele pevného i bezdrátového internetu zcela nezávisle, bez preferování konkrétních firem."
    },
    {
      number: "03",
      title: "Služba zdarma",
      description: "Najdeme vám nejlevnější internet na doma zcela zdarma. Odměnu dostáváme od poskytovatelů, ne od vás."
    },
    {
      number: "04",
      title: "Personalizovaná nabídka",
      description: "Nabídneme vám rychlý internet na doma přesně podle vašich požadavků a možností ve vaší lokalitě."
    },
    {
      number: "05",
      title: "Bezproblémový přechod",
      description: "Zajistíme kompletní proces změny poskytovatele internetu bez výpadku připojení."
    }
  ];

  return (
    <section id="proc-nas" className="section-editorial bg-background relative overflow-hidden">
      {/* Glow accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[150px]" />
      
      <div className="container-editorial relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-14 md:mb-20">
            <div>
              <span className="text-label">Naše výhody</span>
              <h2 className="heading-xl mt-4">
                Proč zvolit právě nás
              </h2>
            </div>
            <div className="lg:pt-12">
              <p className="text-body-lg">
                Jsme specialisté na porovnávání nabídek internetového připojení. 
                Naše služby vám přináší řadu výhod.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Benefits */}
        <div className="space-y-0">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <div className="group border-t border-border py-6 sm:py-8 md:py-10 lg:py-12 transition-all duration-300 hover:bg-card/30">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start">
                  <div className="hidden md:block md:col-span-1">
                    <span className="text-4xl lg:text-6xl font-display font-bold text-border group-hover:text-primary/40 transition-colors tabular-nums">
                      {benefit.number}
                    </span>
                  </div>
                  
                  <div className="md:col-span-4">
                    <div className="flex items-center gap-4 md:block">
                      <span className="md:hidden text-3xl font-display font-bold text-border group-hover:text-primary/40 transition-colors tabular-nums">
                        {benefit.number}
                      </span>
                      <h3 className="text-lg md:text-xl lg:text-2xl font-display font-semibold group-hover:text-primary transition-colors">
                        {benefit.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="md:col-span-7 md:pl-4 lg:pl-8">
                    <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
          <div className="border-t border-border"></div>
        </div>

        {/* CTA */}
        <ScrollReveal className="mt-10 sm:mt-14 md:mt-16 lg:mt-20">
          <button 
            onClick={() => {
              const element = document.getElementById('lead-form');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-secondary group"
          >
            <span className="flex items-center gap-3">
              Začneme hledání?
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
});

WhyChooseUs.displayName = 'WhyChooseUs';
export default WhyChooseUs;
