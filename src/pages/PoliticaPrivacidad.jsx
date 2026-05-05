import React from 'react';
import LegalLayout from '../components/LegalLayout';

const PoliticaPrivacidad = () => {
  return (
    <LegalLayout>
      <h1>Política de Privacidad</h1>
      
      <div className="legal-index">
        <p style={{ margin: 0, fontWeight: 700, marginBottom: '12px' }}>Índice de contenidos:</p>
        <ul>
          <li><a href="#responsable">1. Responsable del tratamiento</a></li>
          <li><a href="#datos">2. Datos que recopilamos</a></li>
          <li><a href="#finalidad">3. Finalidad del tratamiento</a></li>
          <li><a href="#base-legal">4. Base legal</a></li>
          <li><a href="#compartimos">5. Con quién compartimos tus datos</a></li>
          <li><a href="#derechos">6. Tus derechos</a></li>
          <li><a href="#cookies">7. Cookies</a></li>
          <li><a href="#contacto">8. Contacto</a></li>
        </ul>
      </div>

      <h2 id="responsable">1. Responsable del tratamiento</h2>
      <p>Panadería Artesanal El Migajón · Polanco, CDMX, México · Contacto: hola@lamigapolanco.com · Sitio web: lamigapolanco.com</p>

      <h2 id="datos">2. Datos que recopilamos</h2>
      <p>A través del formulario de esta página recopilamos: nombre completo y número de teléfono / WhatsApp. No recopilamos datos bancarios ni de pago a través de este formulario.</p>

      <h2 id="finalidad">3. Finalidad del tratamiento</h2>
      <p>Usamos tus datos únicamente para: contactarte para confirmar tu pedido de pan artesanal y, si nos das permiso, enviarte información sobre novedades y ofertas del negocio por WhatsApp.</p>

      <h2 id="base-legal">4. Base legal</h2>
      <p>El tratamiento de tus datos se basa en el consentimiento que nos otorgas al rellenar el formulario (artículo 8 de la LFPDPPP).</p>

      <h2 id="compartimos">5. Con quién compartimos tus datos</h2>
      <p>No vendemos ni cedemos tus datos a terceros. Podemos usar herramientas de mensajería como WhatsApp Business (Meta Platforms) para contactarte — consulta su política de privacidad en <a href="https://www.whatsapp.com/legal" target="_blank" rel="noopener noreferrer">meta.com</a>.</p>

      <h2 id="derechos">6. Tus derechos (derechos ARCO)</h2>
      <p>Tienes derecho a: Acceder a tus datos, Rectificarlos, Cancelarlos y Oponerte a su uso. Para ejercerlos, escríbenos a hola@lamigapolanco.com o por WhatsApp al +52 55 3509 9442.</p>

      <h2 id="cookies">7. Cookies</h2>
      <p>Esta página puede usar cookies técnicas para el correcto funcionamiento del sitio y cookies de análisis (Google Analytics) para medir el tráfico. Puedes desactivarlas desde la configuración de tu navegador.</p>

      <h2 id="contacto">8. Contacto</h2>
      <p>Para cualquier duda sobre esta política: hola@lamigapolanco.com · WhatsApp: +52 55 3509 9442</p>

      <p style={{ fontStyle: 'italic', opacity: 0.7, marginTop: '40px', fontSize: '14px' }}>
        Este aviso de privacidad es un punto de partida — te recomendamos revisarlo con tu asesor legal.
      </p>
    </LegalLayout>
  );
};

export default PoliticaPrivacidad;
