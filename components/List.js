import React from 'react'
import PropTypes from 'prop-types'
import Focusable from './Focusable'
import withFocus from '../common/with-focus'

const List = ({ items, orientation, wrapping, onFocus, onBlur, onMove }) => (
  <Focusable
    className={`list--${orientation}`}
    wrapping={wrapping}
    orientation={orientation}
    onMove={onMove}
  >
    {Array.from(items).map((item, i) => (
      <Focusable
        key={i}
        className='list__item'
        onFocus={onFocus}
        onBlur={onBlur}
      >
        {item}
      </Focusable>
    ))}
  </Focusable>
)

List.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]).isRequired,
  orientation: PropTypes.oneOf([
    'vertical',
    'horizontal'
  ]).isRequired,
  wrapping: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onMove: PropTypes.func
}

export default withFocus(List)
