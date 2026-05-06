
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProviderComparison = () => {
  const navigate = useNavigate();

  const handleRedirectToLeadForm = () => {
    navigate('/#lead-form');
  };

  return (
    <div className="prose max-w-none">
      <h2 className="text-2xl font-semibold mt-10 mb-4">Srovnání poskytovatelů internetu</h2>
      <p className="mb-4">
        Chcete vědět, jak si různí poskytovatelé stojí v přímém srovnání? Podívejte se na naše detailní porovnání:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <Link to="/poskytovatele-internetu/poda-vs-o2" className="text-primary hover:text-primary/80">
            Porovnat PODA a O2 nabídky
          </Link>
        </li>
        <li>
          <Link to="/poskytovatele-internetu/poda-vs-t-mobile" className="text-primary hover:text-primary/80">
            Porovnat PODA a T-Mobile tarify
          </Link>
        </li>
        <li>
          <Link to="/poskytovatele-internetu/vodafone-vs-o2" className="text-primary hover:text-primary/80">
            Zjistit výhodnější nabídku: Vodafone nebo O2
          </Link>
        </li>
        <li>
          <Link to="/poskytovatele-internetu/t-mobile-vs-o2" className="text-primary hover:text-primary/80">
            Získat lepší nabídku od T-Mobile nebo O2
          </Link>
        </li>
      </ul>
      
      <div className="mt-6 p-4 bg-primary/5 border border-primary/20">
        <p className="mb-2 text-foreground">
          Nevíte si rady s výběrem? <button onClick={handleRedirectToLeadForm} className="text-primary hover:text-primary/80 font-medium">Kontaktujte nás</button> a najdeme nejvhodnější řešení pro vaši domácnost.
        </p>
      </div>
    </div>
  );
};

export default ProviderComparison;
