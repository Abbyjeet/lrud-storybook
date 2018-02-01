import React, { PureComponent } from 'react'
import Focusable from './Focusable'
import navigation from '../common/navigation'

export default class Selectable extends PureComponent {
  componentDidMount () {
    navigation.focus()
  }

  render () {
    return (
      <Focusable
        className='button'
        onSelect={this.props.onSelect}
      >
        Select Me!
      </Focusable>
    )
  }
}
