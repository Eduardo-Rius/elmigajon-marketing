import React, { useEffect } from 'react';
import { Check, MessageCircle, Instagram, ArrowRight } from 'lucide-react';

const ThankYou = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  const openWhatsApp = () => {
    const whatsappNumber = '+525535099442';
    const message = encodeURIComponent('Hola 👋 Acabo de hacer un pedido en la web y quiero confirmar. ¿Me ayudan?');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="thank-you-page bg-light min-h-screen py-16 md:py-24">
      {/* META PIXEL CONVERSION EVENT: Lead */}
      <div className="container max-w-[680px] text-center">
        {/* SECTION 1 - CONFIRMATION */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 text-green animate-draw">
              <Check size={80} strokeWidth={3} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-6">
            ¡Listo, Eduardo ya sabe que vienes!
          </h1>
          <p className="text-xl text-dark/75 leading-relaxed">
            Recibimos tu pedido. Te contactamos en menos de 2 horas por WhatsApp para confirmar los detalles y la hora de entrega.
          </p>
          <div className="w-16 h-[2px] bg-orange mx-auto mt-12"></div>
        </div>

        {/* SECTION 2 - STEPS */}
        <div className="text-left mb-20 space-y-12">
          <h2 className="text-3xl font-serif font-bold text-dark text-center mb-12">¿Qué pasa ahora?</h2>
          
          <div className="flex gap-6 items-start reveal stagger-1 active">
            <span className="text-5xl font-serif font-black text-orange leading-none">1</span>
            <div>
              <h3 className="text-xl font-bold mb-2">En menos de 2 horas</h3>
              <p className="text-dark/80">Te escribimos por WhatsApp para confirmar tu pedido y elegir qué panes quieres.</p>
            </div>
          </div>
          
          <div className="flex gap-6 items-start reveal stagger-2 active">
            <span className="text-5xl font-serif font-black text-orange leading-none">2</span>
            <div>
              <h3 className="text-xl font-bold mb-2">Esta noche</h3>
              <p className="text-dark/80">Empezamos la fermentación de 72 horas. Tu pan empieza a hacerse esta misma noche.</p>
            </div>
          </div>
          
          <div className="flex gap-6 items-start reveal stagger-3 active">
            <span className="text-5xl font-serif font-black text-orange leading-none">3</span>
            <div>
              <h3 className="text-xl font-bold mb-2">Mañana por la mañana</h3>
              <p className="text-dark/80">Tu pedido llega fresco a tu puerta antes de las 10 am. Huele a panadería recién abierta.</p>
            </div>
          </div>
        </div>

        {/* SECTION 3 - WHATSAPP CTA */}
        <div className="bg-brown rounded-3xl p-8 md:p-12 text-cream mb-20 shadow-xl">
          <h2 className="text-3xl font-serif font-bold mb-4">¿Quieres confirmar más rápido?</h2>
          <p className="text-sand mb-10">Escríbenos ahora y confirmamos tu pedido en minutos.</p>
          <button 
            onClick={openWhatsApp}
            className="w-full bg-[#25D366] text-white py-5 px-8 rounded-full font-bold text-xl flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-lg"
          >
            <MessageCircle size={28} />
            Confirmar por WhatsApp
          </button>
          <p className="text-xs text-sand/60 mt-6 italic">Respondemos en menos de 2 horas en horario de 8am a 7pm</p>
        </div>

        {/* SECTION 4 - BONUS */}
        <div className="text-center">
          <p className="text-lg text-dark/70 italic mb-8">Mientras esperas, esto te puede interesar...</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-orange/20 p-6 rounded-2xl">
              <h4 className="font-bold mb-3 text-sm">¿Cómo conservar el pan?</h4>
              <p className="text-xs opacity-70 mb-4">El pan artesanal no se guarda como el del súper.</p>
              <a href="https://instagram.com/lamigapolanco" target="_blank" className="text-orange text-xs font-bold flex items-center justify-center gap-1">
                Ver en Instagram <ArrowRight size={12} />
              </a>
            </div>
            <div className="bg-white border border-orange/20 p-6 rounded-2xl">
              <h4 className="font-bold mb-3 text-sm">Panes de esta semana</h4>
              <p className="text-xs opacity-70 mb-4">La bollería y las hogazas cambian según la temporada.</p>
              <a href="https://instagram.com/lamigapolanco" target="_blank" className="text-orange text-xs font-bold flex items-center justify-center gap-1">
                Ver Menú <ArrowRight size={12} />
              </a>
            </div>
            <div className="bg-white border border-orange/20 p-6 rounded-2xl">
              <h4 className="font-bold mb-3 text-sm">El proceso de 72h</h4>
              <p className="text-xs opacity-70 mb-4">Por qué tardamos tres días en hacer tu pan.</p>
              <a href="/" className="text-orange text-xs font-bold flex items-center justify-center gap-1">
                Ver más <ArrowRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes draw {
          from { stroke-dashoffset: 100; }
          to { stroke-dashoffset: 0; }
        }
        .animate-draw svg {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: draw 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ThankYou;
