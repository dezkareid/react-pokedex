/* eslint-env jest */
import { addPokemon } from '../../../src/state/actions'
import { ADD_POKEMON } from '../../../src/state/actions/action-names'

describe('AddPokemons action suite', () => {
  test('must return an object with property payload with property pokemon and type property equal to ADD_POKEMONS value', () => {
    const pokemon = { id: 1, name: 'bulbasaur' }
    const action = addPokemon({ pokemon })
    expect(action.type).toBe(ADD_POKEMON)
    expect(action.payload.pokemon).toEqual(pokemon)
  })
})
