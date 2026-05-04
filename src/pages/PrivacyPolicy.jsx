import React from 'react';

const LegalHeader = ({ title }) => (
  <header className="bg-brown p-8 md:p-12 text-center kraft-texture">
    <div className="container">
      <a href="/" className="font-serif text-3xl text-cream block mb-4 no-underline">El Migajón</a>
      <h1 className="text-xl md:text-2xl text-sand font-serif">{title}</h1>
      <a href="/" className="text-sand/60 text-sm mt-6 inline-block hover:text-cream transition-colors">
        ← Volver a la página principal
      </a>
    </div>
  </header>
);

const LegalFooter = () => (
  <footer className="bg-dark p-12 text-center text-sand">
    <div className="container">
      <p className="font-serif text-xl text-cream mb-4">El Migajón</p>
      <p className="text-sm opacity-60 mb-6">Panadería Artesanal · Polanco, CDMX</p>
      <div className="flex justify-center gap-6 text-xs opacity-60">
        <a href="/politica-privacidad" className="hover:opacity-100 underline">Política de privacidad</a>
        <a href="/aviso-legal" className="hover:opacity-100 underline">Aviso legal</a>
      </div>
    </div>
  </footer>
);

const PrivacyPolicy = () => (
  <div className="bg-light min-h-screen">
    <LegalHeader title="Política de Privacidad" />
    <main className="container max-w-[720px] py-16 px-6">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm prose prose-brown">
        <p className="text-sm text-dark/60 mb-8 italic">Última actualización: Mayo 2024</p>
        
        <nav className="mb-12 p-6 bg-sand/20 rounded-2xl">
          <h4 className="font-bold mb-4">Contenido:</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <li><a href="#resp" className="text-orange">1. Responsable</a></li>
            <li><a href="#datos" className="text-orange">2. Datos recopilados</a></li>
            <li><a href="#fin" className="text-orange">3. Finalidad</a></li>
            <li><a href="#base" className="text-orange">4. Base legal</a></li>
            <li><a href="#compartir" className="text-orange">5. Compartición</a></li>
            <li><a href="#derechos" className="text-orange">6. Tus derechos</a></li>
            <li><a href="#cookies" className="text-orange">7. Cookies</a></li>
            <li><a href="#contacto" className="text-orange">8. Contacto</a></li>
          </ul>
        </nav>

        <section id="resp" className="mb-10">
          <h2 className="text-2xl font-serif font-bold mb-4">1. Responsable del tratamiento</h2>
          <p>Panadería Artesanal El Migajón · Polanco, CDMX, México · Contacto: hola@lamigapolanco.com · Sitio web: lamigapolanco.com</p>
        </section>

        <section id="datos" className="mb-10">
          <h2 className="text-2xl font-serif font-bold mb-4">2. Datos que recopilamos</h2>
          <p>A través del formulario de esta página recopilamos: nombre completo y número de teléfono / WhatsApp. No recopilamos datos bancarios ni de pago a través de este formulario.</p>
        </section>

        <section id="fin" className="mb-10">
          <h2 className="text-2xl font-serif font-bold mb-4">3. Finalidad del tratamiento</h2>
          <p>Usamos tus datos únicamente para: contactarte para confirmar tu pedido de pan artesanal y, si nos das permiso, enviarte información sobre novedades y ofertas del negocio por WhatsApp.</p>
        </section>

        <section id="base" className="mb-10">
          <h2 className="text-2xl font-serif font-bold mb-4">4. Base legal</h2>
          <p>El tratamiento de tus datos se basa en el consentimiento que nos otorgas al rellenar el formulario (artículo 8 de la LFPDPPP).</p>
        </section>

        <section id="compartir" className="mb-10">
          <h2 className="text-2xl font-serif font-bold mb-4">5. Con quién compartimos tus datos</h2>
          <p>No vendemos ni cedemos tus datos a terceros. Podemos usar herramientas de mensajería como WhatsApp Business (Meta Platforms) para contactarte — consulta su política de privacidad en meta.com.</p>
        </section>

        <section id="derechos" className="mb-10">
          <h2 className="text-2xl font-serif font-bold mb-4">6. Tus derechos (derechos ARCO)</h2>
          <p>Tienes derecho a: Acceder a tus datos, Rectificarlos, Cancelarlos y Oponerte a su uso. Para ejercerlos, escríbenos a hola@lamigapolanco.com o por WhatsApp al +52 55 3509 9442.</p>
        </section>

        <section id="cookies" className="mb-10">
          <h2 className="text-2xl font-serif font-bold mb-4">7. Cookies</h2>
          <p>Esta página puede usar cookies técnicas para el correcto funcionamiento del sitio y cookies de análisis (Google Analytics) para medir el tráfico. Puedes desactivarlas desde la configuración de tu navegador.</p>
        </section>

        <section id="contacto" className="mb-10">
          <h2 className="text-2xl font-serif font-bold mb-4">8. Contacto</h2>
          <p>Para cualquier duda sobre esta política: hola@lamigapolanco.com · WhatsApp: +52 55 3509 9442</p>
        </section>

        <p className="mt-12 text-sm text-dark/40 italic">
          *Este aviso de privacidad es un punto de partida — te recomendamos revisarlo con tu asesor legal.
        </p>
      </div>
    </main>
    <LegalFooter />
  </div>
);

export default PrivacyPolicy;
