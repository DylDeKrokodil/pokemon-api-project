import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route, Navigate,  } from 'react-router-dom';

import Pokedex from './routes/pokedex';
// import MissingRoute from './routes/missing-route';
// import PokemonData from './routes/pokemon-details';

import './css/main.css';
import './css/header.css';
import './css/pokemon-link.css';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="/pokedex" element={<Pokedex/>} />
        {/* <Route path=":pokemonId" element={<PokemonData />} /> */}
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

