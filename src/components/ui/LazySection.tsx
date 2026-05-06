import React, { useState, useEffect, useRef } from 'react';

interface LazySectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fallback?: React.ReactNode;
  threshold?: number;
}

const LazySection: React.FC<LazySectionProps> = ({ 
  children, 
  className, 
  id, 
  fallback = <div className="min-h-[200px]" />,
  threshold = 0.1 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <section ref={ref} className={className} id={id}>
      {isVisible ? children : fallback}
    </section>
  );
};

export default LazySection;