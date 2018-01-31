import React from 'react'
import { storiesOf } from '@storybook/react'
import List from '../components/List'

storiesOf('Vertical List', module)
  .add('standard', () => <List orientation='vertical' />)
  .add('wrapping', () => <List orientation='vertical' wrapping />)

storiesOf('Horizontal List', module)
  .add('standard', () => <List orientation='horizontal' />)
  .add('wrapping', () => <List orientation='horizontal' wrapping />)
