import { SEARCH_POKEMON } from '../actions/action-names'
export default function searchReducer (state = '', action) {
  if (action.type === SEARCH_POKEMON) {
    return action.payload.search
  }
  return state
}
