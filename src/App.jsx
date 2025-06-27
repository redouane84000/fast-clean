import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Accueil from './pages/Accueil';
import Devis from './pages/Devis';
import Formulaire from './pages/Formulaire';
import Terrasse from './pages/prestations/Terrasse';
import Facade from './pages/prestations/Facade';
import Toiture from './pages/prestations/Toiture';
import Hydrofuge from './pages/prestations/Hydrofuge';
import Demoussage from './pages/prestations/Demoussage';
import Chantier from './pages/prestations/Chantier';
import MentionLegale from './pages/MentionLegale';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import MotionPage from './components/MotionPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Toaster position="top-center" toastOptions={{
          style: { 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '1rem', 
            borderRadius: '16px', 
            background: 'rgba(5, 68, 94, 0.95)', 
            color: '#fff',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.1)'
          },
          success: { 
            style: { 
              background: 'rgba(24, 154, 180, 0.95)', 
              color: '#fff',
              backdropFilter: 'blur(10px)'
            } 
          },
        }} />
        <Routes>
          <Route path="/" element={<MotionPage><Accueil /></MotionPage>} />
          <Route path="/devis" element={<MotionPage><Devis /></MotionPage>} />
          <Route path="/formulaire" element={<MotionPage><Formulaire /></MotionPage>} />
          <Route path="/prestation/terrasse" element={<MotionPage><Terrasse /></MotionPage>} />
          <Route path="/prestation/facade" element={<MotionPage><Facade /></MotionPage>} />
          <Route path="/prestation/toiture" element={<MotionPage><Toiture /></MotionPage>} />
          <Route path="/prestation/hydrofuge" element={<MotionPage><Hydrofuge /></MotionPage>} />
          <Route path="/prestation/demoussage" element={<MotionPage><Demoussage /></MotionPage>} />
          <Route path="/prestation/chantier" element={<MotionPage><Chantier /></MotionPage>} />
          <Route path="/mentions-legales" element={<MotionPage><MentionLegale /></MotionPage>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
