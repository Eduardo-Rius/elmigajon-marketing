import React from 'react';
import sourdoughImg from '../assets/sourdough-loaf.png';

const SupermarketProblem = () => {
  return (
    <section className="reveal" style={{ backgroundColor: 'var(--color-primary-dark)', color: 'var(--color-text-light)' }}>
      <div className="texture-overlay"></div>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
        
        <div style={{ order: 2 }}>
          <img 
            src={sourdoughImg} 
            alt="Pan artesanal" 
            loading="lazy"
            style={{ width: '100%', borderRadius: '12px', filter: 'brightness(0.9)' }}
          />
        </div>

        <div style={{ order: 1 }}>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 44px)', marginBottom: '20px', lineHeight: 1.1 }}>
            ¿Cansado del pan que se pone duro en dos horas?
          </h2>
          <p style={{ color: 'var(--color-subtext-light)', fontSize: '18px', marginBottom: '40px' }}>
            El pan industrial no envejece mal porque es fresco. Envejece mal porque está lleno de cosas que no deberían estar ahí.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: '25px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '15px' }}>Pan del súper</h3>
              <ul style={{ listStyle: 'none', fontSize: '15px', color: 'var(--color-text-light)', opacity: 0.9 }}>
                <li style={{ marginBottom: '8px' }}>✗ Esponjantes</li>
                <li style={{ marginBottom: '8px' }}>✗ Conservadores E-200</li>
                <li style={{ marginBottom: '8px' }}>✗ Fermentación química en 2 horas</li>
                <li>✗ Duro al día siguiente</li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(74, 122, 46, 0.25)', padding: '25px', borderRadius: '12px', border: '1px solid var(--color-accent-green)' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '15px' }}>Pan El Migajón</h3>
              <ul style={{ listStyle: 'none', fontSize: '15px', color: 'var(--color-text-light)' }}>
                <li style={{ marginBottom: '8px' }}>✓ Harina, agua, sal, masa madre</li>
                <li style={{ marginBottom: '8px' }}>✓ 72 horas de fermentación real</li>
                <li style={{ marginBottom: '8px' }}>✓ Sin aditivos ni conservadores</li>
                <li>✓ Mejor al segundo y tercer día</li>
              </ul>
            </div>
          </div>

          <button 
            className="btn-primary" 
            style={{ marginTop: '40px', width: 'auto' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Pruébalo esta semana →
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupermarketProblem;
