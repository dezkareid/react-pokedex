/* eslint-env jest */
import { addPokemons } from '../../../src/state/actions'
import pokemonReducer from '../../../src/state/reducers/pokemonsReducer'
import { emptyPokemons } from '../../fixtures/fake-pokemons-add-pokemon-action'

describe('AddPokemons action suite', () => {
  test('must return an object with property payload with property pokemon and type property equal to ADD_POKEMONS value', () => {
    const action = addPokemons({ pokemons: emptyPokemons })
    const state = pokemonReducer({}, action)
    expect(state).toEqual(emptyPokemons)
  })
})
