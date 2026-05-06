import { useEffect } from 'react';

const CriticalCSS = () => {
  useEffect(() => {
    // Inline critical CSS for LCP elements
    const criticalStyles = document.createElement('style');
    criticalStyles.innerHTML = `
      .heading-xl {
        font-size: clamp(2.5rem, 5vw, 4rem);
        font-weight: 800;
        line-height: 1.1;
        letter-spacing: -0.025em;
      }
      .container-premium {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 1rem;
      }
      .section-padding {
        padding: 6rem 0;
      }
      @media (max-width: 768px) {
        .section-padding {
          padding: 4rem 0;
        }
      }
    `;
    
    // Insert at the beginning of head for high priority
    document.head.insertBefore(criticalStyles, document.head.firstChild);
    
    return () => {
      if (criticalStyles.parentNode) {
        criticalStyles.parentNode.removeChild(criticalStyles);
      }
    };
  }, []);

  return null;
};

export default CriticalCSS;