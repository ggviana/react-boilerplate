import React from 'react'
import noop from 'util/noop'
import isFunction from 'util/isFunction'

export default class Field extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      pristine: true,
      dirty: false,
      touched: false
    }
  }

  createEvents () {
    const {
      onChange = noop,
      onBlur = noop,
      ...props
    } = this.props

    return {
      onChange: event => {
        this.setState({
          touched: true,
          dirty: true,
          pristine: false
        })

        onChange({
          name: props.name,
          value: event.target.value,
          previousValue: props.value,
          ref: event.target
        })
      },
      onBlur: event => {
        this.setState({
          touched: true
        })

        onBlur(event)
      }
    }
  }

  renderCustom () {
    const meta = {
      ...this.state,
      ...this.createEvents()
    }

    return this.props.render(this.props, meta)
  }

  renderTextArea () {
    return (
      <textarea {...this.props} {...this.createEvents()} />
    )
  }

  render () {
    if (isFunction(this.props.render)) {
      return this.props.renderCustom()
    }

    if (this.props.type === 'textarea') {
      return this.renderTextArea()
    }

    return (
      <input {...this.props} {...this.createEvents()} />
    )
  }
}
