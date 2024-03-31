import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ConsultaAlbums from './pages/consultaalbums';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logotipo from './assets/images/logotipo-tiao-carreiro-base-cinza.png';

function HomePage(){
    const [state, setState] = useState(''); // ou qualquer outro valor inicial
    return(
        <div class="position-absolute top-50 start-50 translate-middle">
            <h2>Tião Carreiro e Pardinho</h2>
            <img src={logotipo} alt="Logo" />
            <div>
                <Link to="/consultaalbums">
                    <button type="button" class="btn btn-primary btn-lg">Ver Álbuns</button>
                </Link>
            </div>
        </div>
    )
}

function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/consultaalbums" element={<ConsultaAlbums />} />
            </Routes>
        </Router>
    )
}

export default App;
