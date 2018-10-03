import React from 'react'

export default function PokeList (props) {
  const listPokemons = props.pokemons.map((pokemon) => <li key={pokemon.id}>{pokemon.name}</li>)
  return (
    <ul>
      {listPokemons}
    </ul>
  )
}
