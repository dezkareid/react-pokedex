import React from 'react'
import PokeList from '../../components/PokeList'
import PokeItem from '../../components/PokeItem'
import FirebaseAdapter from '../../utils/FirebaseAdapter'
import Context from '../../AppContext'
import { fetchPokemonsSaga } from '../../state/actions'
import { connect } from 'react-redux'
const auth = FirebaseAdapter.getAuth()
export class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Pokedex'
    }
    this.authenticate = this.authenticate.bind(this)
  }

  authenticate () {
    const provider = new auth.FacebookAuthProvider()
    auth().signInWithPopup(provider)
  }

  componentDidMount () {
    this.props.fetchPokemons()
  }

  onClickPokemon (pokemon) {
    console.log(pokemon.name)
  }

  render () {
    return (
      <React.Fragment>
        <h1>{this.state.title}</h1>
        { this.props.auth ? null : <button onClick={this.authenticate}>Identificate</button>}
        <PokeList onClickPokemon={this.onClickPokemon} PokeComponent={PokeItem} />
      </React.Fragment>
    )
  }
}
function mapDispatchToProps (dispatch) {
  return {
    fetchPokemons: () => dispatch(fetchPokemonsSaga())
  }
}

export default () => {
  const HomeComponent = connect(null, mapDispatchToProps)(HomePage)
  return (
    <Context.Consumer>
      { (value) => <HomeComponent {...value} />}
    </Context.Consumer>
  )
}
