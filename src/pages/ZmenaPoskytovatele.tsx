import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import { getCurrentMonthCzech, getCurrentDateISO } from '@/lib/dateUtils';
import { ArrowRight, Check, Clock, FileText, Phone, Wifi, AlertTriangle, HelpCircle } from 'lucide-react';

const ZmenaPoskytovatele = () => {
  const currentMonth = getCurrentMonthCzech();
  const canonicalUrl = "https://www.nejvyhodnejsipripojeni.cz/zmena-poskytovatele-internetu";

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Jak změnit poskytovatele internetu v ČR",
    "description": "Kompletní průvodce změnou poskytovatele internetu krok za krokem. Jak podat výpověď, na co si dát pozor a jak ušetřit.",
    "totalTime": "PT15M",
    "estimatedCost": { "@type": "MonetaryAmount", "currency": "CZK", "value": "0" },
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Zkontrolujte smlouvu", "text": "Ověřte délku závazku a podmínky výpovědi u vašeho současného poskytovatele." },
      { "@type": "HowToStep", "position": 2, "name": "Porovnejte nabídky", "text": "Porovnejte všechny poskytovatele ve vaší lokalitě a vyberte nejlepší nabídku." },
      { "@type": "HowToStep", "position": 3, "name": "Objednejte nové připojení", "text": "Objednejte si nové připojení u vybraného poskytovatele. Ten za vás vyřídí výpověď." },
      { "@type": "HowToStep", "position": 4, "name": "Instalace a aktivace", "text": "Technik nainstaluje nové připojení. Celý přechod trvá 5-10 pracovních dní." }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Jak změnit poskytovatele internetu?",
        "acceptedAnswer": { "@type": "Answer", "text": "Stačí si vybrat nového poskytovatele, ten za vás vyřídí výpověď u stávajícího operátora. Celý proces trvá 5-10 pracovních dní a je zdarma." }
      },
      {
        "@type": "Question",
        "name": "Jak dlouho trvá přechod k jinému poskytovateli?",
        "acceptedAnswer": { "@type": "Answer", "text": "Přechod obvykle trvá 5-10 pracovních dní. Během přechodu nebývá výpadek internetu, protože nový poskytovatel aktivuje službu před odpojením staré." }
      },
      {
        "@type": "Question",
        "name": "Musím platit poplatek za změnu poskytovatele?",
        "acceptedAnswer": { "@type": "Answer", "text": "Přechod k novému poskytovateli je obvykle zdarma. Pokud máte aktivní závazek, může být účtován poplatek za předčasné ukončení smlouvy (storno poplatek)." }
      },
      {
        "@type": "Question",
        "name": "Co když mám smlouvu na dobu určitou?",
        "acceptedAnswer": { "@type": "Answer", "text": "Pokud máte závazek, můžete počkat na jeho konec nebo zaplatit storno poplatek (obvykle zbývající měsíční platby × 1/5). Po skončení závazku můžete odejít kdykoli s 1měsíční výpovědní lhůtou." }
      },
      {
        "@type": "Question",
        "name": "Přijdu při přechodu o internet?",
        "acceptedAnswer": { "@type": "Answer", "text": "Ne, nový poskytovatel obvykle aktivuje službu ještě před odpojením staré. Výpadek je maximálně několik hodin, často žádný." }
      }
    ]
  };

  return (
    <PageLayout
      pageTitle={`Změna poskytovatele internetu 2026 | Kompletní průvodce zdarma`}
      pageDescription={`✓ Jak změnit poskytovatele internetu krok za krokem ✓ Přechod bez výpadku ✓ Zdarma porovnání nabídek ✓ Výpověď vyřídí nový operátor ✓ Průvodce ${currentMonth}`}
      pageType="article"
      publishDate="2026-03-01"
      modifiedDate={getCurrentDateISO()}
    >
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <article>
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Změna poskytovatele internetu: Kompletní průvodce {currentMonth}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Chcete přejít k jinému poskytovateli internetu? Ukážeme vám, jak na to krok za krokem — bez stresu, bez výpadku a často zcela zdarma.
            </p>
          </header>

          {/* Krok za krokem */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-8 text-foreground">Jak změnit poskytovatele internetu – 4 jednoduché kroky</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { icon: FileText, step: '1', title: 'Zkontrolujte smlouvu', desc: 'Ověřte, zda máte aktivní závazek a jaká je výpovědní lhůta. Po skončení závazku můžete odejít s 1měsíční výpovědí.' },
                { icon: Wifi, step: '2', title: 'Porovnejte nabídky', desc: 'Zjistěte, co nabízí ostatní poskytovatelé ve vaší lokalitě. Porovnejte ceny, rychlosti a podmínky.' },
                { icon: Phone, step: '3', title: 'Objednejte nové připojení', desc: 'Kontaktujte vybraného poskytovatele. Ten za vás vyřídí výpověď u stávajícího operátora — nemusíte řešit nic.' },
                { icon: Check, step: '4', title: 'Aktivace nového internetu', desc: 'Technik nainstaluje nové připojení. Celý přechod trvá 5-10 pracovních dní bez výpadku.' },
              ].map((item, i) => (
                <div key={i} className="border border-border rounded-xl p-6 bg-card relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                  <item.icon className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-bold text-lg mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Na co si dát pozor */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Na co si dát pozor při změně poskytovatele</h2>
            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <h3 className="font-bold text-amber-800 dark:text-amber-400">Důležité upozornění</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Zkontrolujte, zda nemáte aktivní závazek — předčasné ukončení může být zpoplatněno',
                  'Ověřte dostupnost nového poskytovatele na vaší adrese před výpovědí starého',
                  'Nezapomeňte vrátit zapůjčené zařízení (router, set-top box) starému poskytovateli',
                  'Pokud máte statickou IP adresu, ta se při přechodu změní',
                  'E-mailová adresa od poskytovatele (např. @seznam.cz) zůstane, ale @o2.cz ne',
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-body">
                    <span className="text-amber-600 mt-0.5">•</span>{tip}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Kolik ušetříte */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Kolik můžete ušetřit změnou poskytovatele?</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { scenario: 'VDSL → Optika', saving: '0-200 Kč', desc: 'Stejná nebo nižší cena, ale 10× vyšší rychlost' },
                { scenario: 'Velký operátor → Lokální', saving: '100-400 Kč', desc: 'Lokální poskytovatelé jako PODA nabízí nižší ceny' },
                { scenario: 'Optimalizace balíčku', saving: '200-500 Kč', desc: 'Kombinace internet + TV + mobil u jednoho operátora' },
              ].map((item, i) => (
                <div key={i} className="border border-border rounded-xl p-6 bg-card text-center">
                  <p className="text-sm text-muted-foreground mb-2">{item.scenario}</p>
                  <p className="text-primary font-bold text-3xl mb-2">{item.saving}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Porovnání poskytovatelů */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Kam přejít? Porovnání poskytovatelů</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-3 font-semibold text-foreground">Poskytovatel</th>
                    <th className="text-left p-3 font-semibold text-foreground">Cena od</th>
                    <th className="text-left p-3 font-semibold text-foreground">Rychlost</th>
                    <th className="text-left p-3 font-semibold text-foreground">Hodnocení</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'PODA', price: '250 Kč', speed: 'až 2 Gb/s', rating: '4.5/5', link: '/poskytovatele-internetu/poda-internet-recenze' },
                    { name: 'O2', price: '499 Kč', speed: 'až 1 Gb/s', rating: '3.8/5', link: '/poskytovatele-internetu/o2-internet-recenze' },
                    { name: 'T-Mobile', price: '499 Kč', speed: 'až 1 Gb/s', rating: '3.9/5', link: '/poskytovatele-internetu/t-mobile-internet-recenze' },
                    { name: 'Vodafone', price: '499 Kč', speed: 'až 1 Gb/s', rating: '3.7/5', link: '/poskytovatele-internetu/vodafone-internet-recenze' },
                  ].map((p, i) => (
                    <tr key={i} className="border-t border-border">
                      <td className="p-3"><Link to={p.link} className="text-primary hover:underline font-medium">{p.name}</Link></td>
                      <td className="p-3 text-body">{p.price}</td>
                      <td className="p-3 text-body">{p.speed}</td>
                      <td className="p-3 text-body">{p.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Často kladené otázky o změně poskytovatele</h2>
            <div className="space-y-4">
              {[
                { q: 'Jak změnit poskytovatele internetu?', a: 'Vyberte nového poskytovatele, on za vás vyřídí výpověď. Celý proces trvá 5-10 dní a je zdarma.' },
                { q: 'Jak dlouho trvá přechod?', a: 'Obvykle 5-10 pracovních dní. Výpadek internetu je minimální — často žádný.' },
                { q: 'Musím platit za přechod?', a: 'Přechod je zdarma. Ale pokud máte aktivní závazek, může být storno poplatek.' },
                { q: 'Co když mám smlouvu na dobu určitou?', a: 'Můžete počkat na konec závazku, nebo zaplatit storno (obvykle zbývající platby × 1/5).' },
                { q: 'Přijdu při přechodu o internet?', a: 'Ne. Nový poskytovatel aktivuje službu před odpojením staré. Výpadek je max několik hodin.' },
                { q: 'Můžu si nechat stejné číslo pevné linky?', a: 'Ano, přenositelnost čísla je ze zákona garantována. Nový operátor to zařídí.' },
              ].map((faq, i) => (
                <div key={i} className="border border-border rounded-lg p-5 bg-card">
                  <h3 className="font-semibold mb-2 text-foreground flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />{faq.q}
                  </h3>
                  <p className="text-sm text-body pl-6">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary/10 border border-primary/30 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3 text-foreground">Najdeme vám lepší internet — zdarma</h2>
            <p className="text-body mb-6">Vyplňte formulář a do 24 hodin vám pošleme nejlepší nabídky pro vaši adresu. Pomůžeme i s přechodem.</p>
            <Link to="/#lead-form" className="btn-primary inline-flex items-center gap-2">
              Porovnat nabídky zdarma <ArrowRight className="w-4 h-4" />
            </Link>
          </section>
        </article>
      </div>
    </PageLayout>
  );
};

export default ZmenaPoskytovatele;
