import React, { useState, useEffect } from 'react';

const WhatsAppSystem = () => {
  const [showBubble, setShowBubble] = useState(false);
  
  const phoneNumber = '525535099442'; // WhatsApp number without '+' 
  const message = 'Hola 👋 Vi su página y me interesa hacer un pedido de pan artesanal. ¿Me pueden dar más información?';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    const hasSeenChat = sessionStorage.getItem('migajon_chat_shown');
    
    if (!hasSeenChat) {
      const timer = setTimeout(() => {
        setShowBubble(true);
      }, 8000); // 8 seconds
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseBubble = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setShowBubble(false);
    sessionStorage.setItem('migajon_chat_shown', 'true');
  };

  const handleOpenWhatsApp = () => {
    // Both button and bubble can save the flag to avoid showing it later if they already clicked
    sessionStorage.setItem('migajon_chat_shown', 'true');
    window.open(whatsappUrl, '_blank');
    setShowBubble(false);
  };

  return (
    <>
      <div className="wa-system-container">
        
        {/* Chat Bubble */}
        {showBubble && (
          <div className="wa-chat-bubble">
            <button className="wa-bubble-close" onClick={handleCloseBubble} aria-label="Cerrar">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="wa-bubble-header">
              <div className="wa-avatar">🍞</div>
              <p className="wa-bubble-text">
                Hola 👋 ¿Tienes dudas sobre el reparto a tu colonia?
              </p>
            </div>
            
            <button className="wa-bubble-reply" onClick={handleOpenWhatsApp}>
              Responder
            </button>
          </div>
        )}

        {/* Floating WhatsApp Button */}
        <div className="wa-btn-container">
          <div className="wa-tooltip">
            ¿Tienes dudas? Escríbenos ahora
          </div>
          
          <button className="wa-floating-btn" onClick={handleOpenWhatsApp} aria-label="Abrir WhatsApp">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .wa-system-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 16px;
        }

        @media (max-width: 768px) {
          .wa-system-container {
            bottom: 80px; /* Accounts for future sticky CTA */
          }
        }

        /* Bubble Styles */
        .wa-chat-bubble {
          background-color: #FFFFFF;
          border-radius: 16px 16px 4px 16px;
          padding: 16px 20px;
          box-shadow: 0 10px 24px rgba(59, 42, 26, 0.15);
          width: max-content;
          max-width: 260px;
          position: relative;
          animation: slideUpFade 0.35s ease-out forwards;
          transform-origin: bottom right;
        }

        .wa-bubble-close {
          position: absolute;
          top: 0;
          right: 0;
          background: transparent;
          color: rgba(59, 42, 26, 0.4);
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          cursor: pointer;
        }

        .wa-bubble-close:hover {
          color: rgba(59, 42, 26, 0.8);
          background: rgba(59, 42, 26, 0.05);
        }

        .wa-bubble-header {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 12px;
          padding-right: 12px;
        }

        .wa-avatar {
          width: 36px;
          height: 36px;
          background-color: #8B5E2B;
          color: #FFF3DC;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }

        .wa-bubble-text {
          font-family: 'Lato', sans-serif;
          font-weight: 400;
          font-size: 14px;
          color: #3B2A1A;
          margin: 0;
          line-height: 1.4;
        }

        .wa-bubble-reply {
          background-color: #25D366;
          color: #FFFFFF;
          font-family: 'Lato', sans-serif;
          font-weight: 700;
          font-size: 13px;
          border-radius: 20px;
          padding: 8px 20px;
          width: 100%;
          display: block;
          text-align: center;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .wa-bubble-reply:hover {
          background-color: #1DA851;
        }

        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Floating Button Styles */
        .wa-btn-container {
          position: relative;
          display: flex;
          align-items: center;
        }

        .wa-floating-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #25D366;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(37, 211, 102, 0.4);
          cursor: pointer;
          border: none;
          animation: pulse 3s infinite;
          transition: transform 0.2s;
        }

        .wa-floating-btn:hover {
          transform: scale(1.05);
        }

        .wa-tooltip {
          position: absolute;
          right: 76px;
          background-color: #3B2A1A;
          color: #FFF3DC;
          font-family: 'Lato', sans-serif;
          font-weight: 400;
          font-size: 13px;
          padding: 8px 12px;
          border-radius: 8px;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s, visibility 0.3s;
        }

        /* Tooltip Arrow */
        .wa-tooltip::after {
          content: '';
          position: absolute;
          top: 50%;
          right: -6px;
          transform: translateY(-50%);
          border-width: 6px 0 6px 6px;
          border-style: solid;
          border-color: transparent transparent transparent #3B2A1A;
        }

        .wa-floating-btn:hover ~ .wa-tooltip,
        .wa-btn-container:hover .wa-tooltip {
          opacity: 1;
          visibility: visible;
        }

        @media (max-width: 768px) {
          .wa-tooltip {
            display: none; /* Hide tooltip on mobile */
          }
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
      `}} />
    </>
  );
};

export default WhatsAppSystem;
