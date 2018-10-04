import React from 'react'

export default function PokeListItem (props) {
  const { pokemon, PokeComponent } = props
  return (
    <li onClick={() => props.onClickPokemon(pokemon)}>
      <PokeComponent {...pokemon} />
    </li>
  )
}
