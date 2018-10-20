import React from 'react'
import Routes from '../Routes'
import Layout from '../components/Layout'
import ErrorBoundary from '../components/ErrorBoundary'
import ErrorCharge from '../components/ErrorCharge'
import Context from '../AppContext'
import FirebaseAdapter from '../utils/FirebaseAdapter'
import './App.css'
export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      auth: false
    }
    this.auth = FirebaseAdapter.getAuth()
    this.unsuscribe = this.auth().onAuthStateChanged((auth) => {
      if (auth) {
        this.setState({ auth })
      } else {
        this.setState({ auth: false })
      }
    })
  }

  componentWillUnmount () {
    this.unsuscribe && this.unsuscribe()
  }

  render () {
    return (
      <ErrorBoundary errorComponent={ErrorCharge}>
        <Context.Provider value={this.state}>
          <Layout classes='Full-Page'>
            <Routes />
          </Layout>
        </Context.Provider>
      </ErrorBoundary>
    )
  }
}
