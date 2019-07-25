import React from 'react';
import ReactDOM from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.scss';
import PokemonList from './components/PokemonList/PokemonList'

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        Pokemon App
      </header>
      <div className='pokemon-container'>
        <div className='pokedex-box'>
          <Router>
            <Route path='/' component={PokemonList} />

          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
