import { Component, Children } from 'react'
import PropTypes from 'prop-types'
import navigation from './navigation'

class Focus extends Component {
  componentDidMount () {
    navigation.focus(this.props.id)
  }

  render () {
    return Children.only(this.props.children)
  }
}

Focus.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any
}

export default Focus
