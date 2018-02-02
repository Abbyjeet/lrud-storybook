import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import Focusable from './Focusable'
import withFocus from '../common/with-focus'

const Grid = ({ classes, data, wrapping }) => (
  <Focusable
    grid
    orientation='vertical'
    wrapping={wrapping}
  >
    {data.map((row, i) => (
      <Focusable
        key={i}
        orientation='horizontal'
        wrapping={wrapping}
      >
        {row.map((item, i) => (
          <Focusable
            key={i}
            className={`focusable ${classes.item}`}
          >
            {item}
          </Focusable>
        ))}
      </Focusable>
    ))}
  </Focusable>
)

Grid.propTypes = {
  data: PropTypes.array.isRequired,
  wrapping: PropTypes.bool,
  classes: PropTypes.object.isRequired
}

const styles = {
  item: {
    height: '2em',
    width: '2em',
    lineHeight: '2em',
    display: 'inline-block',
    textAlign: 'center'
  }
}

export default withFocus(injectSheet(styles)(Grid))
