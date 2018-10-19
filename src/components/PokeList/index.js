import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import './PokeList.scss'
import PokeListItem from '../PokeListItem'

export default function PokeList (props) {
  const { pokemons, ...restProperties } = props
  const listPokemons = pokemons.map((pokemon) => <PokeListItem key={pokemon.id} pokemon={pokemon} {...restProperties} />)
  return (
    <ul className='PokeList'>
      <CSSTransitionGroup
        transitionName='PokeList'
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        {listPokemons}
      </CSSTransitionGroup>
    </ul>
  )
}
