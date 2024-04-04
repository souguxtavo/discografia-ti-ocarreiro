import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logotipo-tiao-carreiro-base-cinza.png';
import 'bootstrap';

const ConsultaAlbums = () => {
  const [albuns, setAlbuns] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/album')
      .then(response => response.json())
      .then(data => setAlbuns(data));
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/album/${id}`, {
        method: 'DELETE',
      });
      if (response.status === 200) {
        // Remove the album with the specified ID from the list
        const updatedAlbums = albuns.filter(album => album.id !== id);
        setAlbuns(updatedAlbums);
      }
    } catch (error) {
      console.error('Erro ao excluir:', error);
    }
  };

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
              <th scope="col">Visualizar Faixas</th> {/* New column for view tracks button */}
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {albuns.map(album => (
              <tr key={album.id}>
                <td>{album.nome}</td>
                <td>{album.ano}</td>
                <td>
                  <Link to={`/pages/faixas/${album.id}`}>
                    <button className="btn btn-primary">
                      Visualizar
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(album.id)}
                  >
                    Excluir
                  </button>
                </td>
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
