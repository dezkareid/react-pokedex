import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/rootReducer'

const loggerMiddleWare = store => next => action => {
  console.log(action.type)
  next(action)
}

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(loggerMiddleWare)
)
