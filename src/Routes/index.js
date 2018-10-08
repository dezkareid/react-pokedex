import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import PokemonPage from '../pages/PokemonPage'
export default function AppRouter (props) {
  return (
    <React.Fragment>
      <Route exact path='/' component={HomePage} />
      <Route path='/pokemons/:id' component={PokemonPage} />
    </React.Fragment>
  )
}
