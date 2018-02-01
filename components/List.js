import React from 'react'
import PropTypes from 'prop-types'
import Focusable from './Focusable'
import withFocus from '../common/with-focus'

const List = ({ data, orientation, wrapping, onFocus, onBlur, onMove }) => (
  <Focusable
    id={`${orientation}-list`}
    className={`list--${orientation}`}
    wrapping={wrapping}
    orientation={orientation}
    onMove={onMove}
  >
    {Array.from(data).map((char, i) => (
      <Focusable
        key={i}
        id={`list-item-${char}`}
        className='list__item'
        onFocus={onFocus}
        onBlur={onBlur}
      >
        {char}
      </Focusable>
    ))}
  </Focusable>
)

List.propTypes = {
  data: PropTypes.oneOfType([
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
