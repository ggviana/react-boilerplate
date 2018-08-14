import React, { createContext } from 'react'
import PropTypes from 'prop-types'
import isFunction from 'util/isFunction'

export default contextCreator => {
  if (!isFunction(contextCreator)) {
    throw new TypeError('contextCreator is not a function')
  }

  let store = {}

  const set = (dataOrKey, value) => new Promise(resolve => {
    let data = dataOrKey

    if (typeof dataOrKey === 'string') {
      const key = dataOrKey

      data = { [key]: value }
    }

    store = Object.assign(store, data)
    resolve(store)
  })

  const get = key => store[key]

  const Context = createContext()

  const Provider = ({ children }) => (
    <Context.Provider value={contextCreator({ set, get })}>
      {children}
    </Context.Provider>
  )

  const Consumer = ({ children }) => (
    <Context.Consumer>
      {data => children(data)}
    </Context.Consumer>
  )

  Consumer.propTypes = {
    children: PropTypes.func
  }

  return {
    context: Context,
    Provider,
    Consumer
  }
}
