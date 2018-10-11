/* eslint-env jest */
import { shallow } from 'enzyme'
import PokeList from '../../../src/components/PokeList'
import { emptyPokemons } from '../../fixtures/fake-pokemons'

describe('PokeList suite', () => {
  test('When the prop pokemons has N items PokeList must has N childrens', () => {
    const wrapper = shallow(<PokeList pokemons={emptyPokemons} />)
    expect(wrapper.children()).toHaveLength(emptyPokemons.length)
  })
})
