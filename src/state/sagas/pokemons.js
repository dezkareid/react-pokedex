import { call, put } from 'redux-saga/effects'
import { getPokemons } from '../../services/PokemonService'
import { addPokemons } from '../actions'

export function * fetchPokemons () {
  const pokemons = yield call(getPokemons)
  yield put(addPokemons({pokemons}))
}
