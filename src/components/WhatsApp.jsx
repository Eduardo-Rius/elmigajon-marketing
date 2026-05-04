import React, { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';

const WhatsApp = () => {
  const [showBubble, setShowBubble] = useState(false);
  const [bubbleClosed, setBubbleClosed] = useState(false);
  const whatsappNumber = '+525535099442';
  const defaultMessage = encodeURIComponent('Hola 👋 Vi su página y me interesa hacer un pedido de pan artesanal. ¿Me pueden dar más información?');

  useEffect(() => {
    const timer = setTimeout(() => {
      const shown = sessionStorage.getItem('migajon_chat_shown');
      if (!shown && !bubbleClosed) {
        setShowBubble(true);
        sessionStorage.setItem('migajon_chat_shown', 'true');
      }
    }, 8000);

    return () => clearTimeout(timer);
  }, [bubbleClosed]);

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${defaultMessage}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4 pointer-events-none">
      {showBubble && !bubbleClosed && (
        <div className="bg-white rounded-2xl rounded-br-none p-5 shadow-2xl max-w-[260px] animate-slide-up pointer-events-auto relative">
          <button 
            onClick={() => setBubbleClosed(true)}
            className="absolute top-2 right-2 p-1 text-dark opacity-30 hover:opacity-100"
          >
            <X size={16} />
          </button>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-brown text-cream flex items-center justify-center font-bold text-sm">
              M
            </div>
            <p className="text-sm font-medium text-dark">
              Hola 👋 ¿Tienes dudas sobre el reparto a tu colonia?
            </p>
          </div>
          <button 
            onClick={openWhatsApp}
            className="w-full bg-[#25D366] text-white py-2 px-4 rounded-full font-bold text-sm transition-transform active:scale-95"
          >
            Responder
          </button>
        </div>
      )}

      <div className="relative group pointer-events-auto">
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-dark text-cream py-2 px-3 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
          ¿Tienes dudas? Escríbenos ahora
        </div>
        <button
          onClick={openWhatsApp}
          className="w-[60px] h-[60px] bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg pulse-animation"
          aria-label="WhatsApp"
        >
          <MessageCircle size={32} />
        </button>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        .animate-slide-up {
          animation: slide-up 0.35s ease-out forwards;
        }
        .pulse-animation {
          animation: pulse 3s infinite;
        }
        @media (max-width: 768px) {
          .fixed {
            bottom: 80px; /* Leave space for Sticky CTA */
          }
        }
      `}</style>
    </div>
  );
};

export default WhatsApp;
