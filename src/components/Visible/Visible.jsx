import React from 'react'
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

export default Visible
