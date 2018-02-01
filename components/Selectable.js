import React from 'react'
import PropTypes from 'prop-types'
import Focusable from './Focusable'
import withFocus from '../common/with-focus'

const Selectable = ({ onSelect }) => (
  <Focusable
    className='button'
    onSelect={onSelect}
  >
    Select Me!
  </Focusable>
)

Selectable.propTypes = {
  onSelect: PropTypes.func
}

export default withFocus(Selectable)
