
import React from 'react';
import { Link } from 'react-router-dom';

const CityLinksFooter = () => {
  const cityPages = [
    { name: "Ostrava", path: "/internet-ostrava" },
    { name: "Karviná", path: "/internet-karvina" },
    { name: "Havířov", path: "/internet-havirov" },
    { name: "Bohumín", path: "/internet-bohumin" },
    { name: "Praha", path: "/nejlepsi-internet-praha-2025" },
    { name: "Brno", path: "/internet-brno" },
    { name: "Liberec", path: "/internet-liberec" },
    { name: "Plzeň", path: "/internet-plzen" },
    { name: "České Budějovice", path: "/internet-ceske-budejovice" },
    { name: "Hradec Králové", path: "/internet-hradec-kralove" },
    { name: "Pardubice", path: "/internet-pardubice" },
    { name: "Ústí nad Labem", path: "/internet-usti-nad-labem" },
    { name: "Zlín", path: "/internet-zlin" },
    { name: "Olomouc", path: "/internet-olomouc" },
    { name: "Opava", path: "/internet-opava" },
    { name: "Frýdek-Místek", path: "/internet-frydek-mistek" },
    { name: "Kladno", path: "/internet-kladno" }
  ];

  return (
    <section className="bg-gray-100 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Internet ve vašem městě
          </h3>
          <p className="text-gray-600 text-sm">
            Najdeme nejlepší internetové připojení pro vaši lokalitu
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 text-center">
          {cityPages.map((city) => (
            <Link
              key={city.path}
              to={city.path}
              className="text-sm text-gray-600 hover:text-brand-accent-blue transition-colors duration-200 py-1"
            >
              {city.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityLinksFooter;
