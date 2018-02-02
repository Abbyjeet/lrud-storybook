import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import Focusable from './Focusable'
import withFocus from '../common/with-focus'

class Keyboard extends PureComponent {
  constructor () {
    super()

    this.state = {
      query: ''
    }

    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect ({ data: { key } }) {
    const { query } = this.state
    const qry = key === '<' ? query.slice(0, -1) : query + key

    this.setState({
      query: qry === ' ' ? qry.trim() : qry
    })
  }

  render () {
    const { classes, data } = this.props
    const { query } = this.state

    return (
      <Focusable
        orientation='vertical'
        className={classes.keyboard}
      >
        <h3 className={classes.query}>
          {query || 'Search...'}
        </h3>
        <Focusable orientation='horizontal'>
          <Focusable
            className={`focusable ${classes.key} ${classes.key50}`}
            onSelect={this.handleSelect}
            data={{ key: ' ' }}
          >
            SPACE
          </Focusable>
          <Focusable
            className={`focusable ${classes.key} ${classes.key50}`}
            onSelect={this.handleSelect}
            data={{ key: '<' }}
          >
            DELETE
          </Focusable>
        </Focusable>
        <Focusable
          grid
          orientation='vertical'
        >
          {data.map((row, i) => (
            <Focusable
              key={i}
              orientation='horizontal'
              wrapping
            >
              {row.map((key, i) => (
                <Focusable
                  key={i}
                  className={`focusable ${classes.key}`}
                  onSelect={this.handleSelect}
                  data={{ key }}
                >
                  {key}
                </Focusable>
              ))}
            </Focusable>
          ))}
        </Focusable>
      </Focusable>
    )
  }
}

Keyboard.propTypes = {
  data: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired
}

const styles = {
  query: {
    height: '1em'
  },
  keyboard: {
    width: '12em'
  },
  key: {
    height: '2em',
    width: '2em',
    lineHeight: '2em',
    display: 'inline-block',
    textAlign: 'center'
  },
  key50: {
    width: '50%'
  }
}

export default withFocus(injectSheet(styles)(Keyboard))
