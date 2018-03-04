import React, { Children } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withNavigation } from 'react-lrud'

const _HorizontalList = withNavigation(styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`)

const ListItem = withNavigation(styled.li`
  float: left;

  &.focused {
    color: red;
  }
`)

const HorizontalList = ({ children }) => (
  <_HorizontalList horizontal>
    {Children.map(children, (child, i) => (
      <ListItem key={i}>
        {child}
      </ListItem>
    ))}
  </_HorizontalList>
)

HorizontalList.propTypes = {
  children: PropTypes.any.isRequired
}

export default HorizontalList
