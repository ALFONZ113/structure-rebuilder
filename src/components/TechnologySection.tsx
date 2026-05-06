
import { useState, useEffect } from 'react';
import ScrollReveal from './ui/ScrollReveal';

const TechnologySection = () => {
  const [animateGraph, setAnimateGraph] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const element = document.getElementById('tech-section');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setAnimateGraph(true);
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="tech-section" className="section-editorial bg-secondary relative overflow-hidden">
      <div className="container-editorial relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal className="order-2 lg:order-1">
            <div className="relative h-64 md:h-80 lg:h-96">
              {/* AI Visualization */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary-foreground/20 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
                
                {/* AI Nodes */}
                <div className="absolute inset-0 p-4 flex flex-wrap justify-between">
                  {[...Array(15)].map((_, i) => (
                    <div 
                      key={i}
                      className={`w-3 h-3 md:w-4 md:h-4 rounded-full bg-background 
                                 transition-all duration-1000 ${animateGraph ? 'opacity-100' : 'opacity-0'}`}
                      style={{ 
                        transform: `translate(${Math.random() * 100}%, ${Math.random() * 100}%)`,
                        transitionDelay: `${i * 100}ms`
                      }}
                    />
                  ))}
                </div>
                
                {/* AI Lines */}
                <svg 
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <g 
                    stroke="rgba(255,255,255,0.5)" 
                    strokeWidth="0.25" 
                    fill="none"
                    className={`transition-opacity duration-1000 ${animateGraph ? 'opacity-50' : 'opacity-0'}`}
                  >
                    {[...Array(20)].map((_, i) => {
                      const x1 = Math.random() * 100;
                      const y1 = Math.random() * 100;
                      const x2 = Math.random() * 100;
                      const y2 = Math.random() * 100;
                      return (
                        <line 
                          key={i} 
                          x1={x1} y1={y1} x2={x2} y2={y2} 
                          className="transition-all duration-1000"
                          style={{ transitionDelay: `${i * 100 + 500}ms` }}
                        />
                      );
                    })}
                  </g>
                </svg>
                
                {/* Central Node */}
                <div 
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                            w-16 h-16 md:w-20 md:h-20 rounded-full bg-background/90 flex items-center justify-center 
                            shadow-lg transition-all duration-1000 ${animateGraph ? 'scale-100' : 'scale-0'}`}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="40" height="40" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="text-primary"
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d="M12 2v4" /><path d="M18.4 6.6l-2.9 2.9" />
                    <path d="M22 12h-4" /><path d="M18.4 17.4l-2.9-2.9" />
                    <path d="M12 22v-4" /><path d="M5.6 17.4l2.9-2.9" />
                    <path d="M2 12h4" /><path d="M5.6 6.6l2.9 2.9" />
                  </svg>
                </div>
                
                {/* Pulse Animation */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div 
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-background/30 
                              transition-all duration-1000 ${animateGraph ? 'animate-ping' : 'opacity-0'}`}
                  ></div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal className="order-1 lg:order-2">
            <span className="text-label mb-4 inline-block">Moderní technologie</span>
            <h2 className="heading-md mt-2 mb-6">
              Vyhledávání připojení pomocí nejmodernějších technologií
            </h2>
            <p className="text-muted-foreground mb-6">
              Používáme umělou inteligenci (AI) a pokročilé algoritmy k nalezení nejvýhodnějšího připojení ve vaší lokalitě. Naše technologie neustále analyzuje nabídky všech poskytovatelů a dokáže předpovídat změny cen i dostupnosti služeb.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-foreground">Přesné porovnání v reálném čase</h3>
                  <p className="text-muted-foreground">Naše algoritmy zpracovávají aktuální data přímo od poskytovatelů.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-foreground">Inteligentní doporučení</h3>
                  <p className="text-muted-foreground">AI vytváří personalizované nabídky podle vašich specifických potřeb.</p>
                </div>
              </div>
              
              <div className="mt-8">
                <button 
                  onClick={() => {
                    const element = document.getElementById('lead-form');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="btn-secondary"
                >
                  Nechat AI najít nejlepší technologii
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
