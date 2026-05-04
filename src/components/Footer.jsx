import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: 'var(--color-text-dark)', 
      color: 'var(--color-text-light)', 
      padding: '60px 20px',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 className="brand-name" style={{ fontSize: '22px', marginBottom: '20px' }}>El Migajón</h2>
        
        <div style={{ marginBottom: '30px' }}>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: 'var(--color-subtext-light)', 
              textDecoration: 'none', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '8px',
              fontSize: '16px'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            @elmigajon
          </a>
          <div style={{ color: 'var(--color-subtext-light)', marginTop: '10px', fontSize: '14px' }}>elmigajon.netlify.app.com</div>
        </div>

        <div style={{ 
          fontSize: '13px', 
          color: 'var(--color-subtext-light)', 
          opacity: 0.6, 
          marginBottom: '20px' 
        }}>
          Polanco · Las Lomas de Chapultepec · CDMX
        </div>

        <div>
          <Link to="/politica-privacidad" style={{ 
            fontSize: '12px', 
            color: 'var(--color-subtext-light)', 
            opacity: 0.5,
            textDecoration: 'none'
          }}>
            Política de privacidad →
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
