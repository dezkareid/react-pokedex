import React from 'react'
import { Link } from 'react-router-dom'
export default function PokeListItem (props) {
  const { pokemon, PokeComponent } = props
  return (
    <li onClick={() => props.onClickPokemon(pokemon)}>
      <Link to={`pokemons/${pokemon.id}`}>
        <PokeComponent {...pokemon} />
      </Link>
    </li>
  )
}
