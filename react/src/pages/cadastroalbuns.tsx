import React, { useState } from 'react';

const CadastroAlbuns = () => {
  const [nome, setNome] = useState('');
  const [ano, setAno] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:8000/api/album', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome: nome,
        ano: ano,
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
    <div>
      <h2>Cadastrar Álbuns</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
        </label>
        <label>
          Ano:
          <input type="number" value={ano} onChange={e => setAno(e.target.value)} />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}

export default CadastroAlbuns;
