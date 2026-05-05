import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LegalLayout = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F5F0E8' }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#8B5E2B',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }}>
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 400,
          fontSize: '20px',
          color: '#FFF3DC'
        }}>
          El Migajón
        </div>
        <Link to="/" style={{
          fontFamily: "'Lato', sans-serif",
          fontWeight: 400,
          fontSize: '14px',
          color: '#E8D4A8',
          textDecoration: 'none'
        }}>
          ← Volver a la página principal
        </Link>
      </header>

      {/* Content */}
      <main style={{
        flex: 1,
        maxWidth: '720px',
        margin: '0 auto',
        padding: '48px 24px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div className="legal-content" style={{ flex: 1 }}>
          {children}
        </div>

        {/* BACK TO HOME BUTTON */}
        <div style={{ textAlign: 'center', marginTop: '60px', marginBottom: '20px' }}>
          <Link to="/" style={{
            display: 'inline-block',
            backgroundColor: 'transparent',
            color: '#3B2A1A',
            border: '2px solid #D4842A',
            padding: '14px 32px',
            borderRadius: '30px',
            textDecoration: 'none',
            fontFamily: "'Lato', sans-serif",
            fontWeight: 700,
            fontSize: '16px',
            transition: 'all 0.2s ease',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#D4842A';
            e.target.style.color = '#FFF3DC';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#3B2A1A';
          }}>
            Volver al inicio
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#3B2A1A',
        padding: '20px',
        textAlign: 'center'
      }}>
        <div style={{
          fontFamily: "'Lato', sans-serif",
          fontWeight: 400,
          fontSize: '13px',
          color: '#E8D4A8',
          marginBottom: '8px'
        }}>
          El Migajón · Panadería Artesanal · Polanco, CDMX
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
          <Link to="/politica-privacidad" style={{
            fontFamily: "'Lato', sans-serif",
            fontWeight: 400,
            fontSize: '12px',
            color: 'rgba(232, 212, 168, 0.6)',
            textDecoration: 'none'
          }}>
            Política de privacidad
          </Link>
          <Link to="/aviso-legal" style={{
            fontFamily: "'Lato', sans-serif",
            fontWeight: 400,
            fontSize: '12px',
            color: 'rgba(232, 212, 168, 0.6)',
            textDecoration: 'none'
          }}>
            Aviso legal
          </Link>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        .legal-content h1, .legal-content h2, .legal-content h3 {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          color: #3B2A1A;
        }
        .legal-content h1 {
          font-size: 32px;
          margin-bottom: 24px;
        }
        .legal-content h2 {
          font-size: 22px;
          margin-top: 40px;
          margin-bottom: 16px;
        }
        .legal-content p, .legal-content li {
          font-family: 'Lato', sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 1.8;
          color: #3B2A1A;
          margin-bottom: 16px;
        }
        .legal-content a {
          color: #D4842A;
          text-decoration: underline;
        }
        .legal-index {
          background-color: rgba(139, 94, 43, 0.05);
          padding: 24px;
          border-radius: 12px;
          margin-bottom: 40px;
        }
        .legal-index ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .legal-index li {
          margin-bottom: 8px;
        }
        .legal-index a {
          color: #3B2A1A;
          text-decoration: none;
          font-weight: 700;
        }
        .legal-index a:hover {
          color: #D4842A;
        }
      `}} />
    </div>
  );
};

export default LegalLayout;
