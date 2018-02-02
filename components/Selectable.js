import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import Focusable from './Focusable'
import withFocus from '../common/with-focus'

const Selectable = ({ classes, onSelect }) => (
  <Focusable
    className={`focusable ${classes.button}`}
    onSelect={onSelect}
  >
    Select Me!
  </Focusable>
)

Selectable.propTypes = {
  onSelect: PropTypes.func,
  classes: PropTypes.object.isRequired
}

const styles = {
  button: {
    height: '2em',
    width: '10em',
    lineHeight: '2em',
    display: 'inline-block',
    textAlign: 'center'
  }
}

export default withFocus(injectSheet(styles)(Selectable))
