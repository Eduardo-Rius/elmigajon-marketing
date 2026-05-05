import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PopupCapture = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const navigate = useNavigate();

  useEffect(() => {
    // Check if it should even track scroll
    const hasSubmitted = localStorage.getItem('migajon_form_submitted');
    const hasSeen = sessionStorage.getItem('migajon_popup_seen');
    
    if (hasSubmitted || hasSeen) return;

    const handleScroll = () => {
      // Calculate scroll percentage
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      
      if (scrolled > 60) {
        setIsVisible(true);
        sessionStorage.setItem('migajon_popup_seen', 'true');
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    sessionStorage.setItem('migajon_popup_seen', 'true');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('migajon_form_submitted', 'true');
    setIsVisible(false);
    navigate('/gracias');
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(59, 42, 26, 0.75)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      padding: '20px'
    }}>
      <div className="popup-card" style={{
        backgroundColor: '#F5F0E8',
        borderRadius: '20px',
        boxShadow: '0 24px 64px rgba(59, 42, 26, 0.4)',
        maxWidth: '500px',
        width: '100%',
        position: 'relative',
        textAlign: 'center'
      }}>
        <button 
          onClick={closePopup}
          className="popup-close-btn"
          aria-label="Cerrar"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Wheat Icon */}
        <div style={{ marginBottom: '16px' }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#D4842A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 22 22 2"></path>
            <path d="M11 18c2.4-2.4 2.4-6.3 0-8.7-2.4-2.4-6.3-2.4-8.7 0"></path>
            <path d="M18 11c-2.4 2.4-6.3 2.4-8.7 0-2.4-2.4-2.4-6.3 0-8.7"></path>
            <path d="M14 14c-2.4 2.4-2.4 6.3 0 8.7-2.4-2.4-6.3-2.4-8.7 0"></path>
            <path d="M14 14c2.4-2.4 6.3-2.4 8.7 0 2.4 2.4 2.4 6.3 0 8.7"></path>
          </svg>
        </div>

        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: '28px',
          color: '#3B2A1A',
          margin: '0 0 12px 0',
          lineHeight: 1.2
        }}>
          Espera — tu primer pan tiene garantía.
        </h3>

        <p style={{
          fontFamily: "'Lato', sans-serif",
          fontWeight: 400,
          fontSize: '15px',
          color: 'rgba(59, 42, 26, 0.75)',
          margin: '0 0 24px 0',
          lineHeight: 1.5
        }}>
          Si no es el mejor pan que has probado en Polanco, te regresamos tu dinero. Sin preguntas.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input 
            type="text" 
            placeholder="Tu nombre" 
            className="form-input" 
            required 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            style={{ backgroundColor: 'rgba(59, 42, 26, 0.05)', borderColor: 'rgba(59, 42, 26, 0.2)', color: '#3B2A1A' }}
          />
          <input 
            type="tel" 
            placeholder="Tu WhatsApp" 
            className="form-input" 
            required 
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            style={{ backgroundColor: 'rgba(59, 42, 26, 0.05)', borderColor: 'rgba(59, 42, 26, 0.2)', color: '#3B2A1A' }}
          />
          <button type="submit" style={{
            backgroundColor: '#D4842A',
            color: '#3B2A1A',
            fontFamily: "'Lato', sans-serif",
            fontWeight: 700,
            fontSize: '16px',
            border: 'none',
            borderRadius: '30px',
            padding: '16px',
            width: '100%',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}>
            Pedir con garantía →
          </button>
        </form>

        <p style={{
          fontFamily: "'Lato', sans-serif",
          fontSize: '12px',
          color: 'rgba(59, 42, 26, 0.55)',
          marginTop: '12px',
          marginBottom: '20px'
        }}>
          Sin compromiso. Te avisamos cuando tu pedido está listo.
        </p>

        <div 
          onClick={closePopup}
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '13px',
            color: 'rgba(59, 42, 26, 0.4)',
            cursor: 'pointer',
            display: 'inline-block'
          }}
        >
          No me interesa el pan de verdad
        </div>
      </div>
    </div>
  );
};

export default PopupCapture;
