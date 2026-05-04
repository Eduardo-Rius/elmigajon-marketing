import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CaptureForm = ({ layout = 'inline', buttonText = 'Pide hoy antes de las 12 →', buttonClass = 'btn-orange', showNote = true }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, we would send this to a backend
    console.log('Form submitted:', formData);
    sessionStorage.setItem('migajon_form_submitted', 'true');
    // Meta Pixel Conversion Event
    if (window.fbq) window.fbq('track', 'Lead');
    navigate('/gracias');
  };

  return (
    <div className={`capture-form-container ${layout}`}>
      <form onSubmit={handleSubmit} className={`flex flex-col gap-4 ${layout === 'inline' ? 'md:flex-row md:items-start' : ''}`}>
        <div className="flex-1">
          <input
            type="text"
            placeholder="Tu nombre"
            required
            className="w-full p-4 rounded-xl border border-sand focus:outline-none focus:border-orange bg-white text-dark"
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
            className="w-full p-4 rounded-xl border border-sand focus:outline-none focus:border-orange bg-white text-dark"
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
        <label className="flex items-center gap-2 cursor-pointer text-xs opacity-70">
          <input type="checkbox" required className="rounded border-sand text-orange" />
          <span>He leído y acepto la <a href="/politica-privacidad" className="underline">política de privacidad</a></span>
        </label>
        {showNote && (
          <p className="text-xs opacity-70 italic">Sin compromiso. Te contactamos en menos de 2 horas.</p>
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
