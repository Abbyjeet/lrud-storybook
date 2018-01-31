import React, { PureComponent } from 'react'
import Focusable from './Focusable'
import navigation from '../common/navigation'

export default class List extends PureComponent {
  componentDidMount () {
    navigation.focus()
  }

  render () {
    const { orientation, wrapping } = this.props

    return (
      <Focusable
        element='ul'
        orientation={orientation}
        wrapping={wrapping}
      >
        <Focusable element='li'>One</Focusable>
        <Focusable element='li'>Two</Focusable>
        <Focusable element='li'>Three</Focusable>
      </Focusable>
    )
  }
}
