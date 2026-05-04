import React, { useEffect, useRef } from 'react';
import CaptureForm from '../components/CaptureForm';
import { Wheat, Hand, Heart, Check, X, Clock, MapPin, ShoppingBag, Camera } from 'lucide-react';
import heroImg from '../assets/hero.png';
import loafImg from '../assets/loaf.png';
import crumbImg from '../assets/crumb.png';
import deliveryImg from '../assets/delivery.png';
import lifestyleImg from '../assets/lifestyle.png';

const Landing = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    const options = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, options);

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="landing-page relative min-h-screen">
      {/* GLOBAL FIXED BACKGROUND */}
      <div className="fixed inset-0 z-[-1]">
        <img src={heroImg} alt="Pan artesanal" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 backdrop-brightness-50"></div>
      </div>

      {/* SECTION 1 - HERO */}
      <section className="min-h-screen flex items-center relative py-12 md:py-20">
        <div className="container relative z-10">
          <div className="max-w-[850px] mx-auto text-center reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white text-[10px] uppercase tracking-[0.2em] mb-12 mx-auto">
              <span className="w-1.5 h-1.5 bg-orange rounded-full animate-pulse"></span>
              Panadería Artesana · Polanco
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.1] mb-4">
              Pan de masa madre.
            </h1>
            <h2 className="text-4xl md:text-7xl font-serif italic text-orange leading-tight mb-8">
              Hecho esta mañana.
            </h2>
            <p className="text-xl md:text-2xl text-cream mb-16 max-w-[650px] mx-auto opacity-90">
              Directo a tu mesa. 72 horas de fermentación natural y cero conservadores. Entrega diaria en Polanco y Las Lomas.
            </p>
            
            <div className="max-w-[700px] mx-auto">
              <CaptureForm layout="vertical" variant="glass" buttonClass="btn-orange" buttonText="Quiero mi primer pedido hoy →" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - WHY SOURDOUGH */}
      <section className="bg-white/5 backdrop-blur-sm border-y border-white/10 py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-8">
                ¿Por qué es diferente el pan de masa madre?
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4 reveal stagger-1">
                  <div className="shrink-0 w-12 h-12 bg-brown/10 rounded-full flex items-center justify-center text-brown">
                    <Wheat size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">72 horas de fermentación natural</h3>
                    <p className="opacity-80">El tiempo hace lo que ningún aditivo puede. Sabor profundo y mejor digestión.</p>
                  </div>
                </div>
                <div className="flex gap-4 reveal stagger-2">
                  <div className="shrink-0 w-12 h-12 bg-brown/10 rounded-full flex items-center justify-center text-brown">
                    <Hand size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Amasado a mano, cada pieza</h3>
                    <p className="opacity-80">No hay dos iguales, y así se nota. Cuidado artesanal en cada hogaza.</p>
                  </div>
                </div>
                <div className="flex gap-4 reveal stagger-3">
                  <div className="shrink-0 w-12 h-12 bg-brown/10 rounded-full flex items-center justify-center text-brown">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Ingredientes locales, sin conservadores</h3>
                    <p className="opacity-80">Lo que comes sí importa. Harina, agua, sal y nada más.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal order-first md:order-last">
              <img src={loafImg} alt="Hogaza de pan" className="w-full rounded-2xl shadow-xl aspect-square object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - PROBLEM VS SOLUTION */}
      <section className="bg-brown/80 backdrop-blur-md text-cream py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <img src={crumbImg} alt="Miga artesanal" className="w-full rounded-2xl shadow-2xl" />
            </div>
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                ¿Cansado del pan que se pone duro en dos horas?
              </h2>
              <p className="text-lg text-sand mb-10 italic">
                "El pan industrial no envejece mal porque es fresco. Envejece mal porque está lleno de cosas que no deberían estar ahí."
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/20 border border-white/10 p-6 rounded-2xl">
                  <h4 className="font-bold mb-4 text-red-400">Pan del súper</h4>
                  <ul className="space-y-3 text-sm opacity-80">
                    <li className="flex items-center gap-2"><X size={14} className="text-red-400" /> Esponjosantes</li>
                    <li className="flex items-center gap-2"><X size={14} className="text-red-400" /> Conservadores E-200</li>
                    <li className="flex items-center gap-2"><X size={14} className="text-red-400" /> Fermentación en 2 horas</li>
                    <li className="flex items-center gap-2"><X size={14} className="text-red-400" /> Duro al día siguiente</li>
                  </ul>
                </div>
                <div className="bg-green/20 border border-green/30 p-6 rounded-2xl">
                  <h4 className="font-bold mb-4 text-green">Pan El Migajón</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2"><Check size={14} /> Harina, agua, sal, masa madre</li>
                    <li className="flex items-center gap-2"><Check size={14} /> 72h fermentación real</li>
                    <li className="flex items-center gap-2"><Check size={14} /> Sin aditivos ni conservadores</li>
                    <li className="flex items-center gap-2"><Check size={14} /> Mejor al 2º y 3º día</li>
                  </ul>
                </div>
              </div>
              <button className="btn btn-orange mt-10" onClick={() => window.scrollTo(0, 0)}>Pruébalo esta semana →</button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - DELIVERY */}
      <section className="bg-white/5 backdrop-blur-sm border-y border-white/10 py-24">
        <div className="container">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">En tu puerta. Sin que tengas que moverte.</h2>
            <img src={deliveryImg} alt="Entrega en Polanco" className="max-w-4xl w-full mx-auto rounded-3xl shadow-lg my-12" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-orange/20 p-8 rounded-2xl shadow-sm hover:-translate-y-2 transition-all reveal stagger-1">
              <Clock className="text-orange mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Pide antes de las 12</h3>
              <p className="opacity-70 text-sm">Recibe al día siguiente por la mañana, mientras el pan aún huele a horno.</p>
            </div>
            <div className="bg-white border border-orange/20 p-8 rounded-2xl shadow-sm hover:-translate-y-2 transition-all reveal stagger-2">
              <MapPin className="text-orange mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Polanco y Las Lomas</h3>
              <p className="opacity-70 text-sm">Repartimos en toda la zona. Consulta si llegamos a tu calle.</p>
            </div>
            <div className="bg-white border border-orange/20 p-8 rounded-2xl shadow-sm hover:-translate-y-2 transition-all reveal stagger-3">
              <ShoppingBag className="text-orange mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Pedido mínimo: 300 pesos</h3>
              <p className="opacity-70 text-sm">Pan desde 100 pesos. Bollería desde 30. Combina como quieras.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - TESTIMONIALS */}
      <section className="bg-black/60 backdrop-blur-md text-cream relative py-24 border-y border-white/10">
        <div className="absolute inset-0 opacity-5">
          <img src={lifestyleImg} alt="Lifestyle" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="container relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 reveal">Lo que dicen en Polanco</h2>
          
          <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-8 md:pb-0 scrollbar-hide">
            {[
              { text: "Hace seis meses que no compramos pan en el súper. No hay vuelta atrás.", author: "Mariana R.", loc: "colonia Polanco" },
              { text: "Mis hijos ahora saben lo que es el pan de verdad. Y ya no quieren otro.", author: "Carlos M.", loc: "Las Lomas de Chapultepec" },
              { text: "Lo pedí por curiosidad. La segunda semana ya lo tenía en el calendario.", author: "Sofía G.", loc: "colonia Polanco" }
            ].map((t, i) => (
              <div key={i} className="min-w-[85vw] md:min-w-0 bg-white/10 border border-white/20 p-8 rounded-3xl reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <p className="text-xl italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange rounded-full flex items-center justify-center font-bold text-dark">{t.author[0]}</div>
                  <div>
                    <p className="font-bold text-sand text-sm">{t.author}</p>
                    <p className="text-xs opacity-60">{t.loc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - GUARANTEE & FINAL CTA */}
      <section id="final-cta" className="bg-orange/90 backdrop-blur-sm relative overflow-hidden py-24 text-center">
        <div className="container relative z-10 reveal">
          <Check className="w-20 h-20 mx-auto text-dark mb-8" strokeWidth={3} />
          <h2 className="text-4xl md:text-6xl font-black text-dark mb-6">Tu primer pedido tiene garantía de devolución.</h2>
          <p className="text-xl md:text-2xl text-dark/80 mb-12 max-w-2xl mx-auto">
            Si no es el mejor pan que has probado en Polanco, te regresamos tu dinero. Sin preguntas.
          </p>
          
          <div className="bg-dark p-8 md:p-12 rounded-[40px] max-w-3xl mx-auto shadow-2xl">
            <CaptureForm layout="vertical" buttonClass="btn-orange" buttonText="Quiero mi primer pedido →" />
            <p className="text-cream/60 text-sm mt-6">Pedido mínimo 300 pesos. Entrega en Polanco y Las Lomas.</p>
          </div>
        </div>
        
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 bg-gradient-animate"></div>
      </section>

      {/* SECTION 7 - FOOTER */}
      <footer className="bg-dark py-12 text-center text-sand">
        <div className="container">
          <h2 className="font-serif text-2xl text-cream mb-6">El Migajón</h2>
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://instagram.com/lamigapolanco" target="_blank" className="hover:text-orange transition-colors flex items-center gap-2">
              <Camera size={20} /> @lamigapolanco
            </a>
            <span className="opacity-30">|</span>
            <span className="text-sm">lamigapolanco.com</span>
          </div>
          <p className="text-sm opacity-60 mb-4">Polanco · Las Lomas de Chapultepec · CDMX</p>
          <a href="/politica-privacidad" className="text-xs opacity-40 hover:opacity-100 underline">Política de privacidad</a>
          <p className="text-[10px] opacity-20 mt-8">© 2024 El Migajón. Todos los derechos reservados.</p>
        </div>
      </footer>

      <style jsx>{`
        .bg-gradient-animate {
          background: linear-gradient(-45deg, #D4842A, #C4741A, #E8D4A8, #D4842A);
          background-size: 400% 400%;
          animation: gradient 6s ease infinite;
          opacity: 0.3;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

// Final structure updated for immersive experience
export default Landing;
