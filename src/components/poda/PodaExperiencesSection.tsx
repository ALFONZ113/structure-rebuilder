
import React from 'react';

const PodaExperiencesSection = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mt-10 mb-4">Zkušenosti zákazníků s PODA internetem</h2>
      <p className="mb-4">Na základě recenzí a diskuzních fór jsme shromáždili nejčastější zkušenosti uživatelů s PODA internetem:</p>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-primary/5 border border-primary/20 p-6">
          <h3 className="text-lg font-semibold mb-3 text-primary">Pozitivní zkušenosti:</h3>
          <ul className="list-disc pl-6 space-y-2 text-foreground">
            <li>Vysoká a stabilní rychlost optického připojení</li>
            <li>Příznivé ceny v porovnání s konkurencí</li>
            <li>Absence dlouhodobého závazku</li>
            <li>Rychlá instalace a aktivace služby</li>
            <li>Kvalitní zákaznická podpora</li>
          </ul>
        </div>

        <div className="bg-destructive/5 border border-destructive/20 p-6">
          <h3 className="text-lg font-semibold mb-3 text-destructive">Negativní zkušenosti:</h3>
          <ul className="list-disc pl-6 space-y-2 text-foreground">
            <li>Omezené pokrytí mimo větší města</li>
            <li>Občasné technické problémy u bezdrátového připojení</li>
            <li>Delší čekací doby na techniky v některých regionech</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PodaExperiencesSection;
