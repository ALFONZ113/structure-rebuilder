
import PageLayout from '@/components/PageLayout';

const CookiesPolicy = () => {
  return (
    <PageLayout
      pageTitle="Zásady používání cookies | Nejvýhodnější Připojení"
      pageDescription="Informace o používání cookies na portálu Nejvýhodnější Připojení."
    >
      <div className="container mx-auto px-4 py-12">
        <article className="prose max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Zásady používání cookies</h1>
          
          <p className="mb-6">
            Tyto zásady používání cookies vysvětlují, jak společnost Nejvýhodnější Připojení s.r.o., se sídlem Nová 123, 110 00 Praha, 
            IČO: 12345678 (dále jen „my" nebo „naše společnost") používá cookies a podobné technologie na webových stránkách 
            www.nejvyhodnejsipripojeni.cz (dále jen „webové stránky").
          </p>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">1. Co jsou cookies</h2>
          <p className="mb-6">
            Cookies jsou malé textové soubory, které jsou ukládány do vašeho prohlížeče nebo zařízení při návštěvě našich webových stránek. 
            Cookies nám pomáhají zajistit správné fungování našich webových stránek, zlepšovat jejich výkon, poskytovat vám užitečné funkce 
            a umožňují nám lépe pochopit, jak jsou naše webové stránky používány.
          </p>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">2. Jaké typy cookies používáme</h2>
          <p className="mb-6">
            Na našich webových stránkách používáme následující typy cookies:
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">2.1 Nezbytné cookies</h3>
          <p className="mb-6">
            Tyto cookies jsou nezbytné pro správné fungování našich webových stránek. Umožňují vám využívat základní funkce, jako je 
            navigace na stránkách nebo přístup do zabezpečených částí webových stránek. Bez těchto cookies by webové stránky nefungovaly správně.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">2.2 Analytické cookies</h3>
          <p className="mb-6">
            Tyto cookies nám pomáhají porozumět tomu, jak návštěvníci používají naše webové stránky. Shromažďují anonymizované informace o tom, 
            které stránky navštěvujete, jak dlouho na nich zůstáváte, odkud jste přišli a na co klikáte. Tyto informace používáme pro 
            analýzu výkonu našich webových stránek a pro jejich zlepšování.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">2.3 Funkční cookies</h3>
          <p className="mb-6">
            Tyto cookies umožňují našim webovým stránkám zapamatovat si volby, které jste učinili (například uživatelské jméno, jazyk nebo 
            region, ve kterém se nacházíte), a poskytovat vylepšené a personalizované funkce.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">2.4 Marketingové cookies</h3>
          <p className="mb-6">
            Tyto cookies jsou používány k sledování návštěvníků napříč webovými stránkami. Záměrem je zobrazovat reklamy, které jsou relevantní 
            a zajímavé pro jednotlivé uživatele, a tím hodnotnější pro vydavatele a zadavatele reklamy třetích stran.
          </p>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">3. Jak dlouho cookies ukládáme</h2>
          <p className="mb-6">
            Cookies můžeme ukládat buď dočasně („relační cookies") nebo dlouhodoběji („trvalé cookies"):
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Relační cookies jsou dočasné a jsou automaticky vymazány, když zavřete váš prohlížeč.</li>
            <li>Trvalé cookies zůstávají ve vašem prohlížeči nebo zařízení po stanovenou dobu nebo dokud je ručně neodstraníte.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">4. Cookies třetích stran</h2>
          <p className="mb-6">
            Na našich webových stránkách také používáme cookies poskytované třetími stranami, které nám pomáhají analyzovat, jak jsou naše 
            webové stránky používány, a které zvyšují efektivitu našich marketingových aktivit. Tyto třetí strany mohou zahrnovat:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Google Analytics (služba pro analýzu návštěvnosti)</li>
            <li>Google Ads (reklamní služby)</li>
            <li>Facebook (reklamní služby a sociální pluginy)</li>
            <li>Další analytické a reklamní nástroje</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">5. Jak můžete spravovat cookies</h2>
          <p className="mb-6">
            Většina webových prohlížečů umožňuje spravovat cookies prostřednictvím nastavení prohlížeče. Můžete:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Zobrazit cookies uložené ve vašem prohlížeči a odstranit konkrétní cookies</li>
            <li>Blokovat cookies třetích stran</li>
            <li>Blokovat cookies z konkrétních webových stránek</li>
            <li>Blokovat všechny cookies</li>
            <li>Odstranit všechny cookies při ukončení prohlížeče</li>
          </ul>
          <p className="mb-6">
            Upozorňujeme, že pokud se rozhodnete blokovat cookies, některé funkce našich webových stránek nemusí fungovat správně nebo vůbec.
          </p>
          <p className="mb-6">
            Jak spravovat cookies v různých prohlížečích:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/cs/kb/povoleni-zakazani-cookies" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.microsoft.com/cs-cz/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer">Internet Explorer</a></li>
            <li><a href="https://support.apple.com/cs-cz/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
            <li><a href="https://help.opera.com/cs/latest/web-preferences/#cookies" target="_blank" rel="noopener noreferrer">Opera</a></li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">6. Změny zásad používání cookies</h2>
          <p className="mb-6">
            Tyto zásady používání cookies můžeme čas od času aktualizovat. Aktuální verzi vždy naleznete na našich webových stránkách.
          </p>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">7. Kontaktní údaje</h2>
          <p className="mb-6">
            Pokud máte jakékoli dotazy ohledně našich zásad používání cookies, kontaktujte nás na:
          </p>
          <ul className="list-none mb-6">
            <li>E-mail: info@nejvyhodnejsipripojeni.cz</li>
            <li>Telefon: +420 756 756 147</li>
            <li>Adresa: Praha</li>
          </ul>
          
          <div className="mt-12 text-right">
            <p>Tyto zásady používání cookies jsou platné a účinné od 1. 4. 2025.</p>
          </div>
        </article>
      </div>
    </PageLayout>
  );
};

export default CookiesPolicy;
