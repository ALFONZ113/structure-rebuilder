import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import { getCurrentMonthCzech, getCurrentDateISO } from '@/lib/dateUtils';
import { ArrowRight, Check, X, Star } from 'lucide-react';

const VodafoneInternetRecenze = () => {
  const currentMonth = getCurrentMonthCzech();
  const canonicalUrl = "https://www.nejvyhodnejsipripojeni.cz/poskytovatele-internetu/vodafone-internet-recenze";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Jaká je rychlost Vodafone internetu?",
        "acceptedAnswer": { "@type": "Answer", "text": "Vodafone nabízí pevný internet přes optiku až 1 Gb/s a mobilní 5G internet. FWA připojení nabízí rychlosti až 100 Mb/s." }
      },
      {
        "@type": "Question",
        "name": "Kolik stojí Vodafone internet?",
        "acceptedAnswer": { "@type": "Answer", "text": "Ceny Vodafone internetu začínají od 499 Kč/měsíc. Optické připojení stojí od 649 Kč/měsíc. S mobilním tarifem získáte slevu." }
      },
      {
        "@type": "Question",
        "name": "Má Vodafone internet bez závazku?",
        "acceptedAnswer": { "@type": "Answer", "text": "Ano, Vodafone nabízí tarify bez závazku i se závazkem. Tarify se závazkem na 24 měsíců jsou levnější." }
      },
      {
        "@type": "Question",
        "name": "Jak se liší Vodafone od O2 a T-Mobile?",
        "acceptedAnswer": { "@type": "Answer", "text": "Vodafone vyniká výhodnými kombi balíčky s mobilem. Má menší pokrytí než O2, ale nabízí konkurenceschopné ceny optiky." }
      }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Product",
      "name": "Vodafone Internet",
      "brand": { "@type": "Brand", "name": "Vodafone Czech Republic" }
    },
    "reviewRating": { "@type": "Rating", "ratingValue": "3.7", "bestRating": "5" },
    "author": { "@type": "Organization", "name": "Nejvýhodnější Připojení" },
    "datePublished": "2026-03-01",
    "dateModified": getCurrentDateISO()
  };

  return (
    <PageLayout
      pageTitle={`Vodafone Internet: Recenze ${currentMonth} | Ceny, rychlost a zkušenosti`}
      pageDescription={`✓ Vodafone internet recenze ${currentMonth} ✓ Ceny od 499 Kč ✓ Optika až 1 Gb/s ✓ Výhodné kombi balíčky ✓ Zkušenosti zákazníků ✓ Hodnocení 3.7/5`}
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
          <header className="mb-8">
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-6">
              <p className="text-sm text-body">ℹ️ <strong>Nezávislá recenze:</strong> Nejsme oficiálním zástupcem společnosti Vodafone Czech Republic a.s.</p>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Vodafone Internet: Recenze {currentMonth} – Ceny, rychlost a zkušenosti
            </h1>
            <div className="flex items-center text-primary mb-4">
              {[1, 2, 3].map((s) => <Star key={s} className="w-5 h-5 fill-current" />)}
              <Star className="w-5 h-5 fill-current opacity-70" />
              <Star className="w-5 h-5 opacity-30" />
              <span className="ml-2 text-sm text-muted-foreground">(3.7/5) průměrné hodnocení</span>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <p className="text-sm text-body">📊 Ceny od 499 Kč/měs | Optika až 1 Gb/s | Kombi slevy s mobilem | Internet bez závazku</p>
            </div>
          </header>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Vodafone Internet – Silný v kombi balíčcích</h2>
            <p className="text-body leading-relaxed mb-4">
              Vodafone Czech Republic je třetím největším operátorem v ČR. V oblasti pevného internetu nabízí optické připojení, FWA a spolupracuje s lokálními poskytovateli. Hlavní výhodou jsou výhodné kombinace s mobilními tarify Vodafone.
            </p>
            <p className="text-body leading-relaxed">
              V této nezávislé recenzi se podíváme na aktuální nabídku, ceny a zkušenosti zákazníků s Vodafone internetem.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Tarify Vodafone internetu {currentMonth}</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { name: 'Vodafone Internet', speed: 'až 50 Mb/s', price: '499 Kč', features: ['DSL technologie', 'Wi-Fi router v ceně', 'Sleva s mobilem'] },
                { name: 'Vodafone Optika', speed: 'až 500 Mb/s', price: '649 Kč', features: ['Optické vlákno', 'Stabilní rychlost', 'Vhodné pro rodiny'] },
                { name: 'Vodafone Optika Giga', speed: 'až 1 Gb/s', price: '799 Kč', features: ['Nejvyšší rychlost', 'Symetrický upload', 'Pro náročné uživatele'] },
              ].map((tarif, i) => (
                <div key={i} className="border border-border rounded-xl p-6 bg-card">
                  <h3 className="font-bold text-lg mb-2 text-foreground">{tarif.name}</h3>
                  <p className="text-primary font-bold text-2xl mb-1">{tarif.price}<span className="text-sm font-normal text-muted-foreground">/měs</span></p>
                  <p className="text-sm text-muted-foreground mb-4">{tarif.speed}</p>
                  <ul className="space-y-2">
                    {tarif.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-body"><Check className="w-4 h-4 text-primary flex-shrink-0" />{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Výhody a nevýhody Vodafone internetu</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4 text-green-800 dark:text-green-400">✅ Výhody</h3>
                <ul className="space-y-3">
                  {['Výhodné kombi balíčky s mobilem', 'Konkurenceschopné ceny optiky', 'Internet bez závazku', 'Moderní zákaznická aplikace', 'Kvalitní zákaznická podpora'].map((v, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />{v}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4 text-red-800 dark:text-red-400">❌ Nevýhody</h3>
                <ul className="space-y-3">
                  {['Menší pokrytí optiky než O2', 'DSL rychlosti zaostávají', 'Méně prodejen než konkurence', 'Omezená nabídka TV služeb', 'Vyšší cena za Giga optiku'].map((v, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm"><X className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />{v}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Zkušenosti zákazníků s Vodafone internetem</h2>
            <div className="space-y-4">
              {[
                { name: 'Lukáš B.', city: 'Praha', rating: 4, text: 'Optiku od Vodafone mám půl roku. Rychlost drží spolehlivě, cena s mobilem vychází výhodně. Doporučuji.' },
                { name: 'Kateřina V.', city: 'Brno', rating: 3, text: 'DSL připojení je pomalé, ale jiná možnost v mé lokalitě není. Zákaznická podpora reaguje rychle.' },
                { name: 'Michal T.', city: 'Ostrava', rating: 4, text: 'Přešel jsem od O2 kvůli kombi balíčku. Ušetřím 300 Kč měsíčně a rychlost je stejná.' },
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

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Často kladené otázky o Vodafone internetu</h2>
            <div className="space-y-4">
              {[
                { q: 'Jaká je rychlost Vodafone internetu?', a: 'Optika až 1 Gb/s, DSL až 50 Mb/s. Reálná rychlost závisí na lokalitě a typu připojení.' },
                { q: 'Kolik stojí Vodafone internet?', a: 'Od 499 Kč/měsíc za DSL, od 649 Kč za optiku. S mobilním tarifem Vodafone získáte slevu až 200 Kč.' },
                { q: 'Jak přejít k Vodafone od jiného poskytovatele?', a: 'Vodafone za vás vyřídí výpověď u stávajícího poskytovatele. Přechod trvá 5-10 pracovních dní.' },
                { q: 'Vyplatí se kombi balíček Vodafone?', a: 'Ano, kombinace internet + mobil ušetří 100-300 Kč měsíčně oproti samostatným službám.' },
              ].map((faq, i) => (
                <div key={i} className="border border-border rounded-lg p-5 bg-card">
                  <h3 className="font-semibold mb-2 text-foreground">{faq.q}</h3>
                  <p className="text-sm text-body">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-primary/10 border border-primary/30 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3 text-foreground">Porovnejte Vodafone s dalšími poskytovateli</h2>
            <p className="text-body mb-6">Zjistěte, kdo nabízí nejlepší internet pro vaši adresu — zdarma a bez závazku.</p>
            <Link to="/#lead-form" className="btn-primary inline-flex items-center gap-2">
              Porovnat nabídky zdarma <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-muted-foreground">
              <Link to="/poskytovatele-internetu/vodafone-vs-o2" className="hover:text-primary transition-colors">Vodafone vs O2 →</Link>
              <Link to="/poskytovatele-internetu/poda-internet-recenze" className="hover:text-primary transition-colors">PODA recenze →</Link>
              <Link to="/poskytovatele-internetu/o2-internet-recenze" className="hover:text-primary transition-colors">O2 recenze →</Link>
            </div>
          </section>
        </article>
      </div>
    </PageLayout>
  );
};

export default VodafoneInternetRecenze;
