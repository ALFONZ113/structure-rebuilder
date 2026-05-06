import { useState, useEffect } from 'react';
import { X, Gift, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ExitIntentPopupProps {
  onClose?: () => void;
}

const ExitIntentPopup = ({ onClose }: ExitIntentPopupProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup was already shown this session
    const popupShown = sessionStorage.getItem('exitPopupShown');
    if (popupShown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves from top of viewport
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    };

    // Also trigger on scroll up after scrolling down
    let lastScrollY = window.scrollY;
    let scrolledDown = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Mark that user has scrolled down at least 300px
      if (currentScrollY > 300) {
        scrolledDown = true;
      }
      
      // Trigger popup when scrolling back up quickly after scrolling down
      if (scrolledDown && currentScrollY < lastScrollY - 100 && currentScrollY < 200 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
      
      lastScrollY = currentScrollY;
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  const handleCtaClick = () => {
    setIsVisible(false);
    const element = document.getElementById('lead-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-foreground/80 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Popup */}
      <div className="relative bg-background rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors z-10"
          aria-label="Zavřít"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>

        {/* Header with gradient */}
        <div className="bg-gradient-to-br from-primary to-primary/80 p-6 pb-12">
          <div className="flex items-center gap-3 text-primary-foreground">
            <div className="p-3 bg-white/20 rounded-full">
              <Gift className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium uppercase tracking-wider">
              Speciální nabídka
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 -mt-6">
          <div className="bg-background rounded-xl shadow-lg p-6 text-center">
            <h3 className="heading-md mb-3">
              Počkejte! 🎁
            </h3>
            <p className="text-muted-foreground mb-2">
              Nechte nám kontakt a získejte
            </p>
            <p className="text-2xl font-bold text-primary mb-4">
              Srovnání cen ZDARMA
            </p>
            <ul className="text-left space-y-2 mb-6">
              {[
                'Nabídky z celého českého trhu',
                'Ušetříte až 200 Kč měsíčně',
                'Odpověď do 24 hodin',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-xs">✓</span>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            
            <Button 
              onClick={handleCtaClick}
              className="w-full btn-primary group"
              size="lg"
            >
              <span className="flex items-center justify-center gap-2">
                Získat nabídku zdarma
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
            
            <button
              onClick={handleClose}
              className="mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Ne, děkuji, nepotřebuji ušetřit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
