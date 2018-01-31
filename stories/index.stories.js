import React from 'react'
import { storiesOf } from '@storybook/react'
import List from '../components/List'
import Grid from '../components/Grid'

const grid = [ 'abcdef', 'ghijkl', 'mnopqr', 'stuvwx', 'yz1234', '567890' ]
const wonkyGrid = [ 'abcdef', 'ghijkl', 'mnopqr', 'stuvwx', 'yz' ]

storiesOf('Vertical List', module)
  .add('standard', () => <List orientation='vertical' />)
  .add('wrapping', () => <List orientation='vertical' wrapping />)

storiesOf('Horizontal List', module)
  .add('standard', () => <List orientation='horizontal' />)
  .add('wrapping', () => <List orientation='horizontal' wrapping />)

storiesOf('Grid', module)
  .add('standard', () => <Grid data={grid} />)
  .add('wrapping', () => <Grid data={grid} wrapping />)
  .add('wonky', () => <Grid data={wonkyGrid} />)
