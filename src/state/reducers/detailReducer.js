import { combineReducers } from 'redux'
import pokemonReducer from './pokemonReducer'

const detailReducer = combineReducers({
  pokemon: pokemonReducer
})

export default detailReducer
