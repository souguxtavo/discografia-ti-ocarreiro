import React, { useState } from 'react';

const CadastroAlbuns = () => {
  const [nome, setNome] = useState('');
  const [ano, setAno] = useState('');
  async function enviarDados(){
    try{
      const data = {nome: nome, ano: ano};
      const response = await fetch('http://localhost:8000/api/album', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.error('Erro:', error));
    } catch(error){
        console.error('Error', error)
    }
  }
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    enviarDados();
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
