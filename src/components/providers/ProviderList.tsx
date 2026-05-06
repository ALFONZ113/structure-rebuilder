
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProviderList = () => {
  const navigate = useNavigate();

  const handleRedirectToLeadForm = () => {
    navigate('/#lead-form');
  };
  
  return (
    <>
      <h2 className="text-2xl font-semibold mt-10 mb-4" id="poskytovatele">Přehled poskytovatelů internetu</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">PODA - Rychlý a cenově dostupný internet</h3>
        <p className="mb-4">
          PODA patří mezi rostoucí české poskytovatele s důrazem na kvalitní optické připojení. 
          Společnost nabízí internetové služby pro domácnosti i firmy s rychlostí až 2 Gb/s.
        </p>
        <p>
          <Link to="/poskytovatele-internetu/poda-internet-recenze" className="text-green-500 hover:text-green-700 font-medium">
            Získejte nabídku PODA internetu
          </Link> nebo <button onClick={handleRedirectToLeadForm} className="text-green-500 hover:text-green-700 font-medium bg-transparent border-none p-0 cursor-pointer inline">kontaktujte naše specialisty</button> pro více informací.
        </p>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">O2 - Celostátní pokrytí a komplexní služby</h3>
        <p className="mb-4">
          O2 je největší poskytovatel internetu v ČR s širokou nabídkou služeb. Nabízí optické i VDSL připojení 
          s rychlostí až 2 Gb/s a pokrytím ve většině obcí. Součástí balíčků je často také O2 TV a další doplňkové služby.
        </p>
        <p className="mb-4">Hlavní výhody O2:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Nejširší pokrytí v ČR</li>
          <li>O2 TV v ceně některých tarifů</li>
          <li>Možnost kombinace s mobilními službami</li>
          <li>Stabilní a spolehlivé připojení</li>
        </ul>
        <p>
          <button onClick={handleRedirectToLeadForm} className="text-green-500 hover:text-green-700 font-medium bg-transparent border-none p-0 cursor-pointer">
            Zjistit dostupnost O2 na vaší adrese →
          </button>
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">T-Mobile - Výhodné balíčky a kvalitní služby</h3>
        <p className="mb-4">
          T-Mobile nabízí pevný internet prostřednictvím optické sítě a VDSL. Kromě vysokých rychlostí až 1 Gb/s 
          láká zákazníky na výhodné balíčky s mobilními službami a kvalitní zákaznickou podporu.
        </p>
        <p className="mb-4">Proč zvolit T-Mobile:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Výhodné balíčky s mobilními službami</li>
          <li>Kvalitní zákaznická podpora</li>
          <li>Moderní optická síť</li>
          <li>Bez závazku u vybraných tarifů</li>
        </ul>
        <p>
          <button onClick={handleRedirectToLeadForm} className="text-green-500 hover:text-green-700 font-medium bg-transparent border-none p-0 cursor-pointer">
            Porovnat nabídky T-Mobile s konkurencí →
          </button>
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Vodafone - Komplexní řešení pro domácnosti</h3>
        <p className="mb-4">
          Vodafone nabízí pevný internet přes optické a kabelové sítě. Vyniká možností kombinace s Vodafone TV 
          a mobilními službami. Rychlosti dosahují až 1 Gb/s a služby jsou dostupné především ve větších městech.
        </p>
        <p className="mb-4">Výhody Vodafone internetu:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Výkonné připojení přes optiku nebo kabel</li>
          <li>Vodafone TV s bohatou programovou nabídkou</li>
          <li>Zvýhodněné balíčky služeb</li>
          <li>Kvalitní pokrytí ve městech</li>
        </ul>
        <p>
          <button onClick={handleRedirectToLeadForm} className="text-green-500 hover:text-green-700 font-medium bg-transparent border-none p-0 cursor-pointer">
            Zjistit nejvýhodnější nabídku Vodafone →
          </button>
        </p>
      </div>
    </>
  );
};

export default ProviderList;
