import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Focusable from './Focusable'
import navigation from '../common/navigation'

class List extends PureComponent {
  componentDidMount () {
    navigation.focus()
  }

  render () {
    const { data, orientation, wrapping, onFocus, onBlur, onMove } = this.props

    return (
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
  }
}

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

export default List
