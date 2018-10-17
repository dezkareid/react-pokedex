import React from 'react'
import { storiesOf } from '@storybook/react'
import PokeItem from '../../src/components/PokeItem'

const pokemon = { id: 1, name: 'Bulbasaur', avatar: 'https://vignette.wikia.nocookie.net/es.pokemon/images/9/9a/Bulbasaur_%28anime_AG%29.png/revision/latest?cb=20120906022549' }

storiesOf('PokeItem', module)
  .add('Simple PokeItem', () => (
    <PokeItem name={pokemon.name} avatar={pokemon.avatar} />
  ))
