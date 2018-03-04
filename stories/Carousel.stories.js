import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import Focus from '../common/Focus'
import Carousel from '../components/Carousel'

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

storiesOf('Carousel', module)
  .add('vertical', () => (
    <Focus>
      <Carousel vertical>
        <ListItem>Foo</ListItem>
        <ListItem>Bar</ListItem>
        <ListItem>Baz</ListItem>
      </Carousel>
    </Focus>
  ))
  .add('horizontal', () => (
    <Focus>
      <Carousel horizontal>
        <ListItem>Foo</ListItem>
        <ListItem>Bar</ListItem>
        <ListItem>Baz</ListItem>
      </Carousel>
    </Focus>
  ))
