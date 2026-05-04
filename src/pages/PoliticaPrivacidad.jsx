import React from 'react';
import { Link } from 'react-router-dom';

const PoliticaPrivacidad = () => {
  return (
    <div style={{
      backgroundColor: '#F5F0E8',
      minHeight: '100vh',
      padding: '60px 20px',
      color: '#3B2A1A',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'Lato, sans-serif'
    }}>
      <Link to="/" style={{ color: '#D4842A', marginBottom: '20px', display: 'inline-block' }}>← Volver</Link>
      <h1 style={{ fontFamily: 'Playfair Display, serif', marginBottom: '30px' }}>Política de Privacidad</h1>
      <p>En El Migajón, valoramos tu privacidad. Esta política describe cómo manejamos tu información personal.</p>
      
      <h2 style={{ fontFamily: 'Playfair Display, serif', marginTop: '30px' }}>1. Información que recolectamos</h2>
      <p>Recolectamos únicamente tu nombre y número de WhatsApp con el fin de procesar tus pedidos y brindarte una atención personalizada.</p>
      
      <h2 style={{ fontFamily: 'Playfair Display, serif', marginTop: '30px' }}>2. Uso de la información</h2>
      <p>Tu información se utiliza exclusivamente para:</p>
      <ul>
        <li>Confirmar y coordinar la entrega de tus pedidos.</li>
        <li>Informarte sobre promociones especiales si así lo autorizas.</li>
      </ul>
      
      <h2 style={{ fontFamily: 'Playfair Display, serif', marginTop: '30px' }}>3. Seguridad</h2>
      <p>No compartimos tus datos con terceros. Tus datos están seguros con nosotros y solo son accesibles por el equipo de atención al cliente de El Migajón.</p>
      
      <p style={{ marginTop: '40px', fontSize: '14px', opacity: 0.7 }}>Última actualización: Mayo 2024</p>
    </div>
  );
};

export default PoliticaPrivacidad;
