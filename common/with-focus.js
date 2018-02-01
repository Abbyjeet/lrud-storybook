import React, { PureComponent } from 'react'
import navigation from './navigation'

// Force focus when switing between stories
export default (Component) => class Focus extends PureComponent {
  componentDidMount () {
    navigation.focus()
  }

  render () {
    return <Component {...this.props} />
  }
}
