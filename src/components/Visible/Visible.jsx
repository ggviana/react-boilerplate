import React from 'react'
import PropTypes from 'prop-types'
import isFunction from 'util/isFunction'

const Visible = ({ when = false, children }) => {
  if (isFunction(children)) {
    return children(when)
  } else if (when) {
    return children
  } else {
    return null
  }
}

Visible.propTypes = {
  when: PropTypes.bool
}

export default Visible
