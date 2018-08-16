import React from 'react'
import {hot} from 'react-hot-loader'
import './App.css'
import { TodoProvider } from 'contexts/Todo'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import { TodoDetail, TodoHome } from 'pages'
import { Compose } from 'components'

const App = () => (
  <Compose components={[Router, TodoProvider]}>
    <main>
      <Link to='/'>
        Todos
      </Link>

      <Route exact path='/' component={TodoHome} />
      <Route path='/todo/:todoId' component={TodoDetail} />
    </main>
  </Compose>
)

export default hot(module)(App)
