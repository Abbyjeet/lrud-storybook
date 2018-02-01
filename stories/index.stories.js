import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { chunk } from 'lodash'
import Focusable from '../components/Focusable'
import List from '../components/List'
import Grid from '../components/Grid'
import Carousel from '../components/Carousel'
import Selectable from '../components/Selectable'
import withFocus from '../common/with-focus'

const alpha = 'abcdefghijklmnopqrstuvwxyz'
const num = '1234567890'
const gridData = chunk(Array.from(alpha + num), 6)
const wonkData = chunk(Array.from(alpha), 6)

const LoL = withFocus(() => (
  <Focusable orientation='vertical' className='lol'>
    <List orientation='horizontal' items={alpha} />
    <List orientation='horizontal' items={num} />
  </Focusable>
))

storiesOf('Lists', module)
  .add('vertical', () => <List orientation='vertical' items={num} />)
  .add('vertical wrapping', () => <List orientation='vertical' wrapping items={num} />)
  .add('horizontal', () => <List orientation='horizontal' items={num} />)
  .add('horizontal wrapping', () => <List orientation='horizontal' wrapping items={num} />)
  .add('list of lists', () => <LoL />)

storiesOf('Grid', module)
  .add('standard', () => <Grid data={gridData} />)
  .add('wrapping', () => <Grid data={gridData} wrapping />)
  .add('wonky', () => <Grid data={wonkData} />)

storiesOf('Carousel', module)
  .add('horizontal', () => <Carousel orientation='horizontal' items={num} />)
  .add('vertical', () => <Carousel orientation='vertical' items={num} />)

storiesOf('Events', module)
  .add('select', () => <Selectable onSelect={action('select')}>Select Me!</Selectable>)
  .add('focus', () => <List orientation='horizontal' items={num} onFocus={action('focus')} />)
  .add('blur', () => <List orientation='horizontal' items={num} onBlur={action('blur')} />)
  .add('move', () => <List orientation='horizontal' items={num} onMove={action('move')} />)
