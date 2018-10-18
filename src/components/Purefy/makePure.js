import React from 'react'

export default function makePure (Component) {
  class MakedPure extends React.PureComponent {
    render () {
      return (<Component {...this.props} />)
    }
  }

  MakedPure.displayName = Component.displayName || 'Component'
  return MakedPure
}
