import { useState, useEffect } from 'react';
import heroImage from '@/assets/mobile-intro-hero.jpg';
import { NeonButton } from '@/components/ui/neon-button';
import { ArrowRight, Wifi, Zap, Shield, Star } from 'lucide-react';

interface MobileIntroPageProps {
  onSkip: () => void;
}

const MobileIntroPage = ({ onSkip }: MobileIntroPageProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const steps = [
    {
      icon: <Wifi className="w-12 h-12 text-primary" />,
      title: "Najrýchlejší internet",
      subtitle: "Nájdeme pre vás najlepšie pripojenie",
      color: "from-primary/20 to-primary/10"
    },
    {
      icon: <Zap className="w-12 h-12 text-secondary-foreground" />,
      title: "Okamžité porovnanie",
      subtitle: "Všetci poskytovatelia na jednom mieste",
      color: "from-secondary/20 to-secondary/10"
    },
    {
      icon: <Shield className="w-12 h-12 text-accent" />,
      title: "100% bezplatne",
      subtitle: "Žiadne skryté poplatky či záväzky",
      color: "from-accent/20 to-accent/10"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % steps.length);
    }, 2500);

    const autoSkipTimer = setTimeout(() => {
      onSkip();
    }, 8000);

    return () => {
      clearInterval(interval);
      clearTimeout(autoSkipTimer);
    };
  }, [onSkip]);

  const handleGetStarted = () => {
    onSkip();
  };

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-background via-muted/30 to-background overflow-y-auto overscroll-y-contain">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Internet connectivity" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      {/* Skip Button */}
      <button
        onClick={onSkip}
        className="absolute top-4 xs:top-6 right-4 xs:right-6 z-10 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
      >
        Preskočiť
      </button>

      {/* Main Content */}
      <div className={`relative z-10 min-h-[100svh] flex flex-col items-center justify-center px-6 py-20 xs:py-24 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Logo Area */}
        <div className="mb-8 xs:mb-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-secondary mb-6 shadow-premium">
            <Wifi className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Internetová cesta
          </h1>
          <p className="text-muted-foreground text-sm">
            Váš sprievodca svetom internetu
          </p>
        </div>

        {/* Animated Steps */}
        <div className="w-full max-w-sm mb-8 xs:mb-12">
          <div className="relative h-40 xs:h-48 flex items-center justify-center">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-700 ${
                  currentStep === index 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-0 scale-90 translate-y-4'
                }`}
              >
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}>
                  {step.icon}
                </div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentStep === index 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <NeonButton
          onClick={handleGetStarted}
          variant="neon"
          size="lg"
          className="group w-full max-w-sm text-lg"
        >
          Začať hľadať internet
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </NeonButton>

        {/* Trust Indicators */}
        <div className="mt-6 xs:mt-8 flex flex-col xs:flex-row items-center gap-2 text-muted-foreground">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-sm text-center xs:text-left">Dôveruje nám viac ako 10 000+ zákazníkov</span>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-6 w-3 h-3 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
      <div className="absolute top-32 right-8 w-2 h-2 bg-secondary/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-8 w-4 h-4 bg-accent/30 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-12 w-2 h-2 bg-muted-foreground/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
    </div>
  );
};

export default MobileIntroPage;