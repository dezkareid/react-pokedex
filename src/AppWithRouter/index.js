import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from '../state/store'
import App from '../App'

console.log(Store.getState())
export default function AppWithRouter (props) {
  return (
    <BrowserRouter>
      <Provider store={Store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
}
