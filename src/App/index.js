import React from 'react'
import Layout from '../components/Layout'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Pokedex'
    }
  }
  render () {
    return (
      <Layout>
        <h1>{this.state.title}</h1>
      </Layout>
    )
  }
}
