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

  background-color: ${props => props.disabled ? 'lightgrey' : ''};

  ${props => props.focusableComponent}.focused & {
    color: white;
    background-color: red;
  }
`

storiesOf('Carousel', module)
  .add('vertical', () => (
    <Focus>
      <Carousel vertical>
        <ListItem>A</ListItem>
        <ListItem>B</ListItem>
        <ListItem>C</ListItem>
      </Carousel>
    </Focus>
  ))
  .add('horizontal', () => (
    <Focus>
      <Carousel horizontal>
        <ListItem>A</ListItem>
        <ListItem>B</ListItem>
        <ListItem>C</ListItem>
      </Carousel>
    </Focus>
  ))

  .add('with disabled items', () => (
    <Focus>
      <Carousel horizontal>
        <ListItem>A</ListItem>
        <ListItem disabled>B</ListItem>
        <ListItem>C</ListItem>
        <ListItem>D</ListItem>
        <ListItem disabled>E</ListItem>
      </Carousel>
    </Focus>
  ))
