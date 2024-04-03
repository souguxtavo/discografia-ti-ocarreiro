import './index.css';
import 'bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importe o componente Login corretamente
import Login from './pages/login';
import ConsultaAlbums from './pages/consultaalbums';
import CadastroAlbuns from './pages/cadastroalbuns';
import App from './App';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pages/consultaalbums" element={<ConsultaAlbums />} />
        <Route path="/pages/cadastroalbuns" element={<CadastroAlbuns />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
