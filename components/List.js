import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import Types from '../common/types'
import Focusable from './Focusable'
import withFocus from '../common/with-focus'

const List = ({ classes, items, orientation, wrapping, onFocus, onBlur, onMove }) => (
  <Focusable
    wrapping={wrapping}
    orientation={orientation}
    onMove={onMove}
  >
    {Array.from(items).map((item, i) => (
      <Focusable
        key={i}
        className={`focusable activeable ${classes.item}`}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        {item}
      </Focusable>
    ))}
  </Focusable>
)

List.propTypes = {
  items: Types.items.isRequired,
  orientation: Types.orientation.isRequired,
  wrapping: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onMove: PropTypes.func,
  classes: PropTypes.object.isRequired
}

const styles = {
  item: {
    height: '2em',
    lineHeight: '2em',
    textAlign: 'center',
    display: ({ orientation }) => orientation === 'vertical' ? 'block' : 'inline-block',
    width: ({ orientation }) => orientation === 'vertical' ? '10em' : '2em'
  }
}

export default withFocus(injectSheet(styles)(List))
