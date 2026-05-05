import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GuaranteeCTA = () => {
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
    <section className="reveal" style={{ 
      backgroundColor: 'var(--color-accent-orange)', 
      color: 'var(--color-text-dark)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="animated-bg"></div>
      
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: '30px' }}>
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>

        <h2 style={{ fontSize: 'clamp(30px, 6vw, 44px)', lineHeight: 1.1, marginBottom: '20px' }}>
          Tu primer pedido tiene garantía de devolución.
        </h2>
        <p style={{ fontSize: '20px', marginBottom: '40px' }}>
          Si no es el mejor pan que has probado en Polanco, te regresamos tu dinero. Sin preguntas.
        </p>

        <form onSubmit={handleSubmit} className="form-container" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <input 
            type="text" 
            placeholder="Tu nombre" 
            className="form-input" 
            style={{ backgroundColor: 'rgba(59, 42, 26, 0.05)', borderColor: 'rgba(59, 42, 26, 0.2)', color: 'var(--color-text-dark)' }}
            required 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input 
            type="tel" 
            placeholder="Tu WhatsApp" 
            className="form-input" 
            style={{ backgroundColor: 'rgba(59, 42, 26, 0.05)', borderColor: 'rgba(59, 42, 26, 0.2)', color: 'var(--color-text-dark)' }}
            required 
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          <button type="submit" className="btn-primary" style={{ backgroundColor: 'var(--color-text-dark)', color: 'var(--color-text-light)' }}>
            Quiero mi primer pedido →
          </button>
          
          <label className="checkbox-container" style={{ color: 'var(--color-text-dark)', opacity: 0.8 }}>
            <input 
              type="checkbox" 
              required 
              checked={formData.privacy}
              onChange={(e) => setFormData({...formData, privacy: e.target.checked})}
            />
            <span>He leído y acepto la <a href="/politica-privacidad" target="_blank" rel="noopener noreferrer">política de privacidad</a></span>
          </label>
          <p style={{ color: 'var(--color-text-dark)', fontSize: '13px', marginTop: '10px' }}>
            Pedido mínimo 300 pesos. Entrega en Polanco y Las Lomas.
          </p>
        </form>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .animated-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, #D4842A, #C4741A);
          background-size: 400% 400%;
          animation: gradientBG 6s ease infinite;
          opacity: 0.5;
        }
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}} />
    </section>
  );
};

export default GuaranteeCTA;
