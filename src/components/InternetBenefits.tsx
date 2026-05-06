import React from 'react';
import ScrollReveal from './ui/ScrollReveal';
import { Wifi, Zap, Shield } from 'lucide-react';

const InternetBenefits = React.memo(() => {
  const cards = [
    {
      icon: Wifi,
      title: "Nejlevnější pevný internet",
      description: "Porovnáváme tarify všech poskytovatelů pevného internetu v ČR — od optiky přes VDSL po kabelové připojení. Najdeme vám nejlevnější pevný internet ve vaší lokalitě už od 250 Kč měsíčně."
    },
    {
      icon: Zap,
      title: "Rychlý internet na doma",
      description: "Potřebujete rychlý internet na doma pro streaming, práci i gaming? Porovnáme rychlosti až 1 Gb/s od O2, T-Mobile, PODA a Vodafone a vybereme nejvýhodnější tarif."
    },
    {
      icon: Shield,
      title: "Nejvýhodnější internetové připojení",
      description: "Nezávisle srovnáme ceny, rychlosti a podmínky všech operátorů. Získáte nejvýhodnější internetové připojení bez skrytých poplatků — služba je pro vás 100% zdarma."
    }
  ];

  return (
    <section className="section-editorial bg-card/50 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[120px]" />
      
      <div className="container-editorial relative z-10">
        <ScrollReveal>
          <div className="max-w-2xl mb-10 sm:mb-12 md:mb-16">
            <span className="text-label">Internetové připojení</span>
            <h2 className="heading-xl mt-4">
              Proč si vybrat naše internetové připojení?
            </h2>
            <p className="text-body-lg mt-4">
              Pomáháme tisícům domácností v celé České republice najít nejlepší a nejlevnější internet na doma.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="group p-6 sm:p-8 lg:p-10 border border-border bg-background hover:border-primary/30 transition-all duration-300 h-full">
                <card.icon className="w-8 h-8 text-primary mb-5 sm:mb-6" strokeWidth={1.5} />
                <h3 className="text-lg lg:text-xl font-display font-semibold mb-3 sm:mb-4 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
});

InternetBenefits.displayName = 'InternetBenefits';
export default InternetBenefits;
