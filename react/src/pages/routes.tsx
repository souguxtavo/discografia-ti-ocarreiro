import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConsultaAlbums from './consultaalbums';
import CadastroAlbuns from './cadastroalbuns';
import Faixas from './faixas';
import CadastroFaixas from './cadastrofaixas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConsultaAlbums />} />
        <Route path="/consultaalbums" element={<ConsultaAlbums />} />
        <Route path="/cadastroalbuns" element={<CadastroAlbuns />} />
        <Route path="/faixas" element={<Faixas />} />
        <Route path="/cadastrodefaixas" element={<CadastroFaixas />} />
      </Routes>
    </Router>
  );
}

export default App;
