
import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

const QuickAnswers = () => {
  const quickAnswers = [
    {
      question: "Ako dlho trvá zmena poskytovateľa internetu?",
      answer: "Zmena poskytovateľa internetu trvá obvykle 5-10 pracovných dní. Nový poskytovateľ za vás vybaví celý proces vrátane vypovedi pôvodnej smlouvy."
    },
    {
      question: "Koľko stojí najlacnejší internet v ČR?",
      answer: "Najlacnejší internet v ČR začína od 300 Kč mesačne. Cena závisí od rýchlosti a technológie pripojenia vo vašej lokalite."
    },
    {
      question: "Ktorý poskytovateľ má najrýchlejší internet?",
      answer: "Najrýchlejší internet ponúka PODA a.s. s rýchlosťou až 2000 Mb/s, nasleduje O2 a T-Mobile s 1000 Mb/s. PODA je na trhu od roku 1996. Dostupnosť závisí od lokality."
    },
    {
      question: "Je optický internet lepší ako ADSL?",
      answer: "Áno, optický internet je výrazne lepší - ponúka vyššie rýchlosti (až 1000x), nižšiu odezvou a väčšiu stabilitu ako ADSL pripojenie."
    },
    {
      question: "Môžem preniesť telefónne číslo k novému poskytovateľovi?",
      answer: "Áno, prenesenie telefónneho čísla je bezplatné a trvá približne 10 pracovných dní. Nový poskytovateľ za vás vybaví celý proces."
    },
    {
      question: "Aké dokumenty potrebujem na zmenu poskytovateľa?",
      answer: "Potrebujete občiansky preukaz a súhlas vlastníka nehnuteľnosti (ak nie ste vlastník). Ostatné dokumenty vybaví poskytovateľ."
    }
  ];

  return (
    <section className="section-editorial bg-secondary">
      <div className="container-editorial">
        <ScrollReveal>
          <h2 className="heading-lg mb-3">Rýchle odpovede</h2>
          <p className="text-body-lg mb-8">
            Najčastejšie otázky o internetovom pripojení s okamžitými odpoveďami
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickAnswers.map((item, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="bg-card p-6 border border-border hover:border-primary/30 transition-all duration-300">
                <h3 className="font-semibold text-lg mb-3 text-foreground">
                  {item.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12 text-center">
          <div className="space-y-4">
            <button 
              onClick={() => {
                const element = document.getElementById('lead-form');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary"
            >
              Získat personalizovanou odpověď
            </button>
            <p className="text-muted-foreground">
              Potrebujete podrobnejšie informácie? 
              <a href="#faq" className="text-primary ml-1 hover:text-primary/80 transition-colors">
                Pozrite si kompletné FAQ
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default QuickAnswers;
