import React from 'react';
import { Link } from 'react-router-dom';

const Gracias = () => {
  return (
    <div style={{
      backgroundColor: '#8B5E2B',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#FFF3DC',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>¡Gracias por tu interés!</h1>
      <p style={{ fontSize: '20px', color: '#E8D4A8', marginBottom: '40px', maxWidth: '600px' }}>
        Hemos recibido tu solicitud. Un panadero de El Migajón se pondrá en contacto contigo por WhatsApp en menos de 2 horas para confirmar tu pedido.
      </p>
      <Link to="/" style={{
        backgroundColor: '#D4842A',
        color: '#3B2A1A',
        padding: '15px 30px',
        borderRadius: '30px',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontFamily: 'Lato, sans-serif'
      }}>
        Volver al inicio
      </Link>
    </div>
  );
};

export default Gracias;
