import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs/react'
import Focus from '../common/Focus'
import VerticalList from '../components/VerticalList'
import HorizontalList from '../components/HorizontalList'

storiesOf('List', module)
  .addDecorator(withKnobs)
  .add('vertical', () => (
    <Focus>
      <VerticalList wrapping={boolean('Wrapping', false)}>
        <span>Foo</span>
        <span>Bar</span>
        <span>Baz</span>
      </VerticalList>
    </Focus>
  ))
  .add('horizontal', () => (
    <Focus>
      <HorizontalList wrapping={boolean('Wrapping', false)}>
        <span>Foo</span>
        <span>Bar</span>
        <span>Baz</span>
      </HorizontalList>
    </Focus>
  ))
