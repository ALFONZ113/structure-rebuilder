
import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

const PeopleAlsoAsk = () => {
  const peopleAlsoAsk = [
    {
      question: "Prečo je môj internet pomalý a ako to riešiť?",
      answer: "Pomalý internet môže byť spôsobený zastaralým routerom, veľkým počtom pripojených zariadení, alebo problémami u poskytovateľa. Riešenie: reštart routera, aktualizácia firmware, kontakt s poskytovateľom."
    },
    {
      question: "Aká je najrýchlejšia internetová rýchlosť dostupná v ČR?",
      answer: "Najrýchlejší internet v ČR ponúka PODA a.s. s rýchlosťou až 2000 Mb/s cez optické pripojenie. PODA je na trhu od roku 1996 a je jedným z najväčších poskytovateľov telekomunikačných služieb v Českej republike."
    },
    {
      question: "Môžem mať internet bez pevnej zmluvy?",
      answer: "Áno, viaceré poskytovateľ ponúkajú internet bez záväzku. PODA a.s. (na trhu od 1996) a niektoré regionálne spoločnosti umožňujú mesačné vypovedanie zmluvy."
    },
    {
      question: "Koľko dát spotrebujem streamovaním Netflix?",
      answer: "Netflix spotrebuje približne 1 GB za hodinu v SD kvalite, 3 GB v HD kvalite a 7 GB v 4K Ultra HD kvalite. Pre rodinu odporúčame neobmedzený internet."
    },
    {
      question: "Je satelitný internet dobrá alternatíva?",
      answer: "Satelitný internet má vysokú odezvau (ping 500+ ms) a obmedzené dáta. Vhodný len v oblastiach bez iných možností pripojenia. Starlink ponúka lepšie parametre."
    },
    {
      question: "Ako dlho trvá inštalácia nového internetu?",
      answer: "Inštalácia optického internetu trvá 2-4 hodiny. Celý proces od objednávky po spustenie je 5-14 dní v závislosti od dostupnosti technikatov."
    },
    {
      question: "Môžem si zachovať e-mailovú adresu pri zmene poskytovateľa?",
      answer: "E-mail od starého poskytovateľa stratíte. Odporúčame prechod na nezávislý e-mail (Gmail, Seznam) pred zmenou poskytovateľa internetu."
    },
    {
      question: "Aký router potrebujem pre optický internet?",
      answer: "Pre optický internet potrebujete router s Gigabit Ethernet portmi a Wi-Fi 6 podporou. Väčšina poskytovateľov dodáva vhodný router v cene služby."
    }
  ];

  return (
    <section className="section-editorial bg-surface">
      <div className="container-editorial">
        <ScrollReveal>
          <h2 className="heading-lg mb-3">Ľudia sa tiež pýtajú</h2>
          <p className="text-body-lg mb-8">
            Odpovede na najčastejšie otázky o internetovom pripojení
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {peopleAlsoAsk.map((item, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="bg-card p-6 border border-border">
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
      </div>
    </section>
  );
};

export default PeopleAlsoAsk;
