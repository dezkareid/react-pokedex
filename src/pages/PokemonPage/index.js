import React from 'react'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'
import PokeChart from '../../components/PokeChart'
export default class PokemonPage extends React.Component {
  render () {
    return (
      <Layout>
        <Link to='/'>Return home</Link>
        <PokeChart />
      </Layout>
    )
  }
}
