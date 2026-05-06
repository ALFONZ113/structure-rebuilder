
import React from 'react';
import CityCard from './CityCard';

const CityGrid: React.FC = () => {
  const cities = [
    {
      name: "Ostrava",
      region: "Moravskoslezský kraj",
      population: "280 000",
      bestProvider: "PODA",
      averagePrice: "340 Kč/měs",
      maxSpeed: "2 Gb/s",
      availability: "95%",
      image: "/lovable-uploads/ostrava-city.jpg"
    },
    {
      name: "Praha",
      region: "Hlavní město Praha",
      population: "1 300 000",
      bestProvider: "O2",
      averagePrice: "599 Kč/měs",
      maxSpeed: "1 Gb/s",
      availability: "98%",
      image: "/lovable-uploads/prague-city.jpg"
    },
    {
      name: "Brno",
      region: "Jihomoravský kraj",
      population: "380 000",
      bestProvider: "T-Mobile",
      averagePrice: "499 Kč/měs",
      maxSpeed: "1 Gb/s",
      availability: "92%",
      image: "/lovable-uploads/brno-city.jpg"
    },
    {
      name: "Plzeň",
      region: "Plzeňský kraj",
      population: "170 000",
      bestProvider: "O2",
      averagePrice: "549 Kč/měs",
      maxSpeed: "1 Gb/s",
      availability: "88%",
      image: "/lovable-uploads/plzen-city.jpg"
    },
    {
      name: "Hradec Králové",
      region: "Královéhradecký kraj",
      population: "93 000",
      bestProvider: "PODA",
      averagePrice: "420 Kč/měs",
      maxSpeed: "1 Gb/s",
      availability: "85%",
      image: "/lovable-uploads/hradec-city.jpg"
    },
    {
      name: "Frýdek-Místek",
      region: "Moravskoslezský kraj",
      population: "56 000",
      bestProvider: "PODA",
      averagePrice: "380 Kč/měs",
      maxSpeed: "1 Gb/s",
      availability: "90%",
      image: "/lovable-uploads/frydek-city.jpg"
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Internet ve vašem městě
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Najdeme nejlepší internetové připojení pro vaši lokalitu. Porovnáme všechny dostupné poskytovatele a vybereme tu nejlepší nabídku.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city) => (
            <CityCard key={city.name} city={city} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted mb-4">
            Nenašli jste své město? Nevadí! Najdeme nejlepší připojení kdekoli v ČR.
          </p>
          <a 
            href="/#lead-form" 
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-8 rounded-lg transition-colors"
          >
            Zjistit dostupnost ve vašem městě
          </a>
        </div>
      </div>
    </section>
  );
};

export default CityGrid;
