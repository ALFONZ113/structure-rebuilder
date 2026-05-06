
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

interface CityCardProps {
  city: {
    name: string;
    region: string;
    population: string;
    bestProvider: string;
    averagePrice: string;
    maxSpeed: string;
    availability: string;
    image: string;
  };
}

const CityCard: React.FC<CityCardProps> = ({ city }) => {
  // Mapování názvu města na správnou cestu
  const getCityPath = (cityName: string) => {
    const cityPathMap: { [key: string]: string } = {
      'Ostrava': '/internet-ostrava',
      'Praha': '/internet-praha', 
      'Brno': '/internet-brno',
      'Plzeň': '/internet-plzen',
      'Hradec Králové': '/internet-hradec-kralove',
      'Frýdek-Místek': '/internet-frydek-mistek'
    };
    return cityPathMap[cityName] || '/#lead-form';
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 hover:border-primary/30 hover:-translate-y-1 rounded-none">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground">{city.name}</h3>
            <p className="text-muted-foreground text-sm">{city.region}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Populace</p>
            <p className="font-medium text-foreground">{city.population}</p>
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Nejlepší poskytovatel:</span>
            <span className="font-medium text-foreground">{city.bestProvider}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Průměrná cena:</span>
            <span className="font-medium text-foreground">{city.averagePrice}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Max. rychlost:</span>
            <span className="font-medium text-foreground">{city.maxSpeed}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Dostupnost optiky:</span>
            <span className="font-medium text-primary">{city.availability}</span>
          </div>
        </div>
        
        <Link 
          to={getCityPath(city.name)}
          className="btn-primary w-full text-center"
        >
          Najlepší internet v {city.name}
        </Link>
      </CardContent>
    </Card>
  );
};

export default CityCard;
