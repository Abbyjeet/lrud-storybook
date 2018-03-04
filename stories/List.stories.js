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
        <ListItem>Foo</ListItem>
        <ListItem>Bar</ListItem>
        <ListItem>Baz</ListItem>
      </List>
    </Focus>
  ))
  .add('horizontal', () => (
    <Focus>
      <List
        horizontal
        wrapping={boolean('Wrapping', false)}
      >
        <ListItem>Foo</ListItem>
        <ListItem>Bar</ListItem>
        <ListItem>Baz</ListItem>
      </List>
    </Focus>
  ))
