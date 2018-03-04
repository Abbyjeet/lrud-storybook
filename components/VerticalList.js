import React, { Children } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withNavigation } from 'react-lrud'

const _VerticalList = withNavigation(styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`)

const ListItem = withNavigation(styled.li`
  &.focused {
    color: red;
  }
`)

const VerticalList = ({ children }) => (
  <_VerticalList vertical>
    {Children.map(children, (child, i) => (
      <ListItem key={i}>
        {child}
      </ListItem>
    ))}
  </_VerticalList>
)

VerticalList.propTypes = {
  children: PropTypes.any.isRequired
}

export default VerticalList
