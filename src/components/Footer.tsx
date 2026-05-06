
import { Link, useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { useRef, useCallback } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const clickCountRef = useRef(0);
  const clickTimerRef = useRef<ReturnType<typeof setTimeout>>();

  const handleCopyrightClick = useCallback(() => {
    clickCountRef.current += 1;
    if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    if (clickCountRef.current >= 5) {
      clickCountRef.current = 0;
      navigate('/admin/login');
    } else {
      clickTimerRef.current = setTimeout(() => {
        clickCountRef.current = 0;
      }, 2000);
    }
  }, [navigate]);

  const linkGroups = [
  {
    title: 'Služby',
    links: [
    { to: '/poskytovatele-internetu', label: 'Přehled poskytovatelů' },
    { to: '/zmena-poskytovatele-internetu', label: 'Změna poskytovatele' },
    { to: '/levny-internet', label: 'Levný internet' },
    { to: '/internet-ostrava', label: 'Internet ve městech' }]
  },
  {
    title: 'Recenze',
    links: [
    { to: '/poskytovatele-internetu/poda-internet-recenze', label: 'PODA recenze' },
    { to: '/poskytovatele-internetu/o2-internet-recenze', label: 'O2 recenze' },
    { to: '/poskytovatele-internetu/t-mobile-internet-recenze', label: 'T-Mobile recenze' },
    { to: '/poskytovatele-internetu/vodafone-internet-recenze', label: 'Vodafone recenze' }]
  },
  {
    title: 'Informace',
    links: [
    { to: '/o-nas', label: 'O nás' },
    { to: '/blog', label: 'Blog' },
    { to: '/faq', label: 'FAQ' },
    { to: '/kontakt', label: 'Kontakt' }]
  },
  ];


  return (
    <footer className="bg-foreground text-background m-3 rounded-[2.5rem]">
      <div className="container-editorial pt-12 xs:pt-16 md:pt-20 pb-8 xs:pb-10">
        {/* Main Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 xs:gap-10 lg:gap-8 mb-12 xs:mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <span className="font-semibold text-lg tracking-tight">
              <span className="text-primary">Nejvýhodnější</span> Připojení
            </span>
            <p className="text-background/60 leading-relaxed max-w-sm mt-4 xs:mt-6 text-sm xs:text-base">
              Pomáháme lidem najít nejlepší internetové připojení. 
              Porovnáváme nabídky všech poskytovatelů v ČR zdarma.
            </p>
            
            {/* Contact */}
            <div className="space-y-2 xs:space-y-3 mt-6 xs:mt-8">
              <a href="tel:+420776370406" className="flex items-center gap-3 text-background/60 hover:text-primary transition-colors text-sm xs:text-base min-h-[44px]">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+420 776 370 406</span>
              </a>
              <a href="mailto:info@nejvyhodnejsipripojeni.cz" className="flex items-center gap-3 text-background/60 hover:text-primary transition-colors text-sm xs:text-base min-h-[44px]">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="break-all">info@nejvyhodnejsipripojeni.cz</span>
              </a>
              <div className="flex items-center gap-3 text-background/60 text-sm xs:text-base">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Praha, Česká republika</span>
              </div>
            </div>
          </div>
          
          {/* Link Groups - 2 columns on tablet, 4 on desktop */}
          {linkGroups.map((group, i) =>
          <div key={i} className={i >= 2 ? "sm:col-span-1" : ""}>
              <h4 className="font-semibold text-xs xs:text-sm uppercase tracking-wider mb-4 xs:mb-6 text-background/40">
                {group.title}
              </h4>
              <ul className="space-y-2 xs:space-y-3">
                {group.links.map((link, j) =>
              <li key={j}>
                    <Link
                  to={link.to}
                  className="text-background/60 hover:text-primary transition-colors flex items-center gap-1 group text-sm min-h-[44px] xs:min-h-0">
                  
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
              )}
              </ul>
            </div>
          )}
        </div>
        
        {/* Bottom */}
        <div className="pt-6 xs:pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p 
            className="text-background/40 text-xs xs:text-sm text-center md:text-left cursor-default select-none"
            onClick={handleCopyrightClick}
          >
            © {currentYear} Nejvýhodnější Připojení. Všechna práva vyhrazena.
          </p>
          <div className="flex flex-wrap justify-center gap-4 xs:gap-6 text-xs xs:text-sm">
            <Link to="/obchodni-podminky" className="text-background/40 hover:text-primary transition-colors min-h-[44px] flex items-center">
              Obchodní podmínky
            </Link>
            <Link to="/ochrana-osobnich-udaju" className="text-background/40 hover:text-primary transition-colors min-h-[44px] flex items-center">
              Ochrana údajů
            </Link>
            <Link to="/cookies" className="text-background/40 hover:text-primary transition-colors min-h-[44px] flex items-center">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;