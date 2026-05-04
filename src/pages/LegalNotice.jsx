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

const LegalNotice = () => (
  <div className="bg-light min-h-screen">
    <LegalHeader title="Aviso Legal" />
    <main className="container max-w-[720px] py-16 px-6">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm prose prose-brown text-dark/80">
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-bold mb-4 text-dark">1. Datos identificativos del titular</h2>
          <p>Nombre comercial: El Migajón — Panadería Artesanal · Domicilio: Polanco, CDMX, México · Contacto: hola@lamigapolanco.com</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-serif font-bold mb-4 text-dark">2. Condiciones de uso</h2>
          <p>El acceso y uso de este sitio web implica la aceptación de las presentes condiciones. El titular se reserva el derecho de modificar el contenido del sitio sin previo aviso.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-serif font-bold mb-4 text-dark">3. Propiedad intelectual</h2>
          <p>Todos los contenidos de este sitio (textos, imágenes, logotipos, diseño) son propiedad de El Migajón o de sus proveedores, y están protegidos por la legislación mexicana de propiedad intelectual. Queda prohibida su reproducción sin autorización expresa.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-serif font-bold mb-4 text-dark">4. Limitación de responsabilidad</h2>
          <p>El Migajón no se hace responsable de los daños derivados del uso incorrecto del sitio o de la información contenida en él.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-serif font-bold mb-4 text-dark">5. Legislación aplicable</h2>
          <p>Este aviso legal se rige por la legislación mexicana. Para cualquier controversia, las partes se someten a los tribunales de la Ciudad de México.</p>
        </section>
      </div>
    </main>
    <LegalFooter />
  </div>
);

export default LegalNotice;
