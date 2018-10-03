import React from 'react'
import Layout from '../components/Layout'
import './App.css'
import SearchInput from '../components/SearchInput'
export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Pokedex',
      search: ''
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
        <h1>{this.state.title}</h1>
        <SearchInput value={this.state.search} onChange={this.onChangeSearch} />
      </Layout>
    )
  }
}
