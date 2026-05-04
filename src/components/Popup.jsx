import React, { useState, useEffect } from 'react';
import CaptureForm from './CaptureForm';
import { X, Wheat } from 'lucide-react';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasClosed, setHasClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasClosed) return;
      
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const seen = sessionStorage.getItem('migajon_popup_seen');
      const submitted = sessionStorage.getItem('migajon_form_submitted');
      const isThanksPage = window.location.pathname === '/gracias';

      if (scrollPercent > 60 && !seen && !submitted && !isThanksPage) {
        setIsVisible(true);
        sessionStorage.setItem('migajon_popup_seen', 'true');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasClosed]);

  if (!isVisible) return null;

  const closePopup = () => {
    setIsVisible(false);
    setHasClosed(true);
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-dark-brown/75 backdrop-blur-sm" onClick={closePopup}></div>
      <div className="relative bg-light-bg rounded-3xl p-8 md:p-12 max-w-[500px] w-full shadow-2xl animate-slide-down">
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 p-2 text-dark-brown opacity-50 hover:opacity-100 transition-opacity"
          aria-label="Cerrar"
        >
          <X size={24} />
        </button>

        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Wheat size={48} className="text-orange" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-dark-brown mb-4">
            Espera — tu primer pan tiene garantía.
          </h2>
          <p className="text-dark-brown/75 mb-8">
            Si no es el mejor pan que has probado en Polanco, te regresamos tu dinero. Sin preguntas.
          </p>
          
          <CaptureForm 
            layout="vertical" 
            buttonText="Pedir con garantía →"
            showNote={false}
          />
          
          <p className="text-xs opacity-55 mt-4">
            Sin compromiso. Te avisamos cuando tu pedido está listo.
          </p>

          <button 
            onClick={closePopup}
            className="mt-6 text-sm text-dark-brown opacity-40 hover:opacity-100 transition-opacity underline decoration-dotted"
          >
            No me interesa el pan de verdad
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down {
          animation: slide-down 0.4s ease-out forwards;
        }
        .bg-dark-brown\/75 {
          background-color: rgba(59, 42, 26, 0.75);
        }
      `}</style>
    </div>
  );
};

export default Popup;
