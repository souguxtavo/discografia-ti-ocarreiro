import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Páginas
import ConsultaAlbums from './pages/consultaalbums';
import CadastroAlbuns from './pages/cadastroalbuns';
import Faixas from './pages/faixas';
import CadastrodeFaixas from './pages/cadastrodefaixas';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pages/consultaalbums" element={<ConsultaAlbums />} />
        <Route path="/pages/cadastroalbuns" element={<CadastroAlbuns />} />
        <Route path="/pages/cadastrodefaixas" element={<CadastrodeFaixas />} />
        <Route path="/pages/faixas" element={<Faixas />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
