import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import futuristicGlobe from '@/assets/futuristic-globe-hero.png';
import { NeonButton } from '@/components/ui/neon-button';
import { ArrowRight, Wifi, Globe, Zap, Shield, Star } from 'lucide-react';

const FuturisticIntro = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const navigate = useNavigate();

  const heroTexts = [
    "Budúcnosť internetu",
    "Globálne pripojenie",
    "Neónová rýchlosť",
    "Digitálny svet"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % heroTexts.length);
    }, 3000);

    return () => clearInterval(textInterval);
  }, []);

  const handleContinue = () => {
    navigate('/');
  };

  return (
    <>
      <Helmet>
        <title>Futuristická internetová cesta | Najlepšie pripojenie</title>
        <meta name="description" content="Vstúpte do budúcnosti internetu s nami. Globálne pripojenie s neónovou rýchlosťou." />
      </Helmet>

      <div className="min-h-screen relative overflow-hidden bg-background">
        {/* Futuristic Background */}
        <div className="absolute inset-0">
          <img 
            src={futuristicGlobe} 
            alt="Futuristic Global Network" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full animate-bounce ${
                i % 4 === 0 ? 'bg-primary/60' : 
                i % 4 === 1 ? 'bg-secondary/60' : 
                i % 4 === 2 ? 'bg-green-500/60' : 'bg-purple-500/60'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
          
          {/* Logo Section */}
          <div className={`mb-12 text-center transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary via-secondary to-green-500 mb-8 shadow-[0_0_50px_rgba(0,234,255,0.3)] relative">
              <Globe className="w-12 h-12 text-white animate-pulse" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 animate-ping" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-green-400 bg-clip-text text-transparent">
              Internetová cesta
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Váš sprievodca digitálnym svetom
            </p>
          </div>

          {/* Animated Hero Text */}
          <div className={`mb-16 text-center transform transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="h-20 flex items-center justify-center">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground transition-all duration-700">
                {heroTexts[currentText]}
              </h2>
            </div>
          </div>

          {/* Features Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl transform transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center p-6 rounded-2xl bg-background/10 backdrop-blur-sm border border-primary/20 shadow-[0_0_30px_rgba(0,234,255,0.1)]">
              <Wifi className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Najrýchlejšie pripojenie</h3>
              <p className="text-muted-foreground">Nájdeme pre vás optimálne riešenie</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-background/10 backdrop-blur-sm border border-secondary/20 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
              <Zap className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Okamžité porovnanie</h3>
              <p className="text-muted-foreground">Všetci poskytovatelia na jednom mieste</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-background/10 backdrop-blur-sm border border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.1)]">
              <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">100% zadarmo</h3>
              <p className="text-muted-foreground">Bez skrytých poplatkov</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <NeonButton
              onClick={handleContinue}
              variant="neon"
              size="lg"
              className="group text-xl px-12 py-4 shadow-[0_0_40px_rgba(0,234,255,0.3)] hover:shadow-[0_0_60px_rgba(0,234,255,0.5)]"
            >
              Vstúpiť do budúcnosti
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
            </NeonButton>
          </div>

          {/* Trust Indicators */}
          <div className={`mt-12 flex flex-col items-center text-muted-foreground transform transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-center">Dôveruje nám viac ako 10 000+ spokojných zákazníkov</span>
            <span className="text-xs mt-2 opacity-60">Powered by AI & Machine Learning</span>
          </div>
        </div>

        {/* Floating geometric elements */}
        <div className="absolute top-20 left-10 w-4 h-4 border-2 border-primary/40 rotate-45 animate-spin" style={{ animationDuration: '8s' }} />
        <div className="absolute top-40 right-16 w-6 h-6 border-2 border-secondary/40 rounded-full animate-pulse" />
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-green-500/40 rotate-45 animate-bounce" />
        <div className="absolute bottom-20 right-20 w-5 h-5 border-2 border-purple-500/40 animate-spin" style={{ animationDuration: '6s' }} />
        
        {/* Network lines effect */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--secondary))" />
              </linearGradient>
            </defs>
            <line x1="0" y1="500" x2="1000" y2="500" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3" />
            <line x1="500" y1="0" x2="500" y2="1000" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3" />
            <line x1="0" y1="0" x2="1000" y2="1000" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.2" />
            <line x1="1000" y1="0" x2="0" y2="1000" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.2" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default FuturisticIntro;