/* eslint-env jest */
import { addPokemons } from '../../../src/state/actions'
import rootReducer from '../../../src/state/reducers/rootReducer'
import { emptyPokemons } from '../../fixtures/fake-pokemons-add-pokemon-action'

describe('Root Reducer suite', () => {
  test('must return a state with pokemons', () => {
    const action = addPokemons({ pokemons: emptyPokemons })
    const state = rootReducer({}, action)
    expect(state).toHaveProperty('home.pokemons')
    expect(state).toHaveProperty('home.search')
    expect(state).toHaveProperty('detail.pokemon')
  })
})
