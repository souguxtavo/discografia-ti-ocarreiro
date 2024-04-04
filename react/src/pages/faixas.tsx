import React, { useEffect, useState } from 'react';

const Faixas = () => {
  const [faixas, setFaixas] = useState([]);
  const [search, setSearch] = useState(''); // Adicionado estado para a pesquisa

  useEffect(() => {
    fetch('http://localhost:8000/api/faixa')
      .then(response => response.json())
      .then(data => setFaixas(data));
  }, []);

  // Filtra as faixas com base na pesquisa
  const filteredFaixas = faixas.filter(faixa => faixa.nome.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <h2>Faixas</h2>
      <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Pesquisar faixas..." /> {/* Campo de pesquisa */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Duração</th>
            <th scope="col">ID do Álbum</th>
          </tr>
        </thead>
        <tbody>
          {filteredFaixas.map((faixa) => ( // Usa as faixas filtradas
            <tr key={faixa.id}>
              <td>{faixa.nome}</td>
              <td>{faixa.duracao}</td>
              <td>{faixa.album_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Faixas;
