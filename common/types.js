import PropTypes from 'prop-types'

export default {
  items: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  orientation: PropTypes.oneOf([
    'vertical',
    'horizontal'
  ])
}
