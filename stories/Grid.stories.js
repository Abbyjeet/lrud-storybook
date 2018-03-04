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

storiesOf('Grid', module)
  .add('default', () => (
    <Focus>
      <List
        vertical
        grid
        wrapping={boolean('Wrap Vertical', false)}
      >
        <List
          horizontal
          wrapping={boolean('Wrap Horizontal', false)}
        >
          <ListItem>A</ListItem>
          <ListItem>B</ListItem>
          <ListItem>C</ListItem>
        </List>
        <List
          horizontal
          wrapping={boolean('Wrap Horizontal', false)}
        >
          <ListItem>D</ListItem>
          <ListItem>E</ListItem>
          <ListItem>F</ListItem>
        </List>
      </List>
    </Focus>
  ))
