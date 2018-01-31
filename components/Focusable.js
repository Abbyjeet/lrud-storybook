import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { uniqueId, pick } from 'lodash'
import navigation from '../common/navigation'

const navProps = [
  'onFocus',
  'onBlur',
  'onSelect',
  'onMove',
  'grid',
  'wrapping'
]

class Focusable extends PureComponent {
  constructor (props) {
    super(props)

    this.id = props.id || uniqueId('focusable_')
  }

  getChildContext () {
    return {
      parent: this.id
    }
  }

  componentWillUnmounnt () {
    navigation.unregister(this.id)
  }

  render () {
    const { className, children, element, orientation } = this.props
    const { parent } = this.context

    navigation.register(this.id, Object.assign({
      parent,
      orientation
    }, pick(this.props, navProps)))

    return React.createElement(element, {
      id: this.id,
      className,
      children
    })
  }
}

Focusable.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
  element: PropTypes.string,
  orientation: PropTypes.string
}

Focusable.defaultProps = {
  element: 'div'
}

Focusable.childContextTypes = {
  parent: PropTypes.string.isRequired
}

Focusable.contextTypes = {
  parent: PropTypes.string
}

export default Focusable
