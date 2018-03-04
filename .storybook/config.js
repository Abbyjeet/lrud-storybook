import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { Provider } from 'react-lrud'
import navigation from '../common/navigation'

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/)

addDecorator((storyFn, context) => (
  <Provider navigation={navigation}>
    {storyFn()}
  </Provider>
))

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
