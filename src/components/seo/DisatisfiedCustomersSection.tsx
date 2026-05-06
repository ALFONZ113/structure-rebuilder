
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const DisatisfiedCustomersSection = () => {
  const navigate = useNavigate();

  const handleRedirectToForm = () => {
    navigate('/#lead-form');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Nejste spokojeni s vaším internetem?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Pomalé připojení, vysoké ceny, slabý signál? Najdeme vám lepší řešení!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-red-600">Pomalý internet?</h3>
              <p className="text-gray-600">Najdeme vám rychlejší připojení až 2 Gb/s za lepší cenu</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-red-600">Vysoké ceny?</h3>
              <p className="text-gray-600">Ušetříte až 500 Kč měsíčně s našimi doporučeními</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-red-600">Slabý signál?</h3>
              <p className="text-gray-600">Optické připojení s 99.9% dostupností</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-green-600">
              Změna poskytovatele je jednoduchá
            </h3>
            <p className="text-gray-600 mb-6">
              Vyřídíme celý proces za vás, včetně výpovědi původní smlouvy. 
              Bez výpadku internetu, bez stresu, bez závazků.
            </p>
            <Button 
              onClick={handleRedirectToForm}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
            >
              Najít lepší internet zdarma
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisatisfiedCustomersSection;
