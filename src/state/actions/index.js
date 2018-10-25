import {
  ADD_POKEMONS,
  ADD_POKEMON
} from './action-names'
import actionCreator from './action-creator'
import { getPokemons } from '../../services/PokemonService'
export const addPokemons = actionCreator.bind(null, ADD_POKEMONS)

export const addPokemon = actionCreator.bind(null, ADD_POKEMON)

export function fetchPokemons () {
  return (dispatch) => {
    return getPokemons()
      .then(pokemons => {
        dispatch(addPokemons({pokemons}))
      })
      .catch(console.error)
  }
}
