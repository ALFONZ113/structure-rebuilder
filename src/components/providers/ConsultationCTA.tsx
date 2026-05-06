
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConsultationCTA = () => {
  const navigate = useNavigate();

  const handleRedirectToLeadForm = () => {
    navigate('/#lead-form');
  };

  return (
    <div className="mt-12 p-6 bg-primary/5 border border-primary/20">
      <h3 className="text-xl font-semibold mb-3 text-foreground">Nechte si poradit s výběrem internetu</h3>
      <p className="mb-4 text-muted-foreground">
        Nejste si jistí, který poskytovatel je pro vás ideální? Vyplňte nezávazný formulář a my vám pomůžeme najít 
        nejvýhodnější řešení pro vaši domácnost nebo firmu.
      </p>
      <button 
        onClick={handleRedirectToLeadForm}
        className="btn-primary"
      >
        Nezávazná konzultace zdarma
      </button>
    </div>
  );
};

export default ConsultationCTA;
