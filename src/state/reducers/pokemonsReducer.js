import { ADD_POKEMONS } from '../actions/action-names'
export default function pokemonsReducer (state = {}, action) {
  if (action.type === ADD_POKEMONS) {
    return { ...state, ...action.payload.pokemons }
  }

  return state
}
