import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

const FeaturedSnippetsComparison = () => {
  const providerComparison = [
    {
      rank: 1,
      provider: "PODA a.s.",
      speed: "až 2000 Mb/s",
      price: "od 340 Kč",
      coverage: "Moravskoslezský kraj",
      advantage: "Najrýchlejšie pripojenie, tradícia od 1996"
    },
    {
      rank: 2,
      provider: "O2",
      speed: "až 1 Gb/s",
      price: "od 590 Kč",
      coverage: "Celá ČR",
      advantage: "Najlepšie pokrytie v ČR"
    },
    {
      rank: 3,
      provider: "T-Mobile",
      speed: "až 1 Gb/s",
      price: "od 599 Kč",
      coverage: "Celá ČR",
      advantage: "Výhodné balíčky s mobilom"
    },
    {
      rank: 4,
      provider: "Vodafone",
      speed: "až 1 Gb/s",
      price: "od 599 Kč",
      coverage: "Väčšie mestá",
      advantage: "Stabilné pripojenie v mestách"
    }
  ];

  const connectionTypes = [
    {
      type: "Optické pripojenie",
      speed: "50 Mb/s - 2 Gb/s",
      stability: "Výborná",
      price: "599 - 1299 Kč",
      bestFor: "Rodiny, práca z domu, streaming"
    },
    {
      type: "ADSL/VDSL",
      speed: "10 - 100 Mb/s",
      stability: "Dobrá",
      price: "399 - 699 Kč",
      bestFor: "Základné používanie internetu"
    },
    {
      type: "Bezdrôtové (FWA)",
      speed: "25 - 300 Mb/s",
      stability: "Dobrá",
      price: "499 - 899 Kč",
      bestFor: "Oblasti bez optického pokrytia"
    }
  ];

  return (
    <section className="section bg-white">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="section-title">Porovnanie poskytovateľov internetu 2025</h2>
          <p className="section-subtitle">
            Aktuálne hodnotenie poskytovateľov podľa rýchlosti, ceny a pokrytia
          </p>
        </ScrollReveal>

        {/* Providers Ranking Table */}
        <ScrollReveal className="mt-12">
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Poradie
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Poskytovateľ
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Max. rýchlosť
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cena od
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Pokrytie
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hlavná výhoda
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {providerComparison.map((item) => (
                  <tr key={item.rank} className={item.rank === 1 ? "bg-green-50" : ""}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-white text-sm font-bold ${
                        item.rank === 1 ? 'bg-green-500' : 
                        item.rank === 2 ? 'bg-blue-500' : 
                        item.rank === 3 ? 'bg-orange-500' : 'bg-gray-500'
                      }`}>
                        {item.rank}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      {item.provider}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      {item.speed}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      {item.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      {item.coverage}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {item.advantage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        {/* Connection Types Comparison */}
        <ScrollReveal className="mt-16">
          <h3 className="text-2xl font-semibold mb-8">Typy internetového pripojenia</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {connectionTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <h4 className="text-xl font-semibold mb-4 text-gray-900">{type.type}</h4>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-gray-700">Rýchlosť:</span>
                    <span className="ml-2 text-gray-600">{type.speed}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Stabilita:</span>
                    <span className="ml-2 text-gray-600">{type.stability}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Cena:</span>
                    <span className="ml-2 text-gray-600">{type.price}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Najlepšie pre:</span>
                    <span className="ml-2 text-gray-600">{type.bestFor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturedSnippetsComparison;
