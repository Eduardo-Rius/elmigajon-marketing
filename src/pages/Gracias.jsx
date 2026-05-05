import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Gracias = () => {
  const phoneNumber = '525535099442';
  const message = 'Hola 👋 Acabo de hacer un pedido en la web y quiero confirmar. ¿Me ayudan?';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: '#F5F0E8', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <main style={{ maxWidth: '680px', margin: '0 auto', padding: '60px 20px', width: '100%', flex: 1 }}>
        
        {/* SECTION 1 — CONFIRMACIÓN EMOCIONAL */}
        <section style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
            <svg 
              className="animated-check"
              width="80" 
              height="80" 
              viewBox="0 0 80 80" 
              fill="none" 
              stroke="#4A7A2E" 
              strokeWidth="4" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="40" cy="40" r="36" stroke="rgba(74, 122, 46, 0.2)" strokeWidth="2" />
              <path 
                className="check-path"
                d="M24 40 L34 50 L56 28" 
              />
            </svg>
          </div>
          <h1 className="gracias-title" style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontWeight: 700, 
            color: '#3B2A1A',
            marginBottom: '16px',
            lineHeight: 1.2
          }}>
            ¡Listo, Eduardo ya sabe que vienes!
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '18px',
            color: 'rgba(59, 42, 26, 0.75)',
            lineHeight: 1.5,
            margin: 0
          }}>
            Recibimos tu pedido. Te contactamos en menos de 2 horas por WhatsApp para confirmar los detalles y la hora de entrega.
          </p>
          <div style={{
            width: '60px',
            height: '2px',
            backgroundColor: '#D4842A',
            margin: '32px auto'
          }}></div>
        </section>

        {/* SECTION 2 — SIGUIENTES PASOS */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: '28px',
            color: '#3B2A1A',
            marginBottom: '32px',
            textAlign: 'center'
          }}>
            ¿Qué pasa ahora?
          </h2>

          <div className="steps-container">
            {[
              {
                num: '1',
                title: 'En menos de 2 horas',
                text: 'Te escribimos por WhatsApp para confirmar tu pedido y elegir qué panes quieres.'
              },
              {
                num: '2',
                title: 'Esta noche',
                text: 'Empezamos la fermentación de 72 horas. Tu pan empieza a hacerse esta misma noche.'
              },
              {
                num: '3',
                title: 'Mañana por la mañana',
                text: 'Tu pedido llega fresco a tu puerta antes de las 10 am. Huele a panadería recién abierta.'
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className={`step-item fade-in-step delay-${index + 1}`}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px',
                  marginBottom: '24px'
                }}
              >
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 900,
                  fontSize: '48px',
                  color: '#D4842A',
                  lineHeight: 1,
                  minWidth: '32px'
                }}>
                  {step.num}
                </div>
                <div>
                  <h3 style={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 700,
                    fontSize: '18px',
                    color: '#3B2A1A',
                    marginBottom: '4px'
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 400,
                    fontSize: '16px',
                    color: 'rgba(59, 42, 26, 0.8)',
                    lineHeight: 1.5,
                    margin: 0
                  }}>
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3 — CTA DE WHATSAPP */}
        <section style={{
          backgroundColor: '#8B5E2B',
          borderRadius: '16px',
          padding: '32px 24px',
          textAlign: 'center',
          marginBottom: '60px',
          boxShadow: '0 12px 32px rgba(59, 42, 26, 0.15)'
        }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: '26px',
            color: '#FFF3DC',
            marginBottom: '12px'
          }}>
            ¿Quieres confirmar más rápido?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '16px',
            color: '#E8D4A8',
            marginBottom: '24px'
          }}>
            Escríbenos ahora y confirmamos tu pedido en minutos.
          </p>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="wa-cta-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              backgroundColor: '#25D366',
              color: '#FFFFFF',
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              fontSize: '18px',
              textDecoration: 'none',
              padding: '18px 40px',
              borderRadius: '30px',
              width: '100%',
              maxWidth: '400px',
              margin: '0 auto 16px',
              transition: 'transform 0.2s, background-color 0.2s'
            }}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            Confirmar por WhatsApp
          </a>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '13px',
            color: '#E8D4A8',
            margin: 0,
            opacity: 0.8
          }}>
            Respondemos en menos de 2 horas en horario de 8am a 7pm
          </p>
        </section>

        {/* SECTION 4 — BONUS CONTENT */}
        <section>
          <h2 style={{
            fontFamily: "'Lato', sans-serif",
            fontWeight: 400,
            fontStyle: 'italic',
            fontSize: '18px',
            color: 'rgba(59, 42, 26, 0.7)',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            Mientras esperas, esto te puede interesar...
          </h2>
          <div className="bonus-grid">
            {[
              {
                title: '¿Cómo conservar el pan de masa madre?',
                text: 'El pan artesanal no se guarda como el del súper. Aquí te decimos cómo.',
                btnText: 'Ver en Instagram →',
                link: 'https://instagram.com/lamigapolanco'
              },
              {
                title: 'Qué panes tenemos esta semana',
                text: 'La bollería y las hogazas cambian según la temporada. Síguenos para ver el menú.',
                btnText: 'Ver en Instagram →',
                link: 'https://instagram.com/lamigapolanco'
              },
              {
                title: 'El proceso de 72 horas',
                text: 'Por qué tardamos tres días en hacer tu pan y por qué eso importa.',
                btnText: 'Ver más →',
                link: 'https://lamigapolanco.com'
              }
            ].map((card, idx) => (
              <div key={idx} className="bonus-card" style={{
                border: '1px solid rgba(212, 132, 42, 0.3)',
                borderRadius: '12px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <h3 style={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 700,
                    fontSize: '16px',
                    color: '#3B2A1A',
                    marginBottom: '8px'
                  }}>
                    {card.title}
                  </h3>
                  <p style={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 400,
                    fontSize: '14px',
                    color: 'rgba(59, 42, 26, 0.75)',
                    marginBottom: '20px',
                    lineHeight: 1.4
                  }}>
                    {card.text}
                  </p>
                </div>
                <a 
                  href={card.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#D4842A',
                    textDecoration: 'none',
                    display: 'inline-block'
                  }}
                >
                  {card.btnText}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* BACK TO HOME BUTTON */}
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
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

      <style dangerouslySetInnerHTML={{ __html: `
        .gracias-title {
          font-size: 38px;
        }

        .check-path {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: drawCheck 0.8s ease-out forwards;
          animation-delay: 0.2s;
        }

        @keyframes drawCheck {
          to {
            stroke-dashoffset: 0;
          }
        }

        .fade-in-step {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.5s ease-out forwards;
        }

        .delay-1 { animation-delay: 0.8s; }
        .delay-2 { animation-delay: 1.0s; }
        .delay-3 { animation-delay: 1.2s; }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .wa-cta-btn:hover {
          background-color: #1DA851 !important;
          transform: scale(1.02);
        }

        .bonus-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .bonus-card {
          transition: transform 0.2s, box-shadow 0.2s;
          background-color: transparent;
        }

        .bonus-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(59, 42, 26, 0.08);
          background-color: #FFFFFF;
        }

        @media (max-width: 768px) {
          .gracias-title {
            font-size: 26px !important;
          }
          
          .bonus-grid {
            grid-template-columns: 1fr;
          }
        }
      `}} />
    </div>
  );
};

export default Gracias;
