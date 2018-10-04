import React from 'react'
import './PokeList.css'
import PokeListItem from '../PokeListItem'

export default function PokeList (props) {
  const { pokemons, ...restProperties } = props
  const listPokemons = pokemons.map((pokemon) => <PokeListItem key={pokemon.id} pokemon={pokemon} {...restProperties} />)
  return (
    <ul className='PokeList'>
      {listPokemons}
    </ul>
  )
}
