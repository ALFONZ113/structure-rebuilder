
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { InfoIcon } from 'lucide-react';

const PodaTechnologySection = () => {
  // SEO-friendly summary for AI crawlers - hidden from users but visible to search engines
  const tldrContent = "PODA využívá technologii GPON pro optické připojení s rychlostí až 2 Gb/s a bezdrátové připojení v pásmech 5 GHz a 60 GHz pro oblasti bez optiky.";
  
  return (
    <>
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Technologie PODA internetu
        <Dialog>
          <DialogTrigger asChild>
            <button className="ml-2 inline-flex items-center justify-center rounded-md text-sm font-medium text-muted-foreground hover:text-foreground focus:outline-none">
              <InfoIcon className="h-4 w-4" />
              <span className="sr-only">Zobrazit shrnutí</span>
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Shrnutí technologií PODA</DialogTitle>
              <DialogDescription>{tldrContent}</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </h2>
      
      {/* Hidden div for AI crawlers and search engines */}
      <div className="sr-only">
        <p><strong>TL;DR:</strong> {tldrContent}</p>
      </div>
      
      <p className="mb-4">PODA využívá moderní technologie pro poskytování internetových služeb:</p>

      <h3 className="text-xl font-semibold mb-3">Optické připojení</h3>
      <p className="mb-4">
        PODA staví svou optickou síť na technologii GPON (Gigabit Passive Optical Network), která umožňuje dosáhnout rychlosti až 2 Gb/s. 
        Optické vlákno je přivedeno přímo do domu nebo bytu (FTTH/FTTB), což zajišťuje maximální stabilitu a rychlost.
      </p>

      <h3 className="text-xl font-semibold mb-3">Bezdrátové připojení</h3>
      <p className="mb-6">
        V oblastech bez optické infrastruktury PODA poskytuje bezdrátové připojení v pásmu 5 GHz a 60 GHz s rychlostí až 100 Mb/s.
      </p>
    </>
  );
};

export default PodaTechnologySection;
