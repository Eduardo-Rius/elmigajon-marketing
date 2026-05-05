import React, { useState, useRef } from 'react';
import familyImg from '../assets/family-breakfast.png';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.offsetWidth * 0.85; // Roughly the width of one card in mobile
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    }
  };
  const testimonials = [
    {
      text: "Hace seis meses que no compramos pan en el súper. No hay vuelta atrás.",
      author: "Mariana R.",
      location: "colonia Polanco"
    },
    {
      text: "Mis hijos ahora saben lo que es el pan de verdad. Y ya no quieren otro.",
      author: "Carlos M.",
      location: "Las Lomas de Chapultepec"
    },
    {
      text: "Lo pedí por curiosidad. La segunda semana ya lo tenía en el calendario.",
      author: "Sofía G.",
      location: "colonia Polanco"
    }
  ];

  return (
    <section className="reveal" style={{ 
      backgroundColor: 'var(--color-primary-dark)', 
      color: 'var(--color-text-light)',
      position: 'relative',
      backgroundImage: `linear-gradient(rgba(139, 94, 43, 0.9), rgba(139, 94, 43, 0.9)), url(${familyImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="texture-overlay"></div>
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: 'clamp(26px, 5vw, 38px)', marginBottom: '40px', textAlign: 'center' }}>
          Lo que dicen en Polanco
        </h2>

        <div 
          className="testimonials-grid" 
          ref={scrollRef}
          onScroll={handleScroll}
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '16px',
            overflowX: 'auto',
            paddingBottom: '20px',
            scrollbarWidth: 'none', // Hide scrollbar Firefox
            msOverflowStyle: 'none' // Hide scrollbar IE/Edge
        }}>
          {testimonials.map((t, idx) => (
            <div key={idx} className="stagger-item" style={{
              backgroundColor: 'rgba(255, 243, 220, 0.08)',
              border: '1px solid rgba(255, 243, 220, 0.2)',
              borderRadius: '16px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minWidth: '300px'
            }}>
              <p style={{ fontSize: '17px', fontStyle: 'italic', marginBottom: '20px', lineHeight: 1.5 }}>
                "{t.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--color-accent-orange)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  color: 'var(--color-text-dark)',
                  fontSize: '14px'
                }}>
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: '14px', color: 'var(--color-subtext-light)' }}>{t.author}</div>
                  <div style={{ fontSize: '12px', opacity: 0.7 }}>{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="carousel-dots" style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginTop: '10px'
        }}>
          {testimonials.map((_, idx) => (
            <div 
              key={idx} 
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#D4842A',
                opacity: activeIndex === idx ? 1 : 0.3,
                transition: 'opacity 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .testimonials-grid::-webkit-scrollbar {
          display: none;
        }
        
        .carousel-dots {
          display: none !important;
        }

        @media (max-width: 768px) {
          .carousel-dots {
            display: flex !important;
          }
          .testimonials-grid {
            display: flex !important;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            padding-right: 20px; /* Space to show the cut off card */
          }
          .testimonials-grid > div {
            scroll-snap-align: start;
            flex: 0 0 calc(100% - 40px); /* Leaves exactly room for the next card to peek */
            min-width: auto !important;
          }
        }
      `}} />
    </section>
  );
};

export default Testimonials;
