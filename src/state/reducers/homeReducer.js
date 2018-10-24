import { combineReducers } from 'redux'
import pokemonsReducer from './pokemonsReducer'
import searchReducer from './searchReducer'

const homeReducer = combineReducers({
  pokemons: pokemonsReducer,
  search: searchReducer
})
export default homeReducer
