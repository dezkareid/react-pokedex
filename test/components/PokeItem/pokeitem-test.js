/* eslint-env jest */
import { shallow, mount } from 'enzyme'
import PokeItem from '../../../src/components/PokeItem'

describe('PokeItem suite', () => {
  test('When the prop name has value "bulbasaur", must be a span with text bulbasaur', () => {
    const wrapper = shallow(<PokeItem avatar='' name='bulbasaur' />)
    expect(wrapper.containsMatchingElement(<span>bulbasaur</span>)).toBeTruthy()
  })

  test('When the prop avatar has value "bulbasaur", must be a img with src bulbasaur', () => {
    const wrapper = mount(<PokeItem avatar='bulbasaur' />)
    console.log(wrapper.text())
    expect(wrapper.containsMatchingElement(<img src='bulbasaur' />)).toBeTruthy()
  })
})
