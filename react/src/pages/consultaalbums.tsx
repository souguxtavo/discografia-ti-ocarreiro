import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logotipo-tiao-carreiro-base-cinza.png';
import 'bootstrap';

const ConsultaAlbums = () => {
  const [albuns, setAlbuns] = useState([]);
  const [search, setSearch] = useState(''); // Adicionado estado para a pesquisa

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
        const updatedAlbums = albuns.filter((album) => album.id !== id);
        setAlbuns(updatedAlbums);
      }
    } catch (error) {
      console.error('Erro ao excluir:', error);
    }
  };

  // Filtra os álbuns com base na pesquisa
  const filteredAlbums = albuns.filter(album => album.nome.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="App">
      <div className="container mt-5">
        <h1 className="mb-4">Álbuns</h1>
        <img src={logo} alt="Logotipo Tião Carreiro" />
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Pesquisar álbuns..." /> {/* Campo de pesquisa */}
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Ano</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredAlbums.map((album) => ( // Usa os álbuns filtrados
              <tr key={album.id}>
                <td>{album.id}</td>
                <td>{album.nome}</td>
                <td>{album.ano}</td>
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
        <Link to="/pages/cadastrodefaixas">
          <button className="btn btn-primary mb-3">Cadastrar Faixas</button>
        </Link>
        <Link to="/pages/faixas">
          <button className="btn btn-primary mb-3">Consultar Faixas</button>
        </Link>
      </div>
    </div>
  );
};

export default ConsultaAlbums;
