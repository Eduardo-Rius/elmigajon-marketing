import React from 'react';
import deliveryImg from '../assets/delivery.png';

const Delivery = () => {
  const cards = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: "Pide antes de las 12",
      desc: "Recibe al día siguiente por la mañana, mientras el pan aún huele a horno"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: "Polanco y Las Lomas",
      desc: "Repartimos en toda la zona. Consulta si llegamos a tu calle."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      ),
      title: "Pedido mínimo: 300 pesos",
      desc: "Pan desde 100 pesos. Bollería desde 30. Combina como quieras."
    }
  ];

  return (
    <section className="reveal" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(28px, 5vw, 40px)', color: 'var(--color-text-dark)', marginBottom: '40px' }}>
          En tu puerta. Sin que tengas que moverte.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '60px' }}>
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="stagger-item"
              style={{
                backgroundColor: 'white',
                padding: '24px',
                borderRadius: '12px',
                border: '1px solid var(--color-accent-orange)',
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(139, 94, 43, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ color: 'var(--color-accent-orange)', marginBottom: '15px' }}>{card.icon}</div>
              <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{card.title}</h3>
              <p style={{ color: 'var(--color-text-dark)', opacity: 0.75, fontSize: '15px' }}>{card.desc}</p>
            </div>
          ))}
        </div>

        <img 
          src={deliveryImg} 
          alt="Entrega a domicilio" 
          loading="lazy"
          style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px' }}
        />
      </div>
    </section>
  );
};

export default Delivery;
