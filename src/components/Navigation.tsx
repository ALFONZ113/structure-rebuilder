import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setIsMenuOpen(false), [location]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    requestAnimationFrame(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsMenuOpen(false);
      }
    });
  };

  const navLinks = [
    { label: 'Domů', to: '/', exact: true },
    { label: 'Jak to funguje', action: () => scrollToSection('jak-to-funguje') },
    { label: 'Proč my', action: () => scrollToSection('proc-nas') },
    { label: 'Blog', to: '/blog' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "py-2" : "py-4"
    )}>
      <div className="container-editorial">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 px-2">
            <span className="font-display font-semibold text-lg sm:text-xl tracking-tight text-foreground">
              <span className="text-primary">Nejvýhodnější</span> Připojení
            </span>
          </Link>

          {/* Desktop Navigation — pill container */}
          <div className="hidden lg:flex items-center gap-2 bg-background/70 backdrop-blur-xl border border-border rounded-full px-2 py-2 shadow-sm">
            {navLinks.map((link, i) => (
              link.to ? (
                <NavLink
                  key={i}
                  to={link.to}
                  className={({ isActive }) => cn(
                    "text-sm font-medium transition-all px-5 py-2.5 rounded-full",
                    isActive ? "bg-foreground text-background" : "text-foreground/80 hover:bg-muted"
                  )}
                >
                  {link.label}
                </NavLink>
              ) : (
                <button
                  key={i}
                  onClick={link.action}
                  className="text-sm font-medium transition-all px-5 py-2.5 rounded-full text-foreground/80 hover:bg-muted"
                >
                  {link.label}
                </button>
              )
            ))}
          </div>

          {/* CTA pill */}
          <button 
            onClick={() => scrollToSection('lead-form')}
            className="hidden lg:inline-flex btn-primary text-sm"
          >
            Získat nabídku
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-full bg-background/70 backdrop-blur-xl border border-border text-foreground transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "lg:hidden fixed inset-x-3 top-[4.5rem] rounded-3xl bg-background/95 backdrop-blur-xl border border-border overflow-hidden transition-all duration-300 ease-out shadow-xl",
          isMenuOpen 
            ? "max-h-[calc(100vh-6rem)] opacity-100" 
            : "max-h-0 opacity-0"
        )}
        style={{ paddingBottom: isMenuOpen ? 'env(safe-area-inset-bottom)' : '0' }}
      >
        <div className="container-editorial py-6 xs:py-8">
          <div className="flex flex-col gap-4 xs:gap-6">
            {navLinks.map((link, i) => (
              link.to ? (
                <Link 
                  key={i}
                  to={link.to} 
                  className="text-foreground text-xl xs:text-2xl font-display font-semibold hover:text-primary transition-colors min-h-[48px] flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <button 
                  key={i}
                  onClick={link.action}
                  className="text-foreground text-xl xs:text-2xl font-display font-semibold hover:text-primary transition-colors text-left min-h-[48px] flex items-center"
                >
                  {link.label}
                </button>
              )
            ))}
            
            <div className="pt-4 xs:pt-6 mt-2 border-t border-border">
              <button 
                onClick={() => scrollToSection('lead-form')}
                className="btn-primary w-full min-h-[48px]"
              >
                <span className="flex items-center justify-center gap-2">
                  Získat nabídku zdarma
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
