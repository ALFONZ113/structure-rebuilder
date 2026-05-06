import React from 'react';
import ScrollReveal from './ui/ScrollReveal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const HomepageFAQ = React.memo(() => {
  const faqItems = [
    {
      question: "Jak vybrat ten nejlepší internet na doma?",
      answer: "Nejlepší internet na doma závisí na vaší lokalitě, počtu členů domácnosti a způsobu využití. Pro běžné surfování stačí 50 Mb/s, pro streaming a práci z domova doporučujeme 100–300 Mb/s. Vyplňte náš formulář a my porovnáme všechny dostupné nabídky ve vaší oblasti zdarma."
    },
    {
      question: "Kde najdu nejlevnější pevný internet?",
      answer: "Nejlevnější pevný internet nabízejí lokální poskytovatelé jako PODA (od 250 Kč/měsíc). Velcí operátoři O2, T-Mobile a Vodafone začínají od 399–499 Kč. Ceny se liší podle lokality a typu připojení (optika, VDSL, kabel). Porovnáme vám všechny nabídky a najdeme tu nejvýhodnější."
    },
    {
      question: "Jak rychle probíhá nové internetové připojení?",
      answer: "Celý proces trvá obvykle 5–10 pracovních dní. Po vyplnění formuláře vás kontaktujeme do 24 hodin s nejlepší nabídkou. Po vašem souhlasu nový poskytovatel zajistí instalaci a případně za vás vyřídí výpověď původní smlouvy."
    },
    {
      question: "Jak změnit poskytovatele internetu?",
      answer: "Změna poskytovatele je jednoduchá — stačí si vybrat nového operátora, ten za vás vyřídí výpověď původní smlouvy. Celý proces trvá 5–10 pracovních dní a my vám s tím pomůžeme zdarma, bez výpadku připojení."
    }
  ];

  return (
    <section className="section-editorial bg-background relative overflow-hidden">
      <div className="container-editorial relative z-10">
        <ScrollReveal>
          <div className="max-w-2xl mb-10 sm:mb-12 md:mb-16">
            <span className="text-label">Časté dotazy</span>
            <h2 className="heading-xl mt-4">
              Odpovědi na vaše otázky
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <ScrollReveal key={index} delay={index * 60}>
                <AccordionItem value={`faq-${index}`} className="border border-border bg-card/30 px-4 sm:px-6">
                  <AccordionTrigger className="py-4 sm:py-5 hover:no-underline min-h-[48px]">
                    <h3 className="text-base md:text-lg font-display font-medium text-left">
                      {item.question}
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
});

HomepageFAQ.displayName = 'HomepageFAQ';
export default HomepageFAQ;
