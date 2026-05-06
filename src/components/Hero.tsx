import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroPoster from '@/assets/hero-poster.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const connection = (navigator as any).connection;
    const isMobileConnection = connection && 
      (connection.effectiveType === '2g' || connection.saveData);
    
    if (isReducedMotion || isMobileConnection) return;

    const loadTimer = setTimeout(() => setShouldLoadVideo(true), 500);
    return () => clearTimeout(loadTimer);
  }, []);

  const handleVideoLoad = () => setVideoLoaded(true);

  const handleRedirectToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[hsl(140,35%,8%)] lg:m-3 lg:rounded-[2.5rem]">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Poster fallback */}
        <img 
          src={heroPoster}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-0' : 'opacity-40'
          }`}
          loading="eager"
          fetchPriority="high"
        />
        
        {/* Video */}
        {shouldLoadVideo && (
          <video 
            ref={videoRef}
            autoPlay muted loop playsInline
            preload="metadata"
            onCanPlay={handleVideoLoad}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-40' : 'opacity-0'
            }`}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        )}
        
        {/* Dark forest gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(140,35%,8%)]/70 via-[hsl(140,35%,8%)]/40 to-[hsl(140,35%,8%)]/90" />
        
        {/* Green glow accents */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[100svh] flex flex-col justify-between">
        {/* Nav spacer */}
        <div className="h-14 xs:h-16 md:h-24 flex-shrink-0" />
        
        {/* Main content — vertically centered */}
        <div className="flex-1 flex items-center py-8 sm:py-12">
          <div className="container-editorial w-full">
            <div className="max-w-5xl">
              {/* Eyebrow */}
              <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <span className="inline-flex items-center gap-2 text-xs xs:text-sm font-medium tracking-[0.2em] uppercase text-primary">
                  <span className="w-6 xs:w-8 h-px bg-primary" />
                  Nezávislé porovnání poskytovatelů
                </span>
              </div>

              {/* Headline */}
              <h1 className={`heading-hero-light mt-5 xs:mt-6 sm:mt-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Najdeme vám
                <br className="hidden sm:block" />
                {' '}
                <span className="italic text-primary whitespace-nowrap">nejlepší</span>
                <br className="hidden sm:block" />
                {' '}
                internet
              </h1>

              {/* Subtitle */}
              <p className={`font-sans text-base xs:text-lg sm:text-xl md:text-2xl text-white/80 max-w-xl leading-relaxed mt-5 xs:mt-6 sm:mt-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Porovnáváme celý český trh za vás. Vyplňte formulář 
                a do 24 hodin máte nejlepší nabídky pro vaši adresu.
              </p>

              {/* CTA */}
              <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 xs:mt-10 sm:mt-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <button 
                  onClick={() => handleRedirectToSection('lead-form')}
                  className="btn-primary group w-full sm:w-auto text-base sm:text-lg py-4 px-8"
                >
                  <span className="flex items-center justify-center gap-3">
                    Porovnat nabídky zdarma
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
                <button 
                  onClick={() => handleRedirectToSection('jak-to-funguje')}
                  className="inline-flex items-center justify-center py-4 px-8 rounded-full text-base font-medium tracking-wide text-white border border-white/30 transition-all duration-300 hover:border-primary hover:bg-white/5 w-full sm:w-auto"
                >
                  Jak to funguje
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className={`flex-shrink-0 border-t border-white/10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="container-editorial py-5 xs:py-6 md:py-8">
            <div className="grid grid-cols-4 gap-3 xs:gap-4 md:gap-8">
              {[
                { value: 'Celý', label: 'Český trh' },
                { value: '15k+', label: 'Spokojených klientů' },
                { value: '100%', label: 'Zdarma' },
                { value: '24h', label: 'Rychlá odpověď' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  <span className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-semibold text-white font-display tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-[9px] xs:text-[11px] sm:text-xs uppercase tracking-wider text-white/60 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
