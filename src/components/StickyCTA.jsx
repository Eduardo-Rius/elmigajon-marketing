import React, { useState, useEffect } from 'react';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero (approx 600px)
      // Hide when near footer/final cta (approx 300px from bottom)
      const scrollPos = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      
      const isPastHero = scrollPos > 600;
      const isNearEnd = (fullHeight - (scrollPos + windowHeight)) < 400;
      const isMobile = window.innerWidth <= 768;

      setIsVisible(isPastHero && !isNearEnd && isMobile);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const scrollToCTA = () => {
    const finalCTA = document.getElementById('final-cta');
    if (finalCTA) {
      finalCTA.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9998] bg-orange h-16 px-4 flex items-center justify-between shadow-2xl animate-slide-up mobile-safe-area">
      <p className="text-dark font-bold text-sm">Pide hoy antes de las 12</p>
      <button 
        onClick={scrollToCTA}
        className="bg-dark text-cream py-2 px-5 rounded-full font-bold text-sm transition-transform active:scale-95"
      >
        Pedir →
      </button>

      <style jsx>{`
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
        }
        .mobile-safe-area {
          padding-bottom: env(safe-area-inset-bottom);
          height: calc(64px + env(safe-area-inset-bottom));
        }
      `}</style>
    </div>
  );
};

export default StickyCTA;
