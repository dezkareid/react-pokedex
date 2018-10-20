import React from 'react'
import { Route } from 'react-router-dom'
import { ProtectedRoute } from '../GuardRouter'
import HomePage from '../pages/HomePage'
import PokemonPage from '../pages/PokemonPage'
import Context from '../AppContext'
export function AppRouter (props) {
  return (
    <React.Fragment>
      <Route exact path='/' component={HomePage} {...props} />
      <ProtectedRoute path='/pokemons/:id' component={PokemonPage} {...props} />
    </React.Fragment>
  )
}

export default () => {
  return (
    <Context.Consumer>
      { (value) => <AppRouter {...value} />}
    </Context.Consumer>
  )
}
