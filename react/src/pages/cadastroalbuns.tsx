import React, { useState } from 'react';
import axios from 'axios'; // Importe o Axios

const CadastroAlbuns = () => {
  const [nome, setNome] = useState('');
  const [ano, setAno] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios.post('http://localhost:8000/api/album', {
      nome: nome,
      ano: ano,
    })
    .then(response => {
      console.log('Success:', response.data);
    })
    .catch(error => {
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
