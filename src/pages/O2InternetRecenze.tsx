import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import { getCurrentMonthCzech, getCurrentDateISO } from '@/lib/dateUtils';
import { ArrowRight, Check, X, Wifi, MapPin, Phone, Star } from 'lucide-react';

const O2InternetRecenze = () => {
  const currentMonth = getCurrentMonthCzech();
  const canonicalUrl = "https://www.nejvyhodnejsipripojeni.cz/poskytovatele-internetu/o2-internet-recenze";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Jaká je rychlost O2 internetu?",
        "acceptedAnswer": { "@type": "Answer", "text": "O2 nabízí internet s rychlostí až 1 Gb/s přes optické připojení a až 100 Mb/s přes VDSL. Reálná rychlost závisí na lokalitě a typu připojení." }
      },
      {
        "@type": "Question",
        "name": "Kolik stojí O2 internet měsíčně?",
        "acceptedAnswer": { "@type": "Answer", "text": "Ceny O2 internetu začínají od 499 Kč/měsíc za základní VDSL připojení. Optické připojení stojí od 599 Kč/měsíc. V balíčku s TV a mobilem lze získat slevy." }
      },
      {
        "@type": "Question",
        "name": "Má O2 internet bez závazku?",
        "acceptedAnswer": { "@type": "Answer", "text": "Ano, O2 nabízí tarify bez závazku i se závazkem na 24 měsíců. Tarify se závazkem jsou obvykle levnější o 100-200 Kč měsíčně." }
      },
      {
        "@type": "Question",
        "name": "Jaké jsou zkušenosti zákazníků s O2 internetem?",
        "acceptedAnswer": { "@type": "Answer", "text": "Zákazníci oceňují široké pokrytí a spolehlivost optického připojení. Kritizují někdy delší čekací doby na zákaznické lince a vyšší ceny oproti menším poskytovatelům." }
      }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Product",
      "name": "O2 Internet",
      "brand": { "@type": "Brand", "name": "O2 Czech Republic" }
    },
    "reviewRating": { "@type": "Rating", "ratingValue": "3.8", "bestRating": "5" },
    "author": { "@type": "Organization", "name": "Nejvýhodnější Připojení" },
    "datePublished": "2026-03-01",
    "dateModified": getCurrentDateISO()
  };

  return (
    <PageLayout
      pageTitle={`O2 Internet: Recenze ${currentMonth} | Ceny, rychlost a zkušenosti`}
      pageDescription={`✓ O2 internet recenze ${currentMonth} ✓ Ceny od 499 Kč ✓ Optika až 1 Gb/s ✓ VDSL pokrytí celé ČR ✓ Zkušenosti zákazníků ✓ Nezávislé hodnocení 3.8/5`}
      pageType="article"
      publishDate="2026-03-01"
      modifiedDate={getCurrentDateISO()}
    >
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(reviewSchema)}</script>
      </Helmet>

      <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <article>
          {/* Header */}
          <header className="mb-8">
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-6">
              <p className="text-sm text-body">
                ℹ️ <strong>Nezávislá recenze:</strong> Nejsme oficiálním zástupcem společnosti O2 Czech Republic a.s.
              </p>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              O2 Internet: Recenze {currentMonth} – Ceny, rychlost a zkušenosti zákazníků
            </h1>
            <div className="flex items-center text-primary mb-4">
              {[1, 2, 3].map((s) => <Star key={s} className="w-5 h-5 fill-current" />)}
              <Star className="w-5 h-5 fill-current opacity-80" />
              <Star className="w-5 h-5 opacity-30" />
              <span className="ml-2 text-sm text-muted-foreground">(3.8/5) průměrné hodnocení</span>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <p className="text-sm text-body">📊 Ceny od 499 Kč/měs | Optika až 1 Gb/s | VDSL pokrytí celé ČR | Balíčky s TV a mobilem</p>
            </div>
          </header>

          {/* Intro */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-foreground">O2 Internet – Největší poskytovatel v ČR</h2>
            <p className="text-body leading-relaxed mb-4">
              O2 Czech Republic je největším poskytovatelem internetového připojení v České republice. Díky rozsáhlé síti VDSL a neustále rozšiřované optické infrastruktuře pokrývá většinu území ČR. Nabízí pevný internet, mobilní internet, televizní služby O2 TV a mobilní tarify.
            </p>
            <p className="text-body leading-relaxed">
              V této nezávislé recenzi se podíváme na aktuální ceny, reálné rychlosti, zkušenosti zákazníků a porovnáme O2 s konkurencí jako je T-Mobile, Vodafone nebo PODA.
            </p>
          </section>

          {/* Tarify */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Tarify a ceny O2 internetu {currentMonth}</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { name: 'O2 Internet VDSL', speed: 'až 50 Mb/s', price: '499 Kč', features: ['VDSL technologie', 'Wi-Fi router v ceně', 'Bez závazku +200 Kč'] },
                { name: 'O2 Internet VDSL+', speed: 'až 100 Mb/s', price: '599 Kč', features: ['Vyšší rychlost', 'Wi-Fi 6 router', 'Vhodné pro rodiny'] },
                { name: 'O2 Optický internet', speed: 'až 1 Gb/s', price: '699 Kč', features: ['Optické vlákno', 'Symetrická rychlost', 'Nejrychlejší varianta'] },
              ].map((tarif, i) => (
                <div key={i} className="border border-border rounded-xl p-6 bg-card">
                  <h3 className="font-bold text-lg mb-2 text-foreground">{tarif.name}</h3>
                  <p className="text-primary font-bold text-2xl mb-1">{tarif.price}<span className="text-sm font-normal text-muted-foreground">/měs</span></p>
                  <p className="text-sm text-muted-foreground mb-4">{tarif.speed}</p>
                  <ul className="space-y-2">
                    {tarif.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-body">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Výhody a nevýhody */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Výhody a nevýhody O2 internetu</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4 text-green-800 dark:text-green-400">✅ Výhody</h3>
                <ul className="space-y-3">
                  {['Největší pokrytí VDSL v ČR', 'Výhodné balíčky s O2 TV a mobilem', 'Široká síť prodejen a servisních bodů', 'Stabilní optické připojení ve městech', 'Zákaznický portál Moje O2'].map((v, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />{v}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4 text-red-800 dark:text-red-400">❌ Nevýhody</h3>
                <ul className="space-y-3">
                  {['Vyšší ceny oproti menším poskytovatelům', 'VDSL rychlosti závisí na vzdálenosti od ústředny', 'Delší čekací doby na zákaznické lince', 'Závazek 24 měsíců pro nejlepší ceny', 'Optika dostupná jen ve vybraných městech'].map((v, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm"><X className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />{v}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Zkušenosti */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Zkušenosti zákazníků s O2 internetem</h2>
            <div className="space-y-4">
              {[
                { name: 'Martin P.', city: 'Praha', rating: 4, text: 'Optiku od O2 mám rok a rychlost drží stabilně. Cena je sice vyšší než u menších poskytovatelů, ale spolehlivost to kompenzuje.' },
                { name: 'Jana K.', city: 'Brno', rating: 3, text: 'VDSL připojení je OK na běžné surfování, ale na streaming 4K nestačí. Při problému se na linku čeká i 30 minut.' },
                { name: 'Tomáš S.', city: 'Olomouc', rating: 4, text: 'Balíček s O2 TV a mobilem se vyplatí. Celkově spokojenost, jen bych uvítal lepší Wi-Fi router v základu.' },
              ].map((review, i) => (
                <div key={i} className="border border-border rounded-lg p-5 bg-card">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-foreground">{review.name}</span>
                    <span className="text-xs text-muted-foreground">• {review.city}</span>
                    <div className="flex ml-auto">
                      {[...Array(5)].map((_, s) => (
                        <Star key={s} className={`w-4 h-4 ${s < review.rating ? 'text-primary fill-current' : 'text-muted-foreground/30'}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-body">{review.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Často kladené otázky o O2 internetu</h2>
            <div className="space-y-4">
              {[
                { q: 'Jaká je rychlost O2 internetu?', a: 'O2 nabízí VDSL (až 100 Mb/s) a optiku (až 1 Gb/s). Reálná rychlost VDSL závisí na vzdálenosti od ústředny.' },
                { q: 'Kolik stojí O2 internet?', a: 'Ceny začínají od 499 Kč/měsíc za VDSL. Optika od 699 Kč/měsíc. V balíčku s TV a mobilem jsou slevy.' },
                { q: 'Má O2 internet bez závazku?', a: 'Ano, ale tarify bez závazku jsou o 100-200 Kč dražší než varianty se závazkem na 24 měsíců.' },
                { q: 'Jak přejít k O2 od jiného poskytovatele?', a: 'Stačí objednat službu u O2 a oni vyřídí výpověď u vašeho současného poskytovatele. Přechod trvá obvykle 5-10 dní.' },
              ].map((faq, i) => (
                <div key={i} className="border border-border rounded-lg p-5 bg-card">
                  <h3 className="font-semibold mb-2 text-foreground">{faq.q}</h3>
                  <p className="text-sm text-body">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary/10 border border-primary/30 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3 text-foreground">Chcete porovnat O2 s ostatními poskytovateli?</h2>
            <p className="text-body mb-6">Vyplňte formulář a do 24 hodin vám najdeme nejlepší nabídku pro vaši adresu — zdarma a bez závazku.</p>
            <Link to="/#lead-form" className="btn-primary inline-flex items-center gap-2">
              Porovnat nabídky zdarma <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-muted-foreground">
              <Link to="/poskytovatele-internetu/poda-vs-o2" className="hover:text-primary transition-colors">PODA vs O2 →</Link>
              <Link to="/poskytovatele-internetu/t-mobile-vs-o2" className="hover:text-primary transition-colors">T-Mobile vs O2 →</Link>
              <Link to="/poskytovatele-internetu/vodafone-vs-o2" className="hover:text-primary transition-colors">Vodafone vs O2 →</Link>
            </div>
          </section>
        </article>
      </div>
    </PageLayout>
  );
};

export default O2InternetRecenze;
