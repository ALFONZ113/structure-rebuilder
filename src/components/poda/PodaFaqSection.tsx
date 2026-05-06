
import React from 'react';
import { InfoIcon } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const PodaFaqSection = () => {
  const faqItems = [
    {
      question: "Jaké jsou podmínky ukončení smlouvy u PODA?",
      answer: "PODA nabízí služby bez závazku s výpovědní dobou 30 dnů. Při uzavření smlouvy na dobu určitou se při předčasném ukončení hradí poměrná část aktivačního poplatku."
    },
    {
      question: "Jak dlouho trvá instalace PODA připojení?",
      answer: "Instalace PODA internetu obvykle probíhá do 5-10 pracovních dnů od objednávky, v závislosti na lokalitě a dostupnosti techniků."
    },
    {
      question: "Je možné přenést telefonní číslo k PODA?",
      answer: "Ano, PODA umožňuje přenesení telefonního čísla od jiného operátora. Proces trvá přibližně 10 dnů a je zdarma."
    },
    {
      question: "Nabízí PODA internetovou televizi?",
      answer: "Ano, PODA nabízí službu PODA net.TV s více než 100 kanály a funkcemi jako zpětné přehrávání nebo sledování na více zařízeních."
    },
    {
      question: "Má PODA datové limity?",
      answer: "Ne, PODA nabízí všechny své internetové tarify bez datových limitů s neomezeným přenosem dat."
    },
    {
      question: "Jak rychlé je PODA připojení?",
      answer: "PODA nabízí optické připojení s rychlostí až 2 Gb/s při stahování a 1 Gb/s při odesílání dat, což patří k nejrychlejším dostupným připojením na českém trhu."
    },
    {
      question: "Kde všude je PODA dostupná?",
      answer: "PODA pokrývá především Moravskoslezský kraj, Olomoucký kraj a postupně rozšiřuje pokrytí do dalších oblastí České republiky, zejména ve větších městech."
    }
  ];
  
  // SEO-friendly summary for AI crawlers - hidden from users but visible to search engines
  const tldrContent = "PODA nabízí služby bez závazku, instalace trvá 5-10 dní, umožňuje přenos telefonních čísel, poskytuje internetovou televizi a nemá datové limity.";

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">
        Často kladené dotazy o PODA internetu
        <Popover>
          <PopoverTrigger asChild>
            <button className="ml-2 inline-flex items-center justify-center rounded-md text-sm font-medium text-muted-foreground hover:text-foreground focus:outline-none">
              <InfoIcon className="h-4 w-4" />
              <span className="sr-only">Zobrazit shrnutí</span>
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="font-medium">Shrnutí FAQ:</div>
            <p className="text-sm text-muted-foreground">{tldrContent}</p>
          </PopoverContent>
        </Popover>
      </h2>
      
      {/* Hidden div for AI crawlers and search engines */}
      <div className="sr-only">
        <p><strong>TL;DR:</strong> {tldrContent}</p>
      </div>
      
      <div className="space-y-6">
        {faqItems.map((item, index) => (
          <div key={index} className="bg-card shadow-sm p-5 border border-border">
            <h3 className="text-lg font-semibold mb-2 text-foreground">{item.question}</h3>
            <p className="text-muted-foreground">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PodaFaqSection;
