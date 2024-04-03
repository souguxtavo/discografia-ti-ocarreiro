import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Importe o Axios
import logo from '../assets/images/logotipo-tiao-carreiro-base-cinza.png';
import 'bootstrap';

const ConsultaAlbums = () => {
  const [albuns, setAlbuns] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/album') // Use axios.get para buscar os álbuns
      .then(response => setAlbuns(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <div className="container mt-5">
        <h1 className="mb-4">Álbuns</h1>
        <img src={logo} alt="Logotipo Tião Carreiro" />
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Ano</th>
            </tr>
          </thead>
          <tbody>
            {albuns.map(album => (
              <tr key={album.id}>
                <td>{album.nome}</td>
                <td>{album.ano}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/pages/cadastroalbuns">
          <button className="btn btn-primary mb-3">Cadastrar Novo Álbum</button>
        </Link>
      </div>
    </div>
  );
}

export default ConsultaAlbums;
