import React from 'react'
import { storiesOf } from '@storybook/react'
import Focus from '../common/Focus'
import VerticalList from '../components/VerticalList'
import HorizontalList from '../components/HorizontalList'

storiesOf('List', module)
  .add('vertical', () => (
    <Focus>
      <VerticalList>
        <span>Hello</span>
        <span>World</span>
      </VerticalList>
    </Focus>
  ))
  .add('horizontal', () => (
    <Focus>
      <HorizontalList>
        <span>Hello</span>
        <span>World</span>
      </HorizontalList>
    </Focus>
  ))
