import React from 'react'
import PokeItem from '../PokeItem'
import './PokeList.css'

export default function PokeList (props) {
  const listPokemons = props.pokemons.map((pokemon) => <PokeItem key={pokemon.id} {...pokemon} />)
  return (
    <ul className='PokeList'>
      {listPokemons}
    </ul>
  )
}
