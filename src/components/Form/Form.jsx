import React from 'react'
import PropTypes from 'prop-types'
import noop from 'util/noop'

const FormProps = {
  onSubmit: PropTypes.func
}

const Form = ({onSubmit = noop, ...props}) => {
  return (
    <form
      {...props}
      onSubmit={event => {
        event.preventDefault()
        onSubmit(event)
      }}
    />
  )
}

Form.propTypes = FormProps

export default Form
