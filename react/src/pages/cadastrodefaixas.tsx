import React, { useState } from 'react';

const CadastroFaixas = () => {
  const [nome, setNome] = useState('');
  const [duracao, setDuracao] = useState(''); // Adicionado estado para a duração da faixa
  const [albumId, setAlbumId] = useState(''); // Adicionado estado para o ID do álbum
  const [cadastroSucesso, setCadastroSucesso] = useState(false); // Estado para controlar a exibição da mensagem de sucesso

  async function enviarDados() {
    try {
      const data = { nome: nome, duracao: duracao, album_id: albumId }; // Adicionado duracao e albumId ao objeto de dados
      const response = await fetch('http://localhost:8000/api/faixa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          console.log(data);
          // Verifica se o cadastro foi bem-sucedido
          if (data.success) {
            setCadastroSucesso(true);
          }
        })
        .catch((error) => console.error('Erro:', error));
    } catch (error) {
      console.error('Error', error);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    enviarDados();
  };

  return (
    <div>
      <h2>Cadastrar Faixas</h2>
      {cadastroSucesso ? (
        <p style={{ color: 'green' }}>Cadastro realizado com sucesso!</p>
      ) : null}
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <label>
          Duração:
          <input type="time" value={duracao} onChange={(e) => setDuracao(e.target.value)} /> {/* Campo de entrada para a duração da faixa */}
        </label>
        <label>
          ID do Álbum:
          <input type="text" value={albumId} onChange={(e) => setAlbumId(e.target.value)} /> {/* Campo de entrada para o ID do álbum */}
        </label>
        <button type="submit">Cadastrar</button>
      </form>
      <button onClick={() => window.location.href = 'http://localhost:3000/pages/consultaalbums'}>
        Voltar para Álbuns
      </button>
    </div>
  );
};

export default CadastroFaixas;
