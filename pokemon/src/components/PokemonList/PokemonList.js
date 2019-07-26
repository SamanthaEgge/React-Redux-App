import React, { useEffect } from 'react'

import './PokemonList.scss'

const PokemonList = (props) => {

  const initPokemon = () => {
    props.fetchInitPokemon()
  }

  // if (props.isFetching) {
  //   return <h1>Loading . . .</h1>;
  // }

  useEffect(() => {
    initPokemon()
    console.log(props.pokemonList)
  },[])

  return(
    <div className='pokemon-list'>
      Pokemon list
    </div>
  )
}

export default PokemonList