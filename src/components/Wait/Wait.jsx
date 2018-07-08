import React from 'react'
import PropTypes from 'prop-types'
import isFunction from 'util/isFunction'

class Wait extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      value: null,
      error: null,
      pending: true
    }
  }

  componentDidMount () {
    this.props.for
      .then(value => this.setState({
        value,
        error: null,
        pending: false
      }))
      .catch(error => this.setState({
        value: null,
        error,
        pending: false
      }))
  }

  render () {
    const { children } = this.props

    if (isFunction(children))
      return children(this.state)
    else if (!this.state.pending)
      return children
    else
      return null
  }
}

Wait.propTypes = {
  children: PropTypes.any.isRequired,
  for: PropTypes.instanceOf(Promise).isRequired
}

export default Wait
