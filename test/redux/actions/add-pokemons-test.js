/* eslint-env jest */
import { addPokemons } from '../../../src/state/actions'
import { ADD_POKEMONS } from '../../../src/state/actions/action-names'
import { emptyPokemons } from '../../fixtures/fake-pokemons-add-pokemon-action'
describe('AddPokemons action suite', () => {
  test('must return an object with property payload with property pokemon and type property equal to ADD_POKEMONS value', () => {
    const action = addPokemons({ pokemons: emptyPokemons })
    expect(action.type).toBe(ADD_POKEMONS)
    expect(action.payload.pokemons).toEqual(emptyPokemons)
  })
})
