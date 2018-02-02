import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import injectSheet from 'react-jss'
import Focusable from './Focusable'
import withFocus from '../common/with-focus'
import Types from '../common/types'

class Carousel extends PureComponent {
  constructor () {
    super()

    this.state = {
      position: 0
    }

    this.handleMove = this.handleMove.bind(this)
  }

  handleMove ({ orientation, offset, enter, leave }) {
    const { position } = this.state
    const target = offset === 1 ? enter : leave
    const el = document.getElementById(target.id)
    const moveby = orientation === 'horizontal' ? el.offsetWidth : el.offsetHeight

    this.setState({
      position: offset === 1 ? position - moveby : position + moveby
    })
  }

  render () {
    const { classes, items, orientation } = this.props
    const { position } = this.state
    const x = orientation === 'horizontal' ? position : 0
    const y = orientation === 'vertical' ? position : 0
    const transform = `translate3d(${x}px, ${y}px, 0px)`

    return (
      <Focusable
        className={classes.carousel}
        orientation={orientation}
        onMove={this.handleMove}
        style={{
          transform,
          WebkitTransform: transform
        }}
      >
        {Array.from(items).map((item, i) => (
          <Focusable
            key={i}
            className={classNames('focusable', classes.item, {
              [classes.itemHorizontal]: orientation === 'horizontal',
              [classes.itemVertical]: orientation === 'vertical'
            })}
          >
            {item}
          </Focusable>
        ))}
      </Focusable>
    )
  }
}

Carousel.propTypes = {
  items: Types.items.isRequired,
  orientation: Types.orientation.isRequired,
  classes: PropTypes.object.isRequired
}

const styles = {
  carousel: {
    whiteSpace: 'nowrap',
    transition: 'transform .2s ease-in-out'
  },
  item: {
    height: '2em',
    lineHeight: '2em',
    textAlign: 'center'
  },
  itemHorizontal: {
    display: 'inline-block',
    width: '2em'
  },
  itemVertical: {
    width: '10em'
  }
}

export default withFocus(injectSheet(styles)(Carousel))
