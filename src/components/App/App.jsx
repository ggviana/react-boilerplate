import React from 'react'
import {hot} from 'react-hot-loader'
import './App.css'
import src from 'assets/images/react.svg'
import composeComponents from 'util/composeComponents'
import { TodoProvider } from 'contexts/Todo'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import { TodoDetail, TodoHome } from 'pages'

const Providers = composeComponents(Router, TodoProvider)

const App = () => (
  <Providers>
    <main>
      <Link to='/'>
        Todos
      </Link>

      <Route exact path='/' component={TodoHome} />
      <Route path='/todo/:todoId' component={TodoDetail} />
    </main>
  </Providers>
)

export default hot(module)(App)
