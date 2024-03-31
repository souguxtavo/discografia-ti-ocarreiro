import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logotipo from '../assets/images/logotipo-tiao-carreiro-base-cinza.png';

function ConsultaAlbums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/album')
      .then(response => response.json())
      .then(data => setAlbums(data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div>
            <h2 className="mr-3">Álbuns</h2>
            <img src={logotipo} alt="Logo" style={{ maxWidth: '100px', maxHeight: '100px' }} />
          </div>
          <Link to="/cadastroalbuns">
            <button type="button" className="btn btn-primary mt-3">Cadastrar Álbum</button>
          </Link>
          <div>
            <table className="table mt-3"> 
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Ano</th>
                </tr>
              </thead>
              <tbody>
                {albums.map(album => (
                  <tr key={album.id}>
                    <td>{album.nome}</td>
                    <td>{album.ano}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsultaAlbums;
