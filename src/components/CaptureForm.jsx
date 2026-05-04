import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CaptureForm = ({ layout = 'inline', buttonText = 'Pide hoy antes de las 12 →', buttonClass = 'btn-orange', showNote = true, variant = 'default' }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    sessionStorage.setItem('migajon_form_submitted', 'true');
    if (window.fbq) window.fbq('track', 'Lead');
    navigate('/gracias');
  };

  const inputClass = variant === 'glass' 
    ? "w-full p-4 rounded-xl border border-white/20 focus:outline-none focus:border-orange bg-white/10 backdrop-blur-md text-white placeholder:text-white/50"
    : "w-full p-4 rounded-xl border border-sand focus:outline-none focus:border-orange bg-white text-dark";

  return (
    <div className={`capture-form-container ${layout} ${variant}`}>
      <form onSubmit={handleSubmit} className={`flex flex-col gap-4 ${layout === 'inline' ? 'md:flex-row md:items-start' : ''}`}>
        <div className="flex-1">
          <input
            type="text"
            placeholder="Tu nombre"
            required
            className={inputClass}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            autoComplete="name"
          />
        </div>
        <div className="flex-1">
          <input
            type="tel"
            placeholder="Tu WhatsApp"
            required
            className={inputClass}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            autoComplete="tel"
            inputMode="numeric"
          />
        </div>
        <button type="submit" className={`btn ${buttonClass} flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold transition-all`}>
          {buttonText}
        </button>
      </form>
      
      <div className="mt-4 flex flex-col gap-2">
        <label className={`flex items-center gap-2 cursor-pointer text-xs opacity-70 ${variant === 'glass' ? 'text-white' : ''}`}>
          <input type="checkbox" required className="rounded border-sand text-orange" />
          <span>He leído y acepto la <a href="/politica-privacidad" className="underline">política de privacidad</a></span>
        </label>
        {showNote && (
          <p className={`text-xs opacity-70 italic ${variant === 'glass' ? 'text-white' : ''}`}>Sin compromiso. Te contactamos en menos de 2 horas.</p>
        )}
      </div>

      <style jsx>{`
        .capture-form-container.inline form {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .capture-form-container.vertical form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .capture-form-container.glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          padding: 32px;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.2);
        }
        input {
          min-height: 52px;
          font-size: 16px;
        }
        @media (max-width: 768px) {
          .capture-form-container.inline form {
            flex-direction: column;
          }
          button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default CaptureForm;
