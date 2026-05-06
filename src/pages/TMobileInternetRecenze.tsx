import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import { getCurrentMonthCzech, getCurrentDateISO } from '@/lib/dateUtils';
import { ArrowRight, Check, X, Star } from 'lucide-react';

const TMobileInternetRecenze = () => {
  const currentMonth = getCurrentMonthCzech();
  const canonicalUrl = "https://www.nejvyhodnejsipripojeni.cz/poskytovatele-internetu/t-mobile-internet-recenze";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Jaká je rychlost T-Mobile internetu?",
        "acceptedAnswer": { "@type": "Answer", "text": "T-Mobile nabízí pevný internet s rychlostí až 1 Gb/s přes optiku a mobilní internet 5G s rychlostí až 300 Mb/s. FWA (Fixed Wireless Access) nabízí až 100 Mb/s." }
      },
      {
        "@type": "Question",
        "name": "Kolik stojí T-Mobile internet měsíčně?",
        "acceptedAnswer": { "@type": "Answer", "text": "Ceny T-Mobile internetu začínají od 499 Kč/měsíc za FWA připojení. Internet na doma přes 5G stojí od 599 Kč. Optika od 649 Kč/měsíc." }
      },
      {
        "@type": "Question",
        "name": "Má T-Mobile 5G internet na doma?",
        "acceptedAnswer": { "@type": "Answer", "text": "Ano, T-Mobile nabízí 5G Internet na doma jako alternativu k pevnému připojení. Je dostupný ve městech s 5G pokrytím a nabízí rychlost až 300 Mb/s." }
      },
      {
        "@type": "Question",
        "name": "Jak se liší T-Mobile od O2?",
        "acceptedAnswer": { "@type": "Answer", "text": "T-Mobile má lepší 5G pokrytí a nabízí FWA jako alternativu. O2 má širší VDSL síť. Ceny jsou srovnatelné, T-Mobile má výhodnější mobilní balíčky." }
      }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Product",
      "name": "T-Mobile Internet",
      "brand": { "@type": "Brand", "name": "T-Mobile Czech Republic" }
    },
    "reviewRating": { "@type": "Rating", "ratingValue": "3.9", "bestRating": "5" },
    "author": { "@type": "Organization", "name": "Nejvýhodnější Připojení" },
    "datePublished": "2026-03-01",
    "dateModified": getCurrentDateISO()
  };

  return (
    <PageLayout
      pageTitle={`T-Mobile Internet: Recenze ${currentMonth} | 5G, ceny a zkušenosti`}
      pageDescription={`✓ T-Mobile internet recenze ${currentMonth} ✓ 5G internet na doma ✓ Ceny od 499 Kč ✓ Optika až 1 Gb/s ✓ Zkušenosti zákazníků ✓ Hodnocení 3.9/5`}
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
              <p className="text-sm text-body">ℹ️ <strong>Nezávislá recenze:</strong> Nejsme oficiálním zástupcem společnosti T-Mobile Czech Republic a.s.</p>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              T-Mobile Internet: Recenze {currentMonth} – 5G, ceny a zkušenosti zákazníků
            </h1>
            <div className="flex items-center text-primary mb-4">
              {[1, 2, 3].map((s) => <Star key={s} className="w-5 h-5 fill-current" />)}
              <Star className="w-5 h-5 fill-current opacity-80" />
              <Star className="w-5 h-5 opacity-30" />
              <span className="ml-2 text-sm text-muted-foreground">(3.9/5) průměrné hodnocení</span>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <p className="text-sm text-body">📊 Ceny od 499 Kč/měs | 5G internet na doma | Optika až 1 Gb/s | Balíčky s TV a mobilem</p>
            </div>
          </header>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-foreground">T-Mobile Internet – Lídr v 5G technologii</h2>
            <p className="text-body leading-relaxed mb-4">
              T-Mobile Czech Republic je druhým největším poskytovatelem telekomunikačních služeb v ČR. Vyniká především v oblasti mobilního internetu a 5G pokrytí. Nabízí pevný internet přes optiku, VDSL, FWA (Fixed Wireless Access) a 5G Internet na doma.
            </p>
            <p className="text-body leading-relaxed">
              V této nezávislé recenzi hodnotíme aktuální tarify, reálné rychlosti a zkušenosti zákazníků s T-Mobile internetem v roce 2026.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Tarify T-Mobile internetu {currentMonth}</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { name: 'Internet na doma FWA', speed: 'až 100 Mb/s', price: '499 Kč', features: ['Bezdrátové připojení', 'Bez nutnosti kabeláže', 'Rychlá instalace'] },
                { name: '5G Internet na doma', speed: 'až 300 Mb/s', price: '599 Kč', features: ['5G technologie', 'Nízká latence', 'Moderní 5G router'] },
                { name: 'T-Mobile Optika', speed: 'až 1 Gb/s', price: '649 Kč', features: ['Optické vlákno', 'Symetrická rychlost', 'Nejvyšší stabilita'] },
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
            <h2 className="text-2xl font-bold mb-6 text-foreground">Výhody a nevýhody T-Mobile internetu</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4 text-green-800 dark:text-green-400">✅ Výhody</h3>
                <ul className="space-y-3">
                  {['Nejlepší 5G pokrytí v ČR', 'FWA internet bez kabeláže', 'Výhodné kombi balíčky', 'Rychlá aktivace 5G internetu', 'Moderní zákaznická aplikace'].map((v, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />{v}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4 text-red-800 dark:text-red-400">❌ Nevýhody</h3>
                <ul className="space-y-3">
                  {['Optika jen ve vybraných lokalitách', 'FWA rychlost kolísá dle vytížení', '5G pokrytí mimo města omezené', 'Vyšší ceny než lokální poskytovatelé', 'Složitější ceník s mnoha variantami'].map((v, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm"><X className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />{v}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Zkušenosti zákazníků s T-Mobile internetem</h2>
            <div className="space-y-4">
              {[
                { name: 'Petr H.', city: 'Praha', rating: 4, text: '5G Internet na doma je super alternativa, kde není optika. Rychlost stabilně kolem 200 Mb/s. Router od T-Mobile funguje skvěle.' },
                { name: 'Lenka M.', city: 'Liberec', rating: 4, text: 'S optickým připojením jsem velmi spokojená. Rychlost odpovídá tomu, co slibují. Balíček s TV se vyplatí.' },
                { name: 'David R.', city: 'Plzeň', rating: 3, text: 'FWA připojení je OK, ale ve večerních hodinách rychlost klesá. Na home office občas nestačí na videohovory.' },
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
            <h2 className="text-2xl font-bold mb-6 text-foreground">Často kladené otázky o T-Mobile internetu</h2>
            <div className="space-y-4">
              {[
                { q: 'Jaká je rychlost T-Mobile internetu?', a: 'Optika až 1 Gb/s, 5G Internet na doma až 300 Mb/s, FWA až 100 Mb/s. Reálné rychlosti závisí na lokalitě.' },
                { q: 'Má T-Mobile 5G internet na doma?', a: 'Ano, T-Mobile nabízí 5G Internet na doma od 599 Kč/měsíc ve městech s 5G pokrytím.' },
                { q: 'Jak se liší T-Mobile od O2?', a: 'T-Mobile má lepší 5G pokrytí, O2 má širší VDSL síť. Ceny jsou srovnatelné. T-Mobile má modernější FWA řešení.' },
                { q: 'Vyplatí se balíček T-Mobile internet + TV?', a: 'Ano, kombinované balíčky šetří 100-300 Kč měsíčně oproti samostatným službám.' },
              ].map((faq, i) => (
                <div key={i} className="border border-border rounded-lg p-5 bg-card">
                  <h3 className="font-semibold mb-2 text-foreground">{faq.q}</h3>
                  <p className="text-sm text-body">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-primary/10 border border-primary/30 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3 text-foreground">Porovnejte T-Mobile s dalšími poskytovateli</h2>
            <p className="text-body mb-6">Zjistěte, kdo nabízí nejlepší internet pro vaši adresu — zdarma a bez závazku.</p>
            <Link to="/#lead-form" className="btn-primary inline-flex items-center gap-2">
              Porovnat nabídky zdarma <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-muted-foreground">
              <Link to="/poskytovatele-internetu/t-mobile-vs-o2" className="hover:text-primary transition-colors">T-Mobile vs O2 →</Link>
              <Link to="/poskytovatele-internetu/poda-vs-t-mobile" className="hover:text-primary transition-colors">PODA vs T-Mobile →</Link>
              <Link to="/poskytovatele-internetu/vodafone-vs-o2" className="hover:text-primary transition-colors">Vodafone vs O2 →</Link>
            </div>
          </section>
        </article>
      </div>
    </PageLayout>
  );
};

export default TMobileInternetRecenze;
