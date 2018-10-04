import React from 'react'
import Layout from '../components/Layout'
import './App.css'
import SearchInput from '../components/SearchInput'
import ErrorBoundary from '../components/ErrorBoundary'
import ErrorCharge from '../components/ErrorCharge'
import PokeList from '../components/PokeList'
import { getPokemons } from '../services/PokemonService'
import debounce from 'lodash.debounce'
export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Pokedex',
      search: '',
      pokemons: []
    }
    this.onChangeSearch = this.onChangeSearch.bind(this)
    this.fetchPokemons = debounce(this.fetchPokemons, 500)
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

  render () {
    return (
      <Layout classes='Full-Page'>
        <ErrorBoundary errorComponent={ErrorCharge}>
          <h1>{this.state.title}</h1>
          <SearchInput value={this.state.search} onChange={this.onChangeSearch} />
          <PokeList pokemons={this.state.pokemons} />
        </ErrorBoundary>
      </Layout>
    )
  }
}
