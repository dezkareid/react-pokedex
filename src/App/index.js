import React from 'react'
import Routes from '../Routes'
import Layout from '../components/Layout'
import ErrorBoundary from '../components/ErrorBoundary'
import ErrorCharge from '../components/ErrorCharge'
import './App.css'
export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <ErrorBoundary errorComponent={ErrorCharge}>
        <Layout classes='Full-Page'>
          <Routes />
        </Layout>
      </ErrorBoundary>
    )
  }
}
