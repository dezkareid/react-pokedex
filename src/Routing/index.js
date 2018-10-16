import React from 'react'
import { withRouter } from 'react-router-dom'

export function addRouting (Component) {
  class RoutingComponent extends React.Component {
    constructor (props) {
      super(props)
      this._goTo = this._goTo.bind(this)
    }
    _goTo () {
      if (!this.props.path) {
        return null
      }
      this.props.history.push(this.props.path)
    }
    render () {
      let { staticContext, ...properties } = this.props
      return (
        <div onClick={this._goTo}>
          <Component {...properties} />
        </div>
      )
    }
  }
  return withRouter(RoutingComponent)
}
