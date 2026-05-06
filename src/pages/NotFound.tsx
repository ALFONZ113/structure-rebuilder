
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeftIcon, HomeIcon, SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Stránka nenalezena | Nejvýhodnější Připojení</title>
        <meta name="description" content="Omlouváme se, ale hledanou stránku se nepodařilo najít. Vyzkoušejte naši domovskou stránku pro nalezení nejvýhodnějšího internetového připojení." />
        <meta name="robots" content="noindex, follow" />
        {/* Canonical link to avoid duplicate content issues */}
        <link rel="canonical" href="https://www.nejvyhodnejsipripojeni.cz/404" />
      </Helmet>
      
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center pt-32 pb-16 px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-6 relative">
            <div className="absolute inset-0 grid place-items-center">
              <div className="w-40 h-40 bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-20 animate-pulse-slow"></div>
            </div>
            <h1 className="text-8xl md:text-9xl font-bold text-gray-800 relative z-10">404</h1>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Stránka nenalezena</h2>
          
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Omlouváme se, ale hledaná stránka neexistuje nebo byla přesunuta. 
            Zkontrolujte, zda je URL správná, nebo se vraťte na domovskou stránku.
          </p>
          
          <div className="space-y-4">
            <Link to="/" className="button-primary inline-flex items-center">
              <HomeIcon className="w-4 h-4 mr-2" />
              Zpět na domovskou stránku
            </Link>
            
            <div className="mt-4 p-4 bg-green-50 border border-green-100 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Hledáte nejvýhodnější internetové připojení?</h3>
              <p className="text-gray-600 mb-4">
                Pomůžeme vám najít nejlepší nabídku internetu, TV a telefonu ve vaší lokalitě.
              </p>
              <Link to="/#lead-form" className="text-green-600 hover:text-green-800 font-medium inline-flex items-center">
                <SearchIcon className="w-4 h-4 mr-1" /> Zjistit dostupnost na mé adrese
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
