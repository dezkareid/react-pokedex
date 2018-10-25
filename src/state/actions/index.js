import {
  ADD_POKEMONS,
  ADD_POKEMON,
  FETCH_POKEMONS
} from './action-names'
import actionCreator from './action-creator'
import { getPokemons } from '../../services/PokemonService'
export const addPokemons = actionCreator.bind(null, ADD_POKEMONS)

export const addPokemon = actionCreator.bind(null, ADD_POKEMON)

export const fetchPokemonsSaga = actionCreator.bind(null, FETCH_POKEMONS)

export function fetchPokemons () {
  return (dispatch) => {
    return getPokemons()
      .then(pokemons => {
        dispatch(addPokemons({pokemons}))
      })
      .catch(console.error)
  }
}
