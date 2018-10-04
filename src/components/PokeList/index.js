import React from 'react'
import PokeItem from '../PokeItem'
import './PokeList.css'

export default function PokeList (props) {
  const pokemons = props.filter ? props.pokemons.filter((pokemon) => pokemon.name.includes(props.filter)) : props.pokemons
  const listPokemons = pokemons.map((pokemon) => <PokeItem key={pokemon.id} {...pokemon} />)
  return (
    <ul className='PokeList'>
      {listPokemons}
    </ul>
  )
}
