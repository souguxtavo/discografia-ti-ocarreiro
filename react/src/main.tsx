import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importe Routes

// Páginas
import ConsultaAlbums from './pages/consultaalbums';
import CadastroAlbuns from './pages/cadastroalbuns';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes> {/* Envolve as rotas em um componente Routes */}
        <Route path="/" element={<App />} />
        <Route path="/pages/consultaalbums" element={<ConsultaAlbums />} />
        <Route path="/pages/cadastroalbuns" element={<CadastroAlbuns />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
