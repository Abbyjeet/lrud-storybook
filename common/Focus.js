import { Component, Children } from 'react'
import PropTypes from 'prop-types'
import navigation from './navigation'

class Focus extends Component {
  componentDidMount () {
    navigation.focus()
  }

  render () {
    return Children.only(this.props.children)
  }
}

Focus.propTypes = {
  children: PropTypes.any
}

export default Focus
