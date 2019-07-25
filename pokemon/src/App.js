import React from 'react';
import ReactDOM from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';

// import Loader from 'react-loader-spinner';
import { fetchInitPokemon } from './store/actions/index.js'

import './App.scss';
import PokemonList from './components/PokemonList/PokemonList'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    // console.log('App.js Props : ', props)
    return (
      <div className="app-container">
        <header className="app-header">
          Pokemon App
        </header>
        <div className='pokemon-container'>
          <div className='pokedex-box'>
            <Router>
              <Route exact path='/' render={(props)=> (<PokemonList {...props} fetchInitPokemon={this.props.fetchInitPokemon} pokemonList={this.props.pokemonList} />)} />
            </Router>
          </div>
        </div>
      </div>
  )};
}

const mapStateToProps = state => {
  console.log(state);
  return {
    error: state.error,
    isFetch: state.isFetch,
    pokemonList: state.pokemonList
  };
};

export default connect(
  mapStateToProps,
  { fetchInitPokemon }
)(App);