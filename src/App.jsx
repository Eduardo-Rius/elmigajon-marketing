import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import ThankYou from './pages/ThankYou';
import PrivacyPolicy from './pages/PrivacyPolicy';
import LegalNotice from './pages/LegalNotice';
import Popup from './components/Popup';
import WhatsApp from './components/WhatsApp';
import StickyCTA from './components/StickyCTA';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/gracias" element={<ThankYou />} />
          <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
          <Route path="/aviso-legal" element={<LegalNotice />} />
        </Routes>
        
        <Popup />
        <WhatsApp />
        <StickyCTA />
      </div>
    </Router>
  );
}

export default App;
