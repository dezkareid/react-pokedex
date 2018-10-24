import {
  ADD_POKEMONS,
  ADD_POKEMON
} from './action-names'
import actionCreator from './action-creator'
export const addPokemons = actionCreator.bind(null, ADD_POKEMONS)

export const addPokemon = actionCreator.bind(null, ADD_POKEMON)
