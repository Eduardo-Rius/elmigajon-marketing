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
    <div className="landing-page relative min-h-screen text-white">
      {/* GLOBAL FIXED BACKGROUND */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <img src={heroImg} alt="Pan artesanal" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/65 backdrop-brightness-50"></div>
      </div>

      {/* SECTION 1 - HERO */}
      <section className="min-h-screen flex items-center relative py-12 md:py-20">
        <div className="container relative z-10">
          <div className="max-w-[850px] mx-auto text-center reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white text-[10px] uppercase tracking-[0.2em] mb-12 mx-auto">
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
      <section className="bg-white/5 backdrop-blur-xl border-y border-white/10 py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                ¿Por qué es diferente el pan de masa madre?
              </h2>
              <div className="space-y-8">
                {[
                  { icon: <Wheat size={24} />, title: "72 horas de fermentación natural", desc: "El tiempo hace lo que ningún aditivo puede. Sabor profundo y mejor digestión." },
                  { icon: <Hand size={24} />, title: "Amasado a mano, cada pieza", desc: "No hay dos iguales, y así se nota. Cuidado artesanal en cada hogaza." },
                  { icon: <Heart size={24} />, title: "Ingredientes locales, sin conservadores", desc: "Lo que comes sí importa. Harina, agua, sal y nada más." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
                    <div className="shrink-0 w-12 h-12 bg-orange/20 rounded-full flex items-center justify-center text-orange border border-orange/30">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-sand">{item.title}</h3>
                      <p className="opacity-70 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal order-first md:order-last">
              <div className="relative group">
                <div className="absolute -inset-1 bg-orange/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <img src={loafImg} alt="Hogaza de pan" className="relative w-full rounded-2xl shadow-2xl aspect-square object-cover border border-white/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - PROBLEM VS SOLUTION */}
      <section className="bg-black/40 backdrop-blur-lg py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <img src={crumbImg} alt="Miga artesanal" className="w-full rounded-2xl shadow-2xl border border-white/10" />
            </div>
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-white">
                ¿Cansado del pan que se pone duro en dos horas?
              </h2>
              <p className="text-lg text-sand mb-10 italic opacity-80">
                "El pan industrial no envejece mal porque es fresco. Envejece mal porque está lleno de cosas que no deberían estar ahí."
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                  <h4 className="font-bold mb-4 text-red-400 uppercase tracking-widest text-xs">Pan del súper</h4>
                  <ul className="space-y-3 text-sm opacity-70">
                    <li className="flex items-center gap-2"><X size={14} className="text-red-400" /> Esponjosantes</li>
                    <li className="flex items-center gap-2"><X size={14} className="text-red-400" /> Conservadores E-200</li>
                    <li className="flex items-center gap-2"><X size={14} className="text-red-400" /> Fermentación en 2 horas</li>
                    <li className="flex items-center gap-2"><X size={14} className="text-red-400" /> Duro al día siguiente</li>
                  </ul>
                </div>
                <div className="bg-orange/10 border border-orange/30 p-6 rounded-2xl backdrop-blur-sm">
                  <h4 className="font-bold mb-4 text-orange uppercase tracking-widest text-xs">Pan El Migajón</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2"><Check size={14} className="text-orange" /> Harina, agua, sal, masa madre</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-orange" /> 72h fermentación real</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-orange" /> Sin aditivos ni conservadores</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-orange" /> Mejor al 2º y 3º día</li>
                  </ul>
                </div>
              </div>
              <button className="btn btn-orange mt-10 w-full md:w-auto" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Pruébalo esta semana →</button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - DELIVERY */}
      <section className="bg-white/5 backdrop-blur-xl border-y border-white/10 py-24">
        <div className="container">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">En tu puerta. Sin que tengas que moverte.</h2>
            <div className="relative inline-block my-12">
              <div className="absolute -inset-4 bg-orange/20 blur-2xl rounded-full opacity-20"></div>
              <img src={deliveryImg} alt="Entrega en Polanco" className="relative max-w-4xl w-full mx-auto rounded-3xl shadow-2xl border border-white/10" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Clock size={32} />, title: "Pide antes de las 12", desc: "Recibe al día siguiente por la mañana, mientras el pan aún huele a horno." },
              { icon: <MapPin size={32} />, title: "Polanco y Las Lomas", desc: "Repartimos en toda la zona. Consulta si llegamos a tu calle." },
              { icon: <ShoppingBag size={32} />, title: "Pedido mínimo: $300", desc: "Pan desde $100. Bollería desde $30. Combina como quieras." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300 reveal">
                <div className="text-orange mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="opacity-70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
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
              <div key={i} className="min-w-[85vw] md:min-w-0 bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-3xl reveal">
                <p className="text-xl italic mb-6 leading-relaxed">"{t.text}"</p>
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
      <section id="final-cta" className="bg-orange/80 backdrop-blur-md relative overflow-hidden py-32 text-center">
        <div className="container relative z-10 reveal">
          <div className="w-20 h-20 mx-auto bg-dark/20 rounded-full flex items-center justify-center mb-8 border border-dark/10">
            <Check className="w-10 h-10 text-dark" strokeWidth={3} />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-dark mb-6">Tu primer pedido tiene garantía de devolución.</h2>
          <p className="text-xl md:text-2xl text-dark/70 mb-12 max-w-2xl mx-auto">
            Si no es el mejor pan que has probado en Polanco, te regresamos tu dinero. Sin preguntas.
          </p>
          
          <div className="bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[40px] max-w-3xl mx-auto border border-white/20 shadow-2xl">
            <CaptureForm layout="vertical" variant="glass" buttonClass="btn-dark" buttonText="Quiero mi primer pedido →" />
            <p className="text-dark/40 text-xs mt-6">Pedido mínimo $300 pesos. Entrega en Polanco y Las Lomas.</p>
          </div>
        </div>
      </section>

      {/* SECTION 7 - FOOTER */}
      <footer className="bg-black/90 py-16 text-center text-sand border-t border-white/10">
        <div className="container">
          <h2 className="font-serif text-3xl text-cream mb-8 tracking-wider">El Migajón</h2>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <a href="https://instagram.com/lamigapolanco" target="_blank" className="hover:text-orange transition-all flex items-center gap-2 group">
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-orange/20 transition-all">
                <Camera size={20} />
              </div>
              @lamigapolanco
            </a>
            <div className="flex items-center gap-2 text-sm opacity-60">
              <MapPin size={16} /> Polanco · Las Lomas · CDMX
            </div>
          </div>
          <div className="flex justify-center gap-6 mb-8 text-xs opacity-40">
            <a href="/politica-privacidad" className="hover:opacity-100 underline">Privacidad</a>
            <a href="/aviso-legal" className="hover:opacity-100 underline">Aviso Legal</a>
          </div>
          <p className="text-[10px] opacity-20 mt-12 uppercase tracking-widest">© 2024 El Migajón. Elaboración artesanal diaria.</p>
        </div>
      </footer>

      <style jsx>{`
        .bg-gradient-animate {
          background: linear-gradient(-45deg, #D4842A, #C4741A, #E8D4A8, #D4842A);
          background-size: 400% 400%;
          animation: gradient 6s ease infinite;
          opacity: 0.1;
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
