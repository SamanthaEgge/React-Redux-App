import axios from 'axios'

export const FETCH_INITPOKE_START = 'FETCH_INITPOKE_START'
export const FETCH_INITPOKE_SUCCESS = 'FETCH_INITPOKE_SUCCESS'
export const FETCH_INITPOKE_FAILURE = 'FETCH_INITPOKE_FAILURE'

export const fetchInitPokemon = () => dispatch => {
  dispatch({ type: FETCH_INITPOKE_START })
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/?limit=20`)
    .then(response => {
      dispatch({ type: FETCH_INITPOKE_SUCCESS, payload: response.data.results })
      console.log('actions dispatch :', response.data.results)
    })
    .catch(error =>
      console.log(error.response)
    )
}