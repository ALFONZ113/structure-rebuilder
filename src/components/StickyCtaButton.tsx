import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PhoneIcon } from 'lucide-react';

const StickyCtaButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // Show after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleRedirectToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`
      fixed bottom-6 right-6 z-50 
      transform transition-all duration-500 ease-out
      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
      md:bottom-8 md:right-8
    `}>
      <button
        onClick={() => handleRedirectToSection('lead-form')}
        className="
          group flex items-center gap-3 
          bg-gradient-to-r from-green-500 to-green-600 
          hover:from-green-600 hover:to-green-700
          text-white font-semibold
          px-6 py-4 rounded-full
          shadow-lg hover:shadow-xl
          transform hover:scale-105 
          transition-all duration-300
          focus:outline-none focus:ring-4 focus:ring-green-500/30
        "
        aria-label="Získat nabídku zdarma"
      >
        <PhoneIcon className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
        <span className="hidden sm:inline">Získat nabídku zdarma</span>
        <span className="sm:hidden">Nabídka</span>
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping -z-10"></div>
      </button>
    </div>
  );
};

export default StickyCtaButton;