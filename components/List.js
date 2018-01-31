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
        className={`list--${orientation}`}
        orientation={orientation}
        wrapping={wrapping}
      >
        <Focusable className='list__item'>1</Focusable>
        <Focusable className='list__item'>2</Focusable>
        <Focusable className='list__item'>3</Focusable>
        <Focusable className='list__item'>4</Focusable>
        <Focusable className='list__item'>5</Focusable>
      </Focusable>
    )
  }
}
