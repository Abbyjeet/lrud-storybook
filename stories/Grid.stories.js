import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs/react'
import styled from 'styled-components'
import Focus from '../common/Focus'
import VerticalList from '../components/VerticalList'
import HorizontalList from '../components/HorizontalList'

const ListItem = styled.span`
  display: inline-block;
  padding: .5em 1em;

  ${props => props.focusableComponent}.focused & {
    color: white;
    background-color: red;
  }
`

storiesOf('Grid', module)
  .add('default', () => (
    <Focus>
      <VerticalList grid wrapping={boolean('Wrap Vertical', false)}>
        <HorizontalList wrapping={boolean('Wrap Horizontal', false)}>
          <ListItem>A</ListItem>
          <ListItem>B</ListItem>
          <ListItem>C</ListItem>
        </HorizontalList>
        <HorizontalList wrapping={boolean('Wrap Horizontal', false)}>
          <ListItem>D</ListItem>
          <ListItem>E</ListItem>
          <ListItem>F</ListItem>
        </HorizontalList>
      </VerticalList>
    </Focus>
  ))
