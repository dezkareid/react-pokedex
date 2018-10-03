import React from 'react'
import Layout from '../components/Layout'
import './App.css'
import SearchInput from '../components/SearchInput'
import ErrorBoundary from '../components/ErrorBoundary'
import ErrorCharge from '../components/ErrorCharge'
import PokeList from '../components/PokeList'
export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Pokedex',
      search: '',
      pokemons: [{ id: 1, name: 'Bulbasaur' }]
    }
    this.onChangeSearch = this.onChangeSearch.bind(this)
  }

  onChangeSearch (event) {
    this.setState({
      search: event.target.value
    })
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
