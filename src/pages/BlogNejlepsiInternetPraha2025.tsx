import React from 'react';
import BlogArticlePage from '@/components/blog/BlogArticlePage';
import BlogCTA from '@/components/blog/BlogCTA';
import prahaHeroImage from '@/assets/nejlepsi-internet-praha-hero.jpg';

const BlogNejlepsiInternetPraha2025 = () => {
  const content = (
    <article className="prose prose-lg max-w-none">
      <div className="mb-8">
        <img 
          src={prahaHeroImage} 
          alt="Nejlepší internet Praha 2025 - rychlé připojení v hlavním městě" 
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>
      
      <p className="text-xl text-gray-700 mb-6 font-medium">
        Praha nabízí nejširší výběr internetových poskytovatelů v České republice. Najděte nejlepší připojení pro vaši pražskou adresu s rychlostmi až 1000 Mb/s.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Nejlepší poskytovatelé v Praze 2025</h2>
      <p className="mb-6">
        Hlavní město má nejlepší internetovou infrastrukturu v republice. Optické sítě pokrývají více než 90% domácností a nabídky se liší podle čtvrti.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">🏆 TOP 3 poskytovatelé v Praze:</h3>
        <ol className="list-decimal pl-6 space-y-2 text-blue-700">
          <li><strong>O2:</strong> Nejlepší pokrytí, rychlosti až 1000 Mb/s</li>
          <li><strong>T-Mobile:</strong> Stabilní síť, výhodné balíčky</li>
          <li><strong>Vodafone:</strong> Nejrychlejší aktivace, až 500 Mb/s</li>
        </ol>
      </div>

      <BlogCTA type="inline" text="Porovnejte nabídky pro vaši pražskou adresu" />

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Pokrytí podle pražských čtvrtí</h2>
      <p className="mb-6">
        Ne všechny čtvrti mají stejnou kvalitu připojení. Praha 1-6 má nejlepší infrastrukturu, zatímco okrajové části mohou mít omezené možnosti.
      </p>

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Čtvrť</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Optické pokrytí</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Nejlepší rychlost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Praha 1-4 (centrum)</td>
              <td className="border border-gray-300 px-4 py-2 text-center">95%+</td>
              <td className="border border-gray-300 px-4 py-2 text-center">1000 Mb/s</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">Praha 5-8</td>
              <td className="border border-gray-300 px-4 py-2 text-center">90%+</td>
              <td className="border border-gray-300 px-4 py-2 text-center">500-1000 Mb/s</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Praha 9-15</td>
              <td className="border border-gray-300 px-4 py-2 text-center">80%+</td>
              <td className="border border-gray-300 px-4 py-2 text-center">200-500 Mb/s</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Ceny internetu v Praze</h2>
      <p className="mb-6">
        Konkurence v Praze tlačí ceny dolů. Průměrná cena za 100 Mb/s je 599 Kč měsíčně, za gigabitové připojení zaplatíte od 899 Kč.
      </p>

      <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8">
        <p className="text-green-800 font-medium">
          💰 <strong>Tip pro úsporu:</strong> V Praze můžete ušetřit až 200 Kč měsíčně díky častým akcím a vysoké konkurenci poskytovatelů.
        </p>
      </div>

      <BlogCTA type="subtle" text="Získejte nejlevnější tarif pro Prahu" />

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Budoucnost internetu v Praze</h2>
      <p className="mb-6">
        Praha se připravuje na 5G sítě a Wi-Fi 6E technologie. Do konce roku 2025 očekáváme kompletní pokrytí všech čtvrtí optickými sítěmi.
      </p>

      <BlogCTA type="prominent" text="Rezervujte si nejlepší tarif už dnes" />
    </article>
  );

  return (
    <BlogArticlePage
      title="Nejlepší Internet Praha 2025: Kompletní Průvodce Rychlým Připojením"
      metaDescription="Najděte nejlepší internet v Praze 2025. Porovnání poskytovatelů, cen a rychlostí pro všechny pražské čtvrti. Optické sítě až 1000 Mb/s."
      publishDate="28. srpna 2025"
      author="Nejvýhodnější Připojení"
      category="Města"
      readTime="5 min"
      heroImage={prahaHeroImage}
      perex1="Praha má nejlepší internetovou infrastrukturu v ČR"
      perex2="Optické sítě pokrývají více než 90% domácností"
      content={content}
      keywords={['nejlepší internet Praha', 'internet Praha 2025', 'optika Praha', 'rychlý internet Praha', 'poskytovatelé Praha']}
    />
  );
};

export default BlogNejlepsiInternetPraha2025;