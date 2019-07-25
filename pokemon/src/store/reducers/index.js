import {
  FETCH_INITPOKE_START,
  FETCH_INITPOKE_SUCCESS
} from '../actions/index.js'

const initialState = {
  error: '',
  isFetch: false,
  pokemonList: ''
}

export const pokemonReducer = (state = initialState, action ) => {
  switch(action.type) {
    case FETCH_INITPOKE_START:
      return {
        ...state,
        error: '',
        isFetching: true,
        pokemonList: ''
      };
    case FETCH_INITPOKE_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        pokemonList: action.payload
      };
    default:
      return state
  }
}