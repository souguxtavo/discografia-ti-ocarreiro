import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CadastroAlbums() {
  const [nome, setNome] = useState('');
  const [ano, setAno] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://127.0.0.1:8000/api/album', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome,
        ano,
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Nome do Álbum</label>
          <input type="text" className="form-control" id="nome" value={nome} onChange={e => setNome(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="ano" className="form-label">Ano</label>
          <input type="number" className="form-control" id="ano" value={ano} onChange={e => setAno(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Cadastrar Álbum</button>
      </form>
    </div>
  );
}

export default CadastroAlbums;
