import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs/react'
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

storiesOf('List', module)
  .addDecorator(withKnobs)
  .add('vertical', () => (
    <Focus>
      <VerticalList wrapping={boolean('Wrapping', false)}>
        <ListItem>Foo</ListItem>
        <ListItem>Bar</ListItem>
        <ListItem>Baz</ListItem>
      </VerticalList>
    </Focus>
  ))
  .add('horizontal', () => (
    <Focus>
      <HorizontalList wrapping={boolean('Wrapping', false)}>
        <ListItem>Foo</ListItem>
        <ListItem>Bar</ListItem>
        <ListItem>Baz</ListItem>
      </HorizontalList>
    </Focus>
  ))
