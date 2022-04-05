import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Pokedex from './routes/pokedex';

import './css/main.css';
import './css/header.css';
import './css/pokemon-link.css';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="/pokedex" element={<Pokedex/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

