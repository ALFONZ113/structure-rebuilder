import React from 'react';
import BlogArticlePage from '@/components/blog/BlogArticlePage';
import BlogCTA from '@/components/blog/BlogCTA';
import iptvHeroImage from '@/assets/iptv-vs-kabelova-tv-hero.jpg';

const BlogIptvVsKabelovaTV = () => {
  const content = (
    <article className="prose prose-lg max-w-none">
      <p className="text-xl text-muted-foreground mb-6 font-medium">
        Volba mezi IPTV a kabelovou televizí ovlivní váš zážitek ze sledování i rodinný rozpočet. Porovnáme obě technologie a pomůžeme vám rozhodnout.
      </p>

      <h2>IPTV: Televize přes internet</h2>
      <p className="mb-6">
        IPTV (Internet Protocol Television) využívá vaše internetové připojení k doručování televizního obsahu. Místo tradičních kabelových nebo satelitních signálů sledujete programy prostřednictvím datového toku.
      </p>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
        <h3 className="text-lg font-semibold text-green-800 mb-3">Výhody IPTV:</h3>
        <ul className="list-disc pl-6 space-y-2 text-green-700">
          <li>Flexibilní sledování na více zařízeních</li>
          <li>Možnost pozastavení a převíjení živého vysílání</li>
          <li>Bohatá nabídka VOD (Video on Demand)</li>
          <li>Často levnější než kabelová TV</li>
        </ul>
      </div>

      <BlogCTA type="subtle" text="Najděte nejlevnější IPTV v Česku" />

      <h2>Kabelová televize: Tradiční řešení</h2>
      <p className="mb-6">
        Kabelová televize přenáší signál prostřednictvím koaxiálních kabelů přímo do vašeho domova. Jde o osvědčenou technologii s dlouholetou historií a stabilním výkonem.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">Výhody kabelové TV:</h3>
        <ul className="list-disc pl-6 space-y-2 text-blue-700">
          <li>Stabilní signál nezávislý na internetu</li>
          <li>Vysoká kvalita obrazu a zvuku</li>
          <li>Spolehlivost i při výpadku internetu</li>
          <li>Žádné buffering nebo zpoždění</li>
        </ul>
      </div>

      <h2>Cenové srovnání 2025</h2>
      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-2 text-left">Typ služby</th>
              <th className="border border-border px-4 py-2 text-center">IPTV</th>
              <th className="border border-border px-4 py-2 text-center">Kabelová TV</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">Základní balíček</td>
              <td className="border border-border px-4 py-2 text-center">299-599 Kč</td>
              <td className="border border-border px-4 py-2 text-center">399-699 Kč</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">Premium balíček</td>
              <td className="border border-border px-4 py-2 text-center">599-999 Kč</td>
              <td className="border border-border px-4 py-2 text-center">699-1299 Kč</td>
            </tr>
          </tbody>
        </table>
      </div>

      <blockquote className="border-l-4 border-primary pl-6 my-8 text-lg italic text-muted-foreground bg-primary/5 py-4">
        V roce 2025 IPTV nabízí až o 30% lepší poměr ceny a výkonu než tradiční kabelová televize.
      </blockquote>

      <BlogCTA type="inline" text="Porovnejte TV nabídky ve vaší oblasti" />

      <h2>Kterou technologii vybrat?</h2>
      <p className="mb-6">
        Volba závisí na vašich potřebách a možnostech. IPTV je ideální pro technicky zdatné uživatele s rychlým internetem, zatímco kabelová TV vyhovuje těm, kteří preferují jednoduchost a spolehlivost.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-400 p-6 my-8">
        <p className="text-amber-800 font-medium">
          <strong>Důležité:</strong> Pro IPTV potřebujete stabilní internet s rychlostí alespoň 25 Mb/s pro 4K obsah.
        </p>
      </div>

      <BlogCTA type="prominent" text="Získejte personalizované doporučení TV služby" />
    </article>
  );

  return (
    <BlogArticlePage
      title="IPTV vs Kabelová TV 2025: Kompletní Porovnání a Průvodce Výběrem"
      metaDescription="Porovnání IPTV a kabelové televize v roce 2025. Ceny, výhody, nevýhody a doporučení pro výběr nejlepší TV služby pro váš domov."
      publishDate="28. srpna 2025"
      author="Nejvýhodnější Připojení"
      category="Televize"
      readTime="5 min"
      heroImage={iptvHeroImage}
      perex1="Moderní IPTV nebo osvědčená kabelová televize?"
      perex2="Pomožeme vám vybrat ideální řešení pro vaši domácnost"
      content={content}
      keywords={['IPTV', 'kabelová televize', 'porovnání TV služeb', 'nejlepší televize 2025', 'TV balíčky']}
    />
  );
};

export default BlogIptvVsKabelovaTV;
