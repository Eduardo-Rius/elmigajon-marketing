import React, { useState, useEffect } from 'react';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero-section');
      const guarantee = document.getElementById('guarantee-section');
      
      if (!hero || !guarantee) return;

      const heroRect = hero.getBoundingClientRect();
      const guaranteeRect = guarantee.getBoundingClientRect();
      
      // Window height
      const wh = window.innerHeight;

      // Show if hero is out of view (top is way above and bottom is above window)
      // Actually simpler: if hero bottom is < 0 (completely scrolled past)
      const pastHero = heroRect.bottom < 100;
      
      // Hide if guarantee form is in view
      const guaranteeInView = guaranteeRect.top < wh && guaranteeRect.bottom > 0;

      if (pastHero && !guaranteeInView) {
        setIsVisible(true);
        document.body.classList.add('sticky-cta-active');
      } else {
        setIsVisible(false);
        document.body.classList.remove('sticky-cta-active');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('sticky-cta-active');
    };
  }, []);

  const scrollToForm = () => {
    const guarantee = document.getElementById('guarantee-section');
    if (guarantee) {
      guarantee.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="sticky-cta-bar">
        <span style={{
          fontFamily: "'Lato', sans-serif",
          fontWeight: 700,
          fontSize: '14px',
          color: '#3B2A1A'
        }}>
          Pide hoy antes de las 12
        </span>
        <button onClick={scrollToForm} style={{
          backgroundColor: '#3B2A1A',
          color: '#FFF3DC',
          borderRadius: '20px',
          padding: '10px 20px',
          fontFamily: "'Lato', sans-serif",
          fontWeight: 700,
          fontSize: '14px',
          border: 'none',
          cursor: 'pointer'
        }}>
          Pedir &rarr;
        </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .sticky-cta-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: #D4842A;
          height: 64px;
          padding: 0 16px;
          padding-bottom: env(safe-area-inset-bottom);
          display: none;
          align-items: center;
          justify-content: space-between;
          z-index: 9998;
          box-shadow: 0 -4px 12px rgba(59, 42, 26, 0.15);
          animation: slideUp 0.3s ease-out forwards;
        }

        @media (max-width: 768px) {
          .sticky-cta-bar {
            display: flex;
          }
        }
        
        body.sticky-cta-active .wa-system-container {
          bottom: calc(80px + env(safe-area-inset-bottom)) !important;
        }
      `}} />
    </>
  );
};

export default StickyCTA;
