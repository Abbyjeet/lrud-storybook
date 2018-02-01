import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Focusable from './Focusable'
import withFocus from '../common/with-focus'

const $id = (id) => document.getElementById(id)

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
    const el = $id(target.id)
    const moveby = orientation === 'horizontal' ? el.offsetWidth : el.offsetHeight

    this.setState({
      position: offset === 1 ? position - moveby : position + moveby
    })
  }

  render () {
    const { items, orientation } = this.props
    const { position } = this.state
    const x = orientation === 'horizontal' ? position : 0
    const y = orientation === 'vertical' ? position : 0
    const transform = `translate3d(${x}px, ${y}px, 0px)`

    return (
      <Focusable
        className={`carousel carousel--${orientation}`}
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
            className='carousel__item'
          >
            {item}
          </Focusable>
        ))}
      </Focusable>
    )
  }
}

Carousel.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]).isRequired,
  orientation: PropTypes.oneOf([
    'vertical',
    'horizontal'
  ]).isRequired
}

export default withFocus(Carousel)