import { combineReducers } from 'redux'
import homeReducer from './homeReducer'
import detailReducer from './detailReducer'
const rootReducer = combineReducers({
  home: homeReducer,
  detail: detailReducer
})

export default rootReducer
