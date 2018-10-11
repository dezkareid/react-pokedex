/* eslint-env jest */
import { shallow } from 'enzyme'
import PokeList from '../../../src/components/PokeList'

describe('PokeItem suite', () => {
  test('When the prop name has 3 items PokeList must has 2 childrens', () => {
    const pokemons = [{ id: 1, name: '', avatar: '' }, { id: 2, name: '', avatar: '' }, { id: 3, name: '', avatar: '' }]
    const wrapper = shallow(<PokeList pokemons={pokemons} />)
    expect(wrapper.children()).toHaveLength(3)
  })
})
