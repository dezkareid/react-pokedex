import { takeEvery } from 'redux-saga/effects'
import { fetchPokemons } from './pokemons'
import { FETCH_POKEMONS } from '../actions/action-names'

function * saga () {
  yield takeEvery(FETCH_POKEMONS, fetchPokemons)
}

export default saga
