import PageLayout from '@/components/PageLayout';
const AboutUs = () => {
  return <PageLayout pageTitle="O nás | Nejvýhodnější Připojení" pageDescription="Zjistěte více o našem týmu a naší misi pomáhat lidem najít nejlepší internetové připojení v České republice.">
      <div className="container mx-auto px-4 py-12">
        <article className="prose max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">O nás</h1>
          
          <p className="text-lg mb-6">
            Vítejte na stránkách Nejvýhodnější Připojení! Jsme tým expertů, kteří se specializují na porovnávání a zprostředkování 
            internetového připojení po celé České republice.
          </p>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">Naše mise</h2>
          <p className="mb-6">
            Naším hlavním cílem je pomoci lidem v České republice najít nejlevnější a nejspolehlivější internetové připojení 
            přesně podle jejich potřeb. Na trhu existuje mnoho poskytovatelů s různými tarifními plány, technologiemi a pokrytím, 
            což může být pro běžného uživatele matoucí. My tuto složitost odstraňujeme a nabízíme jednoduché a přehledné srovnání.
          </p>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">Co nabízíme</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Nezávislé srovnání všech poskytovatelů internetu v ČR</li>
            <li>Přesné informace o dostupnosti služeb na vaší adrese</li>
            <li>Detailní recenze a hodnocení jednotlivých poskytovatelů</li>
            <li>Pomoc s výběrem a zajištěním instalace</li>
            <li>Poradenství při změně poskytovatele</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">Náš tým</h2>
          <p className="mb-6">
            Náš tým tvoří odborníci s letitými zkušenostmi v telekomunikačním odvětví. Máme hluboké znalosti o technologiích, 
            které stojí za internetovým připojením, a také o tom, jak funguje trh poskytovatelů internetu v České republice.
          </p>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">Jak pracujeme</h2>
          <p className="mb-6">
            Náš proces je jednoduchý:
          </p>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li>Vy nám sdělíte vaše požadavky a adresu instalace</li>
            <li>My prověříme dostupnost služeb na vaší adrese</li>
            <li>Představíme vám nejlepší možnosti podle vašich potřeb</li>
            <li>Pomůžeme vám s výběrem a zajistíme instalaci</li>
          </ol>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">Kontaktujte nás</h2>
          <p className="mb-6">
            Máte-li jakékoli dotazy nebo potřebujete pomoc s výběrem internetového připojení, 
            neváhejte nás kontaktovat. Jsme tu pro vás.
          </p>
          
          <div className="mt-12 border-t pt-8">
            <p className="text-lg font-semibold">Nejvýhodnější Připojení </p>
            <p>Praha</p>
            <p>Tel: +420 756 756 147</p>
            <p>Email: info@nejvyhodnejsipripojeni.cz</p>
          </div>
        </article>
      </div>
    </PageLayout>;
};
export default AboutUs;