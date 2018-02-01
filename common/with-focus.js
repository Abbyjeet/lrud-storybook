import React, { PureComponent } from 'react'
import navigation from './navigation'

export default (Component) => {
  return class Focus extends PureComponent {
    componentDidMount () {
      navigation.focus()
    }

    render () {
      return <Component {...this.props} />
    }
  }
}
