/* eslint-env jest */
import { shallow } from 'enzyme'
import PokeListItem from '../../../src/components/PokeListItem'
import { SimpleFakeComponent } from '../../fixtures/fake-components'

describe('PokeListItem suite', () => {
  test('When PokeListItem is Clicked, function onClickPokemon must be called', () => {
    const pokemon = {}
    const onClickPokemon = jest.fn()
    const wrapper = shallow(
      <PokeListItem
        pokemon={pokemon}
        onClickPokemon={onClickPokemon}
        PokeComponent={SimpleFakeComponent}
      />)
    wrapper.simulate('click')
    expect(onClickPokemon).toBeCalled()
  })
})
