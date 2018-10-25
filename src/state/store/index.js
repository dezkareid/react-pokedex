import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/rootReducer'
import ReduxThunk from 'redux-thunk'
const loggerMiddleWare = store => next => action => {
  console.log(action.type)
  next(action)
}

export default createStore(
  rootReducer,
  applyMiddleware(loggerMiddleWare, ReduxThunk)
)
