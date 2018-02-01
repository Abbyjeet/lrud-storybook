import React from 'react'
import PropTypes from 'prop-types'
import Focusable from './Focusable'
import withFocus from '../common/with-focus'

const Grid = ({ data, wrapping }) => (
  <Focusable
    grid
    orientation='vertical'
    wrapping={wrapping}
  >
    {data.map((row, i) => (
      <Focusable
        key={i}
        className='grid__row'
        orientation='horizontal'
        wrapping={wrapping}
      >
        {row.map((char, i) => (
          <Focusable
            key={i}
            className='grid__item'
          >
            {char}
          </Focusable>
        ))}
      </Focusable>
    ))}
  </Focusable>
)

Grid.propTypes = {
  data: PropTypes.array.isRequired,
  wrapping: PropTypes.bool
}

export default withFocus(Grid)
