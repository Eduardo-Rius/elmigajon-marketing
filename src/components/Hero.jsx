import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImg from '../assets/hero-hands.png';

const Hero = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', phone: '', privacy: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.privacy) {
      localStorage.setItem('migajon_form_submitted', 'true');
      navigate('/gracias');
    } else {
      alert('Por favor, acepta la política de privacidad.');
    }
  };

  return (
    <section id="hero-section" className="hero" style={{ 
      backgroundColor: 'var(--color-primary-dark)', 
      minHeight: '100vh', 
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '100px 20px 60px'
    }}>
      <div className="texture-overlay"></div>
      
      {/* Hero Image Background */}
      <div className="hero-img-container" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '60%',
        zIndex: 0,
        overflow: 'hidden'
      }}>
        <img 
          src={heroImg} 
          alt="Manos trabajando masa madre" 
          loading="eager" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          }} 
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(59, 42, 26, 0.55)'
        }}></div>
      </div>

      <div className="reveal active" style={{ 
        position: 'relative', 
        zIndex: 1, 
        maxWidth: '1200px', 
        width: '100%',
        marginTop: '20%'
      }}>
        <div style={{ maxWidth: '800px' }}>
          <h1 className="hero-title" style={{ 
            color: 'var(--color-text-light)', 
            lineHeight: 1.1,
            marginBottom: '20px'
          }}>
            Pan de masa madre. Hecho esta mañana. En tu puerta por la mañana.
          </h1>
          <p style={{ 
            color: 'var(--color-subtext-light)', 
            fontSize: 'clamp(17px, 3vw, 22px)',
            marginBottom: '40px',
            maxWidth: '600px'
          }}>
            72 horas de fermentación. Cero conservadores. Entrega en Polanco y Las Lomas.
          </p>

          <form onSubmit={handleSubmit} className="form-container" style={{ maxWidth: '500px' }}>
            <input 
              type="text" 
              placeholder="Tu nombre" 
              className="form-input" 
              autoComplete="name"
              required 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input 
              type="tel" 
              placeholder="Tu WhatsApp" 
              className="form-input" 
              autoComplete="tel"
              inputMode="numeric"
              required 
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
            <button type="submit" className="btn-primary">
              Pide hoy antes de las 12 →
            </button>
            <p style={{ color: 'var(--color-subtext-light)', fontSize: '13px', textAlign: 'center' }}>
              Sin compromiso. Te contactamos en menos de 2 horas.
            </p>
            <label className="checkbox-container">
              <input 
                type="checkbox" 
                required 
                checked={formData.privacy}
                onChange={(e) => setFormData({...formData, privacy: e.target.checked})}
              />
              <span>He leído y acepto la <a href="/politica-privacidad" target="_blank" rel="noopener noreferrer">política de privacidad</a></span>
            </label>
          </form>

          <div style={{ 
            marginTop: '30px', 
            backgroundColor: 'var(--color-accent-green)', 
            color: 'white', 
            padding: '10px 20px', 
            borderRadius: '20px',
            display: 'inline-block',
            fontSize: '14px',
            fontWeight: 'bold'
          }}>
            ✓ Tu primer pedido con garantía de devolución
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
