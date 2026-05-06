
import React from 'react';
import { Link } from 'react-router-dom';

const PodaTvSection = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mt-10 mb-4">PODA net.TV - internetová televize</h2>
      <p className="mb-4">PODA nabízí také službu IPTV s výhodným tarifem:</p>
      
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>PODA net.TV</strong> - 100+ kanálů za 99 Kč měsíčně</li>
      </ul>

      <p className="mb-4">Výhody PODA net.TV:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Sledování až na 5 zařízeních současně</li>
        <li>7denní zpětné přehrávání</li>
        <li>Nahrávání pořadů</li>
        <li>Pauza a spuštění od začátku</li>
        <li>Mobilní aplikace pro sledování na cestách</li>
      </ul>
      
      <div className="my-6 p-4 bg-muted border border-border">
        <p className="mb-2">
          Chcete kombinovat internet a televizní služby za výhodnou cenu? 
        </p>
        <Link to="/kontakt" className="text-primary hover:text-primary/80 font-medium">
          Kontaktujte nás a získejte nabídku internetové televize s výhodným balíčkem →
        </Link>
      </div>
    </>
  );
};

export default PodaTvSection;
