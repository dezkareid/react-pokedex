import 'regenerator-runtime/runtime'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/rootReducer'
// import ReduxThunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import sagas from '../sagas'
const loggerMiddleWare = store => next => action => {
  console.log(action.type)
  next(action)
}

const sagaMiddleware = createSagaMiddleware()

export default createStore(
  rootReducer,
  applyMiddleware(loggerMiddleWare, sagaMiddleware)
)

sagaMiddleware.run(sagas)
