
import React, { useEffect } from 'react';

// Extend Window interface for Google Analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources for faster LCP
    const preloadFont = document.createElement('link');
    preloadFont.rel = 'preload';
    preloadFont.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';
    preloadFont.as = 'style';
    document.head.appendChild(preloadFont);

    // Preconnect to improve resource loading
    const preconnectGoogle = document.createElement('link');
    preconnectGoogle.rel = 'preconnect';
    preconnectGoogle.href = 'https://fonts.googleapis.com';
    document.head.appendChild(preconnectGoogle);

    const preconnectGstatic = document.createElement('link');
    preconnectGstatic.rel = 'preconnect';
    preconnectGstatic.href = 'https://fonts.gstatic.com';
    preconnectGstatic.crossOrigin = 'anonymous';
    document.head.appendChild(preconnectGstatic);

    // Load Google Analytics asynchronously after user interaction or after delay
    const loadAnalytics = () => {
      if (window.gtag) return; // Already loaded
      
      const gtagScript = document.createElement('script');
      gtagScript.async = true;
      gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-3MCVWJPRBP';
      document.head.appendChild(gtagScript);
      
      gtagScript.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag(...args: any[]) { window.dataLayer.push(args); }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', 'G-3MCVWJPRBP');
      };
    };

    // Load analytics on first user interaction or after 3 seconds
    const interactionEvents = ['click', 'scroll', 'keydown', 'touchstart'];
    const handleFirstInteraction = () => {
      loadAnalytics();
      interactionEvents.forEach(event => {
        document.removeEventListener(event, handleFirstInteraction);
      });
    };

    interactionEvents.forEach(event => {
      document.addEventListener(event, handleFirstInteraction, { passive: true });
    });

    // Fallback: load after 3 seconds if no interaction
    const analyticsTimeout = setTimeout(loadAnalytics, 3000);

    // Optimize images loading
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));

    // Prefetch important pages
    const prefetchPages = [
      '/faq',
      '/poskytovatele-internetu',
      '/kontakt'
    ];

    prefetchPages.forEach(page => {
      const prefetchLink = document.createElement('link');
      prefetchLink.rel = 'prefetch';
      prefetchLink.href = page;
      document.head.appendChild(prefetchLink);
    });

    return () => {
      images.forEach(img => imageObserver.unobserve(img));
      clearTimeout(analyticsTimeout);
      interactionEvents.forEach(event => {
        document.removeEventListener(event, handleFirstInteraction);
      });
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;
