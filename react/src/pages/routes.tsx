import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ConsultaAlbums from './ConsultaAlbums';
import CadastroAlbums from './CadastroAlbums';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/consultaalbums" element={<ConsultaAlbums />} />
        <Route path="/cadastroalbuns" element={<CadastroAlbums />} />
      </Routes>
    </Router>
  );
}

export default App;