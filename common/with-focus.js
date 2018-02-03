import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import navigation from './navigation'

// Force focus when switing between stories
export default (Component) => {
  class Focus extends PureComponent {
    componentDidMount () {
      navigation.focus(this.props.focusId)
    }

    render () {
      return <Component {...this.props} />
    }
  }

  Focus.propTypes = {
    focusId: PropTypes.string
  }

  return Focus
}
