import React from 'react'
import isFunction from 'util/isFunction'

export default function (contextCreator) {
  if (!isFunction(contextCreator))
    throw new TypeError('contextCreator is not a function')

  const Context = React.createContext()

  let state = {}

  const set = (dataOrKey, value) => new Promise(resolve => {
    let data = dataOrKey

    if (typeof dataOrKey === 'string') {
      const key = dataOrKey

      data = { [key]: value }
    }

    state = Object.assign(state, data)
    resolve()
  })

  const get = key => state[key]

  class Provider extends React.Component {
    render () {
      return (
        <Context.Provider value={contextCreator({ set, get })}>
          {this.props.children}
        </Context.Provider>
      )
    }
  }

  class Consumer extends React.Component {
    constructor (props) {
      super(props)

      if (!isFunction(props.children))
        throw new TypeError('Consumer children is not a function')
    }

    componentWillMount () {
      const { beforeMount } = this.props

      if (isFunction(beforeMount)) {
        beforeMount(Context._currentValue)
      }
    }

    render () {
      return (
        <Context.Consumer>
          {data => this.props.children(data)}
        </Context.Consumer>
      )
    }
  }

  return {
    context: Context,
    Provider,
    Consumer
  }
}
