import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route, Navigate,  } from 'react-router-dom';

import Pokedex from './routes/pokedex';
import PokemonDetail from './routes/pokemon-details';

import './css/main.css';
import './css/header.css';
import './css/pokedex.css';
import './css/pokemon-detail.css';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<App />}>
          <Route path='/pokedex' element={<Pokedex />}/ >
          
          <Route path='/pokedex/:pokemonId' element={<PokemonDetail />} />

          <Route path='*' element={<Navigate to='/' replace />} />
        </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

