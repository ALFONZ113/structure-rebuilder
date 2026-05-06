import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import InternetComparisonTable from '@/components/InternetComparisonTable';
import LeadForm from '@/components/LeadForm';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ScrollReveal from '@/components/ui/ScrollReveal';

const homeProviders = [
  {
    provider: "PODA",
    maxSpeed: "2 Gb/s", 
    priceFrom: "340 Kč",
    technology: "Optika",
    benefits: "Ideálne pre prácu z domu a streaming"
  },
  {
    provider: "O2",
    maxSpeed: "2 Gb/s",
    priceFrom: "399 Kč", 
    technology: "Optika + O2 TV",
    benefits: "Internet + televízia v balíčku"
  },
  {
    provider: "T-Mobile",
    maxSpeed: "1 Gb/s",
    priceFrom: "299 Kč",
    technology: "Optika/VDSL",
    benefits: "Výhodne s mobil balíčkami"
  },
  {
    provider: "Vodafone",
    maxSpeed: "1 Gb/s",
    priceFrom: "459 Kč",
    technology: "Kabel/Optika",
    benefits: "Stabilné pre rodiny"
  }
];

const NejlepsiInternetNaDoma = () => {
  const canonicalUrl = "https://www.nejvyhodnejsipripojeni.cz/nejlepsi-internet-na-doma";
  
  return (
    <PageLayout
      pageTitle="Najlepší internet na doma - Odporúčania pre rodiny"
      pageDescription="Vyberieme ideálne internetové pripojenie pre vašu domácnosť. Porovnáme rýchlosti, ceny a služby podľa veľkosti rodiny a potrieb."
      pageType="article"
      publishDate="2025-07-06"
    >
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content="internet na doma, domáce pripojenie, internet pre rodinu, najlepší internet domácnosť, wifi doma" />
      </Helmet>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <article>
          <header className="mb-8 text-center">
            <ScrollReveal>
              <h1 className="heading-lg mb-4">Najlepší internet na doma 2025</h1>
              <p className="text-premium max-w-3xl mx-auto">
                Vyberieme ideálne internetové pripojenie pre vašu domácnosť podľa počtu členov rodiny, použitia a rozpočtu.
              </p>
            </ScrollReveal>
          </header>

          <ScrollReveal delay={200}>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 text-center">
                <Badge className="mb-3 bg-green-100 text-green-800">1-2 osoby</Badge>
                <h3 className="font-semibold text-lg mb-2">Základné potreby</h3>
                <p className="text-gray-600 mb-3">50-100 Mb/s</p>
                <ul className="text-sm text-gray-500 text-left space-y-1">
                  <li>• Surfovanie, e-maily</li>
                  <li>• Občasný streaming</li>
                  <li>• Práca z domu</li>
                </ul>
              </Card>
              
              <Card className="p-6 text-center">
                <Badge className="mb-3 bg-blue-100 text-blue-800">3-4 osoby</Badge>
                <h3 className="font-semibold text-lg mb-2">Stredné potreby</h3>
                <p className="text-gray-600 mb-3">300-500 Mb/s</p>
                <ul className="text-sm text-gray-500 text-left space-y-1">
                  <li>• Multiple streaming 4K</li>
                  <li>• Online gaming</li>
                  <li>• Videohovory</li>
                </ul>
              </Card>
              
              <Card className="p-6 text-center">
                <Badge className="mb-3 bg-purple-100 text-purple-800">5+ osôb</Badge>
                <h3 className="font-semibold text-lg mb-2">Vysoké nároky</h3>
                <p className="text-gray-600 mb-3">1-2 Gb/s</p>
                <ul className="text-sm text-gray-500 text-left space-y-1">
                  <li>• Streamovanie na viacerých zariadeniach</li>
                  <li>• Gaming + streaming súčasne</li>
                  <li>• Smart home zariadenia</li>
                </ul>
              </Card>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <h2 className="text-2xl font-semibold mb-6">Najlepšie tarify pre domácnosti</h2>
            <InternetComparisonTable data={homeProviders} />
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6">Odporúčania podľa typu použitia</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <h4 className="font-semibold text-lg mb-4 text-blue-700">🏢 Práca z domu</h4>
                  <div className="space-y-3">
                    <div>
                      <strong>Minimálne:</strong> 100 Mb/s upload 20 Mb/s
                    </div>
                    <div>
                      <strong>Odporúčané:</strong> 300 Mb/s upload 50 Mb/s
                    </div>
                    <div>
                      <strong>Najlepšie tarify:</strong>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• PODA 300 Mb/s - 340 Kč</li>
                        <li>• O2 300 Mb/s - 399 Kč</li>
                        <li>• T-Mobile 300 Mb/s - 399 Kč</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h4 className="font-semibold text-lg mb-4 text-green-700">🎮 Gaming a streaming</h4>
                  <div className="space-y-3">
                    <div>
                      <strong>Minimálne:</strong> 300 Mb/s, nízka latencia
                    </div>
                    <div>
                      <strong>Odporúčané:</strong> 500+ Mb/s, optika
                    </div>
                    <div>
                      <strong>Najlepšie tarify:</strong>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• PODA 1000 Mb/s - 440 Kč</li>
                        <li>• O2 500 Mb/s - 499 Kč</li>
                        <li>• Vodafone 1000 Mb/s - 699 Kč</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h4 className="font-semibold text-lg mb-4 text-purple-700">👨‍👩‍👧‍👦 Veľká rodina</h4>
                  <div className="space-y-3">
                    <div>
                      <strong>Minimálne:</strong> 500 Mb/s pre 4+ zariadenia
                    </div>
                    <div>
                      <strong>Odporúčané:</strong> 1-2 Gb/s unlimited
                    </div>
                    <div>
                      <strong>Najlepšie tarify:</strong>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• PODA 2000 Mb/s - 520 Kč</li>
                        <li>• O2 1000 Mb/s - 699 Kč</li>
                        <li>• T-Mobile 1000 Mb/s - 699 Kč</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h4 className="font-semibold text-lg mb-4 text-orange-700">💰 Rozpočtové riešenie</h4>
                  <div className="space-y-3">
                    <div>
                      <strong>Cieľ:</strong> Pod 400 Kč mesačne
                    </div>
                    <div>
                      <strong>Kompromis:</strong> Nižšie rýchlosti, stabilita
                    </div>
                    <div>
                      <strong>Najlepšie tarify:</strong>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• T-Mobile 50 Mb/s - 299 Kč</li>
                        <li>• PODA 300 Mb/s - 340 Kč</li>
                        <li>• O2 100 Mb/s - 399 Kč</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <Card className="p-6 mt-12 bg-gradient-to-r from-green-50 to-blue-50">
              <h3 className="text-xl font-semibold mb-4">💡 Expertné rady pre domácnosti</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Čo zohľadniť pri výbere:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Počet súčasne pripojených zariadení</li>
                    <li>• Typ použitia (streaming, práca, gaming)</li>
                    <li>• Upload rýchlosť pre videohovory</li>
                    <li>• Dostupnosť technológie vo vašej lokalite</li>
                    <li>• Možnosť rozšírenia v budúcnosti</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Rozdiely technológií:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li><strong>Optika:</strong> Najstabilnejšia, najrýchlejšia</li>
                    <li><strong>VDSL:</strong> Dobré pokrytie, stredné rýchlosti</li>
                    <li><strong>Kabel:</strong> Vysoké rýchlosti v mestách</li>
                    <li><strong>LTE/5G:</strong> Alternatíva tam, kde nie je optika</li>
                  </ul>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={1000}>
            <div className="mt-16" id="lead-form-doma">
              <h2 className="text-2xl font-semibold text-center mb-8">
                Vyberieme ideálne pripojenie pre vašu domácnosť
              </h2>
              <LeadForm />
            </div>
          </ScrollReveal>
        </article>
      </div>
    </PageLayout>
  );
};

export default NejlepsiInternetNaDoma;