import React from 'react'
import { addRouting } from '../../Routing'
export default function PokeListItem (props) {
  const { pokemon, PokeComponent } = props
  const RoutedPokemon = addRouting(PokeComponent)
  return (
    <li onClick={() => props.onClickPokemon(pokemon)}>
      <RoutedPokemon {...pokemon} path={`/pokemons/${pokemon.id}`} />
    </li>
  )
}
