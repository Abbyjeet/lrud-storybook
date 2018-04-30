import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs/react'
import styled from 'styled-components'
import Focus from '../common/Focus'
import List from '../components/List'

const ListItem = styled.span`
  display: inline-block;
  height: 5em;
  width: 5em;
  line-height: 5em;
  text-align: center;

  background-color: ${props => props.disabled ? 'lightgrey' : ''};

  ${props => props.focusableComponent}.focused & {
    color: white;
    background-color: red;
  }
`

storiesOf('List', module)
  .add('vertical', () => (
    <Focus>
      <List
        vertical
        wrapping={boolean('Wrapping', false)}
      >
        <ListItem>A</ListItem>
        <ListItem>B</ListItem>
        <ListItem>C</ListItem>
      </List>
    </Focus>
  ))
  .add('horizontal', () => (
    <Focus>
      <List
        horizontal
        wrapping={boolean('Wrapping', false)}
      >
        <ListItem>A</ListItem>
        <ListItem>B</ListItem>
        <ListItem>C</ListItem>
      </List>
    </Focus>
  ))
  .add('with disabled items', () => (
    <Focus>
      <List horizontal wrapping>
        <ListItem disabled>A</ListItem>
        <ListItem>B</ListItem>
        <ListItem disabled>C</ListItem>
        <ListItem disabled>D</ListItem>
        <ListItem>E</ListItem>
        <ListItem disabled>F</ListItem>
        <ListItem>G</ListItem>
      </List>
    </Focus>
  ))
