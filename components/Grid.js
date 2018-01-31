import React, { PureComponent } from 'react'
import Focusable from './Focusable'
import navigation from '../common/navigation'

export default class Grid extends PureComponent {
  componentDidMount () {
    navigation.focus()
  }

  render () {
    const { data, wrapping } = this.props

    return (
      <Focusable
        grid
        orientation='vertical'
        wrapping={wrapping}
      >
        {data.map((row) => (
          <Focusable
            className='grid__row'
            orientation='horizontal'
            wrapping={wrapping}
          >
            {Array.from(row).map((char) => (
              <Focusable className='grid__item'>
                {char}
              </Focusable>
            ))}
          </Focusable>
        ))}
      </Focusable>
    )
  }
}
