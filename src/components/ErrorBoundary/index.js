import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch (error, info) {
    this.setState({
      hasError: true
    })
    console.error(error)
  }

  render () {
    if (this.state.hasError) {
      return this.props.errorComponent ? <this.props.errorComponent /> : <p>Ocurrio un error</p>
    }
    return this.props.children
  }
}
