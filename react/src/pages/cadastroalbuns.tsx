import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CadastroAlbums() {
  const [form, setForm] = useState({ nome: '', ano: '' });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/album', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Nome do Álbum</label>
          <input type="text" className="form-control" id="nome" value={form.nome} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="ano" className="form-label">Ano</label>
          <input type="number" className="form-control" id="ano" value={form.ano} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Cadastrar Álbum</button>
      </form>
    </div>
  );
}