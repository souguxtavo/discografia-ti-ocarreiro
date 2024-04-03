import './App.css';
import logo from './assets/images/logotipo-tiao-carreiro-base-cinza.png'; // Importe a imagem
import { Link } from 'react-router-dom'; // Importe o componente Link

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <h1>Tião Carreiro e Pardinho</h1>
        <img src={logo} alt="Logotipo Tião Carreiro" />
      </div>
      <div>
      <Link to="/pages/login">
          <button>Ir para Consulta de Álbuns</button>
        </Link>
      </div>
    </div>
  );
};

export default App;
