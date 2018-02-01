import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Focusable from './Focusable'
import navigation from '../common/navigation'

class Selectable extends PureComponent {
  componentDidMount () {
    navigation.focus()
  }

  render () {
    return (
      <Focusable
        className='button'
        onSelect={this.props.onSelect}
      >
        Select Me!
      </Focusable>
    )
  }
}

Selectable.propTypes = {
  onSelect: PropTypes.func
}

export default Selectable
