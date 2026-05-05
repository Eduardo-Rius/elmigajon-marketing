import React from 'react';
import LegalLayout from '../components/LegalLayout';

const AvisoLegal = () => {
  return (
    <LegalLayout>
      <h1>Aviso Legal</h1>

      <h2>1. Datos identificativos del titular</h2>
      <p>Nombre comercial: El Migajón — Panadería Artesanal · Domicilio: Polanco, CDMX, México · Contacto: hola@lamigapolanco.com</p>

      <h2>2. Condiciones de uso</h2>
      <p>El acceso y uso de este sitio web implica la aceptación de las presentes condiciones. El titular se reserva el derecho de modificar el contenido del sitio sin previo aviso.</p>

      <h2>3. Propiedad intelectual</h2>
      <p>Todos los contenidos de este sitio (textos, imágenes, logotipos, diseño) son propiedad de El Migajón o de sus proveedores, y están protegidos por la legislación mexicana de propiedad intelectual. Queda prohibida su reproducción sin autorización expresa.</p>

      <h2>4. Limitación de responsabilidad</h2>
      <p>El Migajón no se hace responsable de los daños derivados del uso incorrecto del sitio o de la información contenida en él.</p>

      <h2>5. Legislación aplicable</h2>
      <p>Este aviso legal se rige por la legislación mexicana. Para cualquier controversia, las partes se someten a los tribunales de la Ciudad de México.</p>
    </LegalLayout>
  );
};

export default AvisoLegal;
