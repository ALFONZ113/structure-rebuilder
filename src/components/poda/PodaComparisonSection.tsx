
import React from 'react';
import { Link } from 'react-router-dom';

const PodaComparisonSection = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mt-10 mb-4">Srovnání s konkurencí</h2>

      <h3 className="text-xl font-semibold mb-3">PODA vs. O2</h3>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Podle veřejných ceníků jsou ceny PODA nižší za srovnatelné rychlosti</li>
        <li>O2 má širší celostátní pokrytí</li>
        <li>PODA poskytuje služby bez dlouhodobého závazku, zatímco O2 často vyžaduje 12-24měsíční smlouvu</li>
        <li>
          <Link to="/kontakt" className="text-primary hover:text-primary/80">
            Porovnejte více poskytovatelů pro vaši adresu →
          </Link>
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">PODA vs. T-Mobile</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>PODA uvádí vyšší maximální rychlost (2 Gb/s) oproti T-Mobile (1 Gb/s)</li>
        <li>T-Mobile nabízí výhody při kombinaci s mobilními službami</li>
        <li>Ceny PODA jsou podle ceníku nižší u srovnatelných tarifů</li>
        <li>
          <Link to="/kontakt" className="text-primary hover:text-primary/80">
            Porovnejte více poskytovatelů →
          </Link>
        </li>
      </ul>
    </>
  );
};

export default PodaComparisonSection;
