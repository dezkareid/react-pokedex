import React from 'react'
import SearchInput from '../../components/SearchInput'
import PokeList from '../../components/PokeList'
import { getPokemons } from '../../services/PokemonService'
import debounce from 'lodash.debounce'
import PokeItem from '../../components/PokeItem'
export default class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Pokedex',
      search: '',
      pokemons: []
    }
    this.onChangeSearch = this.onChangeSearch.bind(this)
    this.fetchPokemons = debounce(this.fetchPokemons, 500)
    setTimeout(() => {
      const pokemon = { id: 3, name: 'Venasaur', avatar: 'https://vignette.wikia.nocookie.net/es.pokemon/images/9/9a/Bulbasaur_%28anime_AG%29.png/revision/latest?cb=20120906022549' }
      this.addPokemon(pokemon)
    }, 5000)
  }

  addPokemon (pokemon) {
    this.setState((prevState) => {
      return {
        pokemons: [ ...prevState.pokemons, pokemon ]
      }
    })
  }

  onChangeSearch (event) {
    const search = event.target.value
    this.setState({
      search
    })
    this.fetchPokemons(search)
  }

  componentDidMount () {
    this.fetchPokemons('')
  }

  fetchPokemons (filter) {
    console.log('fetching pokemons')
    getPokemons(filter)
      .then((pokemons) => { this.setState({ pokemons }) })
  }

  onClickPokemon (pokemon) {
    console.log(pokemon.name)
  }

  render () {
    return (
      <React.Fragment>
        <h1>{this.state.title}</h1>
        <SearchInput value={this.state.search} onChange={this.onChangeSearch} />
        <PokeList pokemons={this.state.pokemons} onClickPokemon={this.onClickPokemon} PokeComponent={PokeItem} />
      </React.Fragment>
    )
  }
}
