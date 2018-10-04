import React from 'react'
import Layout from '../components/Layout'
import './App.css'
import SearchInput from '../components/SearchInput'
import ErrorBoundary from '../components/ErrorBoundary'
import ErrorCharge from '../components/ErrorCharge'
import PokeList from '../components/PokeList'
import { getPokemons } from '../services/PokemonService'
export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Pokedex',
      search: '',
      pokemons: []
    }
    this.onChangeSearch = this.onChangeSearch.bind(this)
  }

  onChangeSearch (event) {
    this.setState({
      search: event.target.value
    })
  }

  componentDidMount () {
    getPokemons()
      .then((pokemons) => { this.setState({ pokemons }) })
  }
  render () {
    return (
      <Layout classes='Full-Page'>
        <ErrorBoundary errorComponent={ErrorCharge}>
          <h1>{this.state.title}</h1>
          <SearchInput value={this.state.search} onChange={this.onChangeSearch} />
          <PokeList pokemons={this.state.pokemons} filter={this.state.search} />
        </ErrorBoundary>
      </Layout>
    )
  }
}
