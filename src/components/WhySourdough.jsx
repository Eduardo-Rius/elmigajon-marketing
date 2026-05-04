import React from 'react';
import sourdoughImg from '../assets/sourdough-loaf.png';

const WhySourdough = () => {
  const features = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20s1-1 1-5L4 8l1 1 1-1 1 1 1-1 1 1 1-1 1 1 1-1 2 2" />
          <path d="M12 2v20" />
          <path d="M7 6s-1-1-1-5l2 12-1-1-1 1-1-1-1 1-1-1-1 1-1-1-1 1-2-2" />
          <path d="M17 6s1-1 1-5l-2 12 1-1 1 1 1-1 1 1 1-1 1 1 1-1 1 1 2-2" />
        </svg>
      ),
      title: "72 horas de fermentación natural",
      description: "el tiempo hace lo que ningún aditivo puede"
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
          <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
          <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
          <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.82-2.82L7 15" />
        </svg>
      ),
      title: "Amasado a mano, cada pieza",
      description: "no hay dos iguales, y así se nota"
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
      title: "Ingredientes locales, sin conservadores",
      description: "lo que comes sí importa"
    }
  ];

  return (
    <section className="reveal" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: 'var(--color-text-dark)', marginBottom: '40px' }}>
            ¿Por qué es diferente el pan de masa madre?
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {features.map((item, idx) => (
              <div key={idx} className={`stagger-item stagger-${idx + 1}`} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--color-accent-orange)', flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ color: 'var(--color-text-dark)', opacity: 0.8, fontSize: '16px' }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="stagger-item stagger-3">
          <img 
            src={sourdoughImg} 
            alt="Hogaza de pan de masa madre" 
            loading="lazy"
            style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(139, 94, 43, 0.15)' }}
          />
        </div>
      </div>
    </section>
  );
};

export default WhySourdough;
