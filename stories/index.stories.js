import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { chunk } from 'lodash'
import Focusable from '../components/Focusable'
import List from '../components/List'
import Grid from '../components/Grid'
import Selectable from '../components/Selectable'
import withFocus from '../common/with-focus'

const alpha = 'abcdefghijklmnopqrstuvwxyz'
const num = '1234567890'
const gridData = chunk(Array.from(alpha + num), 6)
const wonkData = chunk(Array.from(alpha), 6)

const LoL = withFocus(() => (
  <Focusable orientation='vertical' className='lol'>
    <List orientation='horizontal' data={alpha} />
    <List orientation='horizontal' data={num} />
  </Focusable>
))

storiesOf('Vertical List', module)
  .add('standard', () => <List orientation='vertical' data={num} />)
  .add('wrapping', () => <List orientation='vertical' wrapping data={num} />)

storiesOf('Horizontal List', module)
  .add('standard', () => <List orientation='horizontal' data={num} />)
  .add('wrapping', () => <List orientation='horizontal' wrapping data={num} />)

storiesOf('List of Lists', module)
  .add('highlighting the active item', () => <LoL />)

storiesOf('Grid', module)
  .add('standard', () => <Grid data={gridData} />)
  .add('wrapping', () => <Grid data={gridData} wrapping />)
  .add('wonky', () => <Grid data={wonkData} />)

storiesOf('Events', module)
  .add('select', () => <Selectable onSelect={action('select')}>Select Me!</Selectable>)
  .add('focus', () => <List orientation='horizontal' data={num} onFocus={action('focus')} />)
  .add('blur', () => <List orientation='horizontal' data={num} onBlur={action('blur')} />)
  .add('move', () => <List orientation='horizontal' data={num} onMove={action('move')} />)
