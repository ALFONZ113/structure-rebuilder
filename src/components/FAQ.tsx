import { useState } from 'react';
import ScrollReveal from './ui/ScrollReveal';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      question: "Jak najít nejvýhodnější internet?",
      answer: "Nejvýhodnější internet najdete porovnáním všech poskytovatelů ve vaší lokalitě. Náš bezplatný servis porovná ceny, rychlosti a podmínky všech operátorů a doporučí vám nejlepší řešení podle vašich potřeb a rozpočtu."
    },
    {
      question: "Jak získat nejrychlejší internet?",
      answer: "Nejrychlejší internet v ČR nabízejí poskytovatelé s optickým připojením jako PODA (až 2 Gb/s), O2 a Vodafone (až 1 Gb/s). Ověříme dostupnost ve vaší lokalitě a najdeme nejrychlejší dostupné připojení."
    },
    {
      question: "Co dělat, když nejsem spokojený s internetem?",
      answer: "Pokud nejste spokojeni s rychlostí, cenou nebo službami vašeho poskytovatele, pomůžeme vám najít lepší řešení. Často můžete získat rychlejší internet za nižší cenu. Vyplňte formulář a najdeme vám výhodnější připojení."
    },
    {
      question: "Jak změnit poskytovatele internetu?",
      answer: "Změna poskytovatele je jednoduchá - stačí si vybrat nového operátora a ten za vás vybaví výpověď původní smlouvy. Celý proces trvá 5-10 pracovních dní. Pomůžeme vám s výběrem a vyřídíme celý proces změny zdarma."
    },
    {
      question: "Jak dlouho trvá změna poskytovatele?",
      answer: "Standardní proces změny poskytovatele trvá 5-10 pracovních dní. Nový operátor pošle výpověď původní smlouvy a dohodne si s vámi termín instalace. Dbáme na to, abyste zůstali bez internetu co nejkratší dobu."
    },
    {
      question: "Kolik mohu ušetřit změnou poskytovatele?",
      answer: "Změnou poskytovatele můžete ušetřit 200-500 Kč měsíčně podle vaší současné smlouvy. Často dostanete i rychlejší připojení za lepší cenu. Náš servis je bezplatný, takže ušetříte jen na měsíčních poplatcích."
    },
    {
      question: "Je změna poskytovatele skutečně zdarma?",
      answer: "Ano, náš servis porovnání a pomoci se změnou poskytovatele je kompletně bezplatný. Nezaplatíte nic za porovnání ani za pomoc s objednávkou nového připojení. Odměnu dostáváme od poskytovatelů, ne od vás."
    },
    {
      question: "Jaké rychlosti internetu potřebuji?",
      answer: "Pro základní používání (web, email) stačí 25 Mb/s. Pro HD video potřebujete 50 Mb/s, pro 4K video 100 Mb/s. Pro rodinu s více zařízeními doporučujeme 300+ Mb/s. Pomůžeme vám vybrat správnou rychlost podle vašich potřeb."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-editorial bg-background">
      <div className="container-editorial">
        {/* Header */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16 lg:mb-20">
            <div>
              <span className="text-label">Časté dotazy</span>
              <h2 className="heading-xl mt-4">
                Máte otázky?
              </h2>
            </div>
            <div className="lg:pt-12">
              <p className="text-body-lg">
                Zde najdete odpovědi na nejčastější dotazy ohledně změny 
                poskytovatele a výběru internetu.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* FAQ Accordion - Editorial Style */}
        <div className="max-w-4xl">
          {faqData.map((item, index) => (
            <ScrollReveal key={index} delay={index * 50}>
              <div className="border-t border-border">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-6 md:py-8 flex items-start justify-between gap-4 text-left group"
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors pr-4">
                    {item.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 md:w-6 md:h-6 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    openIndex === index ? 'max-h-96 pb-6 md:pb-8' : 'max-h-0'
                  }`}
                >
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground pr-8 md:pr-12">
                    {item.answer}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
          {/* Bottom border */}
          <div className="border-t border-border"></div>
        </div>

        {/* CTA */}
        <ScrollReveal className="mt-12 md:mt-16 lg:mt-20">
          <p className="text-body text-muted-foreground mb-6">
            Nenašli jste odpověď na svou otázku?
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('lead-form');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-secondary"
          >
            Kontaktujte nás
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQ;
