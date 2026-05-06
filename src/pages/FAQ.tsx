import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqItems = [
    {
      question: "Jak dlouho trvá celý proces?",
      answer: "Zpracování vašeho požadavku trvá obvykle 1-2 pracovní dny. Kontaktujeme vás s nejlepší nabídkou a v případě vašeho zájmu zajistíme instalaci ve spolupráci s vybraným poskytovatelem. Samotná instalace pak závisí na vytíženosti poskytovatele, většinou se pohybuje v rozmezí 3-10 pracovních dnů."
    },
    {
      question: "Je služba opravdu zdarma?",
      answer: "Ano, naše služba je pro koncové zákazníky zcela zdarma. Jsme placeni z provizí od poskytovatelů internetového připojení, se kterými spolupracujeme. Vám tedy nevznikají žádné dodatečné náklady za využití našich služeb."
    },
    {
      question: "Jak probíhá změna poskytovatele?",
      answer: "Celý proces změny za vás většinou vyřídí nový poskytovatel. Po vašem souhlasu s nabídkou zajistíme termín instalace. Technický pracovník provede instalaci nového připojení, a jakmile bude funkční, můžete vypovědět smlouvu s původním poskytovatelem. Pomůžeme vám i s vypovězením původní smlouvy, abyste se vyhnuli dvojím platbám."
    },
    {
      question: "Jaké informace od vás potřebujeme?",
      answer: "Pro nalezení nejvhodnějšího připojení potřebujeme znát především vaši přesnou adresu instalace, abyste získali pouze relevantní nabídky pro vaši lokalitu. Dále nám pomůže znát vaše požadavky na rychlost, stabilitu připojení, případně informace o tom, jak internet používáte (běžné prohlížení, streamování, hraní her, práce z domova). Užitečné jsou také údaje o současném připojení a měsíční platbě."
    },
    {
      question: "Co když nejsem spokojen/a s nabídkou?",
      answer: "K ničemu se nezavazujete. Pokud vám naše nabídka nevyhovuje, jednoduše ji můžete odmítnout. Můžeme také hledat alternativní řešení nebo vám doporučit jiného poskytovatele. Naším cílem je vaše spokojenost, nikoli prodej konkrétního produktu."
    },
    {
      question: "Zvládnete zajistit připojení i v odlehlé lokalitě?",
      answer: "Máme přístup k databázi všech poskytovatelů v ČR včetně lokálních a specializovaných společností. Díky tomu dokážeme najít řešení i v lokalitách, kde nejsou dostupné služby velkých operátorů. V případě velmi odlehlých oblastí můžeme nabídnout alternativní řešení jako satelitní připojení nebo fixní LTE."
    },
    {
      question: "Jak rychlé připojení potřebuji?",
      answer: "Záleží na tom, jak internet používáte. Pro běžné prohlížení a e-maily stačí 20-30 Mb/s. Pro streamování HD videa doporučujeme 30-50 Mb/s, pro 4K video 50-100 Mb/s. Pokud pracujete z domova, hrajete online hry nebo máte více zařízení připojených současně, doporučujeme alespoň 100 Mb/s nebo více."
    },
    {
      question: "Je lepší kabelové nebo bezdrátové připojení?",
      answer: "Každá technologie má své výhody. Kabelové (optické nebo VDSL) připojení nabízí obvykle vyšší stabilitu a rychlost. Bezdrátové připojení je zase dostupné i v oblastech bez kabelové infrastruktury. Obecně doporučujeme optické připojení, pokud je ve vaší lokalitě dostupné, protože nabízí nejlepší poměr rychlosti, stability a ceny."
    }
  ];

  return (
    <PageLayout
      pageTitle="Často kladené otázky | Nejvýhodnější Připojení"
      pageDescription="Odpovědi na nejčastější dotazy o našich službách porovnávání a zprostředkování internetového připojení."
    >
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Často kladené otázky</h1>
        <p className="text-gray-600 mb-12">Odpovědi na nejčastější dotazy o našich službách</p>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg font-medium text-left">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Nenašli jste odpověď na svou otázku?
            </p>
            <Link to="/kontakt" className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors">
              Kontaktujte nás
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FAQ;
