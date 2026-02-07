import React, { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import ValidatorGuide from './pages/ValidatorGuide';
import CiCdProcess from './pages/CiCdProcess';
import SdkGuide from './pages/SdkGuide';

// Componente para scroll to top en cambio de ruta
function ScrollToTop({ contentRef }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll al contenedor de contenido, no al window
    if (contentRef.current) {
      contentRef.current.scrollTo({
        top: 0,
        behavior: 'instant'
      });
    }
  }, [pathname, contentRef]);

  return null;
}

function App() {
  const contentAreaRef = useRef(null);

  return (
    <div className="app-container">
      <Sidebar />
      <div className="content-area" ref={contentAreaRef}>
        <ScrollToTop contentRef={contentAreaRef} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/validator" element={<ValidatorGuide />} />
          <Route path="/cicd" element={<CiCdProcess />} />
          <Route path="/sdk" element={<SdkGuide />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
