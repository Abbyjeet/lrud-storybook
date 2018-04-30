import React, { Component } from 'react'
import PropTypes from 'prop-types'
import List from './List'

class Carousel extends Component {
  constructor (props) {
    super(props)

    this.state = {
      position: 0
    }

    this.handleMove = this.handleMove.bind(this)
  }

  handleMove ({ orientation, offset, enter, leave }) {
    const { position } = this.state
    const target = offset === 1 ? enter : leave
    const el = document.getElementById(target.id)
    const moveby = (orientation === 'horizontal' ? el.offsetWidth : el.offsetHeight) * Math.abs(enter.index - leave.index)

    this.setState({
      position: offset === 1 ? position - moveby : position + moveby
    })
  }

  render () {
    const { children, vertical, horizontal } = this.props
    const { position } = this.state
    const x = horizontal ? position : 0
    const y = vertical ? position : 0
    const transform = `translate3d(${x}px, ${y}px, 0px)`

    return (
      <List
        onMove={this.handleMove}
        style={{ transform }}
        vertical={vertical}
        horizontal={horizontal}
      >
        {children}
      </List>
    )
  }
}

Carousel.propTypes = {
  children: PropTypes.any.isRequired,
  vertical: PropTypes.bool,
  horizontal: PropTypes.bool
}

export default Carousel
