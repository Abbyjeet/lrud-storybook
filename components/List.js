import React, { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withNavigation } from 'react-lrud'

const _List = withNavigation(styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  white-Space: nowrap;
  transition: transform .2s ease-in-out;
`)

const ListItem = withNavigation(styled.li`
  ${props => props.inline ? 'display: inline-block;' : ''}
`)

const List = ({ className, style, children, vertical, horizontal, grid, wrapping, onMove }) => (
  <_List
    className={className}
    style={style}
    vertical={vertical}
    horizontal={horizontal}
    grid={grid}
    wrapping={wrapping}
    onMove={onMove}
  >
    {Children.map(children, (child, i) => (
      <ListItem
        key={i}
        inline={!!horizontal}
      >
        {cloneElement(child, { focusableComponent: ListItem })}
      </ListItem>
    ))}
  </_List>
)

List.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any.isRequired,
  vertical: PropTypes.bool,
  horizontal: PropTypes.bool,
  grid: PropTypes.bool,
  wrapping: PropTypes.bool,
  onMove: PropTypes.func
}

export default List
