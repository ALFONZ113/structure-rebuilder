
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollManager = () => {
  const location = useLocation();
  const initialRenderRef = useRef(true);

  // Handle scroll animations with performance optimization
  useEffect(() => {
    let ticking = false;
    
    // Optimized scroll handler using RAF and batched DOM reads
    const scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const revealElements = document.querySelectorAll('.reveal');
          const windowHeight = window.innerHeight;
          const elementVisible = 150;
          
          // Batch all DOM reads first
          const elementData = Array.from(revealElements).map(element => ({
            element,
            top: element.getBoundingClientRect().top
          }));
          
          // Then batch all DOM writes
          elementData.forEach(({ element, top }) => {
            if (top < windowHeight - elementVisible) {
              element.classList.add('active');
            }
          });
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check on page load
    scrollHandler();
    
    // Add passive scroll event listener for better performance
    window.addEventListener('scroll', scrollHandler, { passive: true });
    
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  // Handle URL hash for section scrolling
  useEffect(() => {
    // Only run this effect once on initial render or when location changes
    if (initialRenderRef.current || !initialRenderRef.current) {
      initialRenderRef.current = false;
      
      // Get the hash without the '#' symbol
      const hash = location.hash.replace('#', '');
      
      // If there's a hash, scroll to that section with RAF
      if (hash) {
        requestAnimationFrame(() => {
          setTimeout(() => {
            const element = document.getElementById(hash);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 100);
        });
      }
    }
  }, [location.hash]);

  // Handle state-based navigation from other pages with RAF
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      requestAnimationFrame(() => {
        setTimeout(() => {
          const element = document.getElementById(location.state.scrollTo);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      });
    }
  }, [location.state]);

  return null; // This component doesn't render anything
};

export default ScrollManager;
